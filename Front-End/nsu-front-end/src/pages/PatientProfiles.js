import React from "react";
import { Box, Grid } from "@mui/material";
import PatientDetailsCard from "../Componets/patientProfile/PatientDetailsCard";

const PatientProfiles = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <div style={{ backgroundColor: "red" }}>
          <>
            Patient Profiles
            <PatientDetailsCard
              patientAvatar=""
              name="sheron"
              patientId="19992123"
            />
            <PatientDetailsCard
              patientAvatar=""
              name="sheron"
              patientId="19992123"
            />
            <PatientDetailsCard
              patientAvatar=""
              name="sheron"
              patientId="19992123"
            />
          </>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div style={{ backgroundColor: "red" }}>right panel</div>
      </Grid>
    </Grid>
  );
};

export default PatientProfiles;
