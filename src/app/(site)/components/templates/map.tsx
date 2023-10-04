'use client'
// MAPBOX
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import HeaderSection from './header-section';
import { useState } from 'react'
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa"

interface Props {
  content: string;
  textAlign: string;
  primaryButtonLink: string;
  primaryButtonText: string;
  primaryButtonStyle: any;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonStyle: any;
  backgroundStyles: any;
  mapNames: any;
  condo: any;
}

export default function Map({
  mapNames,
  backgroundStyles,
  content,
  textAlign,
  primaryButtonLink,
  primaryButtonText,
  primaryButtonStyle,
  secondaryButtonLink,
  secondaryButtonText,
  secondaryButtonStyle,
  condo,
}: Props) {

  const center = { latitude: condo?.lat ?? 40.77917794466556, longitude: condo?.lng ?? -73.97726940898283 }

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 15
  })

  const [marker, setMarker] = useState(null)

  const renderLocation = (item: any) => {
    setMarker(item)
    setViewport({
      latitude: item.location.lat,
      longitude: item.location.lng,
      zoom: 15
    })
  }

  console.log(center)

  return (
    <>
      <div className="section" style={backgroundStyles}>
        <div className="container">
          {(content || primaryButtonLink || secondaryButtonLink) && (
            <HeaderSection
              content={content}
              textAlign={textAlign}
              // PRIMARY
              buttonLink={primaryButtonLink}
              primaryButtonText={primaryButtonText}
              primaryButtonStyle={primaryButtonStyle}
              // SECONDARY
              secondaryButtonLink={secondaryButtonLink}
              secondaryButtonText={secondaryButtonText}
              secondaryButtonStyle={secondaryButtonStyle}
            />
          )}
          <div className="mt-20">
            <div>
              <div className="w-full h-[30rem]">
                <ReactMapGL
                  mapStyle="mapbox://styles/mapbox/light-v10"
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                  {...viewport}
                  onMove={evt => setViewport(evt.viewState)}
                >
                  {condo?.lng &&
                    <Marker
                      longitude={condo?.lng}
                      latitude={condo?.lat}
                      offset={[-20, -10]}
                    >
                      <FaMapMarkerAlt className="text-4xl accent animate-pulse" />
                    </Marker>
                  }
                  {mapNames ?
                    mapNames?.map((item: any, i: any) => {
                      return (
                        <div key={i}>
                          <Marker
                            longitude={item.location.lng}
                            latitude={item.location.lat}
                            offset={[-20, -10]}
                          >
                            <div
                              onClick={() => renderLocation(item)}
                            >
                              <FaMapMarkerAlt className="text-2xl secondary-accent cursor-pointer" />
                            </div>
                          </Marker>
                          {marker === item ?
                            <Popup
                              anchor="bottom-left"
                              latitude={item.location.lat}
                              longitude={item.location.lng}
                              offset={[-10, -30]}
                              closeButton={false}
                              closeOnClick={false}
                            >
                              <div className="flex flex-col">
                                <span className="text-black font-bold">{item.neighborhoodName}</span>
                                <span className="text-black">{item.category}</span>
                              </div>
                            </Popup>
                            : null}
                        </div>
                      )
                    })
                    : null}
                </ReactMapGL>
              </div>
            </div>
            {/* <div className="md:w-1/2 relative h-full overflow-auto py-4 md:py-0">
              {mapNames ?
                <ul className="h-full">
                  {mapNames.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`content flex flex-col p-4 hover:bg-white/10 rounded-sm my-2 ${marker === item ? '' : 'hidden'}`}
                        onClick={() => renderLocation(item)}
                      >

                        <h2 className={`text-2xl`}>{item.neighborhoodName}</h2>
                        <div>
                          {item?.category && <span>{item.category}</span>}
                          {item?.subtitle && <span>{item.subtitle}</span>}
                        </div>
                      </li>
                    )
                  })}
                </ul>
                : null}
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}