import WhiteLabelForm from "@/components/white-labeling/WhiteLabelForm";
import WhiteLabelHero from "@/components/white-labeling/WhiteLabelHero";
import WhiteLabelProcess from "@/components/white-labeling/WhiteLabelProcess";
import WhiteLableBenefits from "@/components/white-labeling/WhiteLableBenefits";
import React from "react";

function WhiteLabeling() {
  return (
    <div>
      <WhiteLabelHero />
      <WhiteLableBenefits />
      <WhiteLabelProcess />
      <WhiteLabelForm />
    </div>
  );
}

export default WhiteLabeling;
