import * as z from "zod";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "An email address is required",
    })
    .email(),
});

import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import Home from "@/routes/Home";
import Error from "@/routes/Error";
import Social from "@/components/Social";
import SliderLink from "@/components/SliderLink";
import { useLayoutEffect, useState } from "react";
import About from "@/routes/About";
import Menu from "@/routes/Menu";
import Blog from "@/routes/Blog";
import Contact from "@/routes/Contact";
import { Toaster } from "@/shadui/components/ui/toaster";
import InferProps from "@/utils/InferProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/shadui/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadui/components/ui/form";
import { Input } from "@/shadui/components/ui/input";
import { Button } from "@/shadui/components/ui/button";

import Facebook from "@/svg/logos/Facebook";
import GitHub from "@/svg/logos/GitHub";
import Instagram from "@/svg/logos/Ingtagram";
import logo from "@/assets/logo.svg";
import XLogo from "@/svg/logos/X";
import TikTok from "@/svg/logos/TikTok";
import YouTube from "@/svg/logos/YouTube";
import Waze from "@/svg/logos/Waze";
import Phone from "@/svg/Phone";
import Mail from "@/svg/Mail";
import Location from "@/svg/Location";
import Clock from "@/svg/Clock";

const WithNavAndFooter: React.FC<{
  path: string;
  children: React.ReactNode;
}> = ({ path, children }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar key={path} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: (
      <WithNavAndFooter path="/">
        <Home />
      </WithNavAndFooter>
    ),
    errorElement: (
      <div className="flex min-h-[100dvh] flex-col justify-between">
        <WithNavAndFooter path="error">
          <Error />
        </WithNavAndFooter>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <WithNavAndFooter path="/about">
        <About />
      </WithNavAndFooter>
    ),
  },
  {
    path: "/menu",
    element: (
      <WithNavAndFooter path="/menu">
        <Menu />
      </WithNavAndFooter>
    ),
  },
  {
    path: "/blog",
    element: (
      <WithNavAndFooter path="/blog">
        <Blog />
      </WithNavAndFooter>
    ),
  },
  {
    path: "/contact",
    element: (
      <WithNavAndFooter path="/contact">
        <Contact />
      </WithNavAndFooter>
    ),
  },
]);

const App = () => (
  <>
    <div className="isolate overflow-x-hidden bg-neutral-900 font-openSans text-white">
      <RouterProvider router={router} />
    </div>
    <Toaster />
  </>
);

const navLinks: Omit<InferProps<[typeof SliderLink]>, "className">[] = [
  { text: "About Us", link: "/about" },
  { text: "Menu", link: "/menu" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials: Omit<InferProps<[typeof Social]>, "className">[] = [
    {
      icon: <GitHub />,
      name: "GitHub",
      link: "https://github.com/CozmaRares/beer-pub-landing",
    },
    {
      icon: <Facebook />,
      name: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: <Instagram />,
      name: "Instagram",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <header className="bounded-section relative z-[1] flex flex-row items-center justify-between py-8 text-base lg:text-lg">
      <Link
        className="w-full sm:w-auto sm:max-w-[40%]"
        to="/"
      >
        <img
          src={logo}
          width="200px"
          height="auto"
          className="max-w-full"
          alt=""
        />
      </Link>
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p>{isOpen ? "Close" : "Open"} Menu</p>
        <div aria-hidden>
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>
      </button>
      <nav className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col md:flex-row md:gap-8">
          {navLinks.map(({ text, link }) => (
            <li key={text}>
              <SliderLink
                text={text}
                link={link}
              />
            </li>
          ))}
        </ul>
        <ul className="mx-auto mt-2 flex flex-row gap-3 md:m-0">
          {socials.map(({ icon, name, link }) => (
            <li key={name}>
              <Social
                icon={icon}
                name={name}
                link={link}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  const contacts: { icon: React.ReactNode; text: string }[] = [
    { icon: <Phone />, text: "+1 (234) 567 89 00" },
    { icon: <Mail />, text: "beerboutique@fake.email.com" },
    { icon: <Location />, text: "Somewhere in New York" },
    { icon: <Clock />, text: "4 PM — 2 AM" },
  ];

  const socials: Omit<InferProps<[typeof Social]>, "className">[] = [
    {
      icon: <XLogo />,
      name: "X",
      link: "https://twitter.com/",
    },
    {
      icon: <TikTok />,
      name: "TikTok",
      link: "https://www.tiktok.com/",
    },
    {
      icon: <YouTube />,
      name: "YouTube",
      link: "https://www.youtube.com/",
    },
    {
      icon: <Waze />,
      name: "Waze",
      link: "https://www.waze.com/live-map/",
    },
  ];

  return (
    <footer className="bounded-section flex grid-cols-[4fr,3fr,4fr,5fr] flex-col items-center gap-10 py-16 text-center text-white/70 lg:grid lg:text-left [&>*]:space-y-4 [&>*]:lg:h-full">
      <div className="flex w-fit flex-col items-center lg:items-start lg:justify-between">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width="200px"
            height="auto"
          />
        </Link>
        <p className="w-2/3 md:w-1/2 lg:w-4/5">
          Welcome to your favorite pub with draft and bottled beer from the best
          local and world-famous producers.
        </p>
        <ul className="flex flex-row gap-3">
          {socials.map(({ icon, name, link }) => (
            <li key={name}>
              <Social
                icon={icon}
                name={name}
                link={link}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="mb-4 font-teko text-4xl text-white">Navigation</span>
        <nav>
          <ul className="space-y-3 text-gray-400">
            {navLinks.map(({ text, link }) => (
              <li key={text}>
                <SliderLink
                  text={text}
                  link={link}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-col justify-between lg:flex">
        <span className="mb-4 font-teko text-4xl text-white">Contacts</span>
        <ul className="contents space-y-3 text-gray-400">
          {contacts.map(({ icon, text }) => (
            <li
              key={text}
              className="flex flex-row items-center justify-center gap-3 lg:justify-start"
            >
              <span className="text-lightningYellow">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3 lg:w-full">
        <span className="mb-4 font-teko text-4xl text-white">Newsletter</span>
        <MyForm />
      </div>
    </footer>
  );
};

const MyForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    toast({
      title: "Subscribed!",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="sr-only">
                Enter your email address
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-zinc-800 p-5 text-center text-base"
                  placeholder="Email address"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute left-0 top-full" />
            </FormItem>
          )}
        />
        <Button
          className="w-full border-lightningYellow bg-transparent p-3 text-base font-bold uppercase text-lightningYellow hover:bg-lightningYellow hover:text-black"
          variant="outline"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default App;
