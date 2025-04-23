import db from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    await requireUserSession(event)
    const session = await getUserSession(event)

    if( session.user ) {
      
    }
})