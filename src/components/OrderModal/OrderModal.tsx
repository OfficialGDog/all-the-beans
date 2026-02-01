import { Modal, NumberInput, Button } from "@carbon/react";
import type { OrderItem } from "../../types/orderItem";
import { CheckmarkOutline } from "@carbon/icons-react";
import styles from "./OrderModal.module.scss";

type OrderModalProps = {
  open: boolean;
  orderItems: OrderItem[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onCheckout?: () => void;
};

export const OrderModal = ({
  open,
  orderItems,
  onClose,
  onCheckout,
  onRemoveItem,
}: OrderModalProps) => {
  
  const totalPrice = orderItems.reduce((acc, item) => 
    acc + parseFloat(item.Cost.slice(1)) * item.quantity, 0).toFixed(2);

  return (
    <Modal
      open={open}
      size="md"
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
                  onClick={() => onRemoveItem(item._id)}
                >
                  Remove
                </span>
              </div>
              <div className={styles.itemQuantity}>
                <NumberInput
                  inputMode="numeric"
                  size="md"
                  id={`qty-${item._id}`}
                  label="Quantity"
                  min={1}
                  value={item.quantity}
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
