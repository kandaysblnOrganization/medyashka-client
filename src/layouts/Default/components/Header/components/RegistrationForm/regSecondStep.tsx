import React, {FC, useState} from 'react';
import {Button, Grid, IconButton, TextField} from "@mui/material";
import clsx from "clsx";
import {createUseStyles} from "react-jss";
import {FormikErrors, FormikTouched} from "formik";
import {VisibilityOffOutlined as VisibilityOffIcon, VisibilityOutlined as VisibilityIcon} from "@mui/icons-material";
import {IFormDataReg} from "../../../../../../types/FormikTypes";

interface RegSecondStepProps {
    values: IFormDataReg;
    touched: FormikTouched<IFormDataReg>;
    errors: FormikErrors<IFormDataReg>;

    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onSubmit: () => void
    onBack: () => void
}

const RegSecondStep: FC<RegSecondStepProps> = (props) => {
    const {
        values,
        errors,
        touched,

        onSubmit,
        onChange,
        onBack
    } = props;
    const classes = useStyles();
    const [visiblePass, setVisiblePass] = useState(false);
    return (
        <Grid
            container
            flexDirection='column'
            textAlign="center"
            rowSpacing={2}
        >
            <Grid item container flexDirection='column'>
                <Grid item mb={2}>
                    <TextField
                        className={classes.textField}
                        variant="filled"
                        size="medium"
                        fullWidth
                        color="secondary"
                        label="E-Mail"
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        name="email"

                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.textField}
                        variant="filled"
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

                        onChange={(e) => onChange(e)}
                    />
                </Grid>
            </Grid>

            <Grid item container columnSpacing={1}>
                <Grid item xs>
                    <Button
                        type="submit"
                        className={clsx({
                            [classes.backButton]: true,
                        })}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="small"

                        onClick={onBack}
                    >
                        Назад
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Button
                        type="submit"
                        className={clsx({
                            [classes.submitButton]: true,
                        })}
                        fullWidth
                        variant="contained"
                        color="secondary"

                        onClick={() => onSubmit()}
                    >
                        Зарегистрироваться
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

const useStyles = createUseStyles({
    textField: {
        "& .MuiFilledInput-root": {
            background: "#fcefe9",
            "&.Mui-focused": {
                background: "#fcefe9",
            },

            "&:hover": {
                background: "#fcefe9",
            }
        },
        "& .MuiInputLabel-root": {
            fontSize: 18,
        },
        "& .MuiFilledInput-input": {
            fontSize: 18,
        },
        '& .MuiFormHelperText-root': {
            fontSize: 16,
        }
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
    backButton: {
        "&.MuiButton-root": {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "22px",
            transition: "all .2s linear",
            textTransform: "none",
            background: "#FD659D",
            padding: 0,
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        }
    }
})

export default RegSecondStep;