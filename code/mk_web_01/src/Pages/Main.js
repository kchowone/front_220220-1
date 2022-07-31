// import React, { useEffect, useState } from "react";
import ContainerApp from "../Compponent/ContainerApp";
import MainView  from "./Main/MainView";
import Amazing  from "./Main/Amazing";
import Company  from "./Main/Company";
import Pricing  from "./Main/Pricing";
import Testimonals  from "./Main/Testimonals";
import Lastest  from "./Main/Lastest";
import Eexperience  from "./Main/Eexperience";


function Main() {
  return (
  <div>
    <MainView/>
    <Amazing />
    <Company />

    <ContainerApp>
      <Pricing />
    </ContainerApp>

    <Testimonals />

    <ContainerApp>
      <Lastest />
    </ContainerApp>
    
    <Eexperience />

   
   
  </div>
  )
}

export default Main;
