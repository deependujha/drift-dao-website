import React from "react";
import swal from "sweetalert";

const Alert = () => {
  return swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
};

export default Alert;
