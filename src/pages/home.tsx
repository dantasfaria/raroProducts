import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import useGlobalCart from "../global/global";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const cart = useGlobalCart(state => state.cart)

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const response = await axios.get('http://localhost:3001/products')
    setProducts(response.data)
  }

  const mapProducts = () => {
    return products.map((product) => (
      <Product {...product} amount={checkIfAdded(product.id) ? product.quantity : 0}/>
    ))
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
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {(isOpen || !isOpen) && mapProducts()}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
