import React, {FC, useRef} from 'react';
import {Box, Grid} from "@mui/material";
import {FeedbackImage} from '../../../../../assets/images';
import {IFormFeedback} from "../../../../../types/FormikTypes";
import {FormikProps} from "formik";
import FeedbackFormik from "./FeedbackFormik";
import {createUseStyles} from "react-jss";

interface FeedbackProps {
}

const initVal: IFormFeedback = {
    email: "",
    name: "",
    question: "",
}

const Feedback: FC<FeedbackProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    const refFormik = useRef<FormikProps<IFormFeedback>>(null);
    return (
        <Box className={classes.root}>
            <Grid container alignItems='center' justifyContent="space-between">
                <Grid item>
                    <Box className={classes.imageWrapper}>
                        <img className={classes.image} src={FeedbackImage} alt="Обратная связь"/>
                    </Box>
                </Grid>
                <Grid item>
                    <FeedbackFormik initVal={initVal} refFormik={refFormik}/>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        margin: "150px 0",
    },
    imageWrapper: {
        width: 700,
        height: 600,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
})

export default Feedback;