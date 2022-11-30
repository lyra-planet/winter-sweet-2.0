import prisma from '../prisma';
export const createLabGadget = async(labGadget)=>{

    const result = await prisma.labGadget.create({
        data:labGadget
    })
    return result
}
export const createFriend = async(friend)=>{

    const result = await prisma.friend.create({
        data:friend
    })
    return result
}
export const createAd = async(ad)=>{
    const result = await prisma.ad.create({
        data:ad
    })
    return result
}

export const deleteAds = ()=>{
    return prisma.ad.deleteMany()
}
export const deleteFriends = ()=>{
    return prisma.friend.deleteMany()
}
export const deleteLabGadgets = ()=>{
    return prisma.labGadget.deleteMany()
}

export const updateAd = async(before,item)=>{
    const result = await prisma.ad.update({
        where:{
            id:before.id
        },
        data:item
    })
    
    return result
}
export const updateFriend = async(before,item)=>{
    const result = await prisma.friend.update({
        where:{
            id:before.id
        },
        data:item
    })
    
    return result
}
export const updateLabGadget= async(before,item)=>{
    const result = await prisma.labGadget.update({
        where:{
            id:before.id
        },
        data:item
    })
    return result
}
