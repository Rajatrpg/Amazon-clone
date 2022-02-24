import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useState } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";
import Orders from "./Orders";
import Footer from './Footer'
const promise = loadStripe(
  "pk_test_51HPvTBIOljmntfcQC1n0EJpWiklLHfLLbvIRmbtahMdllY6NNLF5vu7hw9O5PYBaTZdmf3ppAtWbhTbCzPZnx0o500tCU9bjNq"
);

function App() {
  const [{ user }, dispatch] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Elements stripe={promise}></Elements>
        <Routes path="/">
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="/checkout" element={<Checkout />}>
          </Route>
          <Route path="/payment" element={<Payment />}>
          </Route>
          <Route path="/" element={<Orders />}>
          </Route>
        </Routes>
      </div>
        <Footer />
      <ToastContainer style={{ marginTop: "45px" }} />
    </Router>
  );
  {/* <FlipMove /> */ }
}

export default App;
