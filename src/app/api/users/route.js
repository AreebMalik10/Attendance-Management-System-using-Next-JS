import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req) {
    // console.log("Received request:", req);
    try {
        await dbConnect();
        const body = await req.json();
        const { fullname, education, username, password, role } = body;

        if(!fullname || !username || !password || !role) {
            return NextResponse.json({ error: "All the fields are required"}, {statsus : 400})
        }

        const existingUser = await User.findOne({username});
        if(existingUser) {
            return NextResponse.json({ error: "Username already exists", status : 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        const newUser = await User.create({
            fullname,
            education,
            username,
            password: hashedPassword,
            role: role,
        })

        console.log("New User Created:", newUser);

        return NextResponse.json({ message : "User Created Successfully", user: {
            id: newUser.id,
            fullname: newUser.fullname,
            education: newUser.education,
            username: newUser.username,
            role: newUser.role,
        }, status: 200});
        

    } catch (err) {
        console.error("Error in user registration:", err);
        return NextResponse.json({ error: "Error in user registration", status : 500})

    }
}

export async function GET() {
    try{
        await dbConnect();
        const users = await User.find({}, "-password");
        return NextResponse.json({ users, status : 200 });

    } catch(err) {
        console.error("Error fetching users:", err);
        return NextResponse.json({ error: "Error fetching users", status : 5000})

    }
}

export async function PUT(req){
    try{
        await dbConnect();
        const body = await req.json();
        const { fullname, education, username, password } = body;

        if(!username ) {
            return NextResponse.json({ error: "Username is required" }, {status : 400})
        }

        const updatedData = {};
        if (password) {
            updatedData.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await User.findOneAndUpdate(
            {username},
            {fullname},
            {education},
            { $set: updatedData},
            { new : true, runValidators: true , context: 'query'}
        ).select("-password");

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User updated successfully", user: updatedUser, status: 200 });
    } catch(err) {
        console.error("Error updating user:", err);
        return NextResponse.json({ error: "Error updating user", status: 500 });

    }
}

export async function DELETE(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { username } = body;

        const deletedUser = await User.findOneAndDelete({ username });

        if(!deletedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully", status : 200})

    } catch(err) {
        console.error("Error deleting user:", err);
        return NextResponse.json({ error: "Error deleting user", status : 500})

    }
}