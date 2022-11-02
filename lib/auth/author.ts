import prisma from "../prisma";
import bcrypt from "bcrypt"
import { Author } from "../interfaces";

export const createAuthor = (authorData:Author) => {
    const finalAuthorData= {
        ...authorData,
        password: bcrypt.hashSync(authorData.password, 10)
    }
    console.log(authorData)
    return prisma.author.create({
        data:finalAuthorData
    })
}

export const getAuthorByEmailAndPassword = (email: string) => {
    return prisma.author.findUnique({
        where: {
            email:email
        }
    })
}

export const getAuthorById = (authorId:string) => {
    return prisma.author.findUnique({
        where: {
            id: authorId
        }
    })
}