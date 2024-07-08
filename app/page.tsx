import React from 'react';

export function Video() {
    const videoId = 'eIaR0PbXtHc'; // ใส่ Video ID
    const videoSrc = `https://www.youtube.com/embed/${videoId}?"`;

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 h-[20vdw]">
                <iframe
                    className="w-full h-[30dvw]"
                    src={videoSrc}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default Video;
