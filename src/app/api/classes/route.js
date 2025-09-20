import {NextResponse} from 'next/server';
import dbConnect from '@/lib/db';
import Class from '@/models/Class';


export async function POST(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { name, section, teacher, students } = body;

        if(!name){
            return NextResponse.json({ error: "Class name is required", status : 500})
        }

        const createClass = await Class.create({
            name,
            section,
            teacher : teacher || undefined,
            students : students || undefined
        });

        return NextResponse.json({ message: "Class created successfully", class: createClass, status : 200})


    }catch (err) {
        console.error("Error occured during class creation:", err)
        return NextResponse.json({ error: "Error occured during class creation", status : 500})
    }
};

export async function GET() {
    try{
        await dbConnect();
        const classes = await Class.find({});
        return NextResponse.json({ classes, status : 200})

    } catch(err) {
        console.error("Error occured during classes fetching:", err);
        return NextResponse.json({ error: "Error occured during classes fetching", status : 500})

    }
}

export async function PUT(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { id, name , section } = body;

        if(!id) {
            return NextResponse.json({ error: "Class ID is required", status : 500})
        }
        
        const updateClass = await Class.findByIdAndUpdate(
            id,
            {name, section}, 
            { new: true, runValidators: true}
        )

        return NextResponse.json({ message: "Class updated successfully", class: updateClass, status : 200})
    } catch (err) {
        console.error("Error occured during class update:", err);
        return NextResponse.json({ error: "Error occured during class update", status : 500})
    }

}


export async function DELETE(req){
    try{
        await dbConnect();
        const body = await req.json();
        const {name} = body;

        if(!name) {
            return NextResponse.json({ error: "Class name is required", status : 400})
        }

        const deletedClass = await Class.findOneAndDelete({ name });

        return NextResponse.json({ message: "Class deleted successfully",  status : 200})


    } catch (err) {
        console.error("Error deleting class:", err);
        return NextResponse.json({ error: "Error deleting class", status : 500})

    }
}
