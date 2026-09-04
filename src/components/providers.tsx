"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { locations, type Location, type LocationId } from "@/lib/data";

type LocationContextValue = {
  locationId: LocationId;
  setLocationId: (id: LocationId) => void;
  location: Location;
};

const LocationContext = createContext<LocationContextValue | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [locationId, setLocationIdState] = useState<LocationId>("downtown");

  useEffect(() => {
    const saved = window.localStorage.getItem("lapo-location");
    if (saved === "downtown" || saved === "westside" || saved === "harbor") {
      setLocationIdState(saved);
    }
  }, []);

  const setLocationId = (id: LocationId) => {
    setLocationIdState(id);
    window.localStorage.setItem("lapo-location", id);
  };

  const location = useMemo(
    () => locations.find((item) => item.id === locationId) ?? locations[0],
    [locationId],
  );

  return (
    <LocationContext.Provider value={{ locationId, setLocationId, location }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useClubLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useClubLocation must be used within Providers");
  }
  return ctx;
}
