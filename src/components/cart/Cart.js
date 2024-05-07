import React, { useState, useContext } from "react";
import { useEffect } from "react";
import "./Cart.css";
import { cartContext } from "../../context/CartContextProvider";
const Cart = () => {
  const [price, setPrice] = useState(0);
  let [cart, setCart] = useContext(cartContext);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.newPrice));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="mt-5">
      {cart?.map((item) => (
        <div className="card mb-3 " key={item.id}  >
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={item.img}
                className="card-img-top d-flex me-auto p-3"
                alt={item.title}
                style={{ height: "200px", minWidth: "auto" }}

              ></img>
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <p className="text-dark fs-4 fw-bolder card-title mb-0">{item.Name}</p>
                <div className=" d-flex  row g-0">
                  {/* buttons */}
                  <div className="col-md-6 py-3  justify-content-evenly">
                    <button
                      className="button-33"
                      onClick={() => handleChange(item, +1)}
                    >
                      +
                    </button>
                    <button className="button-65 text-white rounded-pill border border-white p-2 px-4 mx-2 fw-bolder">
                      {item.amount}
                    </button>
                    <button
                      className="button-32 rounded-circle fs-6 fw-bolder text-white"
                      onClick={() => handleChange(item, -1)}
                    >
                      -
                    </button>
                  </div>
                  {/* delelte */}
                  <div className="d-flex py-2 gap-3  col-md-6 justify-content-evenly">
                    <div>
                      <span className="button-33 fw-bolder fs-4 text-center ">
                        {item.newPrice}
                      </span>
                    </div>

                    <div className="">
                      <button
                        type="submit"
                        className="text-center fw-bold fs-5 button-62 d-block m-auto"
                        onClick={() => handleRemove(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="total mt-2">
        <span className=" to1">Total Price of your Cart : </span>
        <span className="text-dark button-63 text-white h-25 fw-bolder p-2">Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
