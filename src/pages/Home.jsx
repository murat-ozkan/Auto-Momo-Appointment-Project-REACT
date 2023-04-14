import React, { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import MechList from "../components/MechList";
import { mechanicData } from "../helper/data";

const Home = () => {
  const [mechs, setMechs] = useState(mechanicData);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">AUTO MOMO</h1>
      <MechList mechs={mechs} />
      <AppointmentList mechs={mechs} />
    </main>
  );
};

export default Home;
