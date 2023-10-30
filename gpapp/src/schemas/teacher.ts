import { z } from "@/config/zod";

const TeacherSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        confirm: z.string(),
        dob: z.coerce.date(),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Senhas não conferem",
        path: ["confirm"],
    });

export type TTeacherSchema = z.infer<typeof TeacherSchema>;

export default TeacherSchema;
