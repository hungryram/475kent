import Link from "next/link"
import Image from "next/image"
import Social from "../templates/social"
import ContentEditor from "../util/content-editor"
import Styles from './footer.module.css'
import { urlForImage } from "../../../../../sanity/lib/image"

interface Props {
  company_name: string
  image: string
  altText: string
  address: string
  city: string
  state: string
  zip_code: string
  phone_number: string
  email: string
  office_number: string
  blurData: string
  quickLinksHeading: string;
  googleBusiness: string;
  facebook: string;
  youtube: string;
  instagram: string;
  twitter: string;
  reddit: string;
  linkedin: string;
  yelp: string;
  pinterest: string;
  tiktok: string;
  zillow: string;
  size: string;
  footerDisclaimer: any;
  legal: any;
  links: any;
  secondLinks: any;
  quickLinksTwoHeading: string;
  footerText: any;
  shortText: string;
  singleColumn: boolean
  footerLogos: any;
}

export default function Footer({
  company_name,
  image,
  altText,
  address,
  city,
  state,
  zip_code,
  phone_number,
  email,
  office_number,
  blurData,
  quickLinksHeading,
  footerDisclaimer,
  // SOCIAL
  googleBusiness,
  facebook,
  youtube,
  instagram,
  twitter,
  reddit,
  linkedin,
  yelp,
  pinterest,
  tiktok,
  zillow,
  size,
  legal,
  links,
  quickLinksTwoHeading,
  secondLinks,
  footerText,
  shortText,
  singleColumn,
  footerLogos
}: Props) {

  const FooterLogoComponent = ({ image }: any) => {
    const imageContent = (
      <div className="mx-3">
        <Image
          src={urlForImage(image.logo).url()}
          alt={image?.altText ? image?.altText : image?.asset?.altText}
          width={image?.width ? image?.width : 60}
          height={48}
          placeholder={image?.asset?.lqip ? 'blur' : 'empty'}
          blurDataURL={image?.asset?.lqip}
          className="inline"
        />
      </div>
    )

    return (
      image?.link ? <a href={image?.link} target="_blank">{imageContent}</a> : imageContent
    )
  }


  return (
    <footer className={Styles.footer} aria-labelledby="footer-heading">
      <div className="pb-12 pt-10">
        <div className="container">
          {singleColumn !== true ?
            <div className={`lg:flex md:grid md:grid-cols-3 grid-cols-1 xl:gap-8 gap-y-10 space-y-10 items-baseline`}>
              <div className="space-y-8 flex-1">
                <div className="flex">
                  <Social
                    facebook={facebook}
                    youtube={youtube}
                    instagram={instagram}
                    twitter={twitter}
                    reddit={reddit}
                    linkedin={linkedin}
                    yelp={yelp}
                    pinterest={pinterest}
                    tiktok={tiktok}
                    zillow={zillow}
                    size={size}
                  />
                </div>
              </div>
              <div className=" flex-1">
                <div>
                  <h3>Contact Information</h3>
                  <dl className="space-y-4 text-base leading-7">
                    {address || city || state || zip_code ? (
                      <div className={Styles.contactInfo}>
                        <dt className="flex-none">
                          <span>Address</span>
                        </dt>
                        <dd className="text-sm leading-6">
                          {address && (
                            <>
                              {address}
                              <br />
                            </>
                          )}
                          {city && (
                            <>
                              {city ? city + ',' : ''}
                            </>
                          )}{' '}
                          {state} {zip_code}
                        </dd>
                      </div>
                    ) : null}

                    {phone_number &&
                      <div className={Styles.contactInfo}>
                        <dt className="flex-none sr-only">
                          <span>Direct</span>
                        </dt>
                        <dd>
                          <a className="text-sm leading-6" href={`tel:${phone_number}`}>
                            {phone_number}
                          </a>
                        </dd>
                      </div>
                    }
                    {office_number &&
                      <div className={Styles.contactInfo}>
                        <dt className="flex-none sr-only">
                          <span>Phone</span>
                        </dt>
                        <dd>
                          <a className="text-sm leading-6" href={`tel:${office_number}`}>
                            {office_number}
                          </a>
                        </dd>
                      </div>
                    }
                    {email &&
                      <div className={Styles.contactInfo}>
                        <dt className="flex-none sr-only">
                          <span>Email</span>
                        </dt>
                        <dd>
                          <a className="text-sm leading-6" href={`mailto:${email}`}>
                            {email}
                          </a>
                        </dd>
                      </div>
                    }
                    <div className={Styles.contactInfo}>
                      <dt className="flex-none sr-only">
                        <span>Leasing Office</span>
                      </dt>
                      <dd>
                        <span>Leasing Office: 201 West 77th Street, New York, NY 10024</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              {links &&
                <div className=" flex-1">
                  <div>
                    {quickLinksHeading && <h3>{quickLinksHeading}</h3>}
                    <ul role="list" className="space-y-4">
                      {links?.map((link: any) => {

                        const quickLinks = (link.internalLink?._type === "pages" && `/${link.internalLink.slug}`) ||
                          (link.internalLink?._type === "blog" && `/blog/${link.internalLink.slug}`) ||
                          (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug}`) ||
                          (link.internalLink?._type === "services" && `/services/${link.internalLink.slug}`) ||
                          (link.internalLink?._type === "team" && `/team/${link.internalLink.slug}`) ||
                          (link.externalUrl && `${link.externalUrl}`)

                        return (
                          <li key={link._key}>
                            <Link
                              href={quickLinks}
                              target={link.newTab && '_blank'}
                              className="text-sm"
                            >
                              {link.text}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              }
              {secondLinks &&
                <div className=" flex-1">
                  {quickLinksTwoHeading && <h3>{quickLinksTwoHeading}</h3>}
                  <ul role="list" className="space-y-4">
                    {secondLinks?.map((link: any) => {

                      const quickLinks = (link.internalLink?._type === "pages" && `/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "blog" && `/blog/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "services" && `/services/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "team" && `/team/${link.internalLink.slug}`) ||
                        (link.externalUrl && `${link.externalUrl}`)

                      return (
                        <li key={link._key}>
                          <Link
                            href={quickLinks}
                            target={link.newTab && '_blank'}
                            className="text-sm"
                          >
                            {link.text}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              }
              {footerText &&
                <div className="text-sm flex-1">
                  <ContentEditor
                    content={footerText}
                  />
                </div>
              }
            </div>
            :
            <div className="mx-auto max-w-7xl overflow-hidden text-center">
              <div className="flex justify-center flex-col">
                <nav className="columns-2 sm:flex sm:justify-center sm:space-x-12">
                  {links?.map((link: any) => {
                    const quickLinks = (link.internalLink?._type === "pages" && `/${link.internalLink.slug}`) ||
                      (link.internalLink?._type === "blog" && `/blog/${link.internalLink.slug}`) ||
                      (link.internalLink?._type === "legal" && `/legal/${link.internalLink.slug}`) ||
                      (link.internalLink?._type === "services" && `/services/${link.internalLink.slug}`) ||
                      (link.internalLink?._type === "team" && `/team/${link.internalLink.slug}`) ||
                      (link.externalUrl && `${link.externalUrl}`)

                    return (
                      <div key={link._key} className="pb-6">
                        <Link href={quickLinks} className="text-sm leading-6">
                          {link.text}
                        </Link>
                      </div>
                    )
                  })}
                </nav>
                <div className="mx-auto flex justify-center">
                  <Social
                    facebook={facebook}
                    youtube={youtube}
                    instagram={instagram}
                    twitter={twitter}
                    reddit={reddit}
                    linkedin={linkedin}
                    yelp={yelp}
                    pinterest={pinterest}
                    tiktok={tiktok}
                    zillow={zillow}
                    size={size}
                  />
                </div>
              </div>
            </div>
          }
          <div className="">
            {singleColumn &&
              <div className="leading-7 md:flex items-center justify-center text-center md:space-x-6">
                <div className="pt-20">
                  <ul className="text-center text-xl">
                    <li className="inline-block px-4 border-r">
                      <a href={`${googleBusiness}`}>{address} {city} {state}</a>
                    </li>
                    <li className="inline-block px-4 border-r">
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                    <li className="inline-block px-4">
                      <a href={`tel:${phone_number}`}>{phone_number}</a>
                    </li>
                  </ul>
                </div>
              </div>
            }
            {footerDisclaimer &&
              <div className="text-center my-2">
                <ContentEditor
                  content={footerDisclaimer}
                />
              </div>
            }
            <div className="flex items-center justify-center">
              {footerLogos?.map((node: any) => (
                <FooterLogoComponent image={node} />
              ))}
            </div>
            {legal &&
              <ul className="space-y-3 mb-2">
                {legal?.map((node: any) => (
                  <li key={node._key} className="inline-block mr-2">
                    <Link href={`/legal/${node.slug}`} className="text-xs">
                      {node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            }
            {/* <p className="text-xs font-light pt-0">&copy; Copyright {new Date().getFullYear()} &middot; {company_name} &middot; Website built by <a href="https://www.hungryram.com/" className="font-bold" target="_blank">Hungry Ram</a></p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}