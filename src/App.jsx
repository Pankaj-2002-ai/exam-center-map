import React, { useState} from "react";
import SearchBar from "./components/SearchBar";
import MapView from "./components/MapView";
import ExamCenterList from "./components/ExamCenterList";
import examCenters from "./data/examCenters";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [focusedCenter, setFocusedCenter] = useState(null);
  const [query, setQuery] = useState("");

  const allCenters = Object.entries(examCenters).flatMap(([city, centers]) =>
    centers.map(center => ({ ...center, city }))
  );

  const filteredCenters = query
    ? allCenters.filter(center => 
        center.city.includes(query) || center.name.toLowerCase().includes(query)
      )
    : [];

  const mapCenter = focusedCenter
    ? [focusedCenter.lat, focusedCenter.lng]
    : selectedCity
    ? [selectedCity.lat, selectedCity.lng]
    : [20.5937, 78.9629];

  const handleCitySelect = async (cityName) => {
    if (!cityName) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${cityName},India&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setSelectedCity({
          name: cityName,
          lat: parseFloat(lat),
          lng: parseFloat(lon),
        });
        setFocusedCenter(null);
      } else {
        alert("City not found");
      }
    } catch {
      alert("Search failed");
    }
  };

  return (
    <div className="flex h-[100vh]">
        <div
          className="flex-1 overflow-y-auto border-l border-[#4e847c] p-2.5 bg-[#edeff1]"
        >
          {filteredCenters.length === 0 ? (
          <div className="text-[#0A2540] text-[20px] font-medium font-inter text-2xl text-center my-[20px]">
            Show Exam Centers
            </div>
          ) : (
            <ExamCenterList
              centers={filteredCenters}
              onCenterClick={setFocusedCenter}
              selectedCenter={focusedCenter}
            />
          )}
        </div>
        <div className="flex flex-col grow-[1]">
          <div className="flex flex-row justify-between my-[20px]">
            <SearchBar onQueryChange={setQuery} onCitySelect={handleCitySelect} /> 
            <img src="https://examroom.ai/storage/logos/company_logo.svg" className="w-[250px] h-[60px] mx-[20px] flex justify-start" />
          </div>
          <MapView center={mapCenter} markers={filteredCenters} focusedMarker={focusedCenter} />
        </div>
    </div>
  );
}

export default App;
