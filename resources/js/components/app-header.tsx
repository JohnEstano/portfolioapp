import { Breadcrumbs } from '@/components/breadcrumbs';
import { Icon } from '@/components/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Origami, Signature, CircleUser, Menu, Search } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';

const mainNavItems = [
  { title: 'Home', href: '/dashboard', icon: LayoutGrid },
  { title: 'Works', href: '/works', icon: Origami },
  { title: 'Blog Posts', href: '/blogs', icon: Signature },
  { title: 'Contact', href: '/contact', icon: CircleUser },
];

const worksSubItems = [
  { title: 'Posters', href: '/works/posters' },
  { title: 'Projects', href: '/works/projects' },
  { title: 'Photography', href: '/works/photography' },
  { title: 'Graphic Design', href: '/works/graphic-design' },
];

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

interface AppHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
  const page = usePage<SharedData>();
  const { auth } = page.props;
  const getInitials = useInitials();

  return (
    <>
      <div className="border-sidebar-border/80 border-b">
        <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">

          {/* Mobile Sheet Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 h-[34px] w-[34px]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col p-4 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetHeader className="p-0">
                  <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                </SheetHeader>

                <div className="mt-4 space-y-4">
                  <Link href="/dashboard" className="flex items-center space-x-2 font-medium">
                    <Icon iconNode={LayoutGrid} className="h-5 w-5" />
                    <span>Home</span>
                  </Link>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="works">
                      <AccordionTrigger className="flex items-center w-full font-medium">
                        <Icon iconNode={Origami} className="h-5 w-5 mr-2" />
                        Works
                      </AccordionTrigger>
                      <AccordionContent className="pl-8 space-y-2">
                        {worksSubItems.map((sub) => (
                          <Link key={sub.href} href={sub.href} className="block text-sm">
                            {sub.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link href="/blogs" className="flex items-center space-x-2 font-medium">
                    <Icon iconNode={Signature} className="h-5 w-5" />
                    <span>Blog Posts</span>
                  </Link>

                  <Link href="/contact" className="flex items-center space-x-2 font-medium">
                    <Icon iconNode={CircleUser} className="h-5 w-5" />
                    <span>Contact</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/dashboard" prefetch className="flex items-center space-x-2">
            <AppLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="ml-6 hidden h-full items-center lg:flex">
            <NavigationMenu className="flex h-full items-stretch">
              <NavigationMenuList className="flex h-full items-stretch space-x-2">
                {mainNavItems.map((item) => (
                  item.title === 'Works' ? (
                    <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          page.url.startsWith('/works') && activeItemStyles,
                          'h-9 px-3'
                        )}
                      >
                        <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4">
                        <ul className="grid w-[240px] gap-2">
                          {worksSubItems.map((sub) => (
                            <li key={sub.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href}
                                  className="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground font-medium"
                                >
                                  {sub.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title} className="relative flex h-full items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          page.url === item.href && activeItemStyles,
                          'h-9 cursor-pointer px-3'
                        )}
                      >
                        <Icon iconNode={item.icon} className="mr-2 h-4 w-4" />
                        {item.title}
                      </Link>
                      {page.url === item.href && (
                        <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white" />
                      )}
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search + User Menu */}
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="group h-9 w-9">
              <Search className="!size-5 opacity-80 group-hover:opacity-100" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="size-10 rounded-full p-1">
                  <Avatar className="size-8 overflow-hidden rounded-full">
                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                    <AvatarFallback className="rounded-lg bg-neutral-200 dark:bg-neutral-700 dark:text-white">
                      {getInitials(auth.user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <UserMenuContent user={auth.user} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 1 && (
        <div className="border-sidebar-border/70 border-b">
          <div className="mx-auto flex h-12 items-center px-4 md:max-w-7xl text-neutral-500">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </div>
      )}
    </>
  );
}
