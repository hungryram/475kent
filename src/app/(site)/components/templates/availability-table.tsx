import { AiFillFilePdf } from "react-icons/ai"
import { urlForImage } from "../../../../../sanity/lib/image"
import Styles from './availability.module.css'
import { MdOutlineOpenInNew } from "react-icons/md"

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
    organizedLayout
}: any) {
    return (
        <div className="section">
            <div>
                <div className="container lg:block hidden">
                    {factSheet &&
                        <div className="my-10 text-center uppercase text-2xl italic underline">
                            <a href={factSheet} target="_blank">View Fact Sheet</a>
                        </div>
                    }
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className={`${Styles.availabilityHeading} sm:pl-6 lg:pl-8`}
                                >
                                    Residence
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Bath
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Int/Ext Sf
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Exposure
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Price
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    CC
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Re Tax
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Listing
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Status
                                </th>
                                <th scope="col" className={Styles.availabilityHeading}>
                                    Floor Plan
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {availabilities?.avail?.map((node: any) => (
                                <tr key={node.email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                        {node.residence}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.bedBath ? node?.bedBath : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.intExtSf ? node?.intExtSf : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.exposure ? node?.exposure : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.price ? node?.price : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.cc ? node?.cc : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.retax ? node?.retax : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.status ? node?.status : '—'}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{node.viewListing ? <a href={node?.viewListing} target="_blank">View<span className="sr-only">View listing information on {node?.residence}</span></a> : '—'}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6 lg:pr-8">
                                        {node?.image ?
                                            <a href={urlForImage(node?.image).url()} target="_blank">
                                                <span className="sr-only">View floor plan for {node?.residence}</span>
                                                <AiFillFilePdf />
                                            </a>
                                            :
                                            <span>—<span className="sr-only">No floor plans available for {node?.residence}</span></span>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                <div className="container lg:hidden">
                    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-8">
                        {availabilities?.avail?.map((node: any) => (
                            <li key={node._key} className="overflow-hidden rounded-sm border border-gray-200">
                                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                    <div className="font-medium leading-6 text-gray-900">{node?.residence}</div>
                                </div>
                                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Price</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.price ? node?.price : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Bed/Bath</dt>
                                        <dd className="text-gray-700">
                                            <span>{node?.bedBath ? node?.bedBath : '—'}</span>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Int/Ext Sf</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.intExtSf ? node?.intExtSf : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Exposure</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.exposure ? node?.exposure : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Common Charges</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.cc ? node?.cc : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Real Estate Tax</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.reTax ? node?.reTax : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Status</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.status ? node?.status : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">View Listing</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div className="text-gray-700">{node?.viewListing ? <a href={node?.viewListing} className="flex items-center">View<span className="sr-only">View listing information on {node?.residence}</span><MdOutlineOpenInNew className="mx-2" /></a> : '—'}</div>
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">Floor Plan</dt>
                                        <dd className="flex items-start gap-x-2">
                                            <div
                                                className={"rounded-sm py-1 px-2"}
                                            >
                                                {node?.image ?
                                                    <a href={urlForImage(node?.image).url()} target="_blank">
                                                        <span className="sr-only">View floor plan for {node?.residence}</span>
                                                        <AiFillFilePdf className="text-2xl" />
                                                    </a>
                                                    :
                                                    <span>—</span>
                                                }
                                            </div>
                                        </dd>
                                    </div>
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}