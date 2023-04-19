import React from "react";

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      {appointments?.map((appointment) => {
        const { id, customer, date, checked, mechanic } = appointment;
        return (
          <div key={id}>
            <p>Customer: {customer}</p>
            <p>Date: {date}</p>
            <p>Checked: {checked}</p>
            <p>Mechanic: {mechanic}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentList;
