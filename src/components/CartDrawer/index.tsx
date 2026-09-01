import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/format-currency";
import IconTrash from "@/assets/images/icons/icon-trash.svg";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeToCart, incrementInCart, decrementInCart } = useContext(CartContext);

    return (
        <>
            {/* Overlay */}
            <div
                className={`${
                    isOpen ? "bg-black/70 visible" : "bg-transparent invisible"
                } text-black fixed inset-0 z-50 transition-all duration-600 ease-in-out`}
                onClick={onClose}
            >
                {/* Drawer */}
                <div
                    className={`${isOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-75 md:w-100 bg-white`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className="flex items-center justify-between px-5">
                        <p className="text-2xl font-bold">Carrinho ({cart.length})</p>

                        <button className="text-xl cursor-pointer" onClick={onClose}>
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
