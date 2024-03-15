import { sql } from "@vercel/postgres";

export default async function Home() {
  const {rows} = await sql`SELECT * FROM Appliances`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Главная!</h1>
      <section>
        <h2 className="text-red-500">Оборудование</h2>
        <div>
          {rows.map((row: any) => (
          <div className='flex gap-20' key={row.id}>
            <div>{row.id}</div>
            <div>{row.type}</div>
            <div>{row.price}</div>
          </div>
      ))}
    </div>
      </section>
    </main>
  );
}
