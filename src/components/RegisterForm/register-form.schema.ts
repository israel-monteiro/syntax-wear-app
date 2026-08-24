import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
    .object({
        firstName: z.string().nonempty("Primeiro nome é obrigatório"),

        lastName: z.string().nonempty("Último nome é obrigatório"),

        email: z.email("E-mail inválido"),

        password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),

        confirmPassword: z.string().nonempty("Confirmação de senha é obrigatória"),

        cpf: z.string().nonempty("CPF é obrigatório").refine(isValidCPF, {
            error: "CPF inválido",
        }),

        birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), "Data de nascimento inválida"),

        phone: z.string().nonempty("Telefone é obrigatório"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: "As senhas não coincidem",
        path: ["confirmPassword"],
    });

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const  useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            cpf: "",
            birthDate: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        criteriaMode: "all",
    });

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        setError,
        reset,
    };
}
