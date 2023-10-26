'use client'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { contactData } from '../../../../../sample/data';
import ContentEditor from '../util/content-editor';
import FormBuilder from './form-builder';
import Social from './social';
import Image from 'next/image';

interface Props {
    image: string;
    altText: string;
    blurData: string;
    email: string;
    phone_number: string;
    office_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    emailAlerts: string;
    sendFrom: string;
    emailBcc: string;
    emailCc: string;
    formBuilder: any;
    backgroundStyles: any
    // SOCIAL
    facebook: any;
    youtube: any;
    instagram: any;
    twitter: any;
    reddit: any;
    linkedin: any;
    yelp: any;
    pinterest: any;
    tiktok: any;
    zillow: any;
    hideContact: any;
    content: any;
}

export default function ContactPage({
    formBuilder,
    backgroundStyles,
    image,
    altText,
    blurData,
    content
}: Props) {
    return (
        <div style={backgroundStyles}>
            <div className="relative overflow-hidden">
                <div className="absolute -bottom-60 -right-60 -z-10">
                    <Image
                        src={image}
                        alt={altText}
                        placeholder={blurData ? 'blur' : 'empty'}
                        blurDataURL={blurData}
                        width={800}
                        height={800}
                    />
                </div>
                <div className="container">
                    <div className="pt-20 content text-center">
                        <ContentEditor content={content} />
                    </div>
                    <div className="md:flex justify-center md:space-x-20 md:space-y-0 space-y-10 pb-10">
                        <div className="md:w-3/5">
                            <div>
                                <div className="md:p-10 p-4 bg-[#E5E2D7]">
                                    <FormBuilder
                                        formSchema={formBuilder}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}