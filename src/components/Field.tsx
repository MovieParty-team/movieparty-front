import { Field as FormikField } from "formik";

export default function Field({
  children,
  ...props
}: React.ComponentProps<typeof FormikField>) {
  return <FormikField {...props}>{children}</FormikField>;
}
