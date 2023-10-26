'use client'
// MAPBOX
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import HeaderSection from './header-section';
import { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { Disclosure, Transition } from '@headlessui/react'

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
  paddingTop: string;
  paddingBottom: string;
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
  paddingTop,
  paddingBottom,
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
      zoom: 17
    })
  }

  const styles = {
    paddingTop: paddingTop ?? '5rem',
    paddingBottom: paddingBottom ?? '5rem',
  }

  const allStyles = { ...backgroundStyles, ...styles }


  const DisclosureMap = ({ name }: {
    name: string
  }) => {
    return (
      <div>
        <Disclosure>
          <Disclosure.Button className="w-full text-left py-6 border-b border-black hover:bg-slate-200">
            <div>
              <h3 className="gradient-heading text-2xl font-extrabold">{name}</h3>
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-300 ease-out transform"
            enterFrom="translate-y-[-10%] opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition duration-200 ease-in transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-[-10%] opacity-0"
          >
            <Disclosure.Panel>
              <ul className="h-full columns-2 lg:ml-10 ml-0">
                {mapNames?.map((item: any, i: number) => {
                  return (
                    <>
                      {item?.category === name &&
                        <li
                          key={i}
                          className={`flex flex-col cursor-pointer hover:text-[#00aaeb]`}
                          onClick={() => renderLocation(item)}
                        >

                          <h2>{i++}. {item.neighborhoodName}</h2>
                          <div>
                            {item?.subtitle && <span>{item.subtitle}</span>}
                          </div>
                        </li>
                      }
                    </>
                  )
                })}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
    )
  }

  return (
    <>
      <div style={allStyles}>
        <div className="container text-center">
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
          <div className="mt-20 lg:flex gap-6">
            <div className="lg:w-1/2">
              <div className="w-full h-[35rem]">
                <ReactMapGL
                  mapStyle="mapbox://styles/mapbox/light-v10"
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                  {...viewport}
                  onMove={evt => setViewport(evt.viewState)}
                >
                  {mapNames ?
                    mapNames?.map((item: any, i: any) => {
                      return (
                        <div key={i}>
                          <Marker
                            longitude={item.location.lng}
                            latitude={item.location.lat}
                          // offset={[-20, -10]}
                          >
                            <div
                              onClick={() => renderLocation(item)}
                            >
                              {item?.isCondo ? <AiFillStar className="text-5xl cursor-pointer" /> : (
                                <div className={`w-6 h-6 hover:w-7 hover:h-7 duration-200 transition-all rounded-full text-white flex items-center justify-center bg-[#94542b] cursor-pointer`} >{i++}</div>
                              )}
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
            <div className="lg:w-1/2 relative h-full overflow-auto py-4 md:py-0">
              <DisclosureMap name="Recreation" />
              <DisclosureMap name="Shopping" />
              <DisclosureMap name="Dining" />
              <DisclosureMap name="Fitness" />
              <DisclosureMap name="Transportation" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}