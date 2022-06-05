import React, {FC, RefObject} from 'react';
import {IFormFeedback} from "../../../../../types/FormikTypes";
import {Formik, FormikProps} from "formik";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {
    PersonRounded as PersonIcon,
    EmailRounded as EmailIcon,
    ModeCommentRounded as CommentIcon
} from "@mui/icons-material";
import {createUseStyles} from "react-jss";
import * as Yup from "yup";

interface FeedbackFormProps {
    initVal: IFormFeedback;
    refFormik: RefObject<FormikProps<IFormFeedback>>;
}

const FeedbackFormik: FC<FeedbackFormProps> = (props) => {
    const {
        initVal,
        refFormik
    } = props;
    const classes = useStyles();

    const onSubmit = () => {
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.currentTarget;
        if (refFormik && refFormik.current) {
            const newForm: IFormFeedback = refFormik.current.values;
            newForm[name as keyof IFormFeedback] = value;

            refFormik.current.setValues(newForm);
        }
    };
    return (
        <Grid className={classes.root} container flexDirection='column' alignItems='center'>
            <Grid item mb={2}>
                <Typography className={classes.title} variant='h2'>Связаться с нами</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.subtitle} variant="h6">Пожалуйста, используйте форму ниже, чтобы
                    связаться с нами.</Typography>
            </Grid>
            <Grid item mb={4}>
                <Typography className={classes.subtitle} variant="h6">
                    Мы ответим Вам как можно скорее.
                </Typography>
            </Grid>
            <Formik
                innerRef={refFormik}
                initialValues={initVal}
                validationSchema={validationSchema}

                onSubmit={onSubmit}
            >
                {(props) => {
                    const {
                        values,
                        errors,
                        touched,
                        handleSubmit
                    } = props;

                    return (
                        <>
                            <Grid item container width="450px">
                                <Grid item xs={12}>
                                    <Box className={classes.textFieldWrapper}>
                                        <PersonIcon className={classes.icon} fontSize="large"/>
                                        <TextField
                                            className={classes.textField}
                                            variant="filled"
                                            size="medium"
                                            fullWidth
                                            color="secondary"
                                            label="Ваше имя"
                                            value={values.name}
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                            name="name"

                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} mt={2.5}>
                                    <Box className={classes.textFieldWrapper}>
                                        <EmailIcon className={classes.icon} fontSize="large"/>
                                        <TextField
                                            className={classes.textField}
                                            variant="filled"
                                            size="medium"
                                            type="email"
                                            fullWidth
                                            color="secondary"
                                            label="Ваш e-mail"
                                            value={values.email}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            name="email"

                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} mt={2.5}>
                                    <Box className={classes.textFieldWrapper}>
                                        <CommentIcon className={classes.icon} fontSize="large"/>
                                        <TextField
                                            className={classes.textField}
                                            variant="filled"
                                            size="medium"
                                            multiline
                                            rows={6}
                                            maxRows={6}
                                            fullWidth
                                            color="secondary"
                                            label="Напишите свой вопрос"
                                            value={values.question}
                                            error={Boolean(touched.question && errors.question)}
                                            helperText={touched.question && errors.question}
                                            name="question"

                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item mt={5} className={classes.buttonWrapper}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={classes.button}

                                        onClick={() => handleSubmit()}
                                    >
                                        Отправить
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    );
                }}
            </Formik>
        </Grid>
    );
};

const useStyles = createUseStyles({
    root: {},
    textFieldWrapper: {
        display: "flex",
    },
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

    icon: {
        marginRight: 8,

        "& > path": {
            stroke: "#78675D",
            strokeWidth: 1,
            fill: "#FFFFFF",
        }
    },

    title: {
        "&.MuiTypography-root": {
            color: "#FB8349",
            letterSpacing: "0.045em",
            textTransform: "uppercase",
        }
    },
    subtitle: {
        "&.MuiTypography-root": {
            color: "#585467",
            letterSpacing: "0.045em",
        }
    },
    buttonWrapper:{
        "&.MuiGrid-root": {
            borderRadius: 25,
            position: "relative",
            border: "4px solid transparent",
            boxShadow: "-2px -2px 7px rgba(255, 232, 150, 0.58), 2px 2px 6px rgba(125, 90, 0, 0.83)",
            marginLeft: 'auto',
            "&:before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: -5,
                borderRadius: 25,
                background: `linear-gradient(to bottom right, #FFD15A, #C5801C)`,
                backgroundColor: "none",
            }
        }
    },
    button: {
        "&.MuiButton-root": {
            padding: "12px 36px",
            borderRadius: 25,
            fontWeight: 700,
            fontSize: 28,
            lineHeight: "34px",
            transition: "all .2s linear",
            "&:hover": {
                background: "#eaaa00",
            }
        }
    },
});

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный формат E-Mail").required('Заполните поле'),
    name: Yup.string().required('Заполните поле'),
    question: Yup.string().required('Заполните поле'),
});

export default FeedbackFormik;