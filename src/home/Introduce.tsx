import React, { useContext } from 'react';
import { styled } from '@mui/system';
import profilePicture from '../pictures/profile/me_profile.jpg';
import { WebsiteContext } from '../context/WebsiteContext';
import { Typography } from '@mui/material';
import Icon from '../utils/icons';

const Main = styled('div')`
  display: flex;
  flex: 1 1;
  height: 100vh;
  max-height: auto;
  overflow: scroll;
  flex-direction: column;
  background: #212121;
  @media (max-width: 900px) {
    height: 100%;
  }
`;

const ContactBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: baseline;
  justify-content: space-between;
  margin: 10px 5vh;
`;

export default function Introduce() {
  const { ContentInfo } = useContext(WebsiteContext);

  return (
    <Main>
      <img style={{ borderRadius: '50%', margin: '1vh auto 12px', width: 200, height: 200, objectFit: 'cover' }} src={profilePicture} alt='mypic' />
      <div style={{ fontSize: '26px', fontWeight: 600, margin: 'auto' }}>{ContentInfo.introduce.name}</div>
      <q style={{ color: '#0192ae', textAlign: 'center', padding: '16px', fontSize: 18 }}>{ContentInfo.introduce.quote}</q>
      <div>
        {ContentInfo.introduce.contacts.map(({ icon, value }: any) => (
          <ContactBox style={{ color: '#0192ae' }}>
            <Icon icon={icon} />
            {icon === 'gitHub' ? (
              <a href={value} style={{ color: '#0192ae' }}>
                portfolio gitHub link
              </a>
            ) : (
              <Typography variant='body1' component='div' style={{ color: '#0192ae' }}>
                {value}
              </Typography>
            )}
          </ContactBox>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        {ContentInfo.introduce.experience.map(({ sectionTitle, work }: any) => (
          <div>
            <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae', margin: '10px 0px' }}>
              {sectionTitle}
            </Typography>
            {work.map(({ company, position, date }: any) => (
              <div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-around' }}>
                  <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
                    {date}
                  </Typography>
                  <Typography variant='subtitle1' gutterBottom component='div' style={{ margin: '0px 10px' }}>
                    {company}
                  </Typography>
                </div>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  {position}
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Main>
  );
}
