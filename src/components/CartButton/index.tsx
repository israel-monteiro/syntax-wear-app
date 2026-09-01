import IconCart from "@/assets/images/icons/icon-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface cartButtonProps {
    onClick?: () => void
}

export const CartButton = ({onClick}: cartButtonProps) => {
    const { cart } = useContext(CartContext);
    return (
        <button className="relative cursor-pointer flex items-center" onClick={onClick}>
            <img src={IconCart} alt="Ícone carrinho" />
            {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                    {cart.length}
                </span>
            )}
        </button>
    );
};
