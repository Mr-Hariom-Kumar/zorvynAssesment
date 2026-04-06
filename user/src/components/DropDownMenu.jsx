import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import { AppContext } from '../context/AppContext';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 160,
    boxShadow:
      'rgba(0,0,0,0.2) 0px 8px 20px',
  },
}));

const DropdownMenu = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl)

  const { admin, setAdmin, token, setToken } =
    React.useContext(AppContext)

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem
        onClick={() => {
          setAdmin(!admin)
          setAnchorEl(null)
        }}
      >
        <i className="fa-solid fa-user-tie mr-2" />
        {admin ? 'Switch to User' : 'Switch to Admin'}
      </MenuItem>

      <Divider />

      <MenuItem
        onClick={() => {
          setToken(!token)
          setAnchorEl(null)
        }}
      >
        <ArchiveIcon sx={{ mr: 1 }} />
        {token ? 'Logout' : 'Login/Signup'}
      </MenuItem>
    </StyledMenu>
  )
}

export default DropdownMenu