import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    education: { type: String },
    username: { type: String, required: true, unique : true},
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'teacher'], default: 'teacher' }
}, {timestamps: true});


export default mongoose.models.User || mongoose.model('User', userSchema);