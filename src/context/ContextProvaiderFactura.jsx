import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { guardarFactura,obtenerFacturas } from "../api/apiFacturacion";
import { handleErrors } from "../components/HandleErorrsToast";
export const BillContext = createContext();

export const BillingProvider = (props) => {
    const [facturas, setFacturas] = useState([]);   
    const navigate = useNavigate();

  const createBill = async (data) => {
    try {
        const emissionDate = new Date(data.fecha_emision);
        const expirationDate = new Date(data.fecha_vencimiento);
        const isoExpirationDate = expirationDate.toISOString();
        const isoEmissionDate = emissionDate.toISOString();
        const dataWithFormattedProcedures = {
            ...data, // Mantiene todos los demás campos
            fecha_emision: isoEmissionDate,
            fecha_vencimiento: isoExpirationDate,
            procedimientos: [
              { procedimientoId: parseInt(data.procedimientos, 10) }
            ]
          };
        const response = await guardarFactura(dataWithFormattedProcedures);
        setFacturas(prevFacturas => [...prevFacturas, response.data]);
        toast.success("Factura creada con exito");
        navigate("/");
      
    } catch (error) {
        console.log(error);
      //handleErrors(error);
    }
  };

  const listFacturas = async () => {
    try {
      const response = await obtenerFacturas();
      setFacturas(response.data);
      toast.success("Facturas cargadas con exito");
    } catch (error) {
        console.log(error);
      //handleErrors(error);
    }
  }

    useEffect(() => {
        listFacturas();
    }, []);
  


  return (
    <BillContext.Provider
      value={{
        createBill,
        facturas,
      }}
    >
      {props.children}
    </BillContext.Provider>
  );

};
