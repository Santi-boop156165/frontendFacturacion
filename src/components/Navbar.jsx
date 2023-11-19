import React from "react";
import { BiCommentAdd } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main>
      <nav className="fixed z-50 w-screen pt-10 pb-4 border-b border-slate-50/10 bg-white bg-opacity-0 backdrop-blur-sm transition-colors duration-500 flex justify-between">
        <section className="flex max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="h-10 font-bold text-white text-2xl">
            Facturacion Module
          </h1>
          <NavLink 
          to={"/factura/registro"}
          className="flex ml-20 bg-blue-600/30 px-3 rounded-md cursor-pointer transform transition-all duration-300 hover:-translate-y-3 focus:outline-none">
            <BiCommentAdd className="text-2xl text-white" />
            <p className="text-white text-lg ml-2">Crear Factura</p>
          </NavLink>
          <NavLink 
          to={"/procesar_facturas"}
          className="flex ml-20 bg-red-600/30 px-3 rounded-md cursor-pointer transform transition-all duration-300 hover:-translate-y-3 focus:outline-none">
            <FaClipboardList className="text-2xl text-white" />
            <p className="text-white text-lg ml-2">Listar Facturas</p>
          </NavLink>
        </section>
        <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
          <FaFileInvoiceDollar className="text-white" size={40} />
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
