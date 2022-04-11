import create from "zustand"
import { ProductProps } from '../components/Product'

type globalProps = {
    cart: ProductProps[],
    addToCart: (product: ProductProps) => void
    removeFromCart: (product: ProductProps) => void
};

const useGlobalCart = create<globalProps>((set) => ({
    cart: [],
    addToCart: (product) => set(({cart}) => {
        cart.push(product)
    }),
    removeFromCart: (product) => set(({cart}) => {
        const newList: ProductProps[] = [];

        cart.forEach(function(item) {
            if(product.id !== item.id) {
                newList.push(item)
            }
        });
    })
}))

export default useGlobalCart 