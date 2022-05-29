import React, {FC, RefObject} from 'react';
import {createUseStyles} from "react-jss";
import {
    Box, Button,
    Grid,
    Step,
    StepContent,
    StepIconProps,
    StepLabel,
    Stepper, Typography
} from "@mui/material";
import {
    CheckRounded as CheckIcon
} from '@mui/icons-material';
import {Formik, FormikProps} from "formik";
import clsx from "clsx";
import RegFirstStep from "./regFirstStep";

import {RegImage} from "../../../../../../assets/images";
import * as Yup from "yup";
import RegSecondStep from "./regSecondStep";
import {IFormDataReg, IFormDataAuth} from "../../../../../../types/FormikTypes";
import {useActions} from "../../../../../../hooks/redux/useActions";
import {useNavigate} from "react-router-dom";
import RegLastStep from "./regLastStep";
import {resetForm} from "../../../../../../helper/resetForm";

interface RegistrationFormProps {
    initRegVal: IFormDataReg;
    refFormik: RefObject<FormikProps<IFormDataReg>>;
    activeRegStep: number;

    onClose: () => void
    onSetIsLoading: (isLoading: boolean) => void
    onNext: () => void
    onBack: () => void
}

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
    const {
        refFormik,
        initRegVal,
        activeRegStep,


        onSetIsLoading,
        onClose,
        onNext,
        onBack
    } = props;
    const classes = useStyles();
    const {
        userReg
    } = useActions();
    const navigate = useNavigate();

    const onSubmit = async () => {
        if (activeRegStep === 0) {
            onNext();
        } else {
            if (refFormik && refFormik.current) {
                const formData = refFormik.current.values;
                await userReg(formData, onSetIsLoading, onNext);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.currentTarget;

        if (refFormik && refFormik.current) {
            const newForm: IFormDataReg = refFormik.current.values;
            newForm[name as keyof IFormDataReg] = value;

            refFormik.current.setValues(newForm);
        }
    };

    const _routeInProfile = () => {
        onClose();
        navigate('/profile');
        resetForm(refFormik, initRegVal);
    }

    return (
        <Grid
            className={classes.root}
            container
            textAlign="center"
        >
            <Formik
                innerRef={refFormik}
                initialValues={initRegVal}
                validationSchema={activeRegStep === 0 ? validationSchemaFirstStep : validationSchemaSecondStep}

                onSubmit={onSubmit}
            >
                {(props) => {
                    const {
                        values,
                        errors,
                        touched,

                        handleSubmit
                    } = props;
                    console.log("values: ", values);
                    return (
                        <>
                            <Grid className={classes.stepperWrapper} item xs={12}>
                                <Stepper
                                    className={classes.stepper}
                                    activeStep={activeRegStep}
                                    orientation="vertical"
                                >
                                    <Step>
                                        <StepLabel
                                            classes={{
                                                label: classes.stepLabel,
                                            }}
                                            StepIconComponent={StepIcon}
                                        >
                                            Личные данные
                                        </StepLabel>
                                        <StepContent>
                                            <RegFirstStep
                                                values={values}
                                                errors={errors}
                                                touched={touched}

                                                onChange={handleChange}
                                                onSubmit={handleSubmit}
                                            />
                                        </StepContent>
                                    </Step>
                                    <Step>
                                        <StepLabel
                                            classes={{
                                                label: classes.stepLabel,
                                            }}
                                            StepIconComponent={StepIcon}
                                        >
                                            Учетные данные
                                        </StepLabel>
                                        <StepContent>
                                            <RegSecondStep
                                                values={values}
                                                touched={touched}
                                                errors={errors}
                                                onChange={handleChange}
                                                onSubmit={handleSubmit}
                                                onBack={onBack}
                                            />
                                        </StepContent>
                                    </Step>
                                    <Step>
                                        <StepLabel
                                            classes={{
                                                label: classes.stepLabel,
                                            }}
                                            StepIconComponent={StepIcon}
                                        >
                                            Вход
                                        </StepLabel>
                                        <StepContent>
                                            <RegLastStep onRoute={_routeInProfile}/>
                                        </StepContent>
                                    </Step>
                                </Stepper>
                            </Grid>
                        </>
                    );
                }}
            </Formik>
        </Grid>
    );
};

const StepIcon: FC<StepIconProps> = (props) => {
    const {
        active,
        completed,
        icon
    } = props;
    const classes = useStyles();
    return (
        <Box className={clsx({
            [classes.stepIconWrapper]: true,
            [classes.stepIconWrapperActive]: active || completed,
        })}>
            {!completed
                ? (
                    <Typography className={classes.stepIconLabel}>{icon}</Typography>
                )
                : (
                    <CheckIcon className={classes.stepIcon}/>
                )
            }
        </Box>
    );
};

const useStyles = createUseStyles({
    root: {
        "&.MuiGrid-root": {
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        }
    },

    stepperWrapper: {
        "&.MuiGrid-root": {
            width: "100%",
        }
    },
    stepper: {
        justifyContent: "space-between",
    },

    stepLabel: {
        "&.MuiStepLabel-label": {
            fontSize: 18,
            lineHeight: "23px",
        },
    },

    stepIconWrapper: {
        width: 32,
        height: 32,
        borderRadius: "100%",
        background: "#9c9c9c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "-2.5px",
    },
    stepIconWrapperActive: {
        background: "#FB8349",
    },
    stepIconLabel: {
        "&.MuiTypography-root": {
            fontWeight: 500,
            fontSize: 18,
            color: "#ffffff",
        }
    },
    stepIcon: {
        "&.MuiSvgIcon-root": {
            "& path": {
                fill: "#ffffff",
            }
        }
    }
});

const validationSchemaFirstStep = Yup.object().shape({
    full_name: Yup.string().required('Введите имя'),
    position: Yup.number().required("Введите возраст"),
});

const validationSchemaSecondStep = Yup.object().shape({
    email: Yup.string().email("Неверный формат E-Mail").required('Введите E-Mail'),
    password: Yup.string().required('Введите пароль'),
});

export default RegistrationForm;