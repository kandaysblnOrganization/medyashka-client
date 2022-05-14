import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {
    Box,
    Drawer,
    List,
    ListItem, ListItemButton, ListItemText
} from "@mui/material";

interface HeaderDrawerProps {
    isOpen: boolean;
    isAuth: boolean;
    onClose: () => void;
}

const HeaderDrawer: FC<HeaderDrawerProps> = (props) => {
    const {
        isOpen,
        isAuth,

        onClose
    } = props;
    const classes = useStyles();

    const getNavList = (isAuth: boolean) => {
        if (isAuth) {
            return [
                {
                    id: 1,
                    label: "Главная",
                    to: "/",
                    onClick: null,
                },
                {
                    id: 2,
                    label: "Книги",
                    to: "/books",
                    onClick: null,
                },
                {
                    id: 3,
                    label: "Профиль",
                    to: "/profile",
                    onClick: null,
                },
                {
                    id: 4,
                    label: "Разработчики",
                    to: "/aboutUs",
                    onClick: null,
                }
            ]
        } else {
            return [
                {
                    id: 5,
                    label: "Главная",
                    to: "/",
                    onClick: null,
                },
                {
                    id: 6,
                    label: "Книги",
                    to: "/books",
                    onClick: null,
                },
                {
                    id: 7,
                    label: "Аккаунт",
                    onClick: null,
                },
                {
                    id: 8,
                    label: "Разработчики",
                    to: "/aboutUs",
                    onClick: null,
                }
            ]
        }
    };
    return (
        <>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={onClose}
            >
                <Box>
                    <List>
                        {
                            getNavList(isAuth).map(item => (
                                <ListItem
                                    key={item.id}
                                >
                                    <ListItemButton>
                                        <ListItemText primary={item.label}/>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

const useStyles = createUseStyles({});

export default HeaderDrawer;