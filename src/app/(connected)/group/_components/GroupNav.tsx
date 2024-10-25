export default function GroupNav(props: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <h1 className="text-3xl font-bold text-center">Liste des groupes</h1>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </section>
  );
}
