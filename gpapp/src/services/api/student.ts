interface ILesson {
    id: number;
    name: string;
}

export interface IStudentGradesData {
    id: number;
    lesson: ILesson;
    grades: Array<number>;
}

export default class StudentAPI {
    static readonly BASE_URL = "api/v1/student";

    static async fetchStudentGrades(studentID: number) {
        return await useAPI<Array<IStudentGradesData>>(
            `${StudentAPI.BASE_URL}/${studentID}/grades/`
        );
    }
}
