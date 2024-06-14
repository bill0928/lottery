import { useState, useRef, useEffect, SetStateAction, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Card,
  Menu,
  MenuItem,
  TextField,
  useMediaQuery,
} from '@mui/material';
import app from '@/state/app/store'
import LangIcon from '@/assets/images/icons/language.svg';
import { allLanguages, EN, ZHCN } from '@/localisation/languageCodes'
import EnUsSvg from '@/localisation/icon/en-US.svg';
import ZhSvg from '@/localisation/icon/zh-CN.svg';
import Image from "next/image";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 40,
  height: 40,
  borderRadius: 15,
  boxShadow: '0px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.60) inset',
  position: 'relative',
}));

// ==============================|| PROFILE MENU ||============================== //

const Language = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('handleClick')
  };
  const handleClose = () => {
    console.log('close')
    setAnchorEl(null);
  };
  if (isMobile) return null;

  const renderMenu = (code: string) => {
    const size = 20
    switch (code) {
      case EN.code:
        return <EnUsSvg width={size} height={size} />;
      case ZHCN.code:
        return <ZhSvg  width={size} height={size}/>;
    }
  }

  return (
    <>
      <Wrapper
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Button
          sx={{
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
              border: 'none',
            },
          }}
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <LangIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {allLanguages.map((option) => (
            <MenuItem key={option.code} value={option.code} onClick={handleClose}>
              {renderMenu(option.code)}
              <span style={{marginLeft: 10}}>{option.language}</span>
            </MenuItem>
          ))}
        </Menu>
      </Wrapper>
    </>
  );
};

export default Language;
