import { FreelancerRegistrationStepper } from "@/shared/components/FreelancerRegistrationStepper";

import { OnboardingSuccess } from "./OnboardingSuccess";
import { ContactInformationForm } from "./ContactInformationForm";
import { PersonalInformationForm } from "./PersonalInformationForm";
import { ExperienceInformationForm } from "./ExperienceInformationForm";
import { ProfessionalInformationForm } from "./ProfessionalInformationForm";

const components = [
  PersonalInformationForm,
  ProfessionalInformationForm,
  ExperienceInformationForm,
  ContactInformationForm,
  OnboardingSuccess,
];

export function FreelancerForm() {
  return <FreelancerRegistrationStepper components={components} />;
}
