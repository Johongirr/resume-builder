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
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FeedIcon from "@mui/icons-material/Feed";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { styled } from "@mui/system";

const PersonalInfoSection = styled("section")({});
const PersonalInfoHeader = styled("header")({
  margin: "20px 10px",
  padding: "20px 10px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
});
const PersonalInfoBox = styled("div")({
  margin: "60px 40px 0 40px",
});
const PersonalInfoBtnsBox = styled("div")({
  maxWidth: "560px",
  width: "90%",
  margin: "50px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const reverseFlex = {
  flexDirection: "row-reverse",
};

function PersonalInfo({ updatePersonalInfo, privateInfo }) {
  const { pageNumber } = useContext(PageNumberContextProvider);
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    setPersonalInfo(privateInfo);
  }, [privateInfo]);

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };
  const moveToOtherPage = () => {
    updatePersonalInfo(personalInfo);
  };
  const getPhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPersonalInfo({ ...personalInfo, image: reader.result });
    };
  };

  console.log("PersonalInfo", personalInfo);
  return (
    <PersonalInfoSection>
      <PersonalInfoHeader>
        <Typography
          textAlign="center"
          variant="h5"
          component="h2"
          sx={{ fontSize: "1.9rem" }}
        >
          Personal Details
        </Typography>
      </PersonalInfoHeader>
      <PersonalInfoBox>
        <Grid container spacing={10}>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                onChange={handleChange}
                value={personalInfo.firstName}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                onChange={handleChange}
                value={personalInfo.email}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Your Website"
                name="website"
                onChange={handleChange}
                value={personalInfo.website}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="LinkedIn"
                name="linkedin"
                onChange={handleChange}
                value={personalInfo.linkedin}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                onChange={handleChange}
                value={personalInfo.facebook}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                type="file"
                name="image"
                onChange={getPhoto}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CameraAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs="12" sm="6">
            <Box mb={3}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                value={personalInfo.lastName}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  ),
                }}
                required
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                value={personalInfo.phoneNumber}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Github"
                name="github"
                onChange={handleChange}
                value={personalInfo.github}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                onChange={handleChange}
                value={personalInfo.twitter}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TwitterIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                onChange={handleChange}
                value={personalInfo.instagram}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstagramIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                value={personalInfo.address}
                sx={{
                  ".MuiOutlinedInput-root": {
                    ...reverseFlex,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Profession"
            name="profession"
            onChange={handleChange}
            value={personalInfo.profession}
            sx={{
              ".MuiOutlinedInput-root": {
                ...reverseFlex,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            label="About Me"
            name="description"
            multiline
            minRows={5}
            maxRows={6}
            onChange={handleChange}
            value={personalInfo.description}
            required
          />
        </Box>
        <PersonalInfoBtnsBox>
          <PreviousBtn pageNumber={pageNumber} />
          <NextBtn pageNumber={pageNumber} moveToOtherPage={moveToOtherPage} />
        </PersonalInfoBtnsBox>
      </PersonalInfoBox>
    </PersonalInfoSection>
  );
}

export default PersonalInfo;
