import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Tag
} from "@carbon/react";
import { ShoppingCart } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import type { OrderItem } from '../../types/orderItem';
import styles from "./Navbar.module.scss";

type NavbarProps = {
  cartItems: OrderItem[];
  onCartClick: () => void;
};

const Navbar = ({cartItems, onCartClick}: NavbarProps) => {
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0);

  return (
    <Header aria-label="All The Beans" className={styles.header}>
      <HeaderName
        aria-label="Home"
        as={Link}
        to="/"
        prefix=""
        title="Home"
        className={styles.brandLink}
      >
        <img
          src="/coffee.ico"
          alt="All The Beans Logo"
          className={styles.brandLogo}
        />
        All The Beans
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="View Cart"
          tooltipAlignment='end'
          onClick={onCartClick}
          className={styles.cartButton}
        >
          <ShoppingCart size={30} />
          {cartItemCount > 0 && (
            <Tag
              size="sm"
              type="gray"
              className={styles.itemCount}>
              {cartItemCount}
            </Tag>
          )}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default Navbar;
