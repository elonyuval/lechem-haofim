import { useCallback, useState } from "react";
import type { Order } from "../data/types";
import { listOrders, saveOrder } from "../lib/orderStorage";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(() => listOrders());

  const addOrder = useCallback((order: Order) => {
    saveOrder(order);
    setOrders(listOrders());
  }, []);

  return { orders, addOrder };
}
