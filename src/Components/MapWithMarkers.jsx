import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "../../node_modules/leaflet/dist/leaflet.css"
import { Marksdata, PositionsData } from '../Context/MyContext';
import PulseLoader from "react-spinners/PulseLoader";
import "./Styles.scss"
import { Slide } from './Slide';

const MapWithMarkers = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [Marks, setMarks] = useContext(Marksdata)
  const [position, setPosition] = useContext(PositionsData)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 200);
  }, [position.currentPosition])

  if (isLoading) {
    return (

      <div className='ContianerWithLoading'>
        <Slide />
        <div className='loadingContainer'>
          <PulseLoader color="rgb(255, 115, 0)" />
        </div>
      </div>

    )
  }
  return (
    <div className='Contianer'>
      <Slide />
      <MapContainer center={position.currentPosition} zoom={position.zoom} className='mapContainer'>
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {
          Marks.map((item) => {
            return <Marker position={item.address} key={item.id}>
              <Popup>
                <div className='popupContainer'>
                  <div className='image-continaer'>
                    <img src={item.picture} alt={item.name} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Popup>
            </Marker>
          })
        }
      </MapContainer>
    </div>
  );
};

export default MapWithMarkers;
