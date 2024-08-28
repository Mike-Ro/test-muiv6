// app/page.js

import {Button} from '@mui/material';
import {styled, css} from '@mui/material-pigment-css';

const StyledButton = styled(Button)(() => ({
  color: 'red',
}));

const styledTestPigmentCss = css({
  border: '1px solid black',
  textTransform: 'uppercase',
});

export default function page() {
  return (
    <>
      <StyledButton color="primary">Test Button</StyledButton>
      <div className={styledTestPigmentCss}>Test PigmentCSS</div>
    </>
  );
}
