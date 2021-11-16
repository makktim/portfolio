import { Box } from '@mui/system';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

interface LinkProps {
  readonly active: boolean | undefined;
}

const NextButtonLink = styled(Link)`
  color: #0192ae;
  background-color: ${({ active }: LinkProps) => (active ? '#3c3a3d' : '#5b5b5d')};
  padding: 16px;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  focus: {
    outline: none;
  }
  hover: {
    background-color: #3c3a3d;
    color: white;
  }
  cursor: pointer;
`;

export default function Technologies() {
  const [selectMenu, setSelectMenu] = useState(0);

  const renderContent = () => {
    switch (selectMenu) {
      case 0:
        return <HardSkills />;
      case 1:
        return <SoftSkills />;
      default:
        return <HardSkills />;
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
    <Box sx={{ overflow: 'auto', height: '400px', flex: '1 1 auto', paddingBottom: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          backgroundColor: 'background.secondary',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}>
        {HeaderLinks.items.map(({ path, label }: any, i: number) => (
          <NextButtonLink onClick={() => setSelectMenu(i)} active={selectMenu === i} to={path}>
            {label}
          </NextButtonLink>
        ))}
      </Box>
      {renderContent()}
    </Box>
  );
}
