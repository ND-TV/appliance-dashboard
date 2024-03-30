import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler"
import "@bitnoi.se/react-scheduler/dist/style.css";
import { useEffect, useState } from "react";
import InfoModal from "./info_modal";

export default function SchedulerComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [filterButtonState, setFilterButtonState] = useState(0);
    const [selectedItem, setSelectedItem] = useState<any>();
    const [selectedTile, setSelectedTile] = useState<any>();


    useEffect(() => {
      setIsLoading(true);

      // fetching data
      
      setIsLoading(false);
    }, []);

    const handleItemClick = (item: any) => {
      setSelectedItem({
        id: item.id,
        type: item.label.title,
        subtitle: item.label.subtitle,
      });
    };

    const handleTileClick = (item: any) => {
      setSelectedItem({
        id: item.id,
        startDate: item.startDate,
        endDate: item.endDate,
        description: item.description
      });
    };
    
    const handleCloseItemModal = () => {
      setSelectedItem(null);
    };

    const handleCloseTileModal = () => {
      setSelectedTile(null);
    };

    return(
      <>
        <Scheduler
        // decide when to show loading indicators
        isLoading={isLoading}
        // your data
        data={mockedSchedulerData}
        onTileClick={(handleTileClick)}

        // callback when user click's on one of the grid's tile
        onItemClick={(handleItemClick)}
        //onItemClick={(item) => console.log(item)}
        // filter function that let's you handling filtering on your end
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0)
        }}

        config={{
          /* 
            change filter button state based on your filters
            < 0 - filter button invisible,
            0 - filter button visible, no filter applied, clear filters button invisible,
            > 0 - filter button visible, filters applied (clear filters button will be visible)
          */
          filterButtonState,
          // decide start zoom variant (0 - weeks, 1 - days)
          zoom: 1,
          // select language for scheduler
          lang: "en",
          // decide how many resources show per one page
          maxRecordsPerPage: 5,
          
        }}
        />
        {selectedTile && (<InfoModal onClose={handleCloseTileModal} objectInfo={selectedItem} />)}
        {selectedItem && (<InfoModal onClose={handleCloseItemModal} objectInfo={selectedItem} />)}
      </>
    );
};

const mockedSchedulerData: SchedulerData = [
    {
      id: "1",
      label: {
        icon: "https://picsum.photos/24",
        title: "Чайник",
        subtitle: "Tefal"
      },
      data: [
        {
          id: "1",
          startDate: new Date("2024-03-28T15:31:24.272Z"),
          endDate: new Date("2024-04-04T10:28:22.649Z"),
          title: "Леха",
          occupancy: 3600,
          description: "Описание",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "2",
          startDate: new Date("2024-03-28T15:31:24.272Z"),
          endDate: new Date("2024-04-05T10:28:22.649Z"),
          title: "Саня",
          occupancy: 3600,
          description: "Описание",
          bgColor: "rgb(254,165,177)"
        },
        {
          id: "3",
          startDate: new Date("2024-03-28T15:31:24.272Z"),
          endDate: new Date("2024-04-10T10:28:22.649Z"),
          title: "Никич",
          occupancy: 3600,
          description: "Описание",
          bgColor: "rgb(254,165,177)"
        },
      ]
    }
  ];