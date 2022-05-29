import React, {FC} from 'react';
import {Button, Grid, Typography} from "@mui/material";
import {useTypedSelector} from "../../../../../../hooks/redux/useTypedSelector";
import clsx from "clsx";
import {createUseStyles} from "react-jss";

interface RegLastStepProps {
    onRoute: () => void
}

const RegLastStep: FC<RegLastStepProps> = (props) => {
    const {
        onRoute
    } = props;
    const classes = useStyles();
    const {user} = useTypedSelector(state => state.user);
    return (
        <Grid container flexDirection="column">
            <Grid item mb={2}>
                <Typography className={classes.welcomeText}>Добро пожаловать, <span className={classes.userName}>{user?.full_name}</span></Typography>
            </Grid>
            <Grid item>
                <Button
                    type="submit"
                    className={clsx({
                        [classes.button]: true,
                    })}
                    fullWidth
                    variant="contained"
                    color="secondary"

                    onClick={onRoute}
                >
                    Перейти в профиль
                </Button>
            </Grid>
        </Grid>
    );
};

const useStyles = createUseStyles({
    button: {
        "&.MuiButton-root": {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    },

    welcomeText: {
        "&.MuiTypography-root": {
            textAlign: "left",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "29px",
            color: "rgba(105, 57, 0, 0.92)",
        }
    },
    userName: {
        color: "#FD659D",
    }

})

export default RegLastStep;