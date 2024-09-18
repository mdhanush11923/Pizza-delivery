import React from "react";
import Topbar from "./components/Topbar";
import { Routes, Route, useNavigate, useHref } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Entry from "./components/Entry";
import Layout from "./components/Layout";

export default function App() {
  const navigate = useNavigate();
  const [darkMode, setMode] = React.useState(true);

  function changeMode() {
    setMode(!darkMode);
  }
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {/* Your app here... */}
      <Routes>
        <Route path="/" element={<a href="/pizza-delivery/inside">click here</a>} />
        <Route path="/pizza-delivery/inside" element={<h1>how are you</h1>} />
      </Routes>
    </NextUIProvider>


  );
}
