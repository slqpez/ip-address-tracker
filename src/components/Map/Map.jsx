import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css"

export default function Map() {
  let position = [51.505, -0.09];
  
  let style={
    height: "100%",
  }
  return (
    <div className="Map">
      <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false} style={style}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} >
          <Popup>
            Close to position.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
