import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    section: { type : String },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    students: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        // required: true
    }

}, { timestamps: true});

export default mongoose.models.Class || mongoose.model('Class', classSchema);