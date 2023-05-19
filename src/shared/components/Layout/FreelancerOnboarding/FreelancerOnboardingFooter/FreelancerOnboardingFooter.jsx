import { useState } from 'react';
import { PageContainer } from '@/shared/components/PageContainer';
import { Text, Button, Container, Footer, Menu } from '@mantine/core';
import { IconChevronUp } from '@tabler/icons-react';

export function FreelancerOnboardingFooter() {
  const [selectedCountry, setSelectedCountry] = useState('NGN');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  return (
    <Footer
      pos="inherit"
      p="md"
      mt="9xl"
      style={{ marginLeft: 24, marginRight: 24 }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>&#169; Hamzry 2022. All rights reserved.</Text>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Menu
            transitionProps={{ transition: 'pop-top-right' }}
            position="top-end"
            width={220}
            withinPortal
          >
            <Menu.Target>
              <Button
                variant="link"
                rightIcon={<IconChevronUp size="1.05rem" stroke={1.5} />}
                style={{ fontWeight: 'normal', fontSize: '8px' }}
                pr={12}
              >
                {selectedCountry}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => handleCountryChange('NGN')}>
                NGN
              </Menu.Item>
              <Menu.Item onClick={() => handleCountryChange('FRA')}>
                FRA
              </Menu.Item>
              <Menu.Item onClick={() => handleCountryChange('DEU')}>
                DEU
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu
            transitionProps={{ transition: 'pop-top-right' }}
            position="top-end"
            width={220}
            withinPortal
          >
            <Menu.Target>
              <Button
                variant="link"
                style={{ fontWeight: 'normal', fontSize: '8px' }}
                rightIcon={<IconChevronUp size="1.05rem" stroke={1.5} />}
                pr={12}
              >
                {selectedLanguage}
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => handleLanguageChange('English')}>
                English
              </Menu.Item>
              <Menu.Item onClick={() => handleLanguageChange('Francais')}>
                Français
              </Menu.Item>
              <Menu.Item onClick={() => handleLanguageChange('German')}>
                German
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </Footer>
  );
}
