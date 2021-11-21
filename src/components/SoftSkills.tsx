import { Card, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
  opacity: ${({ category }: CategoryProps) => (category ? '0.9' : '0.5')};
  &:hover {
    transition: 0.25s;
    margin-left: 1rem;
  }
`;

export default function SoftSkills() {
  const [categoryHover, setCategoryHover] = useState(false);

  const HardSkills = {
    first: [{ name: 'Csapatjátékos' }, { name: 'Kommunikáció' }, { name: 'Kitartó' }, { name: 'ambíciózus' }, { name: 'Kreatív' }],
    second: [{ name: 'türelmes' }, { name: 'Probléma megoldó' }, { name: 'Célorientált' }, { name: 'Adobe Premier' }, { name: 'Adobe Photoshop' }]
  };
  return (
    <Card sx={{ margin: '10px', padding: '16px', background: '#5b5b5d', boxShadow: '2px 2px 4px rgba(0.4,0.4,0.4,0.4)' }}>
      <SkillTitle onMouseEnter={() => setCategoryHover(true)} onMouseLeave={() => setCategoryHover(false)} category={categoryHover}>
        Egyéni Kézségek
      </SkillTitle>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        {Object.entries(HardSkills).map(([key, item]) => (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {item.map(({ name }: any, i: number) => (
              <ItemBox category={categoryHover}>
                <SkillTitle category={categoryHover}>{name}</SkillTitle>
              </ItemBox>
            ))}
          </Box>
        ))}
      </Box>
    </Card>
  );
}
