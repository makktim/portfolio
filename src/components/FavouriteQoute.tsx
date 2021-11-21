import { Box, Grid, styled } from '@mui/material';

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

export default function FavouriteQoute() {
  return (
    <Blockquote>
      <MySlides>
        <q>Fordítsd arcodat a nap felé, mert akkor minden árnyék mögéd kerül</q>
        <p></p>
      </MySlides>
    </Blockquote>
  );
}
