'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderSection from "./header-section";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Keyboard } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Animate from "./animate";


// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Keyboard]);

interface Props {
    content: string;
    images: any
    textAlign: string;
    primaryButtonLink: string;
    primaryButtonText: string;
    primaryButtonStyle: any;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonStyle: any;
    backgroundStyles: any;
    disablePagination: boolean;
    disableNavigation: boolean;
    slideNumber: number
    navigationColors: string;
    paddingTop: string;
    paddingBottom: string;
}

const GallerySwiper = ({
    content,
    textAlign,
    primaryButtonLink,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonLink,
    secondaryButtonText,
    secondaryButtonStyle,
    backgroundStyles,
    images,
    disablePagination,
    navigationColors,
    disableNavigation,
    slideNumber,
    paddingTop,
    paddingBottom,
}: Props) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const lightboxRef = useRef<HTMLDivElement>(null);

    const openLightbox = (image: string, index: number) => {
        setLightboxOpen(true);
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage("");
        setCurrentIndex(0);
    };

    const handlePrevImage = () => {
        if (currentIndex > 0) {
            setSelectedImage(images[currentIndex - 1]?.asset?.url);
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextImage = () => {
        if (currentIndex < images.length - 1) {
            setSelectedImage(images[currentIndex + 1]?.asset?.url);
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        if (lightboxOpen && lightboxRef.current) {
            lightboxRef.current.focus();
        }
    }, [lightboxOpen]);

    const styles = {
        paddingTop: paddingTop ?? '0rem',
        paddingBottom: paddingBottom ?? '0rem',
    }

    const allStyles = { ...backgroundStyles, ...styles }

    console.log(disableNavigation)
    return (
        <div style={allStyles}>
            <div>
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
                <Animate>
                    <Swiper
                        slidesPerView={slideNumber ? slideNumber : 1}
                        spaceBetween={10}
                        effect={"slide"}
                        pagination={disablePagination ? false : true}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            enabled: disableNavigation ? true : false,
                            prevEl: ".image-swiper-button-prev",
                            disabledClass: "swiper-button-disabled"
                        }}
                        keyboard={{
                            enabled: true
                        }}
                        loop={true}
                        className={`md:columns-3 columns-2 gap-4 ${content && 'mt-16'}`}
                        role="region"
                        aria-label="Image Gallery"
                        a11y={{
                            prevSlideMessage: 'Previous slide',
                            nextSlideMessage: 'Next slide',
                            firstSlideMessage: 'This is the first slide',
                            lastSlideMessage: 'This is the last slide',
                        }}
                        autoplay={{
                            delay: 3000
                        }}
                        speed={2000}
                        breakpoints={{
                            // When window width is >= 1024px (desktop)
                            1024: {
                                slidesPerView: slideNumber ? slideNumber : 1,
                                spaceBetween: 30,
                            },
                            // When window width is >= 768px (iPad)
                            768: {
                                slidesPerView: slideNumber < 2 ? 1 : 2,
                                spaceBetween: 20,
                            },
                            // When window width is < 768px (iPhone)
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {images?.map((image: any, index: number) => (
                            <SwiperSlide
                                key={image._key}
                                onClick={() => openLightbox(image?.asset?.url, index)}
                                className={`mb-4 cursor-pointer relative w-full ${slideNumber === 1 ? '!h-[80vh]' : '!h-[35rem]'}`}
                                aria-label={`Click to view image ${index + 1}${image?.asset?.altText ? ` of ${image?.asset?.altText}` : ''}`}
                            >
                                <Image
                                    src={image?.asset?.url}
                                    alt={image?.asset?.altText}
                                    width={2000}
                                    height={1000}
                                    className={`object-cover h-full w-full object-center`}
                                    placeholder={image?.asset?.lqip ? 'blur' : 'empty'}
                                    blurDataURL={image?.asset?.lqip}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Animate>
                {lightboxOpen && (
                    <Swiper
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".image-swiper-button-next-lightbox",
                            enabled: true,
                            prevEl: ".image-swiper-button-prev-lightbox",
                            disabledClass: "swiper-button-disabled"
                        }}
                        keyboard={{
                            enabled: true
                        }}
                        loop={true}
                        className="!fixed !inset-0 !flex !items-center !justify-center z-50 bg-black bg-opacity-75"
                        initialSlide={currentIndex} // Set the initial slide index
                    >
                        {images?.map((image: any, index: number) => (
                            <SwiperSlide key={image.id} className="mx-auto relative !flex !items-center !justify-center">
                                <Image
                                    src={image?.asset?.url}
                                    alt={image?.asset?.altText}
                                    width={1000}
                                    height={800}
                                    sizes="100vw"
                                    placeholder={image?.asset?.lqip ? 'blur' : 'empty'}
                                    blurDataURL={image?.asset?.lqip}
                                />
                            </SwiperSlide>
                        ))}
                        <button
                            className="absolute top-28 right-0 m-4 text-white cursor-pointer z-50"
                            onClick={closeLightbox}
                            aria-label="Close Lightbox"
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                        <div className="swiper-button image-swiper-button-next-lightbox absolute right-0 top-1/2 flex items-center justify-center z-50">
                            <BsChevronRight className="text-3xl" style={{
                                color: '#ffffff',
                            }} />
                        </div>
                        <div className="swiper-button image-swiper-button-prev-lightbox absolute left-0 top-1/2 flex items-center justify-center z-50">
                            <BsChevronLeft className="text-3xl" style={{
                                color: '#ffffff'
                            }} />
                        </div>
                    </Swiper>
                )}


            </div>
        </div>
    );
};

export default GallerySwiper;