import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  Months,
  AcademicSemesterCode,
  AcademicSemesterName,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExist) {
    throw new Error('Semester is already exist!');
  }
  next();
});

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemesterModel.updateOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExist) {
    throw new Error('Semester is already exist!');
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
