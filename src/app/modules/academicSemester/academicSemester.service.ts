import { academicSemesterNAmeCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

// create academic semester
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNAmeCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }

  const result = await AcademicSemesterModel.create(payload);
  return result;
};

// get all academic semesters
const getAllAcademicSemestersFromDB = async () => {
  const result = AcademicSemesterModel.find();
  return result;
};

// get a single academic semester
const getASingleAcademicSemesterFromDB = async (id: string) => {
  const result = AcademicSemesterModel.findById(id);
  return result;
};

// update a academic semester
const updateAnAcademicSemesterFromDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNAmeCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semester code');
  }
  const result = AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getASingleAcademicSemesterFromDB,
  updateAnAcademicSemesterFromDB,
};
