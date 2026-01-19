import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import Event from '@/database/event.model'

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const formData = await request.formData();

        let event;

        try {
            event = Object.fromEntries(formData.entries());
        } catch (err) {
            return NextResponse.json({
                message: "Failed to create event",
                error: err instanceof Error ? err.message : String(err),
            }, {status: 400});
        }
        const file = formData.get('image') as File | null;
        if(!file){
            return NextResponse.json({
                message: "Image file is required",
            }, {status: 400});
        }
        const ArrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(ArrayBuffer);

        const uploadResults  = await new Promise((resolve, reject) => {
            const cloudinary = require('cloudinary').v2;
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET,
            });

            cloudinary.uploader.upload_stream({resource_type: 'image'}, (error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }).end(buffer);
        })

        const createdEvent = await Event.create(event);
        return NextResponse.json({
            message: "Event created successfully",
            event: createdEvent,
        }, {status: 201})
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to create event",
            error: error instanceof Error ? error.message : String(error),
        },{status: 500});
    }
}