export default defineOAuthGitHubEventHandler({
    config: {
        emailRequired: true,
    },
    async onSuccess( event, { user, tokens } ) {
        await setUserSession( event, {
            user: {
                githubId: user.id,
            }
        })
        return sendRedirect( event, '/' )
    }
})