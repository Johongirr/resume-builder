import React, { useState, useEffect, useContext } from "react";
import { PageNumberContextProvider } from "./context/PageNumberContext";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import {
  Header,
  DownloadResume,
  PrintOutResume,
  PersonalInfo,
  Education,
  Projects,
  Experience,
  ExtraDetails,
  PageNumber,
  Cv,
} from "./components/index";

const Wrapper = styled("main")({
  maxWidth: "1200px",
  width: "90%",
  margin: "50px auto",
  paddingBottom: "50px",
  boxShadow: "0 5px 10px rgba(0, 0, 0, .1)",
});

function App() {
  const { pageNumber } = useContext(PageNumberContextProvider);
  const [personalInfo, setPersonalInfo] = useState({});
  const [highEducation, setHighEducation] = useState({});
  const [mediumEducation, setMediumEducation] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [ref, setRef] = useState(null);

  const updatePersonalInfo = (privateInfo) =>
    setPersonalInfo({ ...personalInfo, ...privateInfo });
  const updateHighEducation = (educ) => setHighEducation(educ);
  const updateMediumEducation = (educ) => setMediumEducation(educ);
  const updateProjects = (proj) => setProjects(proj);
  const updateExperience = (exp) => setExperiences(exp);
  const updateSkills = (skl) => setSkills(skl);
  const updateInterests = (intr) => setInterests(intr);

  const getRef = (ref) => setRef(ref);
  console.log("App", ref);
  return (
    <div>
      <Header />
      <Wrapper>
        {pageNumber === 1 ? (
          <PersonalInfo
            privateInfo={personalInfo}
            updatePersonalInfo={updatePersonalInfo}
          />
        ) : pageNumber === 2 ? (
          <Education
            highEduc={highEducation}
            mediumEduc={mediumEducation}
            updateHighEducation={updateHighEducation}
            updateMediumEducation={updateMediumEducation}
          />
        ) : pageNumber === 3 ? (
          <Projects projectsList={projects} updateProjects={updateProjects} />
        ) : pageNumber === 4 ? (
          <Experience
            experienceList={experiences}
            updateExperience={updateExperience}
          />
        ) : (
          <ExtraDetails
            skillsList={skills}
            interestsList={interests}
            updateSkills={updateSkills}
            updateInterests={updateInterests}
          />
        )}
        <PageNumber />
        {pageNumber === 5 ? (
          <>
            <Box
              sx={{
                maxWidth: "460px",
                width: "90%",
                margin: "50px auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <DownloadResume el={ref} />
              <PrintOutResume el={ref} />
            </Box>
          </>
        ) : null}
      </Wrapper>
      <Cv
        personalInfo={personalInfo}
        highEducation={highEducation}
        mediumEducation={mediumEducation}
        experiences={experiences}
        projects={projects}
        skills={skills}
        interests={interests}
        reference={ref}
        getRef={getRef}
      />
    </div>
  );
}

export default App;
