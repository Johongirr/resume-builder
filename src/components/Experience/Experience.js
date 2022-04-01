import React, { useState, useEffect, useContext } from "react";
import { PreviousBtn, NextBtn } from "../index";
import { PageNumberContextProvider } from "../../context/PageNumberContext";
import {
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventSeatIcon from "@mui/icons-material/EventSeat";

const ExperienceSection = styled("section")({});
const ExperienceHeader = styled("header")({
  margin: "20px 10px",
  padding: "20px 10px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
});
const ExperienceBox = styled("div")({
  margin: "60px 40px 0 40px",
});
const ExperienceBtnsBox = styled("div")({
  maxWidth: "560px",
  width: "90%",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const ExperienceHrLine = styled("div")({
  border: "1px solid  hsl(0, 0%, 89%)",
  margin: "50px 0",
});
const reverseFlex = {
  flexDirection: "row-reverse",
};

function Experience({ updateExperience, experienceList }) {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "",
      position: "",
      city: "",
      fromYear: "",
      toYear: "",
      fromMonth: "",
      toMonth: "",
      description: "",
    },
    {
      id: 2,
      company: "",
      position: "",
      city: "",
      fromYear: "",
      toYear: "",
      fromMonth: "",
      toMonth: "",
      description: "",
    },
  ]);

  const { pageNumber } = useContext(PageNumberContextProvider);

  useEffect(() => {
    if (experienceList.length) {
      setExperiences(experienceList);
    }
  }, [experienceList]);

  const moveToOtherPage = () => {
    updateExperience(experiences);
  };
  const handleChange = (id, e) => {
    console.log(id, e.target.name);
    setExperiences(
      experiences.map((experience) => {
        if (experience.id === id) {
          experience.company =
            e.target.name === "company" ? e.target.value : experience.company;
          experience.position =
            e.target.name === "position" ? e.target.value : experience.position;
          experience.fromYear =
            e.target.name === "fromYear" ? e.target.value : experience.fromYear;
          experience.toYear =
            e.target.name === "toYear" ? e.target.value : experience.toYear;
          experience.city =
            e.target.name === "city" ? e.target.value : experience.city;
          experience.fromMonth =
            e.target.name === "fromMonth"
              ? e.target.value
              : experience.fromMonth;
          experience.toMonth =
            e.target.name === "toMonth" ? e.target.value : experience.toMonth;
          experience.description =
            e.target.name === "description"
              ? e.target.value
              : experience.description;
          return experience;
        }
        return experience;
      })
    );
  };

  return (
    <ExperienceSection>
      <ExperienceHeader>
        <Typography
          textAlign="center"
          variant="h5"
          component="h2"
          sx={{ fontSize: "1.9rem" }}
        >
          Experience Details
        </Typography>
      </ExperienceHeader>
      <ExperienceBox>
        {experiences.map((experience) => (
          <Box key={experience.id} my={5}>
            <Box mb={5}>
              <Typography variant="h6" component="h3">
                Experience {experience.id}
              </Typography>
            </Box>
            <Grid container spacing={10}>
              <Grid item xs="12" sm="6">
                <Box mb={3}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={experience.company}
                    onChange={handleChange.bind(null, experience.id)}
                    sx={{
                      ".MuiOutlinedInput-root": {
                        ...reverseFlex,
                      },
                    }}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CorporateFareIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box mb={3}>
                  <TextField
                    fullWidth
                    label="FromYear"
                    name="fromYear"
                    value={experience.fromYear}
                    onChange={handleChange.bind(null, experience.id)}
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
                    value={experience.toYear}
                    onChange={handleChange.bind(null, experience.id)}
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
                    label="Position"
                    name="position"
                    value={experience.position}
                    onChange={handleChange.bind(null, experience.id)}
                    sx={{
                      ".MuiOutlinedInput-root": {
                        ...reverseFlex,
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventSeatIcon />
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
                    value={experience.fromMonth}
                    onChange={handleChange.bind(null, experience.id)}
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
                    value={experience.toMonth}
                    onChange={handleChange.bind(null, experience.id)}
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
            <Box mb={3}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={experience.city}
                onChange={handleChange.bind(null, experience.id)}
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
            <Box>
              <TextField
                fullWidth
                label="About Company"
                name="description"
                multiline
                minRows={2}
                maxRows={3}
                value={experience.description}
                onChange={handleChange.bind(null, experience.id)}
                required
              />
            </Box>
          </Box>
        ))}
        <ExperienceBtnsBox>
          <PreviousBtn
            pageNumber={pageNumber}
            moveToOtherPage={moveToOtherPage}
          />
          <NextBtn pageNumber={pageNumber} moveToOtherPage={moveToOtherPage} />
        </ExperienceBtnsBox>
      </ExperienceBox>
    </ExperienceSection>
  );
}

export default Experience;
