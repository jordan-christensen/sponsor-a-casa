"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CurrencyInput from "react-currency-input-field";
import styles from "./SponsorForm.module.css";

const minimumAmountDue = "10000.00";

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [rawDonationAmount, setRawDonationAmount] = useState("");
  const [className, setClassName] = useState("");

  const validateValue = (value) => {
    const rawValue = value === undefined ? "undefined" : value;
    setRawDonationAmount(rawValue || " ");

    if (!value) {
      setClassName("");
    } else if (Number.isNaN(Number(value))) {
      setErrorMessage("Please enter a valid number");
      setClassName("is-invalid");
    } else {
      setClassName("is-valid");
    }
  };

  return (
    <>
      <h1>Pay Deposit</h1>
      <div>
        <span>Minimum amount due: </span>
        <span>{`$${minimumAmountDue}`}</span>
      </div>

      <CurrencyInput
        id="paymentAmount"
        placeholder={"$0.00"}
        allowDecimals={true}
        decimalsLimit={2}
        prefix={"$"}
        onValueChange={validateValue}
        step={100}
      />
      <div>Note: This donation is not refun </div>
      <FormControl>
        <FormLabel>Payment Method</FormLabel>
        <RadioGroup
          name="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <FormControlLabel
            value="credit"
            control={<Radio />}
            label="Pay with credit card (3.5% fee)"
          />
          <FormControlLabel
            value="paypal"
            control={<Radio />}
            label="PayPal (2.5% fee)"
          />
          <FormControlLabel
            value="venmo"
            control={<Radio />}
            label="Pay with Venmo (no fee)"
          />
        </RadioGroup>
      </FormControl>
      <section className={styles.paymentButtonRow}>
        <Button sx={{ fontWeight: 600 }} variant="outlined">
          Back
        </Button>
        <Button
          sx={{ fontWeight: 600 }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button sx={{ fontWeight: 600 }} variant="contained">
          Make Payment
        </Button>
      </section>
    </>
  );
}
