import { FreelancerRegistrationStepper } from '@/shared/components/FreelancerRegistrationStepper';

import { PersonalInformationForm } from './PersonalInformationForm';
import { ProfessionalInformationForm } from './ProfessionalInformationForm';
import { ExperienceInformationForm } from './ExperienceInformationForm';
import { ContactInformationForm } from './ContactInformationForm';
import { OnboardingSuccess } from './OnboardingSuccess';

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
