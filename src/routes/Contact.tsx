import * as z from "zod";

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Name must be between 2 and 30 letters long",
    })
    .min(2)
    .max(30)
    .regex(/[a-z]+\s?[a-z]+/i),
  phone: z
    .string({
      required_error: "Phone number must be between 5 and 15 digits long",
    })
    .min(5)
    .max(15)
    .regex(/\d*/),
  guests: z
    .string({
      required_error: "The number of guests must be between 1 and 8",
    })
    .min(1)
    .max(1)
    .regex(/[1-8]/),
  date: z.date({
    required_error: "A reservation date is required",
  }),
});

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/shadui/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadui/components/ui/popover";
import { toast } from "@/shadui/components/ui/use-toast";

import Clock from "@/svg/Clock";
import Mail from "@/svg/Mail";
import Phone from "@/svg/Phone";
import Banner from "@/components/Banner";
import InferProps from "@/utils/InferProps";
import Social from "@/components/Social";
import Waze from "@/svg/logos/Waze";
import YouTube from "@/svg/logos/YouTube";
import TikTok from "@/svg/logos/TikTok";
import XLogo from "@/svg/logos/X";
import Instagram from "@/svg/logos/Ingtagram";
import Facebook from "@/svg/logos/Facebook";
import GitHub from "@/svg/logos/GitHub";
import { Calendar } from "@/shadui/components/ui/calendar";

const Contact = () => {
  const contacts: { icon: React.ReactNode; title: string; text: string }[] = [
    { icon: <Phone />, title: "Phone", text: "+1 (234) 567 89 00" },
    { icon: <Mail />, title: "Email", text: "beerboutique@fake.email.com" },
    { icon: <Clock />, title: "Working Hours", text: "4 PM — 2 AM" },
  ];

  const socials: Omit<InferProps<[typeof Social]>, "className">[] = [
    {
      icon: <GitHub />,
      name: "GitHub",
      link: "#",
    },
    {
      icon: <Facebook />,
      name: "Facebook",
      link: "#",
    },
    {
      icon: <Instagram />,
      name: "Instagram",
      link: "#",
    },
    {
      icon: <XLogo />,
      name: "X",
      link: "#",
    },
    {
      icon: <TikTok />,
      name: "TikTok",
      link: "#",
    },
    {
      icon: <YouTube />,
      name: "YouTube",
      link: "#",
    },
    {
      icon: <Waze />,
      name: "Waze",
      link: "#",
    },
  ];

  return (
    <div className="space-children">
      <Banner text="Contact" />
      <div className="mx-auto w-fit">
        <h2 className="text-center font-teko text-4xl">
          Join us on our social platforms
        </h2>
        <ul className="mx-auto flex w-full flex-row flex-wrap justify-center gap-4">
          {socials.map(({ icon, name, link }) => (
            <li>
              <Social
                icon={icon}
                name={name}
                link={link}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bounded-section grid content-center gap-8 md:grid-cols-2">
        <ul className="h-fit w-fit space-y-8 overflow-hidden md:m-auto">
          {contacts.map(({ icon, title, text }) => (
            <li className="flex flex-row items-center gap-4">
              <span className="flex aspect-square items-center justify-center rounded-full bg-black p-4 text-2xl text-lightningYellow">
                {icon}
              </span>
              <p>
                <span className="block font-teko text-3xl uppercase">
                  {title}
                </span>
                <span className="text-gray-400">{text}</span>
              </p>
            </li>
          ))}
        </ul>
        <MyForm />
      </div>
    </div>
  );
};

const MyForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "Reservation made",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-full flex-col justify-between space-y-10 rounded-md bg-black p-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="sr-only">Enter your name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute left-0 top-full" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="sr-only">Enter your phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute left-0 top-full" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="sr-only">
                Enter the number of guests, max 8
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Number of guests (max 8)"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute left-0 top-full" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="relative flex flex-col">
              <FormLabel className="sr-only">
                Choose date of reservation
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date => date <= new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="absolute left-0 top-full" />
            </FormItem>
          )}
        />
        <Button
          className="bg-lightningYellow text-base hover:bg-orange-500"
          type="submit"
        >
          Reserve
        </Button>
      </form>
    </Form>
  );
};

export default Contact;
