const palette = require('./palette');

export default {
    h1: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: '96px',
        lineHeight: '117px',
    },
    h2: {
        color: palette.text.primary,
        fontWeight: 800,
        fontSize: '48px',
        lineHeight: '59px'
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '34px',
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '29px'
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '18px',
        letterSpacing: '-0.05px',
        lineHeight: '20px',
        fontFeatureSettings: "'ss01' on"
    },
    h6: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '18px',
        letterSpacing: '0.045em',
        lineHeight: '22px'
    },

    subtitle1: {
        color: palette.text.primary,
        fontWeight: 800,
        fontSize: '36px',
        lineHeight: '44px'
    },
    subtitle2: {
        color: palette.text.primary,
        fontSize: "9px",
        lineHeight: '11px',
    },

    body1: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px'
    },
    body2: {
        color: palette.text.primary,
        fontSize: '9px',
        lineHeight: '11px',
    },

    caption: {
        color: palette.text.primary,
        fontSize: '11px',
        letterSpacing: '0.33px',
        lineHeight: '13px'
    },
    overline: {
        color: palette.text.primary,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.33px',
        lineHeight: '13px',
    },

    fontFamily: ['Montserrat Alternates'].join(','),
    fontSize: 14
};
