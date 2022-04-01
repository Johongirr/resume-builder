import React, { useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FeedIcon from "@mui/icons-material/Feed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const CvBox = styled("div")({
  maxWidth: "1200px",
  width: "90%",
  margin: "50px auto",
});
const CvSideBox = styled("aside")({
  background: "hsl(0, 0%, 92%)",
  padding: "30px",
});
const CvMain = styled("div")({
  padding: "40px 20px",
});
const CvImgBox = styled("figure")({});

const CvImg = styled("img")({
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  objectFit: "cover",
});
const CvDescription = styled("p")({});

const CvLink = styled("a")({
  display: "flex",
  textDecoration: "none",
});

const Cv = ({
  personalInfo,
  highEducation,
  mediumEducation,
  experiences,
  projects,
  skills,
  interests,
  getRef,
}) => {
  const componentRef = useRef();
  getRef(componentRef);
  return (
    <CvBox ref={componentRef}>
      <Grid container spacing={10}>
        <Grid item xs="4">
          <CvSideBox>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box>
                <CvImgBox>
                  <CvImg src={personalInfo.image} alt="Profile Photo" />
                </CvImgBox>
                <Box mt={3} mb={5}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {personalInfo.firstName} {personalInfo.lastName}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#333" }}>
                    {personalInfo.profession}
                  </Typography>
                </Box>
                <Box mb={2}>
                  {personalInfo.phoneNumber && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CallIcon sx={{ marginRight: "10px" }} />{" "}
                      {personalInfo.phoneNumber}
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.address && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon sx={{ marginRight: "10px" }} />{" "}
                      {personalInfo.address}
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.email && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={`mailto:${personalInfo.email}`}>
                        <EmailIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.email}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.website && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.website} target="_blank">
                        <LanguageIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.website}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.linkedin && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.linkedin}>
                        <LinkedInIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.linkedin}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.facebook && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.facebook}>
                        <FacebookIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.facebook}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.github && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.github}>
                        <GitHubIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.github}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.twitter && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.twitter}>
                        <TwitterIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.twitter}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                <Box mb={2}>
                  {personalInfo.instagram && (
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <CvLink href={personalInfo.instagram}>
                        <InstagramIcon sx={{ marginRight: "10px" }} />{" "}
                        {personalInfo.instagram}
                      </CvLink>
                    </Typography>
                  )}
                </Box>
                {personalInfo?.description && (
                  <Box mt={5}>
                    <Typography variant="h5" gutterBottom>
                      Description
                    </Typography>
                    <CvDescription>{personalInfo.description}</CvDescription>
                  </Box>
                )}
                {skills?.length ? (
                  <Box mt={5}>
                    <Typography variant="h5" gutterBottom>
                      Skills
                    </Typography>
                    <Box display="flex" alignItems="center" flexWrap="wrap">
                      {skills.map((skill) => (
                        <Typography
                          variant="h6"
                          key={skill.id}
                          sx={{
                            color: "#444",
                            fontSize: "15px",
                            marginRight: "10px",
                          }}
                        >
                          {skill.skill},
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ) : null}
                {interests?.length ? (
                  <Box mt={5}>
                    <Typography variant="h5" gutterBottom>
                      Interests
                    </Typography>
                    <Box display="flex" alignItems="center" flexWrap="wrap">
                      {interests.map((interest) => (
                        <Typography
                          variant="h6"
                          key={interest.id}
                          sx={{
                            color: "#444",
                            fontSize: "15px",
                            marginRight: "10px",
                          }}
                        >
                          {interest.interest},
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Box>
          </CvSideBox>
        </Grid>
        <Grid item xs="8">
          <CvMain>
            {experiences?.length ? (
              <Box mb={7}>
                <Typography variant="h4">Work Experience</Typography>
                {experiences.map((experience) => (
                  <Box key={experience.id} mt={3} mb={3}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        {experience.position} at {experience.company} in{" "}
                        {experience.city}
                      </Typography>
                      <Typography variant="h5" sx={{ fontSize: "16px" }}>
                        {experience.fromMonth} {experience.fromYear} -{" "}
                        {experience.toMonth} {experience.toYear}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ marginTop: "15px", color: "#222" }}
                    >
                      {experience.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : null}
            <Box mb={7}>
              <Typography variant="h4">Completed Projects</Typography>
              {projects.map((project) => (
                <Box key={project.id} mt={3}>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography gutterBottom>
                    {project.link && (
                      <CvLink href={project.link} target="_blank">
                        <InsertLinkIcon sx={{ marginRight: "10px" }} />
                        {project.link}
                      </CvLink>
                    )}
                  </Typography>
                  <Typography sx={{ marginTop: "10px" }}>
                    {project.description}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box>
              <Typography variant="h4">Education History</Typography>
              {highEducation && (
                <Box>
                  <Box
                    mt={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">
                      {highEducation.university} in {highEducation.city}
                    </Typography>
                    <Typography variant="h5" sx={{ fontSize: "16px" }}>
                      {highEducation.fromMonth} {highEducation.fromYear} -{" "}
                      {highEducation.toMonth} {highEducation.toYear}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "15px", color: "#222" }}
                  >
                    {highEducation.subject} {highEducation.degree}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "15px", color: "#222" }}
                  >
                    {highEducation.description}
                  </Typography>
                </Box>
              )}
              {mediumEducation && (
                <Box>
                  <Box
                    mt={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">
                      {mediumEducation.school} in {mediumEducation.city}
                    </Typography>
                    <Typography variant="h5" sx={{ fontSize: "16px" }}>
                      {mediumEducation.fromMonth} {mediumEducation.fromYear} -{" "}
                      {mediumEducation.toMonth} {mediumEducation.toYear}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ marginTop: "15px", color: "#222" }}
                  >
                    {mediumEducation.description}
                  </Typography>
                </Box>
              )}
            </Box>
          </CvMain>
        </Grid>
      </Grid>
    </CvBox>
  );
};

export default Cv;
