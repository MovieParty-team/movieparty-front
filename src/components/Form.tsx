"use client";

import { FieldProps } from "@/types/FormProps";
import { Form as FormikForm, Formik, FormikHelpers } from "formik";

interface FormProps {
  children: React.ReactNode;
  initialValues: FieldProps;
  onSubmit: (values: FieldProps, helpers: FormikHelpers<FieldProps>) => void;
}

export default function Form({ children, initialValues, onSubmit }: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}
