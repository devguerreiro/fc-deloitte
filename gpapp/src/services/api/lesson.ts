import type { TLessonSchema } from "~/schemas/lesson";

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
    id: number;
    name: string;
    load: number;
    students: Array<ILessonGrade>;
}

export interface IStudentGradesBody {
    student: number;
    grades: Array<number>;
}

interface IStudentGradeData {
    id: number;
    lesson: number;
    student: number;
    grades: Array<number>;
}

export default class LessonAPI {
    static readonly BASE_URL = "api/v1/lesson";

    static async fetchLesson(lessonID: number) {
        return await useAPI<ILessonData>(`${LessonAPI.BASE_URL}/${lessonID}/`);
    }

    static async updateStudentGrades(
        lessonID: number,
        data: IStudentGradesBody
    ) {
        return await useAPI<IStudentGradeData>(
            `${LessonAPI.BASE_URL}/${lessonID}/student_grades/`,
            {
                method: "PUT",
                body: data,
            }
        );
    }

    static async createLesson(data: TLessonSchema) {
        return await useAPI<TLessonSchema>(`${LessonAPI.BASE_URL}/`, {
            method: "POST",
            body: data,
        });
    }
}
