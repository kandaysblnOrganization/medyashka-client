import React, {FC} from 'react';
import {Button, Container, Grid} from "@mui/material";
import {MenuBurger} from "../../../../../../components";
import {LogoutRounded as LogOutIcon} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import {createUseStyles} from "react-jss";

interface HeaderActionsProps {
}

const HeaderActions: FC<HeaderActionsProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    const location = useLocation();
    return (
        <Container maxWidth="xl">
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Button
                        className={classes.headerButton}
                        color="secondary"
                        size="small"
                    >
                        <MenuBurger/>
                    </Button>
                </Grid>
                {location.pathname === '/profile' && (
                    <Grid item>
                        <Button
                            endIcon={<LogOutIcon/>}
                            variant="outlined"
                        >
                            Выход
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

const useStyles = createUseStyles({
    headerButton: {
        width: "50px",
        height: "50px",
        borderRadius: "100px",
    }
})

export default HeaderActions;