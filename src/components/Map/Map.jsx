import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from 'leaflet';
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl ,
    shadowUrl
});

export default function Map({position = [51.505, -0.09]}) {

  console.log(position)  // TODO Arreglar la posición del mapa
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
