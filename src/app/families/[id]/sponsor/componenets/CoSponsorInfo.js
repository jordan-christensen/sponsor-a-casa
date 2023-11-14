"use client";

import React, { useState } from "react";
import { Textfield } from "@mui/material";

const initialCosponsorData = [
  {
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
  },
];

export default function CoSponsorInfo() {
  const [cosponsorData, setCosponsorData] = useState(initialCosponsorData);
  const [cosponsorCount, setCosponsorCount] = useState();

  return (
    <>
      <h1>Co-Sponsor Information</h1>
      <div>Number of Co-Sponsors</div>
      {/* <TextField type="number" value /> */}
    </>
  );
}
