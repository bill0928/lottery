import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import RuleIcon from '../assets/images/rule.svg'
import PlayIcon from '../assets/images/play.svg'
import PrizeIcon from '../assets/images/prize.svg'
import RecordIcon from '../assets/images/record.svg'

const Wrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '43%',
        gap: 8,
    },
    [theme.breakpoints.down('md')]: {
    },
    flexWrap: 'nowrap',

}));
const ItemWrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        // width: 84,
        height: 28,
        padding: '0 12px',
        borderRadius: 10,
        background: '#D2D2D2',
        boxShadow: '0px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.60) inset'
    },
    [theme.breakpoints.down('md')]: {
    },
    flexWrap: 'nowrap',
}));
const TxtWrapper = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginBottom: 2
    },
    [theme.breakpoints.down('md')]: {
    },


}));
type Props = {

}
const ITEMS = ['rule', 'play', 'prize', 'record']
const parseIcon = (item: string) => {
    const [rule, play, prize, record] = ITEMS
    switch (item) {
        case rule:
            return <RuleIcon />
        case play:
            return <PlayIcon />
        case prize:
            return <PrizeIcon />
        case record:
            return <RecordIcon />
    }
}
const Spec = (prop: Props) => {


    const renderItems = (item: string) => {
        return <ItemWrapper  key={item} container alignItems={'center'} gap={1}>
            <Box >{parseIcon(item)}</Box>
            <TxtWrapper noWrap>{item}</TxtWrapper>
        </ItemWrapper>
    }
    return <Wrapper container alignItems={'center'} >{ITEMS.map((item) => renderItems(item))}</Wrapper>
}

export default Spec;