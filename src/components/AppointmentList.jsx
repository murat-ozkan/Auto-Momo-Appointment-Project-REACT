import React from "react";

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <h3>{appointment.customer}</h3>
          <p>{appointment.date}</p>
          <p>{appointment.mechanic}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
