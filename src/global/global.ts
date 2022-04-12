import create from "zustand"
import Product, { ProductProps } from '../components/Product'

type globalProps = {
    cart: ProductProps[],
    addToCart: (product: ProductProps) => void
    removeFromCart: (product: ProductProps) => void
    productIncrementor: (product: ProductProps) => void
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

        set(({ cart }) => ({ cart: newList }))
    }),

    productIncrementor: (product) => set(({cart}) => {

        cart.forEach(function(item, index) {
            if(product.id == item.id) {
                cart.splice(index, 1, product)
            }
        })
    })
}))

export default useGlobalCart 