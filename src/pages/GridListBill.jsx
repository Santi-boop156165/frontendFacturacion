import React from "react";
import { NavLink } from "react-router-dom";
import { TbHomeBolt } from "react-icons/tb";
import { FcDeleteDatabase } from "react-icons/fc";
import { TbListDetails } from "react-icons/tb";
import { useContext } from "react";
import { BillContext } from "../context/ContextProvaiderFactura";
const GridListBill = () => {
  const { facturas } = useContext(BillContext);
  return (
    <div className='bg-gray-600 h-screen w-full flex  '>
    <main className="container mx-auto p-4">
      <h1 className="text-4xl text-white font-bold mb-8 text-center mt-24">
        Listado De Facturas
      </h1>
  
      <section className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden  ">
        <table className="w-full text-gray-700  ">
          <thead>
            <tr className="text-left bg-gray-800 text-white shadow-2xl">
              <th className="px-6 py-3">Codigo</th>
              <th className="px-6 py-3">Fecha de emision</th>
              <th className="px-6 py-3">Fecha de vencimiento</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Subtotal</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((factura) => (
              <tr className="border-t border-gray-200 hover:bg-gray-50" key={factura.id}>
                <td className="px-6 py-4">{factura.codigo}</td>
                <td className="px-6 py-4">{new Date(factura.fecha_emision).toLocaleDateString("es-ES")}</td>
                <td className="px-6 py-4">{new Date(factura.fecha_vencimiento).toLocaleDateString("es-ES")}</td>
                <td className="px-6 py-4">{factura.estado}</td>
                <td className="px-6 py-4">{factura.total}</td>
                <td className="px-6 py-4">{factura.subtotal}</td>
                <td className="px-6 py-4 flex space-x-4">
                  <NavLink to={`/`}>
                    <TbListDetails className="text-xl text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" />
                  </NavLink>
                  <NavLink to={`/`}>
                    <FcDeleteDatabase className="text-xl hover:text-red-500 transition duration-150 ease-in-out" />
                  </NavLink>
                  <NavLink to={`/`}>
                    <TbHomeBolt className="text-xl text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" />
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  </div>
  );
};

export default GridListBill;
