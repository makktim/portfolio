import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useContext, useState } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

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
  padding: 42px;
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

const LeftArrow = styled('a')`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -28px;
  padding: 16px;
  color: #212121;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
`;

const RightArrow = styled('a')`
  cursor: pointer;
  top: 50%;
  width: auto;
  margin-top: -28px;
  padding: 16px;
  color: #212121;
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

  const { ContentInfo } = useContext(WebsiteContext);

  return (
    <Box sx={{ marginBottom: 8 }}>
      <Typography variant='h4' align='center' style={{ color: 'white', padding: '42px 0px 0px 0px' }}>
        {ContentInfo.feedbacks.title}
      </Typography>
      <div style={{ width: '30%', margin: '8px auto 12px', border: '1px solid #0192ae', opacity: '0.5' }} />
      <Typography sx={{ margin: '0px 42px 42px' }} variant='subtitle2' align='center' style={{ color: 'white' }}>
        {ContentInfo.feedbacks.description}
      </Typography>
      <SlideshowContainer sx={{ background: '#5b5b5d' }}>
        {ContentInfo.feedbacks.quote.map(
          ({ quote, writer }: any, i: any) =>
            i === selectQuote && (
              <Blockquote key={i}>
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
              setSelectQuote(ContentInfo.feedbacks.quote.length - 1);
            } else {
              setSelectQuote(selectQuote - 1);
            }
          }}>
          ❮
        </LeftArrow>
        <RightArrow
          onClick={() => {
            if (selectQuote >= ContentInfo.feedbacks.quote.length - 1) {
              setSelectQuote(0);
            } else {
              setSelectQuote(selectQuote + 1);
            }
          }}>
          ❯
        </RightArrow>
      </SlideshowContainer>
    </Box>
  );
}
