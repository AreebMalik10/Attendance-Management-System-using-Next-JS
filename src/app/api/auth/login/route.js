import { NextResponse } from "next/server";
import dbConnect from '@/lib/db';
import User from "@/models/User";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export async function POST(req) {
    try{
        await dbConnect();
        const body = await req.json();
        const { username, password } = body;

        if(!username || !password) {
            return NextResponse.json({ error: "Username and password are required", status : 500})
        }

        const user = await User.findOne({ username });
        if(!user) {
            return NextResponse.json({ error: "Invalid username", status: 500})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return NextResponse.json({ error: "Invalid password", status : 500})
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        );

        const { password : pwd, ...userWithoutPassword } = user.toObject();

        return NextResponse.json({ message: "Login successful", token, 
            // user: { id: user._id, fullname: user.fullname, role: user.role },
            user: userWithoutPassword,
            token
        }, { status: 200});

    } catch(err){
        console.error("Error in login", err);
        return NextResponse.json({ error: "Error in login", status : 500 })

    }
}

