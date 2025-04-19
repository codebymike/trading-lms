import db from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    await requireUserSession(event)
    const session = await getUserSession(event)

    if( session.user ) {
       return await db.course.findUnique({
            where: {
                userId: session.user.id,
                id: event.context.params?.courseId
            }
        })
    }
})