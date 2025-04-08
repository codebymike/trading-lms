import { registerSchema } from "~/utils/schemas";
import db from "~/lib/prisma";

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

});