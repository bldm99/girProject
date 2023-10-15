import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";

const Heatmap = () => {
  useEffect(() => {
    // Datos de ejemplo: coordenadas (latitud, longitud) e intensidad
    const data = [
      [37.7749, -122.4194, 5],
      [34.0522, -118.2437, 10],
      [40.7128, -74.0060, 15],
      // Agrega más puntos de datos aquí...
    ];

    // Ajusta el máximo, el radio y el desenfoque según tus datos
    const max = 15;
    const radius = 25;
    const blur = 30;

    const map = L.map("heatmap");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    const heatmapLayer = new HeatmapLayer({
      data,
      radius,
      max,
      blur,
    });

    map.addLayer(heatmapLayer);
  }, []);

  return <div id="heatmap" style={{ width: "100%", height: "600px" }}></div>;
};

export default Heatmap;