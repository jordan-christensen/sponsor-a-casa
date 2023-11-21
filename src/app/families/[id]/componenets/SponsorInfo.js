"use client";

import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

const initialSponsorForm = {
  name: "",
  email: "",
  phone: "",
  displayName: "",
  sponsorType: "",
  verified: false,
};

export default function SponsorInfo() {
  const [sponsorForm, setSponsorForm] = useState(initialSponsorForm);

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setSponsorForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlePhoneInput = (value) => {
    console.log(value);
    setSponsorForm((prevState) => {
      return {
        ...prevState,
        phone: value,
      };
    });
  };

  const handleMultiSelect = (event) => {
    console.log(event.target.value);
    setSponsorForm((prevState) => {
      return {
        ...prevState,
        sponsorType: event.target.value,
      };
    });
  };

  return (
    <>
      <h1>Sponsor Information</h1>
      <TextField
        name="name"
        variant="filled"
        label="Full Name"
        value={sponsorForm.name}
        onChange={(e) => handleFormInput(e)}
      />
      <TextField
        name="email"
        variant="filled"
        label="Email"
        value={sponsorForm.email}
        onChange={(e) => handleFormInput(e)}
      />
      <MuiTelInput
        name="phone"
        label="Phone"
        variant="filled"
        defaultCountry="US"
        value={sponsorForm.phone}
        onChange={handlePhoneInput}
      />
      <TextField
        label="Display Name"
        variant="filled"
        name="displayName"
        value={sponsorForm.displayName}
        onChange={(e) => handleFormInput(e)}
      />
      <FormControl>
        <FormLabel>Sponsor Type</FormLabel>
        <RadioGroup
          name="sponsorType"
          value={sponsorForm.sponsorType}
          onChange={(e) => handleMultiSelect(e)}
        >
          <FormControlLabel value="person" control={<Radio />} label="Person" />
          <FormControlLabel
            value="organization"
            control={<Radio />}
            label="Organization"
          />
          <FormControlLabel
            value="company"
            control={<Radio />}
            label="Company"
          />
          <FormControlLabel value="family" control={<Radio />} label="Family" />
          <FormControlLabel value="group" control={<Radio />} label="Group" />
        </RadioGroup>
      </FormControl>
      <h1>🚧 TODO: STILL NEEDS VERIFY IDENTITY***</h1>
    </>
  );
}
