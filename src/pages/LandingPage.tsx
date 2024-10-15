import CarouselHero from "@/components/Landing/CarouselHero";
import CopySection from "@/components/common/CopySection";
import MainContentLayout from "@/components/layout/MainContentLayout";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <MainContentLayout>
      <CarouselHero />
      <CopySection
        title="Welcome to the Tijigu Collection"
        children={
          <p>
            The Tijigu Collection of 5 resorts and hotels spread across
            Zanzibar, Shaba, the Amboseli and Nanyuki is known for it's unique
            feel and accomodation service. Tijigu crafts authentic and memorable
            safari experiences, providing the highest quality of luxury and
            comfort. Warm and genuine East African hospitality characterises a
            safari with Tijigu, where guests are indulged with a luxurious and
            personalised stay.
          </p>
        }
      />
      <div className="w-[100%] flex justify-center items-center mb-16">
        <Button
          variant="outline"
          className="text-brandGreen-500 text-lg px-12 py-8 hover:bg-brandGreen-500 hover:text-white border-brandGreen-500"
        >
          More About Tijigu
        </Button>
      </div>
      <CopySection
        title="Our Commitment"
        children={
          <p>
            We aim to deliver life-changing experiences, healing journeys and
            positive impacts. Everyone in our team is dedicated to crafting some
            of your happiest memories yet.
          </p>
        }
      />
    </MainContentLayout>
  );
};

export default LandingPage;
