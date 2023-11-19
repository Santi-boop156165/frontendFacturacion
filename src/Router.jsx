import { Navigate, Route, Routes } from "react-router-dom";
import EntryPoinyPage from "./pages/EntryPoinyPage";
import FormRegisterBill from "./pages/FormRegisterBill";
import GridListBill from "./pages/GridListBill";
const Router = () => {
  return (

         <Routes>
             <Route path="/" element={<EntryPoinyPage />} />
             <Route path="*" element={<Navigate to="/" />} />
             <Route path="factura/registro" element={<FormRegisterBill/>} />
             <Route path="procesar_facturas" element={<GridListBill/>} />
         </Routes>
  )
}

export default Router