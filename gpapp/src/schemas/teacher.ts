import { z } from "@/config/zod";

const TeacherSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    dob: z.coerce.date(),
});

export type TTeacherSchema = z.infer<typeof TeacherSchema>;

export default TeacherSchema;
