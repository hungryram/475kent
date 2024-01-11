import Styles from "./hero.module.css"
import HeaderSection from "./header-section";

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
    imageOverlayColor: any
    imageHeight: any
}

export default function Hero({
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
    imageOverlayColor,
    imageHeight
}: Props) {

    return (
            <div className={`${imageHeight} md:bg-fixed bg-center`} style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'centered',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                {(content || primaryButtonLink || secondaryButtonLink) && (
                    <div className={`container ${Styles.heroInnerContainer} relative`}>
                        <div
                            style={{
                                color: textColor
                            }}
                        >
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
                        </div>
                    </div>
                )}
            </div>
    )
}