import { AiFillFilePdf } from "react-icons/ai"
import { urlForImage } from "../../../../../sanity/lib/image"
import Styles from './availability.module.css'
import { MdOutlineOpenInNew } from "react-icons/md"
import Animate from "./animate"
import HeaderSection from "./header-section"


const BedroomLayout = ({ bedroom, availabilities }: { bedroom: string, availabilities: any }) => {
    return (
        <>
            <tr className="border-gray-400 border-b">
                <th
                    colSpan={8}
                    scope="colgroup"
                    className="bg-[#eae8db] py-2 pl-4 pr-3 text-left font-semibold sm:pl-3 uppercase text-black"
                >
                    {bedroom === "0" ? 'Studio' : bedroom + "-Bedrooms"}
                </th>
            </tr>
            {availabilities?.avail?.map((node: any) => (
                <>
                    {node?.bed === bedroom &&
                        <>
                            <tr key={node.email} className="text-base bg-[#E6E4D7]">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                    {node.residence}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.bath ? node?.bath : '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.price ? node?.price : '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.exposure ? node?.exposure : '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.sf ? node?.sf : '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.moveInDate ? node?.moveInDate : '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-black">{node.status ? node?.status : '—'}</td>
                                {/* <td className="whitespace-nowrap px-3 py-4 text-black">{node.viewListing ? <a href={`/inquire`} target="_blank">Schedule Tour</a> : '—'}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center font-medium sm:pr-6 lg:pr-8">
                                    {node?.image ?
                                        <a href={urlForImage(node?.image).url()} target="_blank">
                                            <span className="sr-only">View floor plan for {node?.residence}</span>
                                            <AiFillFilePdf />
                                        </a>
                                        :
                                        <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                                    }
                                </td> */}
                            </tr>
                        </>
                    }
                </>
            ))}
        </>
    )
}

export default function AvailabilityTable({
    availabilities,
    Bath,
    intExtSf,
    exposure,
    price,
    cc,
    retax,
    listingStatus,
    viewListing,
    file,
    image,
    residence,
    factSheet,
    organizedLayout,
    backgroundStyles,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    textAlign,
    content
}: any) {

    return (
        <Animate>
            <div className="section">
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
                    <div className="container lg:block hidden">
                        {factSheet &&
                            <div className="my-10 text-center uppercase text-2xl italic underline">
                                <a href={factSheet} target="_blank">View Fact Sheet</a>
                            </div>
                        }
                        <table className="min-w-full accent mt-20">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className={`${Styles.availabilityHeading} sm:pl-6 lg:pl-8`}
                                    >
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Residence</h4>
                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Baths</h4>
                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Price</h4>

                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Exposure</h4>
                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">SF</h4>
                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Move In Date</h4>
                                    </th>
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Status</h4>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <BedroomLayout bedroom="0" availabilities={availabilities} />
                                <BedroomLayout bedroom="1" availabilities={availabilities} />
                                <BedroomLayout bedroom="2" availabilities={availabilities} />
                                <BedroomLayout bedroom="3" availabilities={availabilities} />

                            </tbody>
                        </table>
                    </div>



                    <div className="container lg:hidden">
                        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8">
                            {availabilities?.avail?.map((node: any) => (
                                <li key={node._key} className="overflow-hidden rounded-sm border border-gray-200">
                                    <div className="flex items-center gap-x-4 border-b-slate-900 border-b bg-[#eae8db] p-6">
                                        <div className="font-medium leading-6 text-gray-900  flex-1">{node?.residence}</div>
                                        <div className="justify-end">{node?.bed === "0" ? 'Studio' : ` ${node.bed}-bedroom`}</div>
                                    </div>
                                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 leading-6">
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">Price</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.price ? node?.price : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">Bath</dt>
                                            <dd className="text-gray-700">
                                                <span>{node?.bath ? node?.bath : '—'}</span>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">SF</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.sf ? node?.sf : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">Exposure</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.exposure ? node?.exposure : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">Move In Date</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.moveInDate ? node?.moveInDate : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-3">
                                            <dt className="text-black">View Listing</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700"><a href={`/inquire`} className="flex items-center" target="_blank">Schedule Tour</a></div>
                                            </dd>
                                        </div>
                                    </dl>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </Animate>
    )
}