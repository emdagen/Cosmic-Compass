import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GiSun, GiMoon } from 'react-icons/gi';
import { useUserContext } from '../../hooks/context/useUserContext';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Logo from '../../assets/logo/wheel.png';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import Searchbar from '../../components/searchbar';
import { FaUser } from 'react-icons/fa';
import { RiDoorOpenFill } from 'react-icons/ri';
import ZodiacDropdown from './ZodiacDropdown';
import styled from 'styled-components';

import ToggleDrawer from './ToggleDrawer';
import { useToggleTheme } from '../../hooks/useToggleTheme';
import { color } from '@mui/system';

const pages = ['Compatibility', 'Horoscope', 'Tarot'];
export default function Navbar() {
  const { logout } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [toggleDarkMode] = useToggleTheme();
  const { userData } = useUserContext();
  const {
    theme,
    data: { name, profileImg },
  } = userData;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledBox>
      <AppBar position='static'>
        <StyledToolbar>
          <ToggleDrawer />
          <ZodiacDropdown />
          <Typography
            variant='h5'
            noWrap
            onClick={() => {
              if (location.pathname !== `/`) navigate(`/`);
            }}
            sx={{
              mr: 2,
              display: { xs: 'flex' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <StyledImg src={Logo} style={{ maxWidth: '50px' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  onClick={() => {
                    if (location.pathname !== `/${page.toLowerCase()}`)
                      navigate(
                        `/${
                          page.toLowerCase() === 'horoscope'
                            ? ''
                            : page.toLowerCase()
                        }`
                      );
                  }}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>
          <Searchbar />
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <IconButton
              size='medium'
              // edge='end'
              color='inherit'
              aria-label='open drawer'
              sx={{ ml: 1, display: { xs: 'none', sm: 'flex' } }}
              onClick={toggleDarkMode}
            >
              {theme ? <GiSun /> : <GiMoon />}
            </IconButton>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                <Avatar alt={name} src={profileImg.url} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '40px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <StyledMenuItems
                onClick={(e) => {
                  if (location.pathname !== `/profile`) navigate(`/profile`);
                }}
              >
                <FaUser size={18} />
                <Typography>Profile</Typography>
              </StyledMenuItems>
              <StyledMenuItems
                onClick={(e) => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                <RiDoorOpenFill size={20} />
                <Typography>Logout</Typography>
              </StyledMenuItems>
            </Menu>
          </Box>
        </StyledToolbar>
      </AppBar>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledMenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledToolbar = styled(Toolbar)`
  height: var(--nav-height);
  min-height: unset !important;
  width: 100%;
  max-width: var(--width-limit);

  margin: auto;
`;

const StyledImg = styled.img`
  color: white;
`;
