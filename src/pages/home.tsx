import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";

const data1: ProductProps = {
  id: 1,
  name: "Product 1",
  picture:
    "https://somos.lojaiplace.com.br/wp-content/uploads/2021/04/apple_iphone-12-spring21_purple_04202021.jpg",
  price: 20.50,
};

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const response = await axios.get('http://localhost:3001/products')
    setProducts(response.data)
  }

  const mapProducts = () => {
    return products.map((product) => (
      <Product {...product} />
    ))
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {mapProducts()}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
