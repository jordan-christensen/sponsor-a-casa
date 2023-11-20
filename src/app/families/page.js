"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "@mui/material";
// Components
import { FamilyCard, FamilyDetails } from "@/components";
// Hooks & Utils
import { getFamilies } from "@/lib/families";
// Styles & Assets
import styles from "./page.module.css";

export default function Page({}) {
  const router = useRouter();
  const families = getFamilies();
  let searchParams = useSearchParams();
  let showModal = searchParams.get("showModal");
  let familyId = searchParams.get("familyId");

  let selectedFamily = families.find(
    (family) => family.candidate_ID === familyId
  );

  const handleNavigatePrevious = () => {
    const currentFamilyIndex = families.findIndex(
      (family) => family.candidate_ID == familyId
    );
    const previousFamily = families[currentFamilyIndex - 1];

    if (currentFamilyIndex > 0) {
      router.push(
        `/families/?showModal=true&familyId=${previousFamily.candidate_ID}`
      );
    } else {
      router.push(
        `/families/?showModal=true&familyId=${families.at(-1).candidate_ID}`
      );
    }
  };

  const handleNavigateNext = () => {
    const currentFamilyIndex = families.findIndex(
      (family) => family.candidate_ID == familyId
    );
    const nextFamily = families[currentFamilyIndex + 1];

    if (currentFamilyIndex < families.length - 1) {
      router.push(
        `/families/?showModal=true&familyId=${nextFamily.candidate_ID}`
      );
    } else {
      router.push(
        `/families/?showModal=true&familyId=${families[0].candidate_ID}`
      );
    }
  };

  const handleSponsorFamily = () => {
    router.push(`/families/sponsor?familyId=${familyId}`)
  }

  return (
    <>
      <section className={styles.description}>
        <h1 className={styles.heading}> Families in Need of a Proper Home</h1>
        <p>
          The families below are in need of a safe, dry, and functional home.
        </p>
        <p>Browse through them and find one that you would like to help.</p>
      </section>
      <section className={styles.families}>
        <div className={styles.familiesContainer}>
          {families.map((family) => (
            <FamilyCard key={family.candidate_ID} family={family} />
          ))}
        </div>
      </section>
      {showModal && (
        <Dialog
          maxWidth="100%"
          open={true}
          onClose={() => router.push("/families")}
        >
          <FamilyDetails
            family={selectedFamily}
            handleNavigatePrevious={handleNavigatePrevious}
            handleNavigateNext={handleNavigateNext}
            handleSponsorFamily={handleSponsorFamily}
          />
        </Dialog>
      )}
    </>
  );
}
