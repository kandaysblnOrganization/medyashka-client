import React, {FC} from 'react';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";

interface MenuBurgerProps {
    isOpenDrawer: boolean;
}

const MenuBurger: FC<MenuBurgerProps> = (props) => {
    const {
        isOpenDrawer
    } = props;
    const classes = useStyles();
    return (
        <Box className={clsx({
            [classes.menuBurger]: true,
            [classes.menuBurgerActive]: isOpenDrawer,
        })}>
            <span></span>
            <span></span>
            <span></span>
        </Box>
    );
};

const useStyles = createUseStyles({
    menuBurger: {
        backgroundColor: "none",
        transform: "scale(1)",
        transition: "all .2s linear",

        "& span": {
            display: "block",
            height: "6px",
            backgroundColor: "#000000",
            borderRadius: "100px",
            marginBottom: "7px",
            transition: "all .2s linear",

            "&:first-child": {
                width: "35px",
            },

            "&:nth-child(2)": {
                width: "45px",
            },

            "&:last-child": {
                width: "25px",
                marginBottom: "0",
            }
        },

        "&:hover": {
            "& span": {
                "&:first-child": {
                    width: "45px",
                    backgroundColor: "#FB8349",
                },

                "&:nth-child(2)": {
                    width: "45px",
                    backgroundColor: "#FB8349",
                },

                "&:last-child": {
                    width: "45px",
                    backgroundColor: "#FB8349",
                }
            },
        }
    },

    menuBurgerActive: {
        transform: "scale(0)",
    }
})

export default MenuBurger;