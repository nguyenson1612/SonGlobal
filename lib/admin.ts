import { auth } from "@clerk/nextjs/server";


  const adminIds = ["user_2yHN8iQRPO4prIgyVV3ye0g2otC",
  ]; 
  export const isAdmin = async () => {
  const { userId } = await auth();
 
  if (!userId) {
    return false;
  }
  return adminIds.indexOf(userId) !== -1;
};
