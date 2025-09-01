import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

function MapView({ center, zoom = 12, markers = [], focusedMarker }) {
  const markerRefs = useRef([]);

  useEffect(() => {
    if (focusedMarker && markerRefs.current.length > 0) {
      const index = markers.findIndex(
        (m) => m.name === focusedMarker.name
      );
      if (index !== -1 && markerRefs.current[index]) {
        markerRefs.current[index].openPopup();
      }
    }
  }, [focusedMarker, markers]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-[100%] w-[100%]"
      scrollWheelZoom={true}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, i) => (
        <Marker
          key={i}
          position={[marker.lat, marker.lng]}
          ref={(el) => (markerRefs.current[i] = el)}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
