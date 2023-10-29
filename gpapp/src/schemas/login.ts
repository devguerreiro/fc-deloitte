import { z } from "@/config/zod";

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

export default LoginSchema;
