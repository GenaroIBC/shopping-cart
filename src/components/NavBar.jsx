import Link from "next/link";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav_bar}>
      <Link href="/">Home</Link>
      <Link href="#">Guide</Link>
      <Link href="/products">Products</Link>
      <Link href="#">Create</Link>
      <Link href="#">Update</Link>
      <Link href="#">Delete</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
