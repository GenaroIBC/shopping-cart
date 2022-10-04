import style from "../../../styles/CartProduct.module.css";

export function CartProduct({ name = "", price = 0, quantity = 2 }) {
  return (
    <article className={style.cart_product}>
      <h3>{name}</h3>
      <span className={style.product_quantity}>X{quantity}</span>
      <span>Total: ${price * quantity}</span>
      <button className={style.remove_btn}>Remove</button>
      <button className={style.add_btn}>Add one more</button>
    </article>
  );
}
