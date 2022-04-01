import React, { useContext } from "react";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { PageNumberContextProvider } from "../../context/PageNumberContext";

function NextBtn({ pageNumber, moveToOtherPage }) {
  const { incrementPageNumber } = useContext(PageNumberContextProvider);
  return (
    <Button
      sx={{
        background: pageNumber === 5 ? "lightgray" : "hsl(335, 100%, 30%)",
        color: "#fff",
        padding: "8px 30px",
        fontSize: "16px",
        "&:hover": {
          background: "hsl(335, 100%, 25%)",
        },
      }}
      disabled={pageNumber === 5}
      onClick={() => {
        if (pageNumber < 5) {
          incrementPageNumber();
          if (typeof moveToOtherPage === "function") {
            console.log("MOVING FORWARD");
            moveToOtherPage();
          }
        }
      }}
    >
      Next
      <ChevronRightIcon />
    </Button>
  );
}

export default NextBtn;
