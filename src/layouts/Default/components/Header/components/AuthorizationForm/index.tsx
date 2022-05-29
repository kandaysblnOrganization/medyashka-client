import React, {FC, RefObject, useState} from 'react';
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {VisibilityOffOutlined as VisibilityOffIcon, VisibilityOutlined as VisibilityIcon} from "@mui/icons-material";
import {AuthImage} from "../../../../../../assets/images";
import clsx from "clsx";
import {Formik, FormikProps} from "formik";
import {createUseStyles} from "react-jss";
import * as Yup from "yup";
import {useActions} from "../../../../../../hooks/redux/useActions";
import {useNavigate} from "react-router-dom";
import {IFormDataAuth} from "../../../../../../types/FormikTypes";

interface AuthorizationFormProps {
    initAuthVal: IFormDataAuth;
    refFormik: RefObject<FormikProps<IFormDataAuth>>;

    onClose: () => void
    onSetIsLoading: (isLoading: boolean) => void
}

const AuthorizationForm: FC<AuthorizationFormProps> = (props) => {
    const {
        initAuthVal,
        refFormik,

        onClose,
        onSetIsLoading
    } = props;
    const classes = useStyles();
    const [visiblePass, setVisiblePass] = useState(false);
    const {
        userAuth
    } = useActions();
    const navigate = useNavigate();

    const onSubmit = async () => {
        if (refFormik && refFormik.current) {
            const newForm: IFormDataAuth = await refFormik.current.values;
            await userAuth(newForm, onClose, onSetIsLoading);
            await navigate('/profile');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.currentTarget;

        if (refFormik && refFormik.current) {
            const newForm: IFormDataAuth = refFormik.current.values;
            newForm[name as keyof IFormDataAuth] = value;

            refFormik.current.setValues(newForm);
        }
    };
    return (
        <>
            <Grid
                className={classes.root}
                container
                alignItems="center"
                textAlign="center"
            >
                <Formik
                    innerRef={refFormik}
                    initialValues={initAuthVal}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => {
                        const {
                            values,
                            errors,
                            touched,

                            handleSubmit,
                            resetForm
                        } = props;

                        return (
                            <>
                                <Grid item xs={12}>
                                    <img height={240} src={AuthImage} alt="Медяшка"/>
                                </Grid>
                                <Grid item container>
                                    <Grid mb={4} item xs={12}>
                                        <TextField
                                            className={classes.textField}
                                            size="medium"
                                            type="email"
                                            fullWidth
                                            color="secondary"
                                            label="E-Mail"
                                            value={values.email}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            name="email"

                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Grid>
                                    <Grid mb={3} container item xs={12}>
                                        <Grid item mb={1} xs={12}>
                                            <TextField
                                                className={classes.textField}
                                                size="medium"
                                                type={visiblePass ? "text" : "password"}
                                                fullWidth
                                                color="secondary"
                                                label="Пароль"
                                                value={values.password}
                                                error={Boolean(touched.password && errors.password)}
                                                helperText={touched.password && errors.password}
                                                name="password"
                                                InputProps={{
                                                    endAdornment: (
                                                        <IconButton
                                                            size="small"

                                                            onClick={() => setVisiblePass(!visiblePass)}
                                                        >
                                                            {visiblePass
                                                                ? <VisibilityIcon/>
                                                                : <VisibilityOffIcon/>
                                                            }
                                                        </IconButton>
                                                    )
                                                }}

                                                onChange={(e) => handleChange(e)}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                disableRipple
                                                fullWidth
                                                size="small"
                                                className={classes.actionButton}
                                            >
                                                Забыли пароль?
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs={12}>
                                        <Grid item mb={1} xs={12}>
                                            <Button
                                                className={clsx({
                                                    [classes.submitButton]: true,
                                                })}
                                                fullWidth
                                                variant="contained"
                                                color="secondary"

                                                onClick={() => handleSubmit()}
                                            >
                                                Войти
                                            </Button>
                                        </Grid>
                                        <Grid item container xs={12} alignItems='center'>
                                            <Grid item xs>
                                                <Typography variant="body1" textAlign="right">Нет аккаунта?</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Button
                                                    disableRipple
                                                    fullWidth
                                                    size="small"
                                                    className={classes.actionButton}
                                                >
                                                    Зарегистрируйтесь
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                        );
                    }}
                </Formik>
            </Grid>
        </>
    );
};

const useStyles = createUseStyles({
    root: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    submitButton: {
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

    textField: {
        "& .MuiInputLabel-root": {
            fontSize: 18,
        },
        "& .MuiOutlinedInput-input": {
            fontSize: 18,
        },
        '& .MuiFormHelperText-root': {
            fontSize: 16,
        }
    },

    actionsWrapper: {
        marginBottom: 14,
    },
    actionButton: {
        "&.MuiButton-root": {
            height: "auto",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            color: "#FB8349",
            justifyContent: "flex-start",
            padding: 0,
            marginLeft: 6,
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    }
})

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный формат E-Mail").required('Введите E-Mail'),
    password: Yup.string().required('Введите пароль'),
});


export default AuthorizationForm;