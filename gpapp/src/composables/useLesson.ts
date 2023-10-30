import { type TLessonSchema } from "./../schemas/lesson";
import LessonAPI from "~/services/api/lesson";
import type { ILessonData, IStudentGradesBody } from "~/services/api/lesson";

interface ILessonState {
    lesson: ILessonData | null;
    lessons: Array<ILessonData>;
}

export default function () {
    const state = useState<ILessonState>("lesson", () => ({
        lesson: null,
        lessons: [],
    }));

    const { showAlert } = useAlert();

    return {
        state,

        async getLesson(lessonID: number) {
            try {
                state.value.lesson = await LessonAPI.fetchLesson(lessonID);
            } catch (e: unknown) {
                const error = e as Error;
                showAlert({
                    message: error.message,
                });
            }
        },

        async getLessons() {
            try {
                state.value.lessons = await LessonAPI.fetchLessons();
            } catch (e: unknown) {
                const error = e as Error;
                showAlert({
                    message: error.message,
                });
            }
        },

        async updateStudentGrades(lessonID: number, data: IStudentGradesBody) {
            try {
                await LessonAPI.updateStudentGrades(lessonID, data);
                showAlert({
                    message: "Atualizado com sucesso!",
                    type: "success",
                });
            } catch (e: unknown) {
                const error = e as Error;
                showAlert({
                    message: error.message,
                });
            }
        },

        async createLesson(data: TLessonSchema) {
            try {
                await LessonAPI.createLesson(data);
                showAlert({
                    message: "Disciplina cadastrada com sucesso!",
                    type: "success",
                });
            } catch (e: unknown) {
                const error = e as Error;
                showAlert({
                    message: error.message,
                });
            }
        },
    };
}
