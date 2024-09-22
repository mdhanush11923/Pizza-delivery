import React from "react";
import PizzaCustomization from "./components/PizzaCustomization";
import Content from "./components/Content";
import Topbar from "./components/Topbar";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Entry from "./components/Entry";
import Menu from "./components/Menu";
import Layout from "./components/Layout";
import Orders from "./components/Orders";
import Home from "./components/Home";
import { CartProvider } from "./components/Cart";
const LasyMenu = React.lazy(() => import("./components/Menu"));

export default function App() {
  const navigate = useNavigate();
  const [darkMode, setMode] = React.useState(false);

  function changeMode() {
    setMode(!darkMode);
  }

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <main
        className={`${darkMode && "dark"} text-foreground bg-background h-full`}
      >
        <CartProvider>
          <Routes>
            <Route
              path="/pizza-delivery/"
              element={<Layout darkMode={darkMode} changeMode={changeMode} />}
            >
              <Route index element={<Home />} />
              <Route
                path="/pizza-delivery/menu"
                element={
                  <React.Suspense fallback="Loading....">
                    <LasyMenu />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/custom"
                element={<PizzaCustomization />}
              />
              <Route path="/pizza-delivery/orders" element={<Orders />} />
            </Route>
            <Route
              path="/pizza-delivery/login"
              element={<Entry darkMode={darkMode} defaultTab="login" />}
            />
            <Route
              path="/pizza-delivery/signup"
              element={<Entry darkMode={darkMode} defaultTab="signup" />}
            />
          </Routes>
        </CartProvider>
      </main>
    </NextUIProvider>
  );
}
