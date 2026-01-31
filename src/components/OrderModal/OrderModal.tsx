import { Modal, NumberInput } from "@carbon/react";
import type { OrderItem } from "../../types/orderItem";

type OrderModalProps = {
  open: boolean;
  orderItems: OrderItem[];
  onClose: () => void;
};

export const OrderModal = ({
  open,
  orderItems,
  onClose,
}: OrderModalProps) => {
  return (
    <Modal
      open={open}
      size={"md"}
      passiveModal={true}
      modalHeading="Your Order"
      primaryButtonText="Checkout"
      secondaryButtonText="Cancel"
      onRequestClose={onClose}
      onRequestSubmit={() => {
        alert("Order placed");
      }}
    >
      {orderItems.length === 0 && <p>No items selected.</p>}

      {orderItems.map(item => (
        <div key={item._id} style={{ marginBottom: 16 }}>
          <strong>{item.Name}</strong>

          <NumberInput
            id={`qty-${item._id}`}
            label="Quantity"
            min={1}
            value={item.quantity}
          />
        </div>
      ))}

      <p style={{ marginTop: 16 }}>
        <strong>Total:</strong> £{orderItems.reduce((acc,orderItem) => 
          acc + (parseFloat(orderItem.Cost.slice(1)) * orderItem.quantity), 0).toFixed(2)}
      </p>
    </Modal>
  );
};