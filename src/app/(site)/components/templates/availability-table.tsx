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
                    className="bg-[#eae8db] text-left font-semibold uppercase text-black py-1 pl-2"
                >
                    {bedroom === "0" ? 'Studio' : bedroom + "-Bedrooms"}
                </th>
            </tr>
            {availabilities?.avail?.map((node: any) => (
                <>
                    {node?.bed === bedroom &&
                        <>
                            <tr key={node.residence} className="text-base text-left bg-[#E6E4D7] relative">
                                <td className="font-medium text-gray-900">
                                    {node.residence}
                                </td>
                                <td className={Styles.tableData}>{node.bath ? node?.bath : '—'}</td>
                                <td className={Styles.tableData}>{node.price ? node?.price : '—'}</td>
                                <td className={Styles.tableData}>{node.exposure ? node?.exposure : '—'}</td>
                                <td className={Styles.tableData}>{node.sf ? node?.sf : '—'}</td>
                                <td className={Styles.tableData}>{node.moveInDate ? node?.moveInDate : '—'}</td>
                                <td className={Styles.tableData}>{node.status ? node?.status : '—'}</td>
                                {/* <td className={Styles.tableData}>{node.viewListing ? <a href={`/inquire`} target="_blank">Schedule Tour</a> : '—'}</td> */}
                                <td className={Styles.tableData}>
                                    {node?.image ?
                                        <a href={urlForImage(node?.image).url()} target="_blank">
                                            <span className="sr-only">View floor plan for {node?.residence}</span>
                                            <AiFillFilePdf className="text-lg accent" />
                                        </a>
                                        :
                                        <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                                    }
                                </td>
                                {node?.status === "LEASED" && <td className="bg-black h-[1px] w-full left-0 right-0 absolute top-[1.5rem]"></td>}

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
                            <div className="my-10 uppercase text-2xl italic underline">
                                <a href={factSheet} target="_blank">View Fact Sheet</a>
                            </div>
                        }
                        <table className="min-w-full accent mt-20">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className={`${Styles.availabilityHeading}`}
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
                                    <th scope="col" className={Styles.availabilityHeading}>
                                        <h4 className="gradient-heading text-lg uppercase font-extrabold">Floor Plan</h4>
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



                    <div className="container lg:hidden mt-10">
                        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8">
                            {availabilities?.avail?.map((node: any) => (
                                <li key={node._key} className="overflow-hidden rounded-sm border border-gray-200">
                                    <div className="flex items-center gap-x-4 border-b-slate-900 border-b bg-[#eae8db] p-6 relative">
                                        {node?.status === "LEASED" && <div className="bg-black h-[2px] w-full left-0 right-0 absolute top-9"></div>}

                                        <div className="font-extrabold leading-6 text-gray-900 text-left flex-1">{node?.residence}</div>
                                        <div className="justify-end">{node?.bed === "0" ? 'Studio' : ` ${node.bed}-bedroom`}</div>
                                    </div>
                                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 leading-6">
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>Price</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.price ? node?.price : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>Bath</dt>
                                            <dd className="text-gray-700">
                                                <span>{node?.bath ? node?.bath : '—'}</span>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>SF</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.sf ? node?.sf : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>Exposure</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.exposure ? node?.exposure : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>Move In Date</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.moveInDate ? node?.moveInDate : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>Status</dt>
                                            <dd className="flex items-start gap-x-2">
                                                <div className="text-gray-700">{node?.status ? node?.status : '—'}</div>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-x-4 py-1">
                                            <dt className={Styles.tableData}>View Floor Plan</dt>
                                            <dd className="flex items-center gap-x-2">
                                                {node?.image ?
                                                    <a href={urlForImage(node?.image).url()} target="_blank">
                                                        <span className="sr-only">View floor plan for {node?.residence}</span>
                                                        <AiFillFilePdf className="text-lg accent" />
                                                    </a>
                                                    :
                                                    <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                                                }                                            </dd>
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