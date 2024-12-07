"use client";
import React, { useEffect, useState } from "react";
import { Order as OrderCtrl } from "@/api";
import { Order } from "./Order";

const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll();
        setOrders(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {orders && orders.length > 0 ? (
        orders.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>You still have not orders</p>
      )}
    </div>
  );
}
