import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductsList } from "../../../../components/ProductsList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "Produtos - SyntaxWear" }],
    }),
});

function RouteComponent() {
    const { category } = Route.useParams();

    const filteredProducts = products.filter(
        (product) => (product.category?.name ?? "").toLowerCase() === category.toLowerCase(),
    );

    return (
        <section className="container pt-44 md:pt-54 pb-10  md:px-10 mb-10 text-black min-h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-3">Lista de produtos</h1>

            <h2 className="mb-10 p-4">Conforto excepcional para suas aventuras do dia-a-dia</h2>

            {filteredProducts.length === 0 ? (
                <>
                    <p>Nenhum produto encontrado para esta categoria.</p>
                    <Link to="/products" className="text-accent hover:text-accent-hover underline">
                        Voltar para produtos
                    </Link>
                </>
            ) : (
                <ProductsList products={filteredProducts} />
            )}
        </section>
    );
}
