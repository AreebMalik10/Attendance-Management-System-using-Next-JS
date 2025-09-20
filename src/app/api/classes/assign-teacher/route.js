import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Class from '@/models/Class';

export async function PUT(req){
    try{
        await dbConnect();
        const body = await req.json();
        const { classId, teacherId } = body;
        if(!classId && teacherId) {
            return NextResponse.json({ error: "Class ID and Teacher ID are required", status : 500})
        }

        const updatedClassTeacher = await Class.findByIdAndUpdate(
            classId,
            { teacher: teacherId },
            { new: true, runValidators: true }
        );

        if(!updatedClassTeacher) {
            return NextResponse.json({ error: "Class not found", status : 404})
        }

        return NextResponse.json({ message: "Teacher assigned successfully", class: updatedClassTeacher, status : 200})

    } catch(err) {
        console.error("Error occured during assigned teacher to class", err);
        return NextResponse.json({ error: "Error occured during assigned teacher to class", status : 500})

    }

}