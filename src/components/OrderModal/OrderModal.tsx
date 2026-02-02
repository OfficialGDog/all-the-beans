import { Modal, NumberInput, Button } from "@carbon/react";
import type { OrderItem } from "../../types/orderItem";
import { CheckmarkOutline } from "@carbon/icons-react";
import type { CoffeeBeanApi } from "../../types/coffeeBean";
import styles from "./OrderModal.module.scss";

type OrderModalProps = {
  open: boolean;
  orderItems: OrderItem[];
  onClose: () => void;
  onAddToOrder: (bean: CoffeeBeanApi) => void;
  onRemoveFromOrder: (bean: CoffeeBeanApi, remove?: boolean) => void;
  onCheckout?: () => void;
};

export const OrderModal = ({
  open,
  orderItems,
  onClose,
  onAddToOrder,
  onRemoveFromOrder,
  onCheckout
}: OrderModalProps) => {
  
  const totalPrice = orderItems.reduce((acc, item) => 
    acc + parseFloat(item.Cost.slice(1)) * item.quantity, 0).toFixed(2);

  const handleChange = (item: OrderItem, direction: string) => {
    if (direction === "up") {
      onAddToOrder(item);
    } else if (direction === "down" && item.quantity > 1) {
      onRemoveFromOrder(item);
    }
  };

  return (
    <Modal
      open={open}
      size="sm"
      passiveModal={true}
      modalHeading="Your Order"
      onRequestClose={onClose}
    >
      <div className={styles.scrollContainer}>
        {orderItems.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          orderItems.map((item) => (
            <div
              key={item._id}
              className={styles.orderWrapper}
            >
              <div className={styles.orderItem}>
                <strong>{item.Name}</strong>
                <div className={styles.itemCost}>
                  {item.Cost} each
                </div>
                <span
                  className={styles.removeLink}
                  onClick={() => onRemoveFromOrder(item, true)}
                >
                  Remove
                </span>
              </div>
              <div className={styles.itemQuantity}>
                <NumberInput
                  inputMode="none"
                  size="md"
                  id={`qty-${item._id}`}
                  label="Quantity"
                  min={1}
                  value={item.quantity}
                  onKeyDown={(e) => e.preventDefault()}
                  onChange={(_, { direction }) => handleChange(item, direction)}
                  className={styles.readOnly}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div id="modalFooter" className={styles.modalFooter}>
        <div className={styles.orderTotal} data-testid="order-total">
          <span className={styles.orderTotalLabel}>Total</span>{" "}
          <span className={styles.orderPrice}>£{totalPrice}</span>
        </div>
        <div className={styles.checkoutContainer}>
        <Button
          size="lg"
          kind="ghost"
          onClick={onCheckout}
          className={styles.checkoutButton}
        >
          <CheckmarkOutline
            className={styles.checkoutIcon}
          />
          Checkout
        </Button>
        </div>
      </div>
    </Modal>
  );
};
