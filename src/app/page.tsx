import "./globals.css";

export default async function Home() {
  const res = await fetch(
    "https://api.github.com/repos/cpalmer90/view-counter",
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return (
    <main>
      {" "}
      <p>{data.stargazers_count}</p>
    </main>
  );
}
