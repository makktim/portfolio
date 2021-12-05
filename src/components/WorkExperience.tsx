import { Box, Grid, styled } from '@mui/material';
import { useNav } from '../customHooks/useNav';

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
  const aboutRef = useNav('WorkExperience');

  return (
    <section ref={aboutRef} id='workExperience'>
      <Blockquote>
        <MySlides>
          <q>
            Az elmúlt két évben főleg React, React Natíve, Typescript és NodeJs technológiákat használtam a munkám során, ahol a célunk az volt, hogy
            létrehozzunk egy alkalmazást a vállalkozások életének megkönnyítésére. Ezen kívül a partner cégek számára készítettünk honlapokat, amit
            Gatsby vagy React használatával késztettünk el.
          </q>
          <p></p>
        </MySlides>
      </Blockquote>
    </section>
  );
}
