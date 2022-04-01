import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import ReactToPdf from "react-to-pdf";

function DownloadResume({ el }) {
  return (
    <ReactToPdf targetRef={el} filename="resume.pdf">
      {({ toPdf }) => (
        <Button variant="contained" onClick={toPdf}>
          <FileDownloadIcon sx={{ marginRight: "10px" }} /> DownloadResume
        </Button>
      )}
    </ReactToPdf>
  );
}

export default DownloadResume;
