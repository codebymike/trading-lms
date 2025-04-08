import { registerSchema } from "~/utils/schemas";
import db from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    const { name, password, email } = await readValidatedBody(event, (body) => registerSchema.parse(body));
});