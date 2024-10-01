import Button from "@/components/Button";
import Form from "@/components/Form";
import { FieldProps } from "@/types/FormProps.types";

interface AuthPageProps {
  title: "Connexion" | "Inscription";
  children: React.ReactNode;
  initialValues: FieldProps;
  validationSchema?: any;
  onSubmit: (values: FieldProps) => void;
}

export default function AuthPage({
  title,
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: AuthPageProps) {
  return (
    <main className="flex flex-col">
      <div className="w-9/12 flex flex-col justify-start gap-10 pt-20 pl-5 md:w-3/12 mx-auto">
        <h1 className="text-4xl text-textPrimary font-bold">{title}</h1>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          {children}
          <Button
            id="login"
            htmlType="submit"
            type="primary"
            className="mt-5 p-5"
          >
            {title}
          </Button>
        </Form>
        <Button
          type="link"
          href={title === "Connexion" ? "/register" : "/login"}
        >
          {title === "Connexion" ? "Créer un compte" : "J'ai déja un compte"}
        </Button>
      </div>
    </main>
  );
}
