import tenisCasual from "@/assets/images/products/casual.png";
import tenisEsporte from "@/assets/images/products/esporte.png";
import tenisModerno from "@/assets/images/products/moderno.png";
import tenisFuturista from "@/assets/images/products/futurista.png";
import { Button } from "../Button";

const categories = [
    { name: "Casual", image: tenisCasual },
    { name: "Esporte", image: tenisEsporte },
    { name: "Moderno", image: tenisModerno },
    { name: "Futurista", image: tenisFuturista },
];

export const Categories = () => {
    return (
        <section className="container flex  gap-2 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {categories.map((category, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${category.image})` }}
                    className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white
                    shrink-0 w-[95%] md:w-1/2 lg:w-full snap-center"
                >
                    <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
                    <div className="relative">
                        <Button variant="secondary">{category.name}</Button>
                    </div>
                </div>
            ))}
        </section>
    );
};
