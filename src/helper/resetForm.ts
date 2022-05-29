import {RefObject} from "react";
import {FormikProps} from "formik";

export const resetForm = (ref: RefObject<FormikProps<any>>, initialValues: {}) => {
    if (ref && ref.current) {
        const resetForm = ref.current.values;
        Object.keys(initialValues).map(key => {
            resetForm[key] = "";
        })

        ref.current.resetForm({values: resetForm});
    }
};