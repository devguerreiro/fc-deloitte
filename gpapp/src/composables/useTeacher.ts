import type { TTeacherSchema } from "~/schemas/teacher";
import TeacherAPI from "~/services/api/teacher";
import type { ILessonData, ITeacher } from "~/services/api/teacher";

interface ITeacherState {
    lessons: Array<ILessonData>;
    teachers: Array<ITeacher>;
}

export default function () {
    const state = useState<ITeacherState>("teacher", () => ({
        lessons: [],
        teachers: [],
    }));

    const { showAlert } = useAlert();

    return {
        state,

        async getTeacherLessons(teacherID: number) {
            state.value.lessons = await TeacherAPI.fetchTeacherLessons(
                teacherID
            );
        },

        async getTeachers() {
            state.value.teachers = await TeacherAPI.fetchTeachers();
        },

        async createTeacher(data: TTeacherSchema) {
            try {
                const response = await TeacherAPI.createTeacher(data);
                showAlert({
                    message: "Professor cadastrado com sucesso!",
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
