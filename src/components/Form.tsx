"use client";

import { FieldProps } from "@/types/FormProps";
import { Form as FormikForm, Formik, FormikHelpers } from "formik";

interface FormProps {
  children: React.ReactNode;
  initialValues: FieldProps;
  validationSchema?: any;
  onSubmit: (values: FieldProps, helpers: FormikHelpers<FieldProps>) => void;
  className?: string;
}

export default function Form({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  className
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <FormikForm className={className}>{children}</FormikForm>
    </Formik>
  );
}
