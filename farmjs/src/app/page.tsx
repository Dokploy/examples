import { Counter } from "../components/counter";

export default function HomePage() {
  const renderedAt = new Date().toISOString();

  return (
    <main>
      <h1>Farm.js on Dokploy</h1>
      <p>
        This page was rendered on the server at <code>{renderedAt}</code>.
      </p>
      <Counter />
    </main>
  );
}
