import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    student_name: { type: String, required: true},
    age: { type: Number, required: true },
    father_name: { type: String, required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true});

export default mongoose.models.Student || mongoose.model('Student', studentSchema);