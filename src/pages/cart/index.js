import style from "../../styles/Cart.module.css";
import { CartProduct } from "./components/CartProduct";

export default function Cart({ products = [] }) {
  console.log(products);
  return (
    <main>
      <h1>Cart</h1>

      <section className={style.cart}>
        {products.map(product => (
          <CartProduct {...product} />
        ))}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const products = [
    { name: "Laptop Small", price: 766.45 },
    { name: "IPhone 5' 10.9", price: 229.04 },
    { name: "Smart TV Large", price: 1029.99 },
  ];

  return {
    props: {
      products,
    },
  };
}
