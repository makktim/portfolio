import { Box, Card, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const SlideshowContainer = styled(Card)`
  position: relative;
  min-height: 250px;
  :before {
    content: '&';
    font-size: 45vh;
    color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -10vh;
  }
`;

const MySlides = styled(Box)`
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 230px;
`;

const Blockquote = styled('blockquote')`
  color: #0192ae;
  font-family: Tahoma, sans-serif;
  font-size: 24px;
  margin: 0 auto;
`;

const LeftArrow = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
`;

const RightArrow = styled.a`
  cursor: pointer;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
`;

export default function Feedbacks() {
  const [selectQuote, setSelectQuote] = useState(0);

  const Feedbacks = [
    { quote: 'I love you the more in that I believe you had liked me for my own sake and for nothing else', writer: '- John Keats' },

    {
      quote:
        'Timi is an enthusiastic and persistent person,and I really like to work with her.She is very creative,and I like to learn from her.I can count on her if I have some issues, she cares with others when needed.she is a very good team player, and also a very good person who can learn from her mistakes and encourage herself/others to do her/their best.',
      writer: '- Asoum Alagha (teammate)'
    },
    {
      quote:
        '  Timi is a conscientious and creative member of a team. She showed great effort to complete the given tasks in time and was not afraid to ask us whenever she had a question. She found the common voice easily with everyone, so was always a cheerful member of the team.  Dividing the tasks is not easy, but she does it well by keeping in mind the other teammates skills. I think she will be a loyal and reliable junior developer you can count on.',
      writer: '- Szabó Rudi (Mentor)'
    }
  ];

  return (
    <SlideshowContainer sx={{ margin: '10px', background: '#5b5b5d' }}>
      {Feedbacks.map(
        ({ quote, writer }: any, i: number) =>
          i === selectQuote && (
            <Blockquote>
              <MySlides key={i}>
                <q>{quote}</q>
                <p>{writer}</p>
              </MySlides>
            </Blockquote>
          )
      )}
      <LeftArrow
        onClick={() => {
          if (selectQuote <= 0) {
            setSelectQuote(Feedbacks.length - 1);
          } else {
            setSelectQuote(selectQuote - 1);
          }
        }}>
        ❮
      </LeftArrow>
      <RightArrow
        onClick={() => {
          if (selectQuote >= Feedbacks.length - 1) {
            setSelectQuote(0);
          } else {
            setSelectQuote(selectQuote + 1);
          }
        }}>
        ❯
      </RightArrow>
    </SlideshowContainer>
  );
}
