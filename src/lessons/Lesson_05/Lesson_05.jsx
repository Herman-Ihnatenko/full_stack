import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);
  const order_list = orders.map((orderItem) => {
    return (
      <li key={v4()} className="order_item">
        {orderItem}
      </li>
    );
  });

  // Массив с названиями блюд (для создания кнопок и для map)
  let menuItems = ["Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-cream"];

  /* Возможный вариант с использованием map (вместо того, чтобы каждый раз переделывать один 
   и тот же код на разные кнопки, можно просто использовать map) */
  const menu_list = menuItems.map((menuItem) => {
    return (
      <div className="button_control" key={menuItem}>
        <Button
          name={menuItem}
          onClick={() => {
            setOrders((prevValue) => {
              return [...prevValue, menuItem];
            });
          }}
        />
      </div>
    );
  });

  return (
    <div className="lesson_05_page_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">

          {/* новая реализация списка меню (с использованием map) */}
          {menu_list}

          {/* старая реализация списка меню (на уроке) */}
          {/* <div className="button_control">
            <Button
              name="Burger"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Burger"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Fries"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Fries"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Cola"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Cola"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Salad"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Salad"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ketchup"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ketchup"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ice-cream"
              onClick={() => {
                setOrders((prevValue) => {
                  return [...prevValue, "Ice-cream"];
                });
              }}
            />
          </div> */}
        </div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">
          {order_list}
          {/* <li className="order_item">Burger</li>
          <li className="order_item">Ice-creem</li> */}
        </ol>
      </div>
    </div>
  );
}

export default Lesson_05;
