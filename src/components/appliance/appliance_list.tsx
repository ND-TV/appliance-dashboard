import ApplianceDraggable from '@/components/appliance_draggable';
import {Appliance} from '@/lib/definitions';

interface ApplianceListProps {
  appliances: Appliance[];
}

export default function ApplianceList(props: ApplianceListProps) {
  const renderAppliance = (appliance: Appliance, applianceIndex: number) => (
    <li>
      <ApplianceDraggable
        key={`appliance-${applianceIndex}`}
        {...appliance}
      />
    </li>
  );

  return (
    <section className="appliances">
      <h1>Оборудование</h1>
      <ul className="appliance-list">
        {props.appliances.map(renderAppliance)}
      </ul>
    </section>
  );
}
