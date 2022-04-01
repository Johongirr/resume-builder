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

function ExtraDetails({
  skillsList,
  interestsList,
  updateSkills,
  updateInterests,
}) {
  const [skills, setSkills] = useState([
    { id: 1, skill: "" },
    { id: 2, skill: "" },
    { id: 3, skill: "" },
    { id: 4, skill: "" },
    { id: 5, skill: "" },
    { id: 6, skill: "" },
  ]);
  const [interests, setInterests] = useState([
    { id: 1, interest: "" },
    { id: 2, interest: "" },
    { id: 3, interest: "" },
    { id: 4, interest: "" },
    { id: 5, interest: "" },
    { id: 6, interest: "" },
  ]);
  const { pageNumber } = useContext(PageNumberContextProvider);

  useEffect(() => {
    if (skillsList.length) {
      setSkills(skillsList);
    }
    if (interestsList.length) {
      setInterests(interestsList);
    }
  }, [skillsList, interestsList]);

  const moveToOtherPage = () => {
    updateInterests(interests);
    updateSkills(skills);
  };
  const handleSkillFieldChange = (id, e) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {
          skill.skill =
            e.target.name === `skill ${skill.id}`
              ? e.target.value
              : skill.skill;
        }
        return skill;
      })
    );
  };
  const handleInterestFieldChange = (id, e) => {
    setInterests(
      interests.map((interest) => {
        if (interest.id === id) {
          interest.interest =
            e.target.name === `interest ${interest.id}`
              ? e.target.value
              : interest.interest;
        }
        return interest;
      })
    );
  };

  return (
    <EducationSection>
      <EducationHeader>
        <Typography
          textAlign="center"
          variant="h5"
          component="h2"
          sx={{ fontSize: "1.9rem" }}
        >
          Extra Details
        </Typography>
      </EducationHeader>
      <EducationBox>
        <Box my={5}>
          <Typography variant="h5" component="h3" sx={{ marginBottom: "30px" }}>
            Skills/Languages
          </Typography>
          <Grid container columnSpacing={5} rowSpacing={3}>
            {skills.map((skill) => (
              <Grid key={skill.id} item xs="12" sm="4">
                <TextField
                  name={`skill ${skill.id}`}
                  label={`skill ${skill.id}`}
                  value={skill.skill}
                  onChange={handleSkillFieldChange.bind(null, skill.id)}
                  fullWidth
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box my={5}>
          <Typography variant="h5" component="h3" sx={{ marginBottom: "30px" }}>
            Interests
          </Typography>
          <Grid container columnSpacing={5} rowSpacing={3}>
            {interests.map((interest) => (
              <Grid key={interest.id} item xs="12" sm="4">
                <TextField
                  name={`interest ${interest.id}`}
                  label={`interest ${interest.id}`}
                  value={interest.interest}
                  onChange={handleInterestFieldChange.bind(null, interest.id)}
                  fullWidth
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <EducationBtnsBox>
          <PreviousBtn
            pageNumber={pageNumber}
            moveToOtherPage={moveToOtherPage}
          />
          <NextBtn pageNumber={pageNumber} />
        </EducationBtnsBox>
      </EducationBox>
    </EducationSection>
  );
}

export default ExtraDetails;
