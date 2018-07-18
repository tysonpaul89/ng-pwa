import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';

export interface ISlideShow {
    imageUrls: IImage[];
    height?: string;
    minHeight?: string;
    arrowSize?: string;
    showArrows?: boolean;
    disableSwiping?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    stopAutoPlayOnSlide?: boolean;
    debug?: boolean;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    showDots?: boolean;
    dotColor?: string;
    showCaptions?: boolean;
    captionColor?: string;
    captionBackground?: string;
    lazyLoad?: boolean;
    width?: string;
}