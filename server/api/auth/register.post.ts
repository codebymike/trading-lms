import { registerSchema } from "~/utils/schemas";
import db from "~/lib/prisma";
import { santiseUser } from "~/utils/auth";

export default defineEventHandler(async (event) => {
    const { name, password, email } = await readValidatedBody(event, (body) => registerSchema.parse(body));

    const userAlreadyExists = await db.user.findUnique({
        where: {
            email
        }
    });

    if( userAlreadyExists ) {
        throw createError({
            statusCode: 409,
            statusMessage: 'User already exists'
        });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await db.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    const safeUser = santiseUser(newUser);

    if( safeUser ){
        await setUserSession( event, {
            user: safeUser,
        });
    }

    return safeUser

});