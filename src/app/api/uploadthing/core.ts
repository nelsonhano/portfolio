import { authClient, useSession } from "@/lib/auth-client";
import prisma from "@/lib/prisma";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const uploadFunc = createUploadthing();

export const fileUploader = {
    projectImgUploader: uploadFunc({
        image: { maxFileSize: "8MB", maxFileCount: 5 },
    }).middleware(() => {
        const user = useSession()
        if(!user.data?.session) throw new UploadThingError("UNAUTHORIZED, You must be logged in to upload files");

        return { userId: user.data.user.id }
    }).onUploadError((error) => {
        console.log("Error uploading file", error);
    }).onUploadComplete(async ({ metadata, file }) => {
        console.log(`File upload completed by ${metadata.userId}`);
        console.log(`File url ${file.ufsUrl}`);
        
        return { url: file.ufsUrl };
    }),

    projectVideoUploader: uploadFunc({
        image: { maxFileSize: "16MB", maxFileCount: 1 },
    }).middleware(() => {
        const user = useSession()
        if(!user.data?.session) throw new UploadThingError("UNAUTHORIZED, You must be logged in to upload files");

        return { userId: user.data.user.id }
    }).onUploadError((error) => {
        console.log("Error uploading file", error);
    }).onUploadComplete(async ({ metadata, file }) => {
        console.log(`Video upload completed by ${metadata.userId}`);
        console.log(`Video url ${file.ufsUrl}`);
        
        return { url: file.ufsUrl };
    }),

    projectFeaturedUploader: uploadFunc({
        image: { maxFileSize: "1MB", maxFileCount: 1 },
    }).middleware(() => {
        const user = useSession()
        if(!user.data?.session) throw new UploadThingError("UNAUTHORIZED, You must be logged in to upload files");

        return { userId: user.data.user.id }
    }).onUploadError((error) => {
        console.log("Error uploading file", error);
    }).onUploadComplete(async ({ metadata, file }) => {
        console.log(`File upload completed by ${metadata.userId}`);
        console.log(`File url ${file.ufsUrl}`);
        
        return { url: file.ufsUrl };
    })
} satisfies FileRouter;

export type OurFileRouter = typeof fileUploader