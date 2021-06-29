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

export default function Map({position}) {


  let style={
    height: "100%",
  }
  return (
    
    <div className="Map">
      {position[0]==="" || position[1]==""?<div/>: 
      <MapContainer key={position[0]}center={position} zoom={16} scrollWheelZoom={true} style={style}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >
          <Popup>
            Close to position.
          </Popup>
        </Marker>
      </MapContainer>}
     
    </div>
  );
}
