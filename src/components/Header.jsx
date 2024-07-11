import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const Root = styled('div')({
  flexGrow: 1,
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  justifyContent: 'space-between',
}));

const LeftSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const RightSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Title = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <AppBar position="static" elevation={0}>
        <StyledToolbar>
          <LeftSection>
            <Typography variant="h6" style={{padding:"10px"}}>
              accredian
            </Typography>
            <StyledButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
              Courses
            </StyledButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Web Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>DSA</MenuItem>
              <MenuItem onClick={handleMenuClose}>Computer Networks</MenuItem>
            </Menu>
          </LeftSection>
          <RightSection>
            <StyledButton>Refer & Earn</StyledButton>
            <StyledButton>Resources</StyledButton>
            <StyledButton>About Us</StyledButton>
            <Button color="inherit">Login</Button>
            <Button color="primary" variant="contained">Try for free</Button>
          </RightSection>
        </StyledToolbar>
      </AppBar>
    </Root>
  );
}

export default Navbar;
