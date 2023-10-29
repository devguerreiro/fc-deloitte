import StudentAPI, { type IStudentGradesData } from "~/services/api/student";

interface IStudentState {
    grades: Array<IStudentGradesData>;
}

export default function () {
    const state = useState<IStudentState>("student", () => ({
        grades: [],
    }));

    return {
        state,

        async getStudentGrades(studentID: number) {
            state.value.grades = await StudentAPI.fetchStudentGrades(studentID);
        },
    };
}
