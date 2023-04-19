import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentList from "../components/AppointmentList";
import MechList from "../components/MechList";
import { mechanicData } from "../helper/data";

const Home = () => {
  const [mechs, setMechs] = useState(mechanicData);

  const BASE_URL =
    "https://643fbe75b9e6d064befd4cf6.mockapi.io/api/appointments";

  const [appointments, setAppointments] = useState("");

  const getAppointments = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(appointments);

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <main className="text-center mt-2">
      <img
        style={{ marginBottom: "2rem" }}
        src="./img/auto-momo-logo.jpg"
        alt="AUTO-MOMO-LOGO"
      />
      <MechList mechs={mechs} />
      <AppointmentList mechs={mechs} appointments={appointments} />
    </main>
  );
};

export default Home;
