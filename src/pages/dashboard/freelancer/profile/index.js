import { useState } from 'react';
import { Accordion, Group, Stack } from '@mantine/core';
import { useStyles } from '../style.profile';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { PageContainer } from '@/shared/components/PageContainer';
import { PersonalInformationProfileFoem } from '@/shared/components/PageSections/Profile/PersonalInformationProfileForm';
import { ProfessionallInformationProfileFoem } from '@/shared/components/PageSections/Profile/ProfessionalInfrmationProfileForm';
import { ExperienceInformationProfileForm } from '@/shared/components/PageSections/Profile/ExperienceInformationProfileForm';
import { ContactInformationProfileForm } from '@/shared/components/PageSections/Profile/ContactInformationProfileForm';
import { PasswordChangeForm } from '@/shared/components/PageSections/Profile/PasswordChangeForm';
import { DeleteProfile } from '@/shared/components/PageSections/Profile/DeleteProfile';

export default function Profile() {
  // const dispatch = useDispatch();

  const { classes } = useStyles();
  return (
    <PageContainer layout="freelancer">
      <DashboardPageHeader
        title="My Profile"
        showButton
        action={() => console.log('Update saved')}
        btnLabel="Save update"
      />
   <Stack spacing="3xl" className={classes.wrapper}>
      <Accordion defaultValue="profileInformation">
      <Accordion.Item className={classes.item} value="personalInformation">
        <Accordion.Control>Personal Information</Accordion.Control>
        <Accordion.Panel><PersonalInformationProfileFoem/></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="professionalInformation">
        <Accordion.Control>Professional Information</Accordion.Control>
        <Accordion.Panel><ProfessionallInformationProfileFoem/></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="experienceInformation">
        <Accordion.Control>Experience Information</Accordion.Control>
        <Accordion.Panel><ExperienceInformationProfileForm/></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="contactInformation">
        <Accordion.Control>Contact Information</Accordion.Control>
        <Accordion.Panel><ContactInformationProfileForm/></Accordion.Panel>
      </Accordion.Item>
      
      <Accordion.Item className={classes.item} value="passwordInformation">
        <Accordion.Control>Password Information</Accordion.Control>
        { <Accordion.Panel><PasswordChangeForm/></Accordion.Panel> }
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="deleteAccount">
        <Accordion.Control>Delete Account</Accordion.Control>
        { <Accordion.Panel><DeleteProfile/></Accordion.Panel> }
      </Accordion.Item>


    </Accordion>
     </Stack>
    </PageContainer>
  );
}
