import create from "zustand"
import Product, { ProductProps } from '../components/Product'

type globalProps = {
    cart: ProductProps[],
    addToCart: (product: ProductProps) => void
    removeFromCart: (product: ProductProps) => void
    productIncrementor: (product: ProductProps) => void
    reload: boolean 
};

const useGlobalCart = create<globalProps>((set) => ({
    cart: [],
    reload: false,
    addToCart: (product) => set(({cart}) => {
        cart.push(product)
        set(({ reload }) => ({ reload: !reload }))
    }),

    removeFromCart: (product) => set(({cart}) => {
        const newList: ProductProps[] = [];

        cart.forEach(function(item) {
            if(product.id !== item.id) {
                newList.push(item)
            }
        });

        set(({ cart }) => ({ cart: newList }))
        set(({ reload }) => ({ reload: !reload }))
    }),

    productIncrementor: (product) => set(({cart}) => {

        cart.forEach(function(item, index) {
            if(product.id == item.id) {
                cart.splice(index, 1, product)
                set(({ reload }) => ({ reload: !reload }))
            }
        })
    })
}))

export default useGlobalCart 