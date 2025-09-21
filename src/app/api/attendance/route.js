import { NextResponse} from 'next/server';
import dbConnect from '@/lib/db';
import Attendance from '@/models/Attendance';

export async function POST(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const {studentId, classId, date, status, markedBY } = body;
        console.log("Req body:", body);

        if(!studentId || !classId || !date || !status || !markedBY){
            return NextResponse.json({ error: "All fields are required", status : 500})
        }

        const markAttendance = await Attendance.create({
            studentId,
            classId,
            date,
            status,
            markedBY
        })


        return NextResponse.json({ message: "Attendance marked successfully", data: markAttendance, status : 200 })

    } catch(err) {
        console.error("Error in marking attendance", err);
        return NextResponse.json({ error: "Error in marking attendance", status : 500 })

    }
}

export async function GET() {
    try{
        await dbConnect();
        const getAttendance = await Attendance.find({});
        return NextResponse.json({ message: "Attendance fetched successfully", attendance: getAttendance, status : 200})

    } catch(err) {
        console.error("Error in fetching attendance", err);
        return NextResponse.json({ error: 'Error in fetching attendance', status : 500})

    }
}

export async function PUT(req){
    try{
        await dbConnect();
        const body = req.json();
        const { id, status } = body;
        if(!id){
            return NextResponse.json({ error: "Attendance ID is required", status : 500})
        }
        const updateAttendance= await Attendance.findByIdAndUpdate( id,
        { status },
        { new : true, runValidators : true}
    )

        return NextResponse.json({ message: "Attendance updated successfully", attendance: updateAttendance, status : 200})
    } catch(err) {
        console.error("Error in updating attendance", err);
        return NextResponse.json({ error: "Error in updating attendance", status : 500})
    }
}