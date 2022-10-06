import { ProductCard } from "./components/ProductCard";
import style from "styles/Products.module.css";
import { v4 as uuid } from "uuid";

export default function Products({ products = [] }) {
  return (
    <main>
      <h1>Products catalog:</h1>

      <section className={style.products_card_container}>
        {products.map(product => (
          <ProductCard key={uuid()} {...product} />
        ))}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.PRODUCTS_API_URL);
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
