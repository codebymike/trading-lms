import type { User } from "@prisma/client";


export const santiseUser = (user: User) => {
    if( !user || !user.hashedPassword ) return null

    const { hashedPassword, ...sanitisedUser } = user;
    return sanitisedUser;
}