import Incrementor from "../Incrementor";
import { Quantity } from "../Incrementor/styles";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number
};

const Product = ({ id, name, price, picture, quantity }: ProductProps) => (
  <Wrapper>
    <img src={picture} alt={`Imagem de referência ${name}`} />

    <Info>
      <Column>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </Column>

      <WrapperIncrementor>
        <Incrementor id={id} name={name} price={price} picture={picture} quantity={quantity} />
      </WrapperIncrementor>
    </Info>
  </Wrapper>
);

export default Product;
