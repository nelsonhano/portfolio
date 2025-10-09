import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const { 
        env: { apiEndPoint, prodApiEndPoint, 
        imageKit: { imgPrivKey, imgPubKey }}
    } = config

const imagekit = new ImageKit({
    publicKey: imgPubKey,
    privateKey: imgPrivKey,
    urlEndpoint: prodApiEndPoint ? prodApiEndPoint : apiEndPoint,
})

export async function GET() {
    return NextResponse.json(imagekit.getAuthenticationParameters())
};