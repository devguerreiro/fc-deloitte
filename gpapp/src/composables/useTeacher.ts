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
    };
}
