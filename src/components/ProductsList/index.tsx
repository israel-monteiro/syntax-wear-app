import type { Product } from "../Interfaces/product";
import { ProductCard } from "../ProductCard";


interface ProductCardProps {
    products: Product[];
}

export const ProductsList = ({ products }: ProductCardProps) => {
    return (
        <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mb-10">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};
