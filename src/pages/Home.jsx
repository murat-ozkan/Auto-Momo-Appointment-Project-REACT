import React, { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import MechList from "../components/MechList";
import { mechanicData } from "../helper/data";

const Home = () => {
  const [mechs, setMechs] = useState(mechanicData);
  return (
    <main className="text-center mt-2">
      <img
        style={{ marginBottom: "2rem" }}
        src="./img/auto-momo-logo.jpg"
        alt="AUTO-MOMO-LOGO"
      />
      <MechList mechs={mechs} />
      <AppointmentList mechs={mechs} />
    </main>
  );
};

export default Home;
