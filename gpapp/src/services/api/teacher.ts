interface IStudent {
    id: number;
    name: string;
    email: string;
    dob: string;
    profile: number;
}

interface ILessonStudent {
    id: number;
    student: IStudent;
    grades: Array<number>;
}

export interface ITeacherLessonsData {
    id: number;
    name: string;
    load: number;
    students: Array<ILessonStudent>;
}

export default class TeacherAPI {
    static readonly BASE_URL = "api/v1/teacher";

    static async fetchTeacherLessons(teacherID: number) {
        return await useAPI<Array<ITeacherLessonsData>>(
            `${TeacherAPI.BASE_URL}/${teacherID}/lessons/`
        );
    }
}
