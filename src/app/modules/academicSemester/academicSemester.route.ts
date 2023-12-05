import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

// get all academic semesters
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

// get single academic semester
router.get(
  '/:semesterId',
  AcademicSemesterControllers.getASingleAcademicSemester,
);

// update a academic semester
router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAnAcademicSemester,
);

export const AcademicSemesterRoutes = router;
