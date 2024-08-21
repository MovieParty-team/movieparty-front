import Form from "@/components/Form";
import { FieldProps } from "@/types/FormProps";
import Link from "next/link";

interface AuthPageProps {
  title: "Connexion" | "Inscription";
  children: React.ReactNode;
  initialValues: FieldProps;
  onSubmit: (values: FieldProps) => void;
}

export default function AuthPage({
  title,
  children,
  initialValues,
  onSubmit,
}: AuthPageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {children}
        <button type="submit">Se connecter</button>
      </Form>

      <Link href={title === "Connexion" ? "/register" : "/login"}>
        {title === "Connexion" ? "Créer un compte" : "Se connecter"}
      </Link>
    </div>
  );
}
