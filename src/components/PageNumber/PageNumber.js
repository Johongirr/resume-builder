import React, { useContext } from "react";
import { PageNumberContextProvider } from "../../context/PageNumberContext";
import { styled } from "@mui/system";

const PageNumberBox = styled("div")({
  textAlign: "center",
  fontSize: "30px",
  fontFamily: "Arial, Helvetica, sans-serif",
  marginTop: "70px",
});
function PageNumber() {
  const { pageNumber } = useContext(PageNumberContextProvider);
  console.log();
  return <PageNumberBox>Page {pageNumber}</PageNumberBox>;
}

export default PageNumber;
