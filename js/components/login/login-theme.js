import color from 'color';

import { Platform } from 'react-native';

module.exports = {
  brandPrimary: '#428bca',
  brandInfo: '#5bc0de',
  brandSuccess: '#5cb85c',
  backgroundColor: '#7d59c8',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',

  inverseTextColor: '#fff',
  textColor: '#fff',

  fontSizeBase: 15,
  titleFontSize: 17,

  get darkenButton() {
    return color(this.backgroundColor).darken(0.4).hexString();
  },

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },
  get btnTextSize() {
    return this.fontSizeBase * 1.1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  borderRadiusBase: 4,

  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  footerHeight: 55,
  toolbarHeight: (Platform.OS === 'ios') ? 70 : 55,
  toolbarDefaultBg: '#00c497',
  toolbarInverseBg: '#222',

  tabBgColor: '#00c497',
  tabTextColor: '#fff',

  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  btnLineHeight: (Platform.OS === 'ios') ? 20 : 23,

  cardDefaultBg: '#fff',

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },

  borderWidth: 1,

  inputColor: 'rgba(255, 255, 255, 1)',
  get inputColorPlaceholder() {
    return 'rgba(255, 255, 255, 0.6)';
  },
  inputBorderColor: '#d7d7d7',
  inputHeightBase: 40,
  inputGroupMarginBottom: 10,
  inputPaddingLeft: 5,
  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',

  jumbotronPadding: 30,
  jumbotronBg: '#C9C9CE',

  contentPadding: 10,

  listBorderColor: '#ddd',
  listDividerBg: '#F5F5F5',
  listItemPadding: 15,
  listNoteColor: '#58575C',

  iconFontSize: 32,

  badgeColor: '#fff',
  badgeBg: '#ED1727',

  lineHeight: 15,

  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',
};
