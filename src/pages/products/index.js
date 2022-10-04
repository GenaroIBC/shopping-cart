import { ProductCard } from "./components/ProductCard";
import style from "../../styles/Products.module.css";

export default function Products({ products = [] }) {
  return (
    <section>
      <h1>Products catalog:</h1>

      <div className={style.products_card_container}>
        {products.map(product => (
          <ProductCard {...product} />
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  // TODO: connect to mongoDB through mongoose and get products data
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
