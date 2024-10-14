import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image1 from "@/assets/images/hero/landing-header.jpg";
import Image2 from "@/assets/images/hero/pexels-pixabay-261181.jpg";
import Image3 from "@/assets/images/hero/pexels-pixabay-278889.jpg";
import Image4 from "@/assets/images/hero/pexels-pixabay-52717.jpg";
import Image5 from "@/assets/images/hero/pexels-robbkeens-2622266.jpg";
import Image6 from "@/assets/images/hero/pexels-thorsten-technoman-109353-338504.jpg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Autoplay from "embla-carousel-autoplay";

const ImgContainer = (props: { src: typeof Image1; alt: string }) => {
  const { src, alt } = props;
  return (
    <AspectRatio ratio={16 / 9}>
      <img alt={alt} src={src} className="object-contain" />
    </AspectRatio>
  );
};

const CarouselHero = () => {
  const carouselImages = [
    {
      src: Image1,
      alt: "Sunset in background with rhino's and wilderbeest in foreground",
    },
    {
      src: Image2,
      alt: "Elephants near lake",
    },
    {
      src: Image3,
      alt: "Ocean view at resort",
    },
    {
      src: Image4,
      alt: "Zebra in grasslands",
    },
    {
      src: Image5,
      alt: "Family of elephants",
    },
    {
      src: Image6,
      alt: "Pool view at resort",
    },
  ];

  return (
    <Carousel
      className="mx-[-2em] mt-[-30px] mb-16"
      plugins={[
        Autoplay({
          delay: 5500,
        }),
      ]}
    >
      <CarouselContent>
        {carouselImages.map((carouselImg, idx) => {
          return (
            <CarouselItem key={idx}>
              <ImgContainer alt={carouselImg.alt} src={carouselImg.src} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block md:block lg:block" />
      <CarouselNext className="hidden sm:block md:block lg:block" />
    </Carousel>
  );
};

export default CarouselHero;
