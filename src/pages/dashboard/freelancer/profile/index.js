import { useState } from 'react';
import { Accordion, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useStyles } from '../style.profile';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { PageContainer } from '@/shared/components/PageContainer';
import { PersonalInformationProfileForm } from '@/shared/components/PageSections/Profile/PersonalInformationProfileForm';
import { ProfessionalInformationProfileForm } from '@/shared/components/PageSections/Profile/ProfessionalInfrmationProfileForm';
import { ExperienceInformationProfileForm } from '@/shared/components/PageSections/Profile/ExperienceInformationProfileForm';
import { ContactInformationProfileForm } from '@/shared/components/PageSections/Profile/ContactInformationProfileForm';
import { PasswordChangeForm } from '@/shared/components/PageSections/Profile/PasswordChangeForm';
import { DeleteProfile } from '@/shared/components/PageSections/Profile/DeleteProfile';
import { DashboardProfileCard } from '@/shared/components/DashboardProfileCard';

function Profile() {
  // const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery('(min-width: 75em)');

  const { classes } = useStyles();
  return (
    <div style={{ backgroundColor: useMediaQuery(`(max-width:75em)`) ? '#ffffff' : '#F0EFEB', paddingBottom: "22px"  }}>

    <PageContainer.Dashboard layout="freelancer">
      <DashboardPageHeader
        title="My Profile"
        showButton
        action={() => console.log('Update saved')}
          btnLabel="Save update"
         
        />
      
    {isLargeScreen ? (
          <div style={{ margin: '0 auto', }} >
           <Stack spacing="xl">
          <DashboardProfileCard contentFullWidth title="Personal Information">
           <PersonalInformationProfileForm/>
          </DashboardProfileCard>
          <DashboardProfileCard contentFullWidth title="Professional Information">
              <ProfessionalInformationProfileForm/>
          </DashboardProfileCard>
         <DashboardProfileCard contentFullWidth title="Experience Information">
           <ExperienceInformationProfileForm/>
          </DashboardProfileCard>
         <DashboardProfileCard contentFullWidth title="Contact Information">
           <ContactInformationProfileForm/>
          </DashboardProfileCard>
          <DashboardProfileCard contentFullWidth title="Password Information">
           <PasswordChangeForm/>
          </DashboardProfileCard>
          <DashboardProfileCard contentFullWidth title="Delete">
            <DeleteProfile/>
              </DashboardProfileCard>
            </Stack>
    </div >
    ) : (
      <div style={{ margin: '0 auto' }}>
   
   <Stack spacing="3xl" className={classes.wrapper}>
      <Accordion defaultValue="profileInformation">
      <Accordion.Item className={classes.item} value="personalInformation">
        <Accordion.Control>Personal Information</Accordion.Control>
        <Accordion.Panel><PersonalInformationProfileForm /></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className={classes.item} value="professionalInformation">
        <Accordion.Control>Professional Information</Accordion.Control>
        <Accordion.Panel><ProfessionalInformationProfileForm/></Accordion.Panel>
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
        
        </div>
  )
        }
        </PageContainer.Dashboard>
      </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Profile;