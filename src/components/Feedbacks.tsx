import { Box, Grid } from '@mui/material';

export default function Feedbacks() {
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={12} md={4}>
        <Box>
          Timi is an enthusiastic and persistent person,and I really like to work with her.She is very creative,and I like to learn from her.I can
          count on her if I have some issues, she cares with others when needed.she is a very good team player, and also a very good person who can
          learn from her mistakes and encourage herself/others to do her/their best. Asoum Alagha (teammate)
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box>
          Timi is a conscientious and creative member of a team. She showed great effort to complete the given tasks in time and was not afraid to ask
          us whenever she had a question. She found the common voice easily with everyone, so was always a cheerful member of the team. Dividing the
          tasks is not easy, but she does it well by keeping in mind the other teammates skills. I think she will be a loyal and reliable junior
          developer you can count on. Szabó Rudi (Mentor)
        </Box>
      </Grid>
    </Grid>
  );
}
