import { z } from "@/config/zod";

const StudentSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    dob: z.coerce.date(),
});

export type TStudentSchema = z.infer<typeof StudentSchema>;

export default StudentSchema;
