import withStepper from '@/shared/hocs/withStepper';
import FormDataProvider from '@/shared/providers/FormDataProvider';

import { FullForm } from './FullForm';
import { EmailForm } from './EmailForm';
import { VerifyAccount } from './VerifyAccount';
import { VerifySuccess } from './VerifySuccess';

export function RegisterForm() {
  const steps = [EmailForm, FullForm, VerifyAccount, VerifySuccess];
  const FormSteps = withStepper(steps);

  return (
    <FormDataProvider>
      <FormSteps />
    </FormDataProvider>
  );
}
