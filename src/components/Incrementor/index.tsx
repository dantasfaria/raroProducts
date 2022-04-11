import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";
import useGlobalCart from '../../global/global'
import { useEffect, useState } from "react";
import { ProductProps } from '../Product'

const Incrementor = ({ id, picture, name, price, quantity  }: ProductProps) => {

  const [amount, setAmount] = useState(0)
  const addToCart = useGlobalCart(state => state.addToCart)
  const removeFromCart = useGlobalCart(state => state.removeFromCart)
  const cart = useGlobalCart(state => state.cart)

  const addHandleClick = () => {
    if(amount < quantity) {    
      addToCart({id:id, picture:picture, price:price, name:name, quantity:amount + 1})
      console.log(cart)
      setAmount(amount + 1)
    }
  }

  const subHandleClick = () => {
    if(amount > 0) {
      removeFromCart({id:id, picture:picture, price:price, name:name, quantity:amount - 1})
      console.log(cart)
      setAmount(amount - 1)
    }
  }

  return (

    <Wrapper>
      <IconWrapper>
        <SubtractIcon onClick={()=> { subHandleClick() }} aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{amount}</Quantity>

      <IconWrapper>
        <PlusIcon onClick={()=>{ addHandleClick() }} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  );
}

export default Incrementor;
