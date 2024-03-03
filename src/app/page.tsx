import {appliances} from '@/lib/placeholder_data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Главная!</h1>
      <section>
        <h2 className="text-red-500">Оборудование</h2>
        {JSON.stringify(appliances, null, 4)}
      </section>
    </main>
  );
}
