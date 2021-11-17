import { Card, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

interface CategoryProps {
  readonly category: boolean | undefined;
}

interface IndexProps {
  readonly itemIndex: number | undefined;
}

const SkillTitle = styled(Typography)`
  display: flex;
  filter: grayscale(100%);
  color: #0192ae;
  text-align: center;
  filter: ${({ category }: CategoryProps) => (category ? 'grayscale(0)' : 'grayscale(100%)')};
  &:hover,
  &:active {
    filter: grayscale(0);
  }
`;

const ItemBox = styled(Card)`
  background-color: #3c3a3d;
  margin: 6px;
  padding: 16px;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    transition: 0.25s;
    margin-left: 1rem;
  }
`;

export default function HardSkills() {
  const [categoryHover, setCategoryHover] = useState(false);
  console.log('categoryHover', categoryHover);

  const HardSkills = [
    { name: 'Javascript / Typescript (React)' },
    { name: 'Html' },
    { name: 'CSS' },
    { name: 'SQL' },
    { name: 'Gatsby' },
    { name: 'Docusaurus' },
    { name: 'JAVA' },
    { name: 'GIT' },
    { name: 'Adobe Premier' },
    { name: 'Adobe Photoshop' }
  ];
  return (
    <Card sx={{ margin: '10px', padding: '16px', background: '#5b5b5d', boxShadow: '2px 2px 4px rgba(0.4,0.4,0.4,0.4)' }}>
      <SkillTitle category={categoryHover}>Technikai Kézségek</SkillTitle>
      {HardSkills.map(({ name }: any, i: number) => (
        <ItemBox>
          <SkillTitle category={categoryHover}>{name}</SkillTitle>
        </ItemBox>
      ))}
    </Card>

    /*     <Box
      sx={{
        position: 'relative',
        margin: '150px 0px'
      }}>
      <Box
        onMouseEnter={() => setCategoryHover(true)}
        onMouseLeave={() => setCategoryHover(false)}
        sx={{ transform: 'rotate(180deg) translate(0) rotate(-180deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Technikai Kézségek
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(265deg) translate(133px) rotate(95deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Javascript / Typescript (React)
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(265deg) translate(133px) rotate(95deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Html
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(32deg) translate(225px) rotate(-32deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          CSS
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(86deg) translate(143px) rotate(-86deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          SQL
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(140deg) translate(158px) rotate(-140deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Gatsby
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(181deg) translate(140px) rotate(-181deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Docusaurus
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(226deg) translate(121px) rotate(-226deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          JAVA
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'translate(220px)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          GIT
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(332deg) translate(185px) rotate(-332deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Adobe Photoshop
        </SkillTitle>
      </Box>
  
    </Box> */
  );
}
