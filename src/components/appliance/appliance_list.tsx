import {Listbox, ListboxItem} from '@nextui-org/react';
import ApplianceItem from '@/components/appliance_draggable';
import {Appliance} from '@/lib/definitions';

interface ApplianceListProps {
  appliances: Appliance[];
}

export default function ApplianceList(props: ApplianceListProps) {
  const renderAppliance = (appliance: Appliance) => (
    <ListboxItem key={appliance.id}>
      <ApplianceItem {...appliance} />
    </ListboxItem>
  );

  return (
    <section className="appliances">
      <h1>Оборудование</h1>
      <Listbox className="appliance-list" aria-label="Appliances">
        {props.appliances.map(renderAppliance)}
      </Listbox>
    </section>
  );
}
