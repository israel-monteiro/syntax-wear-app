import IconCart from "@/assets/images/icons/icon-cart.svg";
import { useContext, useState } from "react";

import { formatCurrency } from "../../utils/format-currency";
import IconTrash from "@/assets/images/icons/icon-trash.svg";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const { cart, removeToCart, incrementInCart, decrementInCart } = useContext(CartContext);



    return (
        <>
            <button className="relative cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>
                <img src={IconCart} alt="Ícone carrinho" />
                {cart.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                        {cart.length}
                    </span>
                )}
            </button>

            {/* Overlay */}
            <div
                className={`${
                    cartIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"
                } fixed top-0 bottom-0 left-0 right-0`}
                onClick={() => setCartIsOpen(!cartIsOpen)}
            >
                {/* Drawer */}
                <div
                    className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-75 md:w-106 bg-white`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className="flex items-center justify-between px-5">
                        <p className="text-2xl font-bold">Carrinho ({cart.length})</p>

                        <button className="text-xl cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>
                            x
                        </button>
                    </header>

                    <ul
                        className="p-4 overflow-y-auto scrollbar-hide 
                    h-[calc(100%_-_140px)] flex flex-col gap-3"
                    >
                        {cart.map((product) => (
                            <li key={product.id} className="flex flex-col gap-1 px-6 shadow">
                                <button
                                    className="self-end text-xs cursor-pointer"
                                    onClick={() => {
                                        removeToCart(product.id);
                                    }}
                                >
                                    <img src={IconTrash} alt="Ícone Lixeira" className="w-6" />
                                </button>
                                <div className="flex gap-4 mb-4">
                                    <img src={product.image} alt={product.name} className="w-16 h-16" />

                                    <div className="flex flex-col items-start">
                                        <p className="mb-1 text-sm">{product.name}</p>
                                        <p className="mb-1 text-sm">Quantidade: {product.quantity}</p>
                                        <p className="mb-3.5">
                                            <span className="font-bold mr-1.5">{formatCurrency(product.price)}</span> à
                                            vista
                                        </p>
                                        <div className="border flex gap-6 py-1 px-6">
                                            <button className="cursor-pointer" onClick={() => decrementInCart(product)}>
                                                -
                                            </button>
                                            <p>{product.quantity}</p>
                                            <button className="cursor-pointer" onClick={() => incrementInCart(product)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <footer className="absolute bottom-0 w-full h-25 p-4">
                        <button className="w-full h-full bg-black text-white rounded-xs cursor-pointer hover:bg-gray-800">
                            Fechar pedido
                        </button>
                    </footer>
                </div>
            </div>
        </>
    );
};
