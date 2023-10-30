import LessonAPI from "~/services/api/lesson";
import type { ILessonData, IStudentGradesBody } from "~/services/api/lesson";

interface ILessonState {
    lesson: ILessonData | null;
}

export default function () {
    const state = useState<ILessonState>("lesson", () => ({
        lesson: null,
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
    };
}
