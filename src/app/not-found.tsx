import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center items-center pt-[20%]">
      <h1>404 Not Found...</h1>
      <p>{"Nous n'avons pas pu trouver cette page"}</p>
      <Button type="primary" href="/home">
        {"Retour a l'accuei"}l
      </Button>
    </div>
  );
}
