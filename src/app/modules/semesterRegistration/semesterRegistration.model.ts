import mongoose, { Schema } from 'mongoose';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistrationStatus } from './semesterRegistration.constant';

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: SemesterRegistrationStatus,
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      required: true,
      default: 3,
    },
    maxCredit: {
      type: Number,
      required: true,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export const SemesterRegistration = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
