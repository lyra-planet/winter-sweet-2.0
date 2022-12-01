import prisma from "../prisma";




export const getAllLabGadget = async () => {
  return prisma.labGadget.findMany({orderBy: { createdAt: "desc" } });
};
export const getAllFriend = async () => {
  return prisma.friend.findMany({orderBy: { createdAt: "desc" } });
};
export const getAllAd = async () => {
  return prisma.ad.findMany({orderBy: { createdAt: "desc" } });
};

export const getFrontAds = async () => {
  return prisma.ad.findMany({
    where:{NOT:[{
      status:0
    },{
      status:-1
    }]},
    take:1,orderBy: { createdAt: "desc" } });
};
export const getFrontLabGadgets = async () => {
  return prisma.labGadget.findMany({
    where:{NOT:[{
      status:0
    },{
      status:-1
    }]},
    orderBy: { createdAt: "desc" } });
};
export const getFrontFriends = async () => {
  return prisma.friend.findMany({
    where:{NOT:[{
      status:0
    },{
      status:-1
    }]},
    orderBy: { createdAt: "desc" } });
};


