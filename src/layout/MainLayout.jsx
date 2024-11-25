import React from "react";
import { Outlet } from "react-router-dom";
import Navlandingpage from "../components/Navlandingpage/Navlandingpage";

const Mainlayout = () => {
    return(
        <>
          <Outlet/>
        </>
    )
}

export default Mainlayout