import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";
import useGlobalCart from '../../global/global'
import { useEffect, useState } from "react";
import { ProductProps } from '../Product'

const Incrementor = ({ id, picture, name, price, quantity, amount }: ProductProps) => {

  const [newAmount, setAmount] = useState(amount)
  const addToCart = useGlobalCart(state => state.addToCart)
  const removeFromCart = useGlobalCart(state => state.removeFromCart)
  const cart = useGlobalCart(state => state.cart)
  const productIncrementor = useGlobalCart(state => state.productIncrementor)

  const addHandleClick = () => {

    if(checkIfAdded(id)) {
      productIncrementor({id:id, picture:picture, price:price, name:name, quantity: newAmount + 1, amount: quantity})
      setAmount(newAmount + 1)
    } else {
      if(newAmount < quantity) {    
        addToCart({id:id, picture:picture, price:price, name:name, quantity: newAmount + 1, amount: quantity})
        setAmount(newAmount + 1)
      }
    }
  }

  const subHandleClick = () => {
    if(newAmount > 1) {
      productIncrementor({id:id, picture:picture, price:price, name:name, quantity: newAmount - 1, amount: quantity})
      setAmount(newAmount - 1)
    } else {
      removeFromCart({id:id, picture:picture, price:price, name:name, quantity: newAmount - 1, amount: quantity})
      setAmount(newAmount - 1)
    }
  }

  const checkIfAdded = (id: number) => {
    for(let i=0; i < cart.length; i++) {
      if(cart[i].id == id) {
        return true
      }
    }

    return false
  }

  return (

    <Wrapper>
      <IconWrapper>
        <SubtractIcon onClick={()=> { subHandleClick() }} aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{newAmount}</Quantity>

      <IconWrapper>
        <PlusIcon onClick={()=>{ addHandleClick() }} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
}

export default Incrementor;
