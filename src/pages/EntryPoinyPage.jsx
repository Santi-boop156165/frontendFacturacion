import React from "react";
import Navbar from "../components/Navbar";

const EntryPoinyPage = () => {
  return (
    <>
        <Navbar />
        <div className="bg-black/25 h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl lg:text-6xl font-bold tracking-wide border-b-2">
          Bienvenidos al Módulo de Facturación
        </h1>
        <p className="text-gray-300 text-xl mt-4 text-center max-w-xl">
          Gestiona tus facturas de manera eficiente y rápida
        </p>
        <p className="text-gray-300 text-xs mt-4 text-center max-w-xl">
        designed by santi-boop ©
        </p>
      </div>
    </>
  );
};

export default EntryPoinyPage;
