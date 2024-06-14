
import { styled, useTheme } from '@mui/material/styles';
import { Theme } from "@mui/material";
import { CustTheme } from '@/themes/type';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, Drawer, Grid, Popover, Typography, useMediaQuery } from '@mui/material';
import ArrowDown from '../assets/images/arrow_down.svg'
import React, { useEffect, useState } from 'react';
import { RULE_OPTION } from './types'
import {
    Wrapper, TxtWrapper, AccordionWrapper,
    OptionsContentWrapper, OptionsWrapper,
    StageTtileWrapper, StageWrapper
} from './ruleSelectWrapper'

type Props = {
    options: RULE_OPTION[];
    value: number;
    onChange: (value: number) => void;
    parseDisplayTxt: (value: number, isSection?: boolean) => string;
    onBackDropEvent: (value: boolean) => void;
    backDrop: boolean;
    isSection?: boolean;
    target?: RULE_OPTION
}
const parseStageNums = (index: number, stage: number[], opts: number[]) => {
    const [f, s] = stage
    let min
    let max
    switch (index) {
        case 0:
            min = 0
            max = f
            break
        case 1:
            min = f
            max = s
            break
        case 2:
            min = s
            max = 100
            break
    }
    return opts.slice(min, max)
}
const checkSectionRule = (rule: number, options: number[]) => options.includes(rule);
const RuleSelect = (prop: Props) => {
    const { options, value, onChange, onBackDropEvent, backDrop, isSection=false, parseDisplayTxt, target } = prop;
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [expanded, setExpanded] = useState<boolean>(false);
    const isTarget = !!target /**  */
    const isOnlyOne = isTarget && target.childs.length === 1 ? true : false

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

    const checkIsStage = () => {
        if (isTarget) {
            const { stage } = target
            return stage ? stage.length > 0 : false
        }
        return false
    }
    const renderItemsMo = (selectOpts: number[]) => selectOpts.map((option) => <Grid
        key={option}
        item xs={5}
    ><OptionsContentWrapper
        onClick={() => {
            onChange(option)
            // handleClose()
        }}
        theme={theme}
        isSelect={value === option}
    >{parseDisplayTxt(option)}</OptionsContentWrapper></Grid>)


    if (isMobile) {
        const renderOptionsMo = () => {
            if (isTarget) {
                const { stage, stageTitle, childs } = target
                const isStage = stageTitle && stageTitle.length > 0 && stage && stage.length > 0 /** 有小分类 */
                if (isStage) {
                    return <>
                        {stageTitle.map((item, index) => (<StageWrapper
                            container
                            direction={'row'}
                            pt={1}
                            key={item}>
                            <Grid item xs={2.5}>
                                <StageTtileWrapper pt={'5px'}>{item}:</StageTtileWrapper>
                            </Grid>
                            <Grid item xs={9.5} container gap={'1vw'}>
                                {renderItemsMo(parseStageNums(index, stage, childs))}
                            </Grid>
                        </StageWrapper>))}
                    </>
                }
                return renderItemsMo(childs)
            }
            return options.map((option) => <Grid
                key={option.rule}
                item xs={4}
            ><OptionsContentWrapper
                onClick={() => {
                    onChange(option.rule)
                }}
                theme={theme}
                isSelect={checkSectionRule(value, option.childs)}
            >
                    {option.title || parseDisplayTxt(option.rule)}
                </OptionsContentWrapper></Grid>
            )
        }
        return <>
            <Wrapper
                onClick={isOnlyOne ? void 0 : handleChange}
                aria-describedby={id}
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                theme={theme}
                isOnlyOne={isOnlyOne}
                isSection={isSection}
            >
                <TxtWrapper variant="h4" noWrap theme={theme}>{parseDisplayTxt(value, isSection)}</TxtWrapper>
                {!isOnlyOne && <Box ><ArrowDown /></Box>}
            </Wrapper>
            <AccordionWrapper
            // onClick={handleClose2}
            >
                <Accordion expanded={expanded} square sx={{ backgroundColor: '#000' }}>
                    <AccordionSummary sx={{ display: 'none' }} />
                    <AccordionDetails >
                        <OptionsWrapper container spacing={1} isStage={checkIsStage()} theme={theme}>
                            {renderOptionsMo()}
                        </OptionsWrapper>
                    </AccordionDetails>
                </Accordion>
            </AccordionWrapper>
        </>
    }

    const renderItems = (selectOpts: number[]) => selectOpts.map((option) => <OptionsContentWrapper
        onClick={() => {
            onChange(option)
            // handleClose()
        }}
        key={option}
        theme={theme}
        isSelect={value === option}
    >{parseDisplayTxt(option)}</OptionsContentWrapper>)

    const renderOptions = () => {
        if (isTarget) {
            const { stage, stageTitle, childs } = target
            const isStage = stageTitle && stageTitle.length > 0 && stage && stage.length > 0 /** 有小分类 */
            if (isStage) {
                return <>
                    {stageTitle.map((item, index) => (<StageWrapper
                        container
                        direction={'row'}
                        key={item}>
                        <Grid item xs={2}>
                            <StageTtileWrapper pt={'2px'} theme={theme}>{item}:</StageTtileWrapper>
                        </Grid>
                        <Grid item xs={10} container gap={1}>
                            {renderItems(parseStageNums(index, stage, childs))}
                        </Grid>
                    </StageWrapper>))}
                </>
            }
            return renderItems(childs)
        }
        return options.map((option) => <OptionsContentWrapper
            onClick={() => {
                onChange(option.rule)
                // handleClose()
            }}
            key={option.rule}
            theme={theme}
            isSelect={checkSectionRule(value, option.childs)}
        >{option.title || parseDisplayTxt(option.rule)}</OptionsContentWrapper>)
    }
    return (<>
        <Wrapper
            onClick={isOnlyOne ? void 0 : handleClick}
            aria-describedby={id}
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            theme={theme}
            isOnlyOne={isOnlyOne}
            isSection={isSection}
        >
            <TxtWrapper variant="h4" theme={theme} noWrap >{parseDisplayTxt(value, isSection)}</TxtWrapper>
            {!isOnlyOne && <Box ><ArrowDown /></Box>}
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
            <OptionsWrapper container isStage={checkIsStage()} theme={theme}>
                {renderOptions()}
            </OptionsWrapper>
        </Popover></>
    );
};

export default RuleSelect;