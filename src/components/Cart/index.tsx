import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import Product from "../Product";
import useGlobalCart from "../../global/global";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const cart = useGlobalCart(state => state.cart)
  
  const mapCart = () => {
    return cart.map((product) => (
      <Product {...product} amount={product.quantity} />
    ))
  }

  const correctPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const calculateTotal = () => {
    let sum = 0
    cart.forEach((item) => {
      sum = sum + item.price*item.quantity
    })
    return sum
  }


  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
          {mapCart()}
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
    
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{correctPrice.format(calculateTotal())}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  );
}

export default MenuPayment;
