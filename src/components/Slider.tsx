import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export interface Image {
    src: string
}

export default function Slider({ images }: { images: Image[] }) {
    return (
        <div className="slider">
            <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showIndicators={false} >
                {images.map((image, id) => (
                    <div key={id} className="slider__image" style={{ backgroundImage: 'url(' + image.src + ')' }}></div>
                ))}
            </Carousel>
        </div>
    );
}
