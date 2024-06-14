export const SSC_RULE_CODE = {
  DING_WE_DAN: 1002,
  TWO_STAR: 1003,
  REN_XUAN3: 1014,
  FIVE_STAR: 1016,
  FOUR_STAR: 1015,
  REN_XUAN2: 1005,
  THREE_STAR: 1008,
  FIVE_YIMA_BDW: 1041,
  FIVE_ERMA_BDW: 1042,
  FIVE_SANMA_BDW: 1043,
  ZHONG_THREE_STAR: 1056,
  QIANER_TWO_STAR: 1084,
  QIAN_FOUR_STAR: 1091,
  QIAN_FOUR_YIMA_BDW: 1098,
  QIAN_FOUR_ERMA_BDW: 1099,
  FOUR_YIMA_BDW: 1044,
  FOUR_ERMA_BDW: 1045,
  QIAN_THREE_STAR: 1070,
  QIAN_THREE_YIMA_BDW: 1080,
  QIAN_THREE_ERMA_BDW: 1081,
  ZHONG_THREE_YIMA_BDW: 1066,
  ZHONG_THREE_ERMA_BDW: 1067,
  THREE_YIMA_BDW: 1046,
  THREE_ERMA_BDW: 1047,
};

export const SSC_RULES_UI_OPTIONS = [
  {
    rule: SSC_RULE_CODE.FIVE_STAR,
    title: "five_star",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.FIVE_STAR],
  },
  {
    rule: SSC_RULE_CODE.QIAN_FOUR_STAR,
    title: "qian_4",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.QIAN_FOUR_STAR],
  },
  {
    rule: SSC_RULE_CODE.FOUR_STAR,
    title: "four_star",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.FOUR_STAR],
  },
  {
    rule: SSC_RULE_CODE.QIAN_THREE_STAR,
    title: "qian_3",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.QIAN_THREE_STAR],
  },
  {
    rule: SSC_RULE_CODE.ZHONG_THREE_STAR,
    title: "zhong_3",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.ZHONG_THREE_STAR],
  },
  {
    rule: SSC_RULE_CODE.THREE_STAR,
    title: "three_star",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.THREE_STAR],
  },
  {
    rule: SSC_RULE_CODE.QIANER_TWO_STAR,
    title: "qian_2",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.QIANER_TWO_STAR],
  },
  {
    rule: SSC_RULE_CODE.TWO_STAR,
    title: "two_star",
    stage: [],
    stageTitle: [],
    childs: [SSC_RULE_CODE.TWO_STAR],
  },
  {
    rule: SSC_RULE_CODE.DING_WE_DAN,
    title: "dwd",
    childs: [SSC_RULE_CODE.DING_WE_DAN],
  },
  {
    rule: SSC_RULE_CODE.REN_XUAN3, title: 'ren_xuan',
    childs: [SSC_RULE_CODE.REN_XUAN3, SSC_RULE_CODE.REN_XUAN2],
  },
  {
    rule: SSC_RULE_CODE.FIVE_YIMA_BDW,
    title: "bdw",
    stage: [3, 7],
    stageTitle: ["five_star", "four_star", "three_star"],
    childs: [
      SSC_RULE_CODE.FIVE_YIMA_BDW,
      SSC_RULE_CODE.FIVE_ERMA_BDW,
      SSC_RULE_CODE.FIVE_SANMA_BDW,
      SSC_RULE_CODE.QIAN_FOUR_YIMA_BDW,
      SSC_RULE_CODE.QIAN_FOUR_ERMA_BDW,
      SSC_RULE_CODE.FOUR_YIMA_BDW,
      SSC_RULE_CODE.FOUR_ERMA_BDW,
      SSC_RULE_CODE.QIAN_THREE_YIMA_BDW,
      SSC_RULE_CODE.QIAN_THREE_ERMA_BDW,
      SSC_RULE_CODE.ZHONG_THREE_YIMA_BDW,
      SSC_RULE_CODE.ZHONG_THREE_ERMA_BDW,
      SSC_RULE_CODE.THREE_YIMA_BDW,
      SSC_RULE_CODE.THREE_ERMA_BDW,
    ],
  },
];

export const SSC_I18N_KEYS = (rule: number, isSection?: boolean) => {
  if (isSection) {
    const target = SSC_RULES_UI_OPTIONS.find((option) => option.childs.includes(rule));
    if(target) return target.title
  }
  switch (rule) {
    case SSC_RULE_CODE.DING_WE_DAN:
      return "dwd";
    case SSC_RULE_CODE.REN_XUAN3:
      return "ren_3_xuan_fushi";
    case SSC_RULE_CODE.REN_XUAN2:
      return "ren_2_xuan_fushi";
    case SSC_RULE_CODE.FIVE_YIMA_BDW:
      return "5star_yi_ma";
    case SSC_RULE_CODE.FIVE_ERMA_BDW:
      return "5star_er_ma";
    case SSC_RULE_CODE.FIVE_SANMA_BDW:
      return "5star_san_ma";
    case SSC_RULE_CODE.QIAN_FOUR_YIMA_BDW:
      return "qian4_yi_ma";
    case SSC_RULE_CODE.QIAN_FOUR_ERMA_BDW:
      return "qian4_er_ma";
    case SSC_RULE_CODE.FOUR_YIMA_BDW:
      return "ho4_yi_ma";
    case SSC_RULE_CODE.FOUR_ERMA_BDW:
      return "ho4_er_ma";
    case SSC_RULE_CODE.QIAN_THREE_YIMA_BDW:
      return "qian3_yi_ma";
    case SSC_RULE_CODE.QIAN_THREE_ERMA_BDW:
      return "qian3_er_ma";
    case SSC_RULE_CODE.ZHONG_THREE_YIMA_BDW:
      return "zhong3_yi_ma";
    case SSC_RULE_CODE.ZHONG_THREE_ERMA_BDW:
      return "zhong3_er_ma";
    case SSC_RULE_CODE.THREE_YIMA_BDW:
      return "ho3_yi_ma";
    case SSC_RULE_CODE.THREE_ERMA_BDW:
      return "ho3_er_ma";
    case SSC_RULE_CODE.TWO_STAR:
      return "two_star";
    case SSC_RULE_CODE.FIVE_STAR:
      return "five_star";
    case SSC_RULE_CODE.QIAN_FOUR_STAR:
      return "qian_4";
    case SSC_RULE_CODE.FOUR_STAR:
      return "four_star";
    case SSC_RULE_CODE.QIAN_THREE_STAR:
      return "qian_3";
    case SSC_RULE_CODE.ZHONG_THREE_STAR:
      return "zhong_3";
    case SSC_RULE_CODE.THREE_STAR:
      return "three_star";
    case SSC_RULE_CODE.QIANER_TWO_STAR:
      return "qian_2";
    case SSC_RULE_CODE.TWO_STAR:
      return "two_star";
    default:
      return "";
  }
};
