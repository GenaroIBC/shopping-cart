import { v4 as uuid } from "uuid";
import style from "../../styles/Cart.module.css";
import { CartProduct } from "./components/CartProduct";

export default function Cart({ products = [] }) {
  console.log(products);
  return (
    <main>
      <h1>Cart</h1>

      <section className={style.cart}>
        {products.map(product => (
          <CartProduct key={uuid()} {...product} />
        ))}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.SHOPCART_API_URL);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
