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
  padding: 6px;
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

export default function HardSkills() {
  const [categoryHover, setCategoryHover] = useState(false);
  console.log('categoryHover', categoryHover);

  const HardSkills = {
    first: [{ name: 'Javascript / Typescript' }, { name: 'React/React Native' }, { name: 'Html/CSS' }, { name: 'SQL' }, { name: 'Gatsby' }],
    second: [{ name: 'Docusaurus' }, { name: 'JAVA' }, { name: 'GIT' }, { name: 'Adobe Premier' }, { name: 'Adobe Photoshop' }]
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(HardSkills).map(([key, item], index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          {item.map(({ name }: any, i: number) => (
            <Box key={i} /* category={categoryHover} */>
              <SkillTitle category={categoryHover}>{name}</SkillTitle>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
    /*     <Card sx={{ margin: '10px', padding: '16px', background: '#5b5b5d', boxShadow: '2px 2px 4px rgba(0.4,0.4,0.4,0.4)' }}>
      <div style={{ textAlign: 'center', padding: '16px', background: '#5b5b5d' }}>
        <SkillTitle onMouseEnter={() => setCategoryHover(true)} onMouseLeave={() => setCategoryHover(false)} category={categoryHover}>
          TECHNIHKAI KÉSZSÉGEK
        </SkillTitle>
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        {Object.entries(HardSkills).map(([key, item], index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
            {item.map(({ name }: any, i: number) => (
              <ItemBox key={i} category={categoryHover}>
                <SkillTitle category={categoryHover}>{name}</SkillTitle>
              </ItemBox>
            ))}
          </Box>
        ))}
      </Box>
    </Card> */
  );
}
