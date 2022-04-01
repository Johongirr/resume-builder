import React, { useState, useEffect, useContext } from "react";
import { PreviousBtn, NextBtn } from "../index";
import { PageNumberContextProvider } from "../../context/PageNumberContext";
import {
  TextField,
  Box,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import TitleIcon from "@mui/icons-material/Title";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FeedIcon from "@mui/icons-material/Feed";

const ProjectSection = styled("section")({});
const ProjectHeader = styled("header")({
  margin: "20px 10px",
  padding: "20px 10px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
});
const ProjectBox = styled("div")({
  margin: "60px 40px 0 40px",
});
const ProjectBtnsBox = styled("div")({
  maxWidth: "560px",
  width: "90%",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const ProjectHrLine = styled("div")({
  border: "1px solid  hsl(0, 0%, 89%)",
  margin: "50px 0",
});
const reverseFlex = {
  flexDirection: "row-reverse",
};

function Projects({ updateProjects, projectsList }) {
  const { pageNumber } = useContext(PageNumberContextProvider);
  const [projects, setProjects] = useState([
    { id: 1, title: "", link: "", description: "" },
    { id: 2, title: "", link: "", description: "" },
    { id: 3, title: "", link: "", description: "" },
  ]);

  useEffect(() => {
    if (projectsList.length) {
      setProjects(projectsList);
    }
  }, [projectsList]);

  const moveToOtherPage = () => {
    updateProjects(projects);
  };
  const handleChange = (id, e) => {
    console.log(e.target.name);
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          project.title =
            e.target.name === "title" ? e.target.value : project.title;
          project.link =
            e.target.name === "link" ? e.target.value : project.link;
          project.description =
            e.target.name === "description"
              ? e.target.value
              : project.description;
          return project;
        }
        return project;
      })
    );
  };

  return (
    <ProjectSection>
      <ProjectHeader>
        <Typography
          textAlign="center"
          variant="h5"
          component="h2"
          sx={{ fontSize: "1.9rem" }}
        >
          Projects List
        </Typography>
      </ProjectHeader>
      <ProjectBox>
        {projects.map((project) => (
          <Box key={project.id}>
            <Box my={5}>
              <Typography variant="h5" component="h3" textAlign="center">
                Project {project.id}
              </Typography>
              <Box mb={3} mt={5}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={project.title}
                  onChange={handleChange.bind(null, project.id)}
                  sx={{
                    ".MuiOutlinedInput-root": {
                      ...reverseFlex,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Link"
                  name="link"
                  value={project.link}
                  onChange={handleChange.bind(null, project.id)}
                  sx={{
                    ".MuiOutlinedInput-root": {
                      ...reverseFlex,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InsertLinkIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={project.description}
                  onChange={handleChange.bind(null, project.id)}
                  sx={{
                    ".MuiOutlinedInput-root": {
                      ...reverseFlex,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FeedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              </Box>
            </Box>
            <ProjectHrLine />
          </Box>
        ))}
        <ProjectBtnsBox>
          <PreviousBtn
            pageNumber={pageNumber}
            moveToOtherPage={moveToOtherPage}
          />
          <NextBtn pageNumber={pageNumber} moveToOtherPage={moveToOtherPage} />
        </ProjectBtnsBox>
      </ProjectBox>
    </ProjectSection>
  );
}

export default Projects;
