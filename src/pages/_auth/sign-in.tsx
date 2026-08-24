import { createFileRoute, Link } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import GoogleIcon from "../../assets/images/icons/google-icon.png";

export const Route = createFileRoute("/_auth/sign-in")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <section className="text-black h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5">
            <div className="w-112.5 bg-white rounded-[18px] p-10 shadow-md">
                <div className="flex flex-col">
                    <Logo />
                    <h2 className="text-black text-[21px] font-bold mb-2">Entrar</h2>
                    <p className="mb-3.5">Escolha como você gostaria de fazer login</p>

                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
                        <img src={GoogleIcon} className="w-5 h-5" />
                        <span className="text-sm font-medium text-black">Continuar com Google</span>
                    </button>
                    <Separator />

                    <LoginForm />

                    <p className=" text-gray-600 mt-3.5 text-center">
                        Ainda não possui uma conta?
                        <Link to="/sign-up" className="text-[#5433EB] hover:underline ml-1">
                             Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
