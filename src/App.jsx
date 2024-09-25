import React from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./components/Layout";
import { CartProvider } from "./components/Cart";
import Loading from "./components/Loading";
import StartPage from "./components/StartPage";
import ErrorPage from "./components/Error";
import PizzaComponent from "./PizzaComponent";

// Lazy loading all components
const LazyHome = React.lazy(() => import("./components/Home"));
const LazyMenu = React.lazy(() => import("./components/Menu"));
const LazyPizzaCustomization = React.lazy(() =>
  import("./components/PizzaCustomization")
);
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
              element={
                // <StartPage darkMode={darkMode} changeMode={changeMode} />
<PizzaComponent/>
              }
            />
            <Route
              path="/pizza-delivery/dashboard"
              element={<Layout darkMode={darkMode} changeMode={changeMode} />}
              // element={
              //   <StartPage darkMode={darkMode} changeMode={changeMode} />
              // }
            >
              {/* Using Suspense for lazy-loaded routes */}
              <Route
                index
                element={
                  <React.Suspense
                    fallback={<Loading displayItem="Loading Home..." />}
                  >
                    <LazyHome />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/dashboard/menu"
                element={
                  <React.Suspense
                    fallback={<Loading displayItem="Loading Menu..." />}
                  >
                    <LazyMenu />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/dashboard/custom"
                element={
                  <React.Suspense
                    fallback={
                      <Loading displayItem="Loading Customization..." />
                    }
                  >
                    <LazyPizzaCustomization />
                  </React.Suspense>
                }
              />
              <Route
                path="/pizza-delivery/dashboard/orders"
                element={
                  <React.Suspense
                    fallback={<Loading displayItem="Loading Orders..." />}
                  >
                    <LazyOrders />
                  </React.Suspense>
                }
              />
            </Route>
            <Route
              path="/pizza-delivery/login"
              element={
                <React.Suspense
                  fallback={<Loading displayItem="Loading Login..." />}
                >
                  <LazyEntry darkMode={darkMode} defaultTab="login" />
                </React.Suspense>
              }
            />
            <Route
              path="/pizza-delivery/signup"
              element={
                <React.Suspense
                  fallback={<Loading displayItem="Loading Signup..." />}
                >
                  <LazyEntry darkMode={darkMode} defaultTab="signup" />
                </React.Suspense>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartProvider>
      </main>
    </NextUIProvider>
  );
}
