import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Navbar() {
  return (
    <nav className="h-[10%] sm:h-[15%] md:h-[15%] mb-6">
      <div className="h-[100%] sm:pt-5 md:pt-5 flex sm:flex-col md:flex-col justify-between items-center">
        {/* <div className="hidden sm:block mt-5">
          <div>Social Media Icons</div>
          <div>Loyalty, online availability, downloads</div>
        </div> */}
        <Link to="/">
          <p className="ml-8 sm:ml-0 md:ml-0 text-brandGreen-500">Tijigu</p>
        </Link>
        <NavigationMenu className="hidden sm:block py-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tijigu Collection</NavigationMenuTrigger>
              <NavigationMenuContent className="pl-5">
                <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                  {[
                    "Mara Kwetu Africa Safaris",
                    "Tembo",
                    "Spirit of Tembo",
                    "Msafiri Mara",
                  ].map((hotel, idx) => (
                    <ListItem key={idx}>
                      <Link to={hotel}>
                        <p className="6 hover:text-brandGreen-500">{hotel}</p>
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Tijigu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                  {[
                    "Mara Kwetu Africa Safaris",
                    "Tembo",
                    "Spirit of Tembo",
                    "Msafiri Mara",
                  ].map((hotel, idx) => (
                    <ListItem key={idx}>
                      <Link to={hotel}>
                        <p className="6 hover:text-brandGreen-500">{hotel}</p>
                      </Link>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/our-contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our Contacts
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer direction="left">
          <DrawerTrigger className="mr-6 sm:hidden md:hidden" asChild>
            <Button variant="ghost">
              <Menu className="text-brandGreen-500" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[100vh] w-[70vw]">
            <div className="w-[80%] mx-auto my-auto">
              <Accordion type="single" collapsible className="w-[100%] mb-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:text-brandGreen-500">
                    Tijigu Collection
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {[
                      "Mara Kwetu Africa Safaris",
                      "Tembo",
                      "Spirit of Tembo",
                      "Msafiri Mara",
                    ].map((hotel, idx) => (
                      <Link key={idx} to={hotel}>
                        <p className="text-sm leading-6 hover:text-brandGreen-500">
                          {hotel}
                        </p>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-[100%] mb-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:text-brandGreen-500">
                    About Tijigu
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {[
                      "Mara Kwetu Africa Safaris",
                      "Tembo",
                      "Spirit of Tembo",
                      "Msafiri Mara",
                    ].map((hotel, idx) => (
                      <Link key={idx} to={hotel}>
                        <p className="text-sm leading-6 hover:text-brandGreen-500">
                          {hotel}
                        </p>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link to="/our-contacts">
                <p className="text-sm hover:text-brandGreen-500 pt-4">
                  Our Contacts
                </p>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
