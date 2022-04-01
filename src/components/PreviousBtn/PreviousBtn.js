import React, { useContext } from "react";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import { PageNumberContextProvider } from "../../context/PageNumberContext";

function PreviousBtn({ pageNumber, moveToOtherPage }) {
  const { decrementPageNumber } = useContext(PageNumberContextProvider);

  return (
    <Button
      sx={{
        background: pageNumber === 1 ? "lightgray" : "hsl(335, 100%, 30%)",
        color: "#fff",
        padding: "8px 30px",
        fontSize: "16px",
        "&:hover": {
          background: "hsl(335, 100%, 25%)",
        },
      }}
      disabled={pageNumber === 1}
      onClick={() => {
        if (pageNumber > 1) {
          decrementPageNumber();
          if (typeof moveToOtherPage === "function") {
            console.log("MOVING BACK");
            moveToOtherPage();
          }
        }
      }}
    >
      <ChevronLeftIcon /> Back
    </Button>
  );
}

export default PreviousBtn;
