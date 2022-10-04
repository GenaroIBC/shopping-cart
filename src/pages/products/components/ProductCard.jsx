import style from "../../../styles/ProductCard.module.css";

export function ProductCard({ name = "", price = 0 }) {
  return (
    <article className={style.product_card}>
      <h3>{name}</h3>
      <span>${price}</span>
      <button className={style.add_to_cart_btn}>Add</button>
    </article>
  );
}
