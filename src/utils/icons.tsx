import { Email, GitHub, Home, Phone, Computer, TheaterComedy, BarChart, ColorLens, Flag } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

const IconList: any = {
  email: Email,
  gitHub: GitHub,
  home: Home,
  phone: Phone,
  computer: Computer,
  theaterComedyIcon: TheaterComedy,
  barChart: BarChart,
  colorLens: ColorLens,
  flag: Flag
};

const Icon = ({ icon }: any) => {
  return <SvgIcon viewBox='2 2 21 21' component={IconList[icon]} />;
};

export default Icon;
