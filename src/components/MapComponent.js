import React from 'react';
import mockdata from '../mock-data.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerCustom from "../images/restaurant.png";



const MapComponent = () => {
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });
  return (
    <div>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {mockdata.map((res) => (
    <div key={res.id}>
  <Marker position={[
    res.geodata_lat,
    res.geodata_long]}
    icon={icon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  </div>
  ))}
</MapContainer>

    </div>
  )
}

export default MapComponent
