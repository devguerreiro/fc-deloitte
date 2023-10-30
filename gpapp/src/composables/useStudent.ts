import StudentAPI, {
    type IStudent,
    type IStudentGradesData,
} from "~/services/api/student";

interface IStudentState {
    grades: Array<IStudentGradesData>;
    students: Array<IStudent>;
}

export default function () {
    const state = useState<IStudentState>("student", () => ({
        grades: [],
        students: [],
    }));

    return {
        state,

        async getStudentGrades(studentID: number) {
            state.value.grades = await StudentAPI.fetchStudentGrades(studentID);
        },

        async getStudents() {
            state.value.students = await StudentAPI.fetchStudents();
        },
    };
}
