import React, { useState, useEffect, useContext } from "react";
import { PreviousBtn, NextBtn } from "../index";
import { PageNumberContextProvider } from "../../context/PageNumberContext";
import {
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DateRangeIcon from "@mui/icons-material/DateRange";

const EducationSection = styled("section")({});
const EducationHeader = styled("header")({
  margin: "20px 10px",
  padding: "20px 10px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
});
const EducationBox = styled("div")({
  margin: "60px 40px 0 40px",
});
const EducationBtnsBox = styled("div")({
  maxWidth: "560px",
  width: "90%",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const EducationHrLine = styled("div")({
  border: "1px solid  hsl(0, 0%, 89%)",
  margin: "50px 0",
});
const reverseFlex = {
  flexDirection: "row-reverse",
};

function Education({
  highEduc,
  mediumEduc,
  updateMediumEducation,
  updateHighEducation,
}) {
  const [highEducation, setHighEducation] = useState({});
  const [mediumEducation, setMediumEducation] = useState({});
  const { pageNumber } = useContext(PageNumberContextProvider);

  useEffect(() => {
    setHighEducation(highEduc);
    setMediumEducation(mediumEduc);
  }, [highEduc, mediumEduc]);

  const handleHighEducationFields = (e) => {
    setHighEducation({ ...highEducation, [e.target.name]: e.target.value });
  };
  const handleMediumEducationFields = (e) => {
    setMediumEducation({ ...mediumEducation, [e.target.name]: e.target.value });
  };
  const moveToOtherPage = () => {
    console.log("Moving to other page");
    updateMediumEducation(mediumEducation);
    updateHighEducation(highEducation);
  };
  console.log("Education", highEducation, mediumEducation);
  return (
    <EducationSection>
      <EducationHeader>
        <Typography
          textAlign="center"
          variant="h5"
          component="h2"
          sx={{ fontSize: "1.9rem" }}
        >
          Education Details
        </Typography>
      </EducationHeader>
      <EducationBox>
        <Grid container spacing={10}>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="University/College"
                name="university"
                value={highEducation.university}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={highEducation.city}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="FromYear"
                name="fromYear"
                value={highEducation.fromYear}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="ToYear"
                name="toYear"
                value={highEducation.toYear}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
          </Grid>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={highEducation.subject}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Degree"
                name="degree"
                value={highEducation.degree}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="FromMonth"
                name="fromMonth"
                value={highEducation.fromMonth}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="ToMonth"
                name="toMonth"
                value={highEducation.toMonth}
                onChange={handleHighEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <TextField
            fullWidth
            label="About University/College"
            name="description"
            multiline
            minRows={2}
            maxRows={3}
            value={highEducation.description}
            onChange={handleHighEducationFields}
            required
          />
        </Box>
        <EducationHrLine />
        <Grid container spacing={10}>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="School"
                name="school"
                value={mediumEducation.school}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={mediumEducation.city}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="FromYear"
                name="fromYear"
                value={mediumEducation.fromYear}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="ToYear"
                name="toYear"
                value={mediumEducation.toYear}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
          </Grid>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="FromMonth"
                name="fromMonth"
                value={mediumEducation.fromMonth}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="ToMonth"
                name="toMonth"
                value={mediumEducation.toMonth}
                onChange={handleMediumEducationFields}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="About School"
                name="description"
                multiline
                minRows={4}
                maxRows={6}
                value={mediumEducation.description}
                onChange={handleMediumEducationFields}
                required
              />
            </Box>
          </Grid>
        </Grid>

        <EducationBtnsBox>
          <PreviousBtn
            pageNumber={pageNumber}
            moveToOtherPage={moveToOtherPage}
          />
          <NextBtn pageNumber={pageNumber} moveToOtherPage={moveToOtherPage} />
        </EducationBtnsBox>
      </EducationBox>
    </EducationSection>
  );
}

export default Education;
