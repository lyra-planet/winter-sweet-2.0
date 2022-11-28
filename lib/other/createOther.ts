import prisma from '../prisma';
export const createLabGadget = async(labGadget)=>{

    const result = await prisma.labGadget.create({
        data:labGadget
    })
    return result
}

export const deleteLabGadgets = ()=>{
    return prisma.labGadget.deleteMany()
}

export const createFriend = async(friend)=>{

    const result = await prisma.friend.create({
        data:friend
    })
    return result
}

export const deleteFriends = ()=>{
    return prisma.friend.deleteMany()
}
