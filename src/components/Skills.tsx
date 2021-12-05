import { Grid, Typography, Button, SvgIcon, styled } from '@mui/material';
import Computer from '@mui/icons-material/Computer';
import ColorLens from '@mui/icons-material/ColorLens';
import BarChart from '@mui/icons-material/BarChart';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useState } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import Projects from './Projects';
import Interests from './Interests';

interface IsActiveCategory {
  readonly isActiveCategory: boolean | undefined;
}

const ButtonStyle = styled(Button)`
  margin: 0px;
  padding: 0px 46px 0px 0px;
  color: white;
  transition: 0.25s;
  cursor: pointer;
  border-radius: 15px 50px 50px 5px;
  background-color: ${({ isActiveCategory }: IsActiveCategory) => (isActiveCategory ? '#0192ae' : 'none')};
  opacity: ${({ isActiveCategory }: IsActiveCategory) => (isActiveCategory ? '0.9' : '0.5')};
  &:hover {
    transition: 0.25s;
    margin-left: 0.5rem;
    background-color: #0191ae9b;
    opacity: 0.9;
  }
`;

export default function Skills() {
  const [selectMenu, setSelectMenu] = useState('Programming Skills');

  const renderContent = () => {
    switch (selectMenu) {
      case 'Programming Skills':
        return <HardSkills />;
      case 'Soft skills':
        return <SoftSkills />;
      case 'Projects':
        return <Projects />;
      case 'Interests':
        return <Interests />;
      default:
        return 'Programming Skills';
    }
  };

  const categories = [
    { title: 'Programming Skills', icon: Computer },
    { title: 'Soft skills', icon: TheaterComedyIcon },
    { title: 'Projects', icon: BarChart },
    { title: 'Interests', icon: ColorLens }
  ];

  return (
    <div style={{ width: '100%' }}>
      <Typography variant='h4' align='center' style={{ color: 'white', paddingBottom: '8px' }}>
        RÓLAM
      </Typography>
      <div style={{ width: '30%', margin: '8px auto 40px', border: '1px solid #0192ae', opacity: '0.5' }} />
      <Grid sx={{ margin: '18px 10px' }} container justifyContent='center' alignItems='center' rowSpacing={1}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            boxShadow: '8px 0px 5px -4px rgba(0,0,0,0.55)',
            alignItems: 'flex-start'
          }}
          item
          xs={4}>
          {categories.map(({ title, icon }) => (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <ButtonStyle
                isActiveCategory={title === selectMenu}
                variant='text'
                onClick={() => setSelectMenu(title)}
                startIcon={
                  <SvgIcon viewBox='2 2 19 19' component={icon} sx={{ background: '#0192ae', color: 'white', padding: '34px 24px 34px 24px' }} />
                }>
                {title}
              </ButtonStyle>
            </div>
          ))}
        </Grid>
        <Grid item xs={6.5}>
          {renderContent()}
        </Grid>
      </Grid>
    </div>
  );
}
