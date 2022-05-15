import React, {FC, useRef} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {AccountActionsImage} from "../../../../../../assets/images";
import clsx from "clsx";
import {Formik, FormikProps} from "formik";
import {createUseStyles} from "react-jss";
import {
    AuthImage
} from '../../../../../../assets/images';

interface AuthorizationFormProps {
}

interface FormModel {
    email: string;
    password: string;
}

const initAuthVal: FormModel = {
    email: "",
    password: "",
};

const AuthorizationForm: FC<AuthorizationFormProps> = (props) => {
    const {} = props;
    const classes = useStyles();
    const refFormik = useRef<FormikProps<FormModel>>(null);

    const handleSubmit = () => {
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.currentTarget;

        if (refFormik !== null && refFormik.current !== null) {
            const newForm: FormModel = refFormik.current.values;
            newForm[name as keyof FormModel] = value;

            refFormik.current.setValues(newForm);
        }
    };
    return (
        <Grid
            container
            alignItems="center"
            textAlign="center"
        >
            <Formik
                innerRef={refFormik}
                initialValues={initAuthVal}
                onSubmit={handleSubmit}
            >
                {(props) => {
                    const {
                        values,
                        errors,
                        touched,

                    } = props

                    return (
                        <>
                            <Grid mb={1} item xs={12}>
                                <img height={240} src={AuthImage} alt="Медяшка"/>
                            </Grid>
                            <Grid mb={5} item xs={12}>
                                <TextField
                                    type="email"
                                    fullWidth
                                    color="secondary"
                                    label="E-Mail"
                                    value={values.email}
                                    name="email"

                                    onChange={(e) => handleChange(e)}
                                />
                            </Grid>
                            <Grid mb={7} item xs={12}>
                                <TextField
                                    type="password"
                                    fullWidth
                                    color="secondary"
                                    label="Пароль"
                                    value={values.password}
                                    name="password"

                                    onChange={(e) => handleChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={clsx({
                                        [classes.actionButton]: true,
                                    })}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                >
                                    Войти
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </>
                    );
                }}
            </Formik>
        </Grid>
    );
};

const useStyles = createUseStyles({
    actionButton: {
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
})

export default AuthorizationForm;