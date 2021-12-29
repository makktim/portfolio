import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

const MySlides = styled(Box)`
  padding: 80px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  font-style: italic;
  @media (max-width: 900px) {
    padding: 80px 20px;
  }
`;

const Blockquote = styled('blockquote')`
  color: #0192ae;
  font-family: Tahoma, sans-serif;
  font-size: 24px;
  margin: 0 auto;
`;

export default function WorkExperience() {
  const { ContentInfo } = useContext(WebsiteContext);

  return (
    <Blockquote>
      <MySlides>
        <q>{ContentInfo.about.workExperience}</q>
        <p></p>
      </MySlides>
    </Blockquote>
  );
}
