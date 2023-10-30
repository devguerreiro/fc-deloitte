import { type TStudentSchema } from "./../schemas/student";
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

    const { showAlert } = useAlert();

    return {
        state,

        async getStudentGrades(studentID: number) {
            state.value.grades = await StudentAPI.fetchStudentGrades(studentID);
        },

        async getStudents() {
            state.value.students = await StudentAPI.fetchStudents();
        },

        async createStudent(data: TStudentSchema) {
            try {
                const response = await StudentAPI.createStudent(data);
                showAlert({
                    message: "Estudante cadastrado com sucesso!",
                    type: "success",
                });
                return response;
            } catch (e: unknown) {
                const error = e as Error;
                showAlert({
                    message: error.message,
                });
            }
        },
    };
}
