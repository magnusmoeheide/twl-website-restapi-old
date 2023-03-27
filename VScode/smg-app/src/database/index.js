import { getClasses, getTeacherClasses, getSchoolClasses, createClass, updateClass, deleteClass } from './classes';
import { getGrades, getSchoolGrades, createGrade, updateGrade, deleteGrade } from './grades';
import { getStudents, getClassStudents, createStudent, updateStudent, deleteStudent } from './students';
import { getSchools, createSchool, updateSchool, deleteSchool } from './schools';
import { getTeachers, getSchoolTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher} from './teachers';

export{
    getClasses,
    getTeacherClasses,
    getSchoolClasses,
    createClass,
    updateClass,
    deleteClass,

    getGrades,
    getSchoolGrades,
    createGrade,
    updateGrade,
    deleteGrade,

    getStudents,
    getClassStudents,
    createStudent,
    updateStudent,
    deleteStudent,

    getSchools,
    createSchool,
    updateSchool,
    deleteSchool,

    getTeachers,
    getSchoolTeachers,
    getTeacherById,
    createTeacher,
    updateTeacher,
    deleteTeacher,
}