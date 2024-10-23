import { Field as FormikField } from "formik";

export default function Field({
  children,
  ...props
}: React.ComponentProps<typeof FormikField>) {
  return (
    <FormikField aria-label={"textbox"} {...props}>
      {children}
    </FormikField>
  );
}
