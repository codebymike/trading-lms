import db from "~/lib/prisma";
import { santiseUser } from "~/utils/auth";

export default defineOAuthGitHubEventHandler({
    config: {
        emailRequired: true,
    },
    async onSuccess( event, { user } ) {

        let currentUser = await db.user.findUnique({
            where: {
                email: user.email
            }
        })

        if( !currentUser ) {
            currentUser = await db.user.create({
                data: {
                    email: user.email,
                    name: user.name,
                    avatarUrl: user.avatar_url,
                }
            })
        }

        await setUserSession( event, {
            user: {
                githubId: user.id,
            }
        })
        return sendRedirect( event, '/' )
    },
    onError( event, error ) {
        console.error('GitHub OAuth error:', error)
        return sendRedirect( event, '/' )
    }
})