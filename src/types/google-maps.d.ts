declare global {
  interface Window {
    initMap: () => void;
  }
}

declare namespace google.maps {
  class Map {
    constructor(element: HTMLElement, options: MapOptions);
  }

  class Marker {
    constructor(options: MarkerOptions);
  }

  interface MapOptions {
    zoom: number;
    center: LatLng;
    mapId?: string;
  }

  interface MarkerOptions {
    position: LatLng;
    map: Map;
    title?: string;
  }

  interface LatLng {
    lat: number;
    lng: number;
  }
}

export {};