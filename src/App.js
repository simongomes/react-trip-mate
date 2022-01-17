import React from "react";
import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header";
import List from "./components/List/index";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
