import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/format-currency";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CEPForm } from "../../../components/CEPForm";

export const Route = createFileRoute("/_app/products/$productId")({
    component: RouteComponent,
});

function RouteComponent() {
    const { productId } = Route.useParams();
    const filteredProduct = products.find((product) => product.id === Number(productId));
    const { addToCart } = useContext(CartContext);

    if (!filteredProduct)
        return (
            <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 text-black min-h-[80vh] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
                <p className="mb-6">O produto que você está procurando não existe ou foi removido.</p>
                <Link to="/products" className="text-accent hover:text-accent-hover underline">Voltar para produtos</Link>
            </section>
        );

    const originalPrice = filteredProduct?.price ?? 0;
    const discountedPrice = originalPrice * 0.9;
    const installmentsPrice = originalPrice / 6;

    return (
        <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10">
            <nav className="text-black text-sm mb-15 ml-5">
                <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
                <span className="font-semibold">{filteredProduct?.name}</span>
            </nav>

            <div className="flex justify-center gap-10">
                <img src={filteredProduct?.image} alt={filteredProduct?.name} className="w-125 bg-white rounded-2xl" />
                <div className="text-black">
                    <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>
                    <p className="mb-2">Color: {filteredProduct?.color}</p>
                    <p className="line-through text-sm text-[#878787]">R$ {formatCurrency(originalPrice)}</p>
                    <p className="text-3xl text-bold mb-2">R$ {formatCurrency(discountedPrice)} no PIX</p>
                    <p className="text-sm text-[#878787]">
                        Você economiza: <span className="font-semibold">10%</span>
                    </p>
                    <p className="mb-2">
                        ou <span className="text-[#38373A] font-semibold">6x</span> de{" "}
                        <span className="text-[#38373A] font-semibold">{formatCurrency(installmentsPrice)}</span>
                    </p>
                    <p className="max-w-125 my-5">{filteredProduct?.description}</p>
                    <div className="mb-3">
                        <p className="text-sm">Calcular o prazo de entrega</p>

                        <CEPForm />
                    </div>

                    <button
                        className="bg-black text-white rounded-md p-5 w-full cursor-pointer hover:bg-gray-800"
                        onClick={() => addToCart(filteredProduct)}
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </section>
    );
}
