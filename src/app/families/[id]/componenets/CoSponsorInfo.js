"use client";

import React, { useState } from "react";
// Styles & Assets
import styles from "./SponsorForm.module.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const initialCosponsorData = [
  {
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
  },
];

export default function CoSponsorInfo() {
  const [cosponsorData, setCosponsorData] = useState(initialCosponsorData);
  const [cosponsorContactPrefs, setCosponsorContactPrefs] = useState("");

  const handleChangeCoSponsorCount = (e) => {
    let newLength = parseInt(event.target.value, 10);

    if (newLength > 50) {
      newLength = 50;
    } else if (newLength < 1) {
      newLength = 1;
    }

    const currentLength = cosponsorData.length;
    const difference = newLength - currentLength;

    if (difference > 0) {
      const newItems = Array.from({ length: difference }, (_, index) => ({
        id: currentLength + index + 1,
        firstName: "",
        lastName: "",
        email: "",
        cell: "",
      }));
      const updatedCosponsorData = [...cosponsorData, ...newItems];
      setCosponsorData(updatedCosponsorData);
    } else if (difference < 0) {
      const updatedCosponsorData = cosponsorData.slice(0, newLength);
      setCosponsorData(updatedCosponsorData);
    }
  };

  const handleCoSponsorDataChange = (e, index) => {
    const { name, value } = e.target;

    const updatedCosponsorData = [...cosponsorData];
    updatedCosponsorData[index] = {
      ...updatedCosponsorData[index],
      [name]: value,
    };

    setCosponsorData(updatedCosponsorData);
  };

  return (
    <>
      <h1>Co-Sponsor Information</h1>
      <div className={styles.numInput}>
        <label>Number of Co-Sponsors</label>
        <input
          className={styles.numberInputValue}
          type="number"
          value={cosponsorData.length}
          min={1}
          max={50}
          onChange={handleChangeCoSponsorCount}
        />
      </div>
      <FormControl>
        <RadioGroup
          name="contactPref"
          value={cosponsorContactPrefs}
          onChange={(e) => setCosponsorContactPrefs(e.target.value)}
        >
          <FormControlLabel
            value={"email"}
            control={<Radio />}
            label="Contact co-sponsors via email"
          />
          <FormControlLabel
            value={"text"}
            control={<Radio />}
            label="Contact co-sponsors via text"
          />
          <FormControlLabel
            value={"none"}
            control={<Radio />}
            label="Do not contact co-sponsor(s)"
          />
        </RadioGroup>
      </FormControl>
      {cosponsorData.map((cosponsor, index) => (
        <div className={styles.cosponsorRow} key={index}>
          <div className={styles.sponsorNumber}>{cosponsor.id}</div>
          <TextField
            name="firstName"
            variant="filled"
            label="First Name"
            value={cosponsor.firstName}
            onChange={(e) => handleCoSponsorDataChange(e, index)}
          />
          <TextField
            name="lastName"
            variant="filled"
            label="Last Name"
            value={cosponsor.lastName}
            onChange={(e) => handleCoSponsorDataChange(e, index)}
          />
          <TextField
            name="email"
            variant="filled"
            label="Email"
            value={cosponsor.email}
            onChange={(e) => handleCoSponsorDataChange(e, index)}
          />
          <TextField
            name="cell"
            variant="filled"
            label="Cell (optional)"
            value={cosponsor.cell}
            onChange={(e) => handleCoSponsorDataChange(e, index)}
          />
        </div>
      ))}
    </>
  );
}
