interface IStudent {
    id: number;
    name: string;
    email: string;
    dob: string;
    profile: number;
}

export interface ILessonGrade {
    id: number;
    student: IStudent;
    grades: Array<number>;
}

export interface ILessonData {
    id: string;
    name: string;
    load: number;
    students: Array<ILessonGrade>;
}

export default class TeacherAPI {
    static readonly BASE_URL = "api/v1/teacher";

    static async fetchTeacherLessons(teacherID: number) {
        return await useAPI<Array<ILessonData>>(
            `${TeacherAPI.BASE_URL}/${teacherID}/lessons/`
        );
    }
}
