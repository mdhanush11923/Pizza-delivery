import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./components/Layout";
import { CartProvider } from "./components/Cart";

// Lazy loading all components
const LazyHome = React.lazy(() => import("./components/Home"));
const LazyMenu = React.lazy(() => import("./components/Menu"));
const LazyPizzaCustomization = React.lazy(() => import("./components/PizzaCustomization"));
const LazyOrders = React.lazy(() => import("./components/Orders"));
const LazyEntry = React.lazy(() => import("./components/Entry"));

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
              {/* Using Suspense for lazy-loaded routes */}
              <Route
                index
                element={
                  <React.Suspense fallback={<div>Loading Home...</div>}>
                    <LazyHome />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/menu"
                element={
                  <React.Suspense fallback={<div>Loading Menu...</div>}>
                    <LazyMenu />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/custom"
                element={
                  <React.Suspense
                    fallback={<div>Loading Customization...</div>}
                  >
                    <LazyPizzaCustomization />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/orders"
                element={
                  <React.Suspense fallback={<div>Loading Orders...</div>}>
                    <LazyOrders />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="/pizza-delivery/login"
              element={
                <React.Suspense fallback={<div>Loading Login...</div>}>
                  <LazyEntry darkMode={darkMode} defaultTab="login" />
                </React.Suspense>
              }
            />
            <Route
              path="/pizza-delivery/signup"
              element={
                <React.Suspense fallback={<div>Loading Signup...</div>}>
                  <LazyEntry darkMode={darkMode} defaultTab="signup" />
                </React.Suspense>
              }
            />
          </Routes>
        </CartProvider>
      </main>
    </NextUIProvider>
  );
}
