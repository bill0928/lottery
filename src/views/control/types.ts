import { CustTheme } from "@/themes/type"
import { Theme } from "@mui/material"

export type RULE_OPTION ={
    rule: number
    title: string
    childs: number[]
    stage?: number[]
    stageTitle?: string[]
}
export type CommonThemePro = { theme: CustTheme };
export type OcThemePro = { theme: CustTheme ; isSelect: boolean };
export type WrhemePro = { theme: Theme; isOnlyOne: boolean; isSection: boolean };
export type OshemePro = { theme: Theme; isStage: boolean };