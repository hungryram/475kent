'use client'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { contactData } from '../../../../../sample/data';
import ContentEditor from '../util/content-editor';
import FormBuilder from './form-builder';
import Social from './social';

interface Props {
    content: string;
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
    hideContact: any
}

export default function ContactPage({
    formBuilder,
    backgroundStyles,

}: Props) {
    return (
        <div style={backgroundStyles}>
            <div className="container">
                <div className="text-center w-full content">
                    <div className="py-20">
                        <h1>Inquire</h1>
                        <h3>Luxury Studio to Four Bedroom Rentals</h3>
                    </div>
                </div>
                <div className="md:flex justify-center md:space-x-20 md:space-y-0 space-y-10 pb-10">
                    <div className="md:w-3/5">
                        <div className="border-accent border-2 rounded-3xl bg-white">
                            <div className="md:p-10 p-4">
                                <FormBuilder
                                    formSchema={formBuilder}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}