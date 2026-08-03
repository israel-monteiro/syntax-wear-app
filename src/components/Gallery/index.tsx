import banner from "@/assets/images/products/card-imagem.jpg";
import tenisRoxo from "@/assets/images/products/galeria-tenis-roxo.jpg";
import tenisCinza from "@/assets/images/products/galeria-tenis-cinza.jpg";
import tenisBrancoEPreto from "@/assets/images/products/galeria-tenis-branco-e-preto.jpg";
import tenisColorido from "@/assets/images/products/galeria-tenis-colorido.jpg";
import modelo from "@/assets/images/products/galeria-modelo.jpg";
import { Overlay } from "../Overlay";
import { Button } from "../Button";

export const Gallery = () => {
    return (
        <section className="container grid grid-cols-12 gap-2.5 md:gap-7 mb-10">
            <div className="relative col-span-12 row-span-3 md:col-span-6 order-1">
                <img className="w-full h-full object-cover rounded-[20px]" src={banner} alt="Banner" />

                <Overlay title="Krypton One" subtitle="Estilo urbano com atitude" className="inset-0 justify-center">
                    <Button variant="secondary">Feminino</Button>
                    <Button variant="secondary">Masculino</Button>
                </Overlay>
            </div>

            <div className="col-span-12 row-span-1 md:col-span-6 order-6 md:order-2">
                <img className="w-full h-full object-cover rounded-[20px]" src={tenisRoxo} alt="Tênis Roxo" />
            </div>

            <div className="col-span-6 row-span-6 md:col-span-3 order-3">
                <img className="w-full h-full object-cover rounded-[20px]" src={modelo} alt="Modelo" />
            </div>

            <div className="col-span-6 row-span-3 md:col-span-3 order-4">
                <img src={tenisColorido} alt="Tênis Colorido" />
            </div>

            <div className=" col-span-12 row-span-4 md:col-span-6 order-2 md:order-5">
                <img
                    className="w-full h-full object-cover rounded-[20px]"
                    src={tenisBrancoEPreto}
                    alt="Tênis Preto e Branco"
                />
            </div>

            <div className="col-span-6 row-span-3 md:col-span-3 order-4 md:order-6">
                <img className="w-full h-full object-cover rounded-[20px]" src={tenisCinza} alt="Tênis Cinza" />
            </div>
        </section>
    );
};
