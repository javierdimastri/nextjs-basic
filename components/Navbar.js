import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/" className={styles.linksText}> Home</Link>
        <Link href="/user" className={styles.linksText}> User</Link>
        <Link href="/profile" className={styles.linksText}> Profile</Link>
        <Link href="/coins" className={styles.linksText}> Coins</Link>
      </div>
    </div>
  );
}

export default Navbar;
