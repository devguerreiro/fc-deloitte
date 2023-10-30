import type { TStudentSchema } from "~/schemas/student";

interface ILesson {
    id: number;
    name: string;
}

export interface IStudentGradesData {
    id: number;
    lesson: ILesson;
    grades: Array<number>;
}

export interface IStudent {
    id: number;
    name: string;
    email: string;
    dob: string;
    profile: number;
}

export default class StudentAPI {
    static readonly BASE_URL = "api/v1/student";

    static async fetchStudentGrades(studentID: number) {
        return await useAPI<Array<IStudentGradesData>>(
            `${StudentAPI.BASE_URL}/${studentID}/grades/`
        );
    }

    static async fetchStudents() {
        return await useAPI<Array<IStudent>>(`${StudentAPI.BASE_URL}/`);
    }

    static async createStudent(data: TStudentSchema) {
        return await useAPI<IStudent>(`${StudentAPI.BASE_URL}/`, {
            method: "POST",
            body: { ...data, dob: data.dob.toLocaleDateString("pt-br") },
        });
    }
}
