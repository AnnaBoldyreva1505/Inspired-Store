import { NavLink } from "react-router-dom";
import { Container } from "../../../Layout/Container/Container.jsx";
import s from "./Cart.module.scss";
import { CartItem } from "./CartItem/CartItem.jsx";

export const Cart = ({ cartItems, goodsList }) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList.find((product) => product.id === item.id);

    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);

  return (
    <section className={s.cart}>
      <Container>
        {cartItems.length ? (
          <>
            <h2 className={s.title}>Корзина</h2>
            <ul className={s.list}>
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.color}-${item.size}`}
                  className={s.item}
                >
                  <CartItem {...item} goodsList={goodsList} />
                </li>
              ))}
            </ul>
            <div className={s.total}>
              <p>Итого:</p>
              <p>₸ {totalPrice}</p>
            </div>
          </>
        ) : (
          <div className={s.centeredContainer}>
            <h3 className={s.empty}>Корзина пуста</h3>
            <NavLink className={s.btn} to="/">
              Перейти к товарам
            </NavLink>
          </div>
        )}
      </Container>
    </section>
  );
};
