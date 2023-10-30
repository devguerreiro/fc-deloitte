import { z } from "@/config/zod";

const StudentSchema = z
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

export type TStudentSchema = z.infer<typeof StudentSchema>;

export default StudentSchema;
