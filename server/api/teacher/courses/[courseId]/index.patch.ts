import db from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    await requireUserSession(event)
    const session = await getUserSession(event)

    // TODO add schema validation
    const body = await readBody(event)

    if( session.user ) {
        return await db.course.update({
            where: {
                id: event.context.params?.courseId,
                userId: session.user.id
            },
            data: {
                title: body.title,
                description: body.description,
            }
        })
    }   
})