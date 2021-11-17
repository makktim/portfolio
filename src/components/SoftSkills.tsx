import { Box, Card, styled, Typography } from '@mui/material';
import { useState } from 'react';

interface CategoryProps {
  readonly category: boolean | undefined;
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

export default function SoftSkills() {
  const [categoryHover, setCategoryHover] = useState(false);
  console.log('categoryHover', categoryHover);

  const HardSkills = [
    { name: 'Csapatjátékos' },
    { name: 'Kommunikáció' },
    { name: 'Kitartó' },
    { name: 'ambíciózus' },
    { name: 'Kreatív' },
    { name: 'türelmes' },
    { name: 'ProblémaMegoldó' },
    { name: 'Célorientált' },
    { name: 'Adobe Premier' },
    { name: 'Adobe Photoshop' }
  ];
  return (
    <Card sx={{ margin: '10px', padding: '16px', background: '#5b5b5d', boxShadow: '2px 2px 4px rgba(0.4,0.4,0.4,0.4)' }}>
      <SkillTitle category={categoryHover}> Egyéni kézségek</SkillTitle>
      {HardSkills.map(({ name }: any, i: number) => (
        <ItemBox>
          <SkillTitle category={categoryHover}>{name}</SkillTitle>
        </ItemBox>
      ))}
    </Card>
  );
  /*   return (
    <Box
      sx={{
        position: 'relative',
        margin: '150px 0px'
      }}>
      <Box
        onMouseEnter={() => setCategoryHover(true)}
        onMouseLeave={() => setCategoryHover(false)}
        sx={{ transform: 'rotate(180deg) translate(27px) rotate(-180deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Egyéni kézségek
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(265deg) translate(133px) rotate(95deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Csapatjátékos
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(41deg) translate(141px) rotate(-41deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Kommunikáció
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(86deg) translate(143px) rotate(-86deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Kitartó
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(140deg) translate(158px) rotate(-140deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          ambíciózus
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(181deg) translate(140px) rotate(-181deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Kreatív
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(226deg) translate(121px) rotate(-226deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          türelmes
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'translate(145px)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          ProblémaMegoldó
        </SkillTitle>
      </Box>
      <Box sx={{ transform: 'rotate(316deg) translate(121px) rotate(-316deg)' }}>
        <SkillTitle category={categoryHover} variant='body1'>
          Célorientált
        </SkillTitle>
      </Box>

    </Box>
  ); */
}
