import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import useGlobalCart from "../../global/global";

import { Wrapper } from "./styles";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => {
  const cart = useGlobalCart(state => state.cart)
  return(
    <Wrapper>
      <button onClick={() => {console.log(cart)}}>BUTAO</button>
      <ShoppingIcon onClick={() => setIsOpen(true)} aria-label="Shopping Icon" />
    </Wrapper>
  );
}

export default Header;
