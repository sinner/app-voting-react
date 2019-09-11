import { conatinerFluid } from '../../../material-kit-react';
import imagesStyles from '../../imagesStyles';

const exampleStyle = {
  section: {
    padding: '70px 0',
  },
  container: {
    ...conatinerFluid,
    textAlign: 'center !important',
  },
  ...imagesStyles,
  link: {
    textDecoration: 'none',
  },
};

export default exampleStyle;
