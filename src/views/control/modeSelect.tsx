
import { styled, useTheme } from '@mui/material/styles';
import { CustTheme } from '@/themes/type';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, Drawer, Grid, Popover, Typography, useMediaQuery } from '@mui/material';
import ArrowDown from '../assets/images/arrow_down.svg'
import React, { useEffect, useState } from 'react';

type CommonThemePro = { theme: CustTheme };
const Wrapper = styled(Grid)(({ theme }) => ({
    borderRadius: '10px',
    background: theme.palette.secondary.main,
    boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.40) inset',
    height: 28,
    padding: '4px 8px 4px 16px',
    [theme.breakpoints.up('md')]: {
        cursor: 'pointer',
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        width: '30vw',
    },
    flexWrap: 'nowrap',
}));
const TxtWrapper = styled(Typography)(({ theme }: CommonThemePro) => ({
    [theme.breakpoints.up('md')]: {
        fontSize: 14,
        width: 64,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
    width: '100%',
    fontWeight: 700,
    fontFamily: theme.typography.lobbyLinkFontFamily,
    color: '#000',
    // textAlign: 'center',

}));
const PopoverContentWrapper = styled(Typography)(({ theme }: CommonThemePro) => ({
    [theme.breakpoints.up('md')]: {
        width: 124,
        cursor: 'pointer',
        padding: '12px 16px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '0px 16px',

    },
    fontSize: 14,
    fontFamily: theme.typography.lobbyLinkFontFamily,
    color: 'white',
    background: '#000',
}));
const AccordionWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100vw',
    top: 34,
    left: -6,
    zIndex: 1,
}))


type Props = {
    value?: number;
    onChange?: (value: number) => void;
    onBackDropEvent: (value: boolean) => void;
    backDrop: boolean;
}
const ModeSelect = (prop: Props) => {
    const { value, onChange, onBackDropEvent, backDrop } = prop;
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setExpanded(!expanded);
        onBackDropEvent(!expanded)
    };
    const handleClose2 = () => {
        setExpanded(false);
    };

    useEffect(() => {
        if (backDrop === false) {
            setExpanded(false)
        }
    }, [backDrop])

    if (isMobile) {
        return <>
            <Wrapper
                onClick={handleChange}
                aria-describedby={id}
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{zIndex: 1}}
            >
                <TxtWrapper theme={theme} variant="h4" noWrap >标准玩法</TxtWrapper>
                <Box ><ArrowDown /></Box>
            </Wrapper>
            <AccordionWrapper onClick={handleClose2}>
                <Accordion expanded={expanded} square sx={{ backgroundColor: '#000' }}>
                    <AccordionSummary sx={{ display: 'none' }} />
                    <AccordionDetails >
                        <PopoverContentWrapper theme={theme}>信用玩法</PopoverContentWrapper>
                    </AccordionDetails>
                </Accordion>
            </AccordionWrapper>
        </>
    }

    return (<>
        <Wrapper
            onClick={handleClick}
            aria-describedby={id}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <TxtWrapper variant="h4" noWrap theme={theme}>标准玩法</TxtWrapper>
            <Box ><ArrowDown /></Box>
        </Wrapper>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <PopoverContentWrapper onClick={handleClose} theme={theme}>信用玩法</PopoverContentWrapper>
        </Popover></>
    );
};

export default ModeSelect;