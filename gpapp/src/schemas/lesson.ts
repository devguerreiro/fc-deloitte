import { z } from "@/config/zod";

const LessonSchema = z.object({
    name: z.string(),
    teacher: z.number(),
    load: z.coerce.number(),
    students: z.array(z.number()).optional(),
});

export type TLessonSchema = z.infer<typeof LessonSchema>;

export default LessonSchema;
