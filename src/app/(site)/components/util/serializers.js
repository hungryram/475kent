import { urlForImage } from "../../../../../sanity/lib/image"
import getYouTubeID from 'get-youtube-id'
import Youtube from "react-youtube"
import ContentEditor from "./content-editor";

const serializers = {
    types: {
        youtube: ({ value }) => {

            const opts = {
                height: `${value.height ?? '600'}`,
                width: `${value.width ?? '400'}`,
                playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                },
            };

            const { url } = value
            const id = getYouTubeID(url)
            return (<Youtube videoId={id} opts={opts} />)
        },
        image: ({ value }) => {
            return (
                <div className={
                    `relative flex ${value.imageAlign == 'left' && 'justify-start' || value.imageAlign == 'center' && 'justify-center' || value.imageAlign == 'right' && 'justify-end'}`
                }>
                    <img src={value.asset !== undefined && urlForImage(value).url()} alt={value.altTag} width={value.imageWidth} className="my-6" />
                </div>
            )
        },
        grid: ({ value }) => {
            return (
                <>
                    <div className="grid md:grid-cols-2 grid-cols-1 mx-auto justify-center text-left">
                        {value?.gridBlock?.map((node, i) => {
                            return (
                                <div key={i}>
                                    <ContentEditor
                                        content={node?.content}
                                    />
                                </div>
                            );
                        })}
                    </div>

                </>
            )
        }
    },
    marks: {
        link: ({ value, children }) => {
            return (
                <a href={value.href} target={value.newTab ? '_blank' : '_self'} className="accent">{children}</a>
            )
        },
        color: ({ value, children }) => {
            return (
                <span style={{ color: value?.hex }}>{children}</span>
            )
        },
        gradientHeading: ({ children }) => (
            <span className="gradient-heading">{children}</span>
        )
    }
}

export default serializers