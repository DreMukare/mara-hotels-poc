import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import LandingPage from "@/pages/LandingPage";
import SpecialOffersPage from "@/pages/SpecialOffersPage";
import ReservationsEnquiryPage from "@/pages/ReservationsEnquiryPage";
import OurContactsPage from "@/pages/OurContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      /* Will update once I have more information on the rest of the hotels */
      // {
      //   path: 'tijigu-collection',
      //   element: <HotelPageLayout />,
      //   children: [
      //     {
      //       path: '/hotel-1',
      //       element: <Hotel1 />
      //     }
      //   ]
      // },
      // {
      //   path: '/about-tijugu',
      //   children: [

      //   ]
      // },
      // {
      //   path: '/news-and-information',
      //   children: [
      //     {
      //       path: '/travel-information',
      //       element: <TravelInformationPage />
      //     }
      //   ]
      // },
      {
        path: "/special-offers",
        element: <SpecialOffersPage />,
      },
      {
        path: "/reservations-enquiry",
        element: <ReservationsEnquiryPage />,
      },
      {
        path: "/our-contacts",
        element: <OurContactsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
