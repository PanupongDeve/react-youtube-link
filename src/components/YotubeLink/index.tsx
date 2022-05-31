// @ts-nocheck
import React from 'react';
import './styles.css'

interface Props {
    width: string,
    heigth: string,
    yt_code: string,
    className?: string
}

const YoutubeLink = ({ 
    width,
    heigth,
    yt_code,
    className = ''
}: Props) => {
    return (
        <div className={`yt__container ${className}`} style={{ 
            height: heigth,
            width: width
        }}>
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${yt_code}` }
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
        </div>
    )
}

export default YoutubeLink