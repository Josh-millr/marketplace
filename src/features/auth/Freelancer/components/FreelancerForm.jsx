import { PersonalInformationForm } from "./PersonalInformationForm";
import { ProfessionalInformationForm } from "./ProfessionalInformationForm";
import { ExperienceInformationForm } from "./ExperienceInformationForm";
import { ContactInformationForm } from "./ContactInformationForm";
import { OnboardingSuccess } from "./OnboardingSuccess";
import { FreelancerRegistrationStepper } from "@components/FreelancerRegistrationStepper";

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
