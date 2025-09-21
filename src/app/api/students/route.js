import { NextResponse } from "next/server";
import dbConnect from '@/lib/db';
import Student from '@/models/Student'

export async function POST(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { student_name, age, father_name, classId, createdBy } = body;

        if(!student_name || !age || !father_name || !classId) {
            return NextResponse.json({ error: "All fields are required", status : 500})
        }

        const addStudent = await Student.create({
            student_name,
            age,
            father_name,
            classId,
            createdBy
        })

        if(!addStudent) {
            return NextResponse.json({ error: "Error in adding student", status: 500})
        }

        return NextResponse.json({ message: "Student added successfully", data: addStudent, status: 200})

    } catch(err) {
        console.error("Error in adding student", err);
        return NextResponse.json({ error: "Error in adding student", status: 500})
    }
 }


export async function GET () {
    try{
        await dbConnect();
        const students = await Student.find({});
        return NextResponse.json({ message : "Students fetched successfully", student: students, status : 200 })

    } catch(err) {
        console.error("Error in fetching students", err);
        return NextResponse.json({ error: "Error in fetching students", status : 500})
    }
}

export async function PUT(req) {
    try{
      await dbConnect();
      const body = await req.json();
      const { id, student_name, age, father_name, classId } = body;

      if(!id){
        return NextResponse.json({ error: "Student ID is required", status : 500 })
      }

      const updatedStudent = await Student.findByIdAndUpdate( id, {
        student_name,
        age,
        father_name,
        classId,
      }, 
      { new: true, runValidators: true}
    )

      return NextResponse.json({ message: "Student updated successfully", student: updatedStudent, status : 200 })

    }catch(err) {
        console.error("Error in updating student", err);
        return NextResponse.json(({ error: "Error in updating studnet", err}))

    }
}


export async function DELETE(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { id } = body;
        if(!id) {
            return NextResponse.json({ error: "student ID is required", status : 500 })
        }

        const deleteStudent = await Student.findByIdAndDelete(id);

        return NextResponse.json({ message: "Student deleted successfully", status : 200 })

    } catch(err) {
        console.error("Error in deleting student", err);
        return NextResponse.json({ error: "Error in deleting student", status : 500 })

    }
}