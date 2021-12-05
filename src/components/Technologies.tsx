import { useState } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import { Grid } from '@mui/material';
import { useNav } from '../customHooks/useNav';
import Skills from './Skills';

interface LinkProps {
  readonly active: boolean | undefined;
}

export default function Technologies() {
  const aboutRef = useNav('Technologies');

  const [selectMenu, setSelectMenu] = useState(0);

  const renderContent = () => {
    switch (selectMenu) {
      case 0:
        return <HardSkills />;
      case 1:
        return <SoftSkills />;
      default:
        return <SoftSkills />;
    }
  };

  const HeaderLinks = {
    items: [
      {
        path: '/',
        label: 'Technikai készségek'
      },
      {
        path: '/',
        label: 'Egyéni készségek'
      }
    ]
  };
  return (
    <Grid ref={aboutRef} id='technologies' sx={{ paddingTop: '1rem' }} container rowSpacing={1}>
      <Skills />
      {/*       <Grid item xs={12} md={6}>
        <HardSkills />
      </Grid>
      <Grid item xs={12} md={6}>
        <SoftSkills />
      </Grid> */}
    </Grid>
  );
}
