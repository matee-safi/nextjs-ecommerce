import React, { ReactNode } from "react";
import { AiOutlineShopping } from "react-icons/ai";

interface EmptyCartProps {
  children?: ReactNode;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ children }) => {
  return (
    <div className="empty-cart">
      <AiOutlineShopping size={150} />
      <p>Your shopping bag is empty</p>
      {children}
    </div>
  );
};

export default EmptyCart;
