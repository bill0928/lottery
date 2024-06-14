
import { styled, useTheme } from '@mui/material/styles';
import { CustTheme } from '@/themes/type';
import { Box, Grid, useMediaQuery } from '@mui/material';
import ModeSelect from './modeSelect'
import RuleSelect from './ruleSelect'
import { useState } from 'react';
import { K3, SSC, WINGO } from '../constant'
import { SSC_RULES_UI_OPTIONS, SSC_I18N_KEYS } from '../5D/constant'
import Spec from './spec';

const Wrapper = styled(Grid)(({ theme }) => ({
    // marginTop: 10,
    [theme.breakpoints.up('md')]: {
        width: 846
    },
    [theme.breakpoints.down('md')]: {
    },

}));
const PlayTypeWrapper = styled(Grid)(({ theme }) => ({
    position: 'relative',
    background: '#000',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    flexWrap: 'nowrap',
    [theme.breakpoints.up('md')]: {
        borderRadius: '10px 10px 0px 0px',
        width: 445,
        gap: 12,
        padding: '8px 12px',
    },
    [theme.breakpoints.down('md')]: {
        gap: 8,
        padding: '8px 9px',
    },

}));

const BackDropWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent',
    top: 0,
}))
type Props = {
    game: number
    rule: number
    onChange: (value: number) => void
}
const GamePlayType = (prop: Props) => {
    const { game, rule, onChange } = prop;
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expanded, setExpanded] = useState<boolean>(false);
    const isSSC = SSC.includes(game);
    const isK3 = K3.includes(game);
    const isWinGO = WINGO.includes(game);

    const parseOptions = () => {
        if (isSSC) return SSC_RULES_UI_OPTIONS;
        return []
    }
    const parseInitValue = () => {
        if (rule) return rule
        if (isSSC) {
            const [initRule] = parseOptions()
            return initRule.rule
        }
        return -1
    }

    const parseTarget = () => SSC_RULES_UI_OPTIONS.find((option) => option.childs.includes(rule))


    const parseDisplayTxt = (rule: number, isSection?: boolean) => {
        if (isSSC) {
            return SSC_I18N_KEYS(rule, isSection)
        }
        return ''
    }

    return (
        <Wrapper container justifyContent={'space-between'}>
            <PlayTypeWrapper container>
                <ModeSelect onBackDropEvent={setExpanded} backDrop={expanded} />
                <RuleSelect onChange={onChange} isSection onBackDropEvent={setExpanded} backDrop={expanded} options={parseOptions()} value={parseInitValue()} parseDisplayTxt={parseDisplayTxt} />
                {isSSC && <RuleSelect onChange={onChange} onBackDropEvent={setExpanded} backDrop={expanded}
                    options={parseOptions()}
                    value={parseInitValue()}
                    parseDisplayTxt={parseDisplayTxt}
                    target={parseTarget()}
                />}
            </PlayTypeWrapper>
            {!isMobile && <Spec />}
            {expanded && <BackDropWrapper onClick={() => setExpanded(false)} />}
        </Wrapper>
    );
};

export default GamePlayType;