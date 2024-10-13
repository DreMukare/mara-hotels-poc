import * as React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function Navbar() {
  return (
    <nav className="h-[15%] sm:h-[20%] md:h-[20%] lg:h-[20%]">
      <div className="h-[80%] sm:pt-5 md:pt-5 lg:pt-5 flex sm:flex-col md:flex-col lg:flex-col justify-between items-center">
        <div className="hidden sm:block md:block lg:block mt-5">
          <div>{/* Social Media Icons */}</div>
          <div>{/* Loyalty, online availability, downloads */}</div>
        </div>
        <Link to="/">
          <p className="ml-8 sm:ml-0 md:ml-0 lg:ml-0">Logo</p>
        </Link>
        <NavigationMenu className="hidden sm:block md:block lg:block mt-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tijigu Collection</NavigationMenuTrigger>
              <NavigationMenuContent className="pl-5">
                <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                  {["hotel-1", "hotel-2", "hotel-3", "hotel-4", "hotel-5"].map(
                    (hotel, idx) => (
                      <ListItem key={idx}>
                        <Link to={hotel}>{hotel}</Link>
                      </ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Tijigu</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
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
          <DrawerTrigger className="mr-6 sm:hidden md:hidden lg:hidden" asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[100vh] w-[70vw] pl-16 pt-16">
            <NavigationMenuPrimitive.Root>
              <NavigationMenuPrimitive.List className="flex flex-col justify-center gap-6">
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger>
                    Tijigu Collection
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content>
                    <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                      {[
                        "hotel-1",
                        "hotel-2",
                        "hotel-3",
                        "hotel-4",
                        "hotel-5",
                      ].map((hotel, idx) => (
                        <ListItem key={idx}>
                          <Link to={hotel}>{hotel}</Link>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
                <NavigationMenuPrimitive.Item>
                  <NavigationMenuPrimitive.Trigger>
                    Tijigu Collection
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content>
                    <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                      {[
                        "hotel-1",
                        "hotel-2",
                        "hotel-3",
                        "hotel-4",
                        "hotel-5",
                      ].map((hotel, idx) => (
                        <ListItem key={idx}>
                          <Link to={hotel}>{hotel}</Link>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
              </NavigationMenuPrimitive.List>
            </NavigationMenuPrimitive.Root>
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Tijigu Collection
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="pl-5">
                    <ul className="grid grid-cols-2 gap-x-1 w-[300px] h-[150px]">
                      {[
                        "hotel-1",
                        "hotel-2",
                        "hotel-3",
                        "hotel-4",
                        "hotel-5",
                      ].map((hotel, idx) => (
                        <ListItem key={idx}>
                          <Link to={hotel}>{hotel}</Link>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Tijigu</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/our-contacts">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Our Contacts
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
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
