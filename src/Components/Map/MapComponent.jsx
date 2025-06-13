import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { salons } from "../../data/salonMapData";
import SalonList from "./SalonMapList";
import { ZoomControl } from "react-leaflet";
import FilterBox from "./FilterBox";

const defaultIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [30, 30],
});

const selectedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [45, 45],  // increased size for selected marker
});


// Zoom in to selected location
function MapFlyToLocation({ selectedSalon }) {
  const map = useMap();

  React.useEffect(() => {
    if (selectedSalon) {
      map.flyTo([selectedSalon.lat, selectedSalon.lng], 13, {
        duration: 1.5,
      });
    }
  }, [selectedSalon, map]);

  return null;
}

function MapComponent() {
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[480px]">
        <SalonList
          salons={salons}
          onSelect={(salon) => setSelectedSalon(salon)}
          selectedSalon={selectedSalon}
          onBack={() => setSelectedSalon(null)}
          onOpenFilter={() => setShowFilters(true)}
        />
      </div>

      <div className="flex-1 order-1 md:order-2 md:flex-1">
        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={12}
          className="h-[300px] md:h-screen w-full"
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {/* Map Icons */}
          <ZoomControl position="bottomright" />

          {/* Zoom in to location when selected */}
          <MapFlyToLocation selectedSalon={selectedSalon} />

          {salons.map((salon) => (
            <Marker
              key={salon.id}
              position={[salon.lat, salon.lng]}
              icon={selectedSalon?.id === salon.id ? selectedIcon : defaultIcon}
              eventHandlers={{
                click: () => {
                  setSelectedSalon(salon);
                },
              }}
            >
              <Popup>
                <strong>{salon.name}</strong>
                <br />
                {salon.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* Filter Box */}
      {showFilters && <FilterBox onClose={() => setShowFilters(false)} />}
    </div>
  );
}

export default MapComponent;