import React, { useState,useEffect  } from "react";
import { TbHomeBolt } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { clients } from "../api/Clients";
import { procedures } from "../api/Procedures";
import { useContext } from "react";
import { BillContext } from "../context/ContextProvaiderFactura";
import { useForm, useFieldArray } from "react-hook-form";
const FormRegisterBill = () => {
  const { createBill } = useContext(BillContext);
  const { register, handleSubmit,watch, setValue } = useForm();
  const [subtotal, setSubtotal] = useState(0);

  const totalConsultas = watch("total", 0);
  const procedimientoId = watch("procedimientos");

  useEffect(() => {
    if (procedimientoId && totalConsultas) {
      const procedure = procedures.find(p => p.id.toString() === procedimientoId);
      if (procedure) {
        const newSubtotal = procedure.price * Number(totalConsultas);
        setSubtotal(newSubtotal);
        setValue("subtotal", newSubtotal.toFixed(2)); 
      }
    }
  }, [procedimientoId, totalConsultas, setValue]);
  console.log(clients);

  return (
    <div className="bg-gray-600   h-screen w-screen">
      <main className="flex flex-col justify-center items-center h-screen relative">
        <h1 className="text-4xl text-white font-bold border-b-[1px] mt-12">
          Registro De Facturas
        </h1>
        <section className="lg:max-w-[1000px] lg:h-[580px] bg-gray-700/75 w-full m-auto  relative group rounded-xl shadow-2xl">
          <NavLink
            to={"/"}
            className="absolute top-0 p-2 cursor-pointer transform transition-all duration-300 hover:-translate-y-3 focus:outline-none"
          >
            <TbHomeBolt className="text-4xl text-white" />
          </NavLink>
          <form
            onSubmit={handleSubmit(createBill)}
            className="p-3 ml-5 lg:ml-28 lg:grid lg:grid-cols-2 sm:grid-cols-1"
          >
            <div className="flex flex-col gap-2 mt-12">
              <label className="block text-sm font-medium text-white">
                Codigo
              </label>
              <input
                {...register("codigo")}
                autoComplete="off"
                autoFocus
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-transparent text-white"
                type="text"
              />
              <label className="block text-sm font-medium text-white mt-8">
                fecha de emision
              </label>
              <input
                {...register("fecha_emision")}
                autoComplete="off"
                autoFocus
                required
                className="mt-1 p-2 w-full lg:w-[215px] border-b-2 border-white bg-transparent text-white outline-none focus:border-blue-500"
                type="date"
              />

              <label className="block text-sm font-medium text-white mt-8">
                fecha de vencimiento
              </label>
              <input
                {...register("fecha_vencimiento")}
                autoComplete="off"
                autoFocus
                required
                className="mt-1 p-2 w-full lg:w-[215px] border-b-2 border-white bg-transparent text-white outline-none focus:border-blue-500"
                type="date"
              />
              <label className="block text-sm font-medium text-white mt-8">
                Estado
              </label>
              <select
                {...register("estado")}
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-black/30 text-white"
              >
                <option value="">Seleccione un estado</option>{" "}
                {/* Valor predeterminado opcional */}
                <option value="pendiente">Pendiente</option>
                <option value="pagado">Pagado</option>
                <option value="cancelado">Cancelado</option>
                <option value="activo">Activo</option>
                {/* ... otras opciones ... */}
              </select>
            </div>
            <div className="mt-12 flex flex-col gap-2">
              <label className="block text-sm font-medium text-white">
                Clientes
              </label>
              <select
                {...register("clienteId")}
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-black/30 text-white"
              >
                <option value="">Seleccione un cliente</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name} {client.lastName}
                  </option>
                ))}
              </select>
              <label className="block text-sm font-medium text-white mt-4">
                Total de consultas
              </label>
              <input
                {...register("total")}
                autoComplete="off"
                autoFocus
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-transparent text-white"
                type="text"
              />
              <label  className="block text-sm font-medium text-white mt-8">
                Subtotal
              </label>
              <input
                {...register("subtotal")}
                readOnly
                value={subtotal.toFixed(2)}
                autoComplete="off"
                autoFocus
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-transparent text-white"
                type="text"
              />
              <label className="block text-sm font-medium text-white mt-8">
                Escoje el procedimiento realizado
              </label>
              <select
                {...register("procedimientos")}
                required
                className="mt-1 p-2 w-full lg:w-[215px] border rounded-md bg-black/30 text-white"
              >
                <option value="">procedimientos</option>
                {procedures.map((procedure) => (
                  <option key={procedure.id} value={procedure.id}>
                    {procedure.name} 
                  </option>
                ))}
              </select>
              <button
                type="submit"
                value="enviar"
                className="mt-2 w-[200px] transform transition-all 
              duration-300 hover:-translate-y-1 focus:outline-none 
              bg-gradient-to-r from-blue-500 to-white text-black
               font-bold rounded-md py-2 px-6 shadow-md hover:shadow-lg "
              >
                Registrar
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default FormRegisterBill;
