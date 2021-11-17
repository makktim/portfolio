import { Box, Grid } from '@mui/material';

export default function FavouriteQoute() {
  return (
    <Grid sx={{ height: 200, backgroundColor: '#3c3a3d', border: '1px solid #5b5b5d' }} container rowSpacing={1}>
      <Grid sx={{ margin: 'auto', textAlign: 'center' }} item xs={11} md={11}>
        <q>
          Timi is an enthusiastic and persistent person,and I really like to work with her.She is very creative,and I like to learn from her.I can
          count on her if I have some issues, she cares with others when needed.she is a very good team player, and also a very good person who can
          learn from her mistakes and encourage herself/others to do her/their bes
        </q>
      </Grid>
    </Grid>
  );
}
