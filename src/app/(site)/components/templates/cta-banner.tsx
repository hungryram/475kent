import { ctaData } from "../../../../../sample/data";
import Animate from "./animate";
import HeaderSection from "./header-section";

interface Props {
  content: string;
  backgroundStyles: any;
  primaryButtonLink: string;
  primaryButtonText: string;
  primaryButtonStyle: any;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonStyle: any;
  textAlign: string;
  paddingTop: string,
  paddingBottom: string
  id: string;
}

export default function CallToActionBanner({
  backgroundStyles,
  content,
  primaryButtonLink,
  primaryButtonText,
  primaryButtonStyle,
  secondaryButtonLink,
  secondaryButtonText,
  secondaryButtonStyle,
  paddingTop,
  paddingBottom,
  textAlign,
  id
}: Props) {

  const styles = {
    paddingTop: paddingTop ?? '5rem',
    paddingBottom: paddingBottom ?? '5rem',
  }

  const allStyles = { ...backgroundStyles, ...styles }

  return (
    <Animate>
      <div style={allStyles} id={id}>
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            {(content || primaryButtonLink || secondaryButtonLink) ? (
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
            ) :
              <div dangerouslySetInnerHTML={{ __html: ctaData.content }} />
            }
          </div>
        </div>
      </div>
    </Animate>
  )
}
