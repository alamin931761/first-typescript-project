import { TSchedule } from './offeredCourse.interface';

export const hasTimeConflict = (
  assignedSchedules: TSchedule[],
  newSchedule: TSchedule,
) => {
  for (const schedule of assignedSchedules) {
    const existingStartTime = new Date(`1970-01-01T${schedule.startTime}`);
    const existingEndTime = new Date(`1970-01-01T${schedule.endTime}`);
    const newStartTime = new Date(`1970-01-01T${newSchedule.startTime}`);
    const newEndTime = new Date(`1970-01-01T${newSchedule.startTime}`);

    //        06:30                          08:30                        new time
    //        14:30                          16:30                        new time
    //                        12:30                            10:30      existing time
    //       11:30                           13:30                        new time
    if (newStartTime < existingEndTime && newEndTime > existingStartTime) {
      return true;
    }
    return false;
  }
};
