import { Grid, Typography, Button, styled, Box } from '@mui/material';
import { useContext, useState } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import Projects from './Projects';
import Interests from './Interests';
import IntroduceImages from './IntroduceImages';
import { WebsiteContext } from '../context/WebsiteContext';
import Icon from '../utils/icons';

interface IsActiveCategory {
  readonly category: string | undefined;
}

const ButtonStyle = styled(Button)`
  margin: 0px;
  padding: 0px 46px 0px 0px;
  color: white;
  transition: 0.25s;
  cursor: pointer;
  border-radius: 15px 50px 50px 5px;
  background-color: ${({ category }: IsActiveCategory) => (category === '1' ? '#0192ae' : 'none')};
  opacity: ${({ category }: IsActiveCategory) => (category === '1' ? '0.9' : '0.5')};
  &:hover {
    transition: 0.25s;
    margin-left: 0.5rem;
    background-color: #0191ae9b;
    opacity: 0.9;
  }
  @media (max-width: 600px) {
    padding: 0px 6px 0px 0px;
  }
`;

const GridContainer = styled(Grid)`
  margin: 18px 12px;
  @media (max-width: 900px) {
    margin: 0px;
  }
`;

export default function Skills() {
  const [selectMenu, setSelectMenu] = useState('Programming Skills');
  const { ContentInfo } = useContext(WebsiteContext);

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

  return (
    <Grid sx={{ paddingTop: '1rem' }} container rowSpacing={1} id='about'>
      <div style={{ width: '100%' }}>
        <Typography variant='h4' align='center' style={{ color: 'white', paddingTop: '5rem' }}>
          {ContentInfo.about.title}
        </Typography>
        <div style={{ width: '30%', margin: '8px auto 12px', border: '1px solid #0192ae', opacity: '0.5' }} />
        <Typography sx={{ margin: '0px 42px 42px' }} variant='subtitle2' align='center' style={{ color: 'white' }}>
          {ContentInfo.about.description}
        </Typography>
        <IntroduceImages />
        <GridContainer container justifyContent='center' alignItems='center' rowSpacing={1}>
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
            xs={8}
            md={4}>
            {ContentInfo.about.categories.map(({ title, icon, components }: { title: string; icon: string; components: string }) => (
              <div key={title} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <ButtonStyle
                  category={components === selectMenu ? '1' : '0'}
                  variant='text'
                  onClick={() => setSelectMenu(components)}
                  startIcon={
                    <Box sx={{ background: '#0192ae', color: 'white', padding: '34px 24px 34px 24px' }}>
                      <Icon icon={icon} />
                    </Box>
                  }>
                  {title}
                </ButtonStyle>
              </div>
            ))}
          </Grid>
          <Grid item xs={8} md={6.5}>
            {renderContent()}
          </Grid>
        </GridContainer>
      </div>
    </Grid>
  );
}
