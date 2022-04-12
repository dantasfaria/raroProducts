import Incrementor from "../Incrementor";
import { Quantity } from "../Incrementor/styles";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
  amount: number;
};

const Product = ({ id, name, price, picture, quantity, amount }: ProductProps) => {
  const correctPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return(
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{correctPrice.format(price)}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor id={id} name={name} price={price} picture={picture} quantity={quantity} amount={amount}/>
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}

export default Product;
