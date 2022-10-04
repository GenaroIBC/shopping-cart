import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav_bar}>
      <a href="#">Home</a>
      <a href="#">Guide</a>
      <a href="#">Products</a>
      <a href="#">Create</a>
      <a href="#">Update</a>
      <a href="#">Delete</a>
    </nav>
  );
}
