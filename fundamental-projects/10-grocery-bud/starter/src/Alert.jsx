import React from "react";

const Alert = ({ alert }) => {
  const { msg, type } = alert;

  return <p className={`alert-${type}`}>{msg}</p>;
};

export default Alert;
