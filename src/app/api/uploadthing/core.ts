import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

 
const f = createUploadthing();

const session = async () => {
    const data = await getServerSession(authOptions);
    return data?.user.id;
} 
 
const auth = (req: Request) => ({ id: session }); 
 
export const ourFileRouter = {
  imageUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);
 
      if (!user) throw new Error("Unauthorized");
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", session);
 
      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;