import {palette} from "../common";

export default {
    styleOverrides: {
        root: {
            "& .MuiPaginationItem-root": {
                padding: "6px 8px",
                borderRadius: 0,
                opacity: 1,

                fontSize: 14,
                lineHeight: "17px",
                textAlign: "center",
                fontFeatureSettings: "'ss03' on, 'ss06' on",
                color: "#000000",

                "&.Mui-selected": {
                    backgroundColor: palette.primary.main,
                    color: palette.primary.secondary,
                },
                "&.Mui-disabled": {
                    color: "#E6E6E6"
                },
            },
            "& .MuiPaginationItem-ellipsis": {
                color: palette.primary.main,
            },
        },
        ul: {
            "& li": {
                "&:first-child .MuiButtonBase-root": {
                    borderRadius: "4px 0 0 4px"
                },
                "&:last-child .MuiButtonBase-root": {
                    borderRadius: "0 4px 4px 0"
                },
            }
        }
    }
}
