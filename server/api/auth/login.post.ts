import { loginSchema } from "~/utils/schemas";
import db from "~/lib/prisma";

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

});