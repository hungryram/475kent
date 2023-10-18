import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import HeaderSection from './header-section'
import FormBuilder from './form-builder';
import ContentEditor from '../util/content-editor';

interface Props {
    content: string[];
    image: any;
    altText: string;
    blurData: "blur" | "empty" | undefined;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    textAlign: string;
    textColor: string;
    formSchema: any;
    images: any;
    address: string;
    email: string;
    phone: string;
    website: string;
    footerContent: any;
}

export default function LandingPage({
    content,
    image,
    altText,
    blurData,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    textAlign,
    textColor,
    formSchema,
    images,
    footerContent,
    address,
    email,
    phone,
    website,

}: Props) {

    return (
        <main className="lg:relative bg-[#e5e3d8]">
            <div className="h-96 w-full lg:fixed relative lg:inset-y-0 lg:left-0 lg:h-screen lg:w-1/2">
                <Image
                    className="inset-0 h-screen w-full object-cover object-center"
                    src={image}
                    alt={altText}
                    placeholder={blurData ? 'blur' : 'empty'}
                    blurDataURL={blurData}
                    fill={true}
                    priority={true}
                />
            </div>
            <div className="mx-auto flex justify-end w-full pb-20 xl:py-20 lg:py-4">
                <div className="md:px-20 px-6 lg:w-1/2">
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
                    <FormBuilder
                        formSchema={formSchema}
                    />
                    <div className="flex xl:flex-row flex-col-reverse items-center mt-10">
                        <div className="xl:w-3/4 w-full">
                            <ul className="footerContact flex flex-wrap">
                                <li>
                                    <a href={`/`}>{website}</a>
                                </li>
                                <li>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </li>
                                <li>
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </li>
                                <li className="whitespace-nowrap">
                                    <a href={`https://www.google.com/maps/place/${address}`}>{address}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:w-1/4 w-full">
                            <div className="mx-auto flex flex-wrap max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none mb-10">
                                {images?.map((image: string, i: number) => {
                                    return (
                                        <Image
                                            key={i}
                                            src={image?.asset?.url}
                                            alt={image?.asset?.altText}
                                            className="inline-block"
                                            width={image?.width ? image?.width : 100}
                                            height={100}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] uppercase xl:mt-0 mt-6">
                        <ContentEditor
                            content={footerContent}
                        />
                    </div>
                </div>
            </div>
        </main>

    )
}
