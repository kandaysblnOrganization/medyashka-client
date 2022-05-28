import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {Grid} from "@mui/material";

interface RegistrationFormProps {

}

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    return (
        <Grid
            className={classes.root}
            container
            alignItems="center"
            textAlign="center"
        >

        </Grid>
    );
};

const useStyles = createUseStyles({
    root: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default RegistrationForm;