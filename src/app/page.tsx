import {appliances} from '@/lib/placeholder_data';
import CalendarPage from './core/pages/calendar/calendar-page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto max-w-7xl">
      {/* <h1>Главная!</h1> */}
      <CalendarPage/>
      <section>
        <h2 className="text-red-500">Оборудование</h2>
        {JSON.stringify(appliances, null, 4)}
      </section>
    </main>
  );
}
