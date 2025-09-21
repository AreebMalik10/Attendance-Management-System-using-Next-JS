import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true},
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    date: {type: Date, required: true },
    status: { type: String, enum: ['Present', 'Absent'], required: true},
    markedBY: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true})

export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);