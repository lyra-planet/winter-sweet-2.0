import prisma from "../prisma"

export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}

export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}

export const removeRefreshToken = (token) => {
    return prisma.refreshToken.delete({
        where: {
            token: token
        }
    })
}

export const removeAllRefreshToken = async() => {
   await prisma.refreshToken.deleteMany()
   await prisma.post.deleteMany()
    await prisma.postCount.deleteMany()
    return 1
}