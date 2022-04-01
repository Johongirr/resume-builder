import React, { useRef } from "react";
import PrintIcon from "@mui/icons-material/Print";
import Button from "@mui/material/Button";
import ReactToPrint from "react-to-print";
import Cv from "../Cv/Cv";

function PrintOutResume({ el: componentRef }) {
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Button variant="contained">
            <PrintIcon sx={{ marginRight: "10px" }} /> PrintOutResume
          </Button>
        )}
        content={() => componentRef.current}
      />
    </>
  );
}

export default PrintOutResume;
