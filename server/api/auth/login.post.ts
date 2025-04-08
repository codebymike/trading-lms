import { loginSchema } from "~/utils/schemas";
import db from "~/lib/prisma";
import { santiseUser } from "~/utils/auth";

export default defineEventHandler(async (event) => {
    const { password, email } = await readValidatedBody(event, (body) => loginSchema.parse(body));

    const userAlreadyExists = await db.user.findUnique({
        where: {
            email
        }
    });

    if( !userAlreadyExists ) {
        throw createError({
            statusCode: 409,
            statusMessage: 'User not found'
        });
    }

    if( !userAlreadyExists.hashedPassword ) {
        const connectedAccount = await db.oauthAccount.findFirst({
            where: {
                userId: userAlreadyExists.id
            }
        });

        if( connectedAccount ){
            const oAuthProvider = connectedAccount.providerId;
            throw createError({
                statusCode: 401,
                statusMessage: `Please login with ${oAuthProvider}`
            });
        }

    } else {
        const verifiedPassword = await verifyPassword(password, userAlreadyExists.hashedPassword);
        if( !verifiedPassword ){
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid password'
            });
        }
    }

    const safeUser = santiseUser(userAlreadyExists);

    if( safeUser ){
        await setUserSession( event, {
            user: safeUser,
        });
    }

    return safeUser

});