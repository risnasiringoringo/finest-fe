import { Route, Routes } from "react-router-dom"
import { Profile } from "./seller/Profile"
import { HeaderSeller } from "./components/layout/HeaderSeller"
import { FooterComponent } from "./components/FooterComponent"
import { Finance } from "./seller/Finance"
import { Order } from "./seller/Order"
import { Maintanance } from "./seller/Maintanance"
import { Dashboard } from "./seller/Dashboard"
import { MyProduct } from "./seller/MyProduct"
import { Report } from "./seller/Report"

export const Seller = () => {
  return (
    <>
    <HeaderSeller/>
        <Routes>
        <Route path="profile" element={<Profile/>}/>
        <Route path="finance" element={<Finance/>}/>
        <Route path="order" element={<Order/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="myproduct" element={<MyProduct/>}/>
        <Route path="report" element={<Report/>}/>

        <Route path="/error" element={<Maintanance/>}/>
        </Routes>
    <FooterComponent/>
    </>
  )
}
