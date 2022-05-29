import React, {FC} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {FormikErrors, FormikTouched} from "formik";
import {createUseStyles} from "react-jss";
import clsx from "clsx";
import {IFormDataReg} from "../../../../../../types/FormikTypes";

interface RegFirstStepProps {
    values: IFormDataReg;
    touched: FormikTouched<IFormDataReg>;
    errors: FormikErrors<IFormDataReg>;

    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onSubmit: () => void
}

const RegFirstStep: FC<RegFirstStepProps> = (props) => {
    const {
        values,
        errors,
        touched,

        onChange,
        onSubmit
    } = props;
    const classes = useStyles();
    return (
        <>
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
                            label="Имя"
                            value={values.full_name}
                            error={Boolean(touched.full_name && errors.full_name)}
                            helperText={touched.full_name && errors.full_name}
                            name="full_name"

                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            className={classes.textField}
                            variant="filled"
                            size="medium"
                            fullWidth
                            color="secondary"
                            label="Возраст"
                            value={values.position}
                            error={Boolean(touched.position && errors.position)}
                            helperText={touched.position && errors.position}
                            name="position"

                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs={12}>
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
                            Далее
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
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
            background: "#FD659D",
            "&:hover": {
                color: "rgba(75, 0, 0, 0.92)",
            }
        },
    },
})

export default RegFirstStep;