import React from 'react'
import ReactImageVideoLightbox from "react-image-video-lightbox";
import ReactDOM from "react-dom";


const data = [
    {
        url: "https://placekitten.com/450/300",
        type: "photo",
        altTag: "some image"
    },
    {
        url: "https://www.youtube.com/embed/ScMzIvxBSi4",
        type: "video",
        altTag: "some video"
    },
    {
        url: "https://placekitten.com/550/500",
        type: "photo",
        altTag: "some other image"
    },
    {
        url:
            "https://sgp1.digitaloceanspaces.com/eventmaker/ed53d187-032e-4477-b42d-7ee8cef365a9#t=0.5",
        type: "video",
        altTag: "some other video"
    }
];

function LightboxVideo() {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    const renderWorks = () => {
        return data.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.url})` }} />
        ));
    };

    return (
        <div className="App">
           
        </div>
    );
}



export default LightboxVideo;