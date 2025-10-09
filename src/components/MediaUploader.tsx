"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { X } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import config from "@/lib/config";

type Prop = {
    endpoint:
        | "projectImgUploader"
        | "projectVideoUploader"
        | "projectFeaturedUploader";
    onChange: (url?: string) => void;
    value?: string;
    maxFiles?: number;
};

export default function MediaUploader({
    endpoint,
    onChange,
    value,
    maxFiles = 5,
}: Prop) {
    const [file, setFile] = useState<string[]>(value ? [value] : []);
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const authenticator = async () => {
        const { env: { apiEndPoint, prodApiEndPoint }} = config;
        try {
            const res = await fetch(`${prodApiEndPoint ? prodApiEndPoint : apiEndPoint}/api/auth/imagekit`);

            if (!res.ok) {
                throw new Error(`Failed to authenticate: ${res.statusText}`);
            }

            const data = await res.json();

            const { expire, signature, token } = data;
            return { expire, signature, token };
        } catch (error) {
            if (error instanceof Error) {
                console.log("Error during authentication:", error.message);
                throw new Error(`Error during authentication: ${error.message}`);
            } else {
                console.log("Unknown error during authentication");
                throw new Error("Unknown error during authentication");
            }
        }
    };

    return (
        <div className="w-full flex flex-col bg-black">

            {isUploading && <Progress value={progress} className="w-full" />}
        </div>
    );
}
