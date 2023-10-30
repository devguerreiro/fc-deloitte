import TeacherAPI from "~/services/api/teacher";
import type { ITeacherLessonsData } from "~/services/api/teacher";

interface ITeacherState {
    lessons: Array<ITeacherLessonsData>;
}

export default function () {
    const state = useState<ITeacherState>("teacher", () => ({
        lessons: [],
    }));

    return {
        state,

        async getTeacherLessons(teacherID: number) {
            state.value.lessons = await TeacherAPI.fetchTeacherLessons(
                teacherID
            );
        },
    };
}
