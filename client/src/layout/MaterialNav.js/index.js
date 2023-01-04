import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import {
	GiCrystalBall,
	GiHamburgerMenu,
	GiSun,
	GiMoon,
	GiAries,
} from 'react-icons/gi';
import { useUserContext } from '../../hooks/context/useUserContext';
import patchHandler from '../../utils/http-requests/patchHandler';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

const Search = styled('div')(({ theme }) => {
	// console.log(theme);
	return {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: 'auto',
		[theme.breakpoints.up('xs')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	};
});

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('xs')]: {
			width: '12ch',
			'&:focus': {
				width: '18ch',
			},
		},
	},
}));

const settings = ['Profile', 'Logout'];
const pages = ['Compatibility', 'Horoscope', 'Tarot'];
export default function MaterialNav() {
	const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
	const location = useLocation();
	const navigate = useNavigate();
	const { userData, setUserData } = useUserContext();
	const {
		_id,
		theme,
		data: { name, profileImg },
	} = userData;
	const toggleDarkMode = async () => {
		const mongoResponse = await patchHandler('/api/user/theme', {
			_id,
			theme: !theme,
		});
		setUserData({ ...userData, theme: mongoResponse.theme });
	};

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='medium'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
					>
						<GiHamburgerMenu />
					</IconButton>
					<IconButton
						size='medium'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						<GiAries />
					</IconButton>
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
						LOGO
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

					<Search sx={{ flexGrow: 0, display: 'flex' }}>
						<SearchIconWrapper>
							<GiCrystalBall />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search…'
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
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
							sx={{ mt: '45px' }}
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
							<MenuItem
								onClick={(e) => {
									if (location.pathname !== `/profile`) navigate(`/profile`);
								}}
							>
								<Typography>Profile</Typography>
							</MenuItem>
							<MenuItem
								onClick={(e) => {
									logout({ returnTo: window.location.origin });
									if (location.pathname !== `/profile`) navigate(`/profile`);
								}}
							>
								<Typography>Logout</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
