import { ChangeEventHandler, useState } from "react";
import Clock from "@/svg/Clock";
import Mail from "@/svg/Mail";
import Phone from "@/svg/Phone";
import Banner from "@/components/Banner";
import ButtonFull from "@/components/ButtonFull";
import InferProps from "@/utils/InferProps";
import Social from "@/components/Social";
import Waze from "@/svg/logos/Waze";
import YouTube from "@/svg/logos/YouTube";
import TikTok from "@/svg/logos/TikTok";
import XLogo from "@/svg/logos/X";
import Instagram from "@/svg/logos/Ingtagram";
import Facebook from "@/svg/logos/Facebook";
import GitHub from "@/svg/logos/GitHub";

const Contact = () => {
  const contacts: { icon: React.ReactNode; title: string; text: string }[] = [
    { icon: <Phone />, title: "Phone", text: "+1 (234) 567 89 00" },
    { icon: <Mail />, title: "Email", text: "beerboutique@fake.email.com" },
    { icon: <Clock />, title: "Working Hours", text: "4 PM — 2 AM" },
  ];

  const formInputs: {
    name: string;
    placeholder: string;
    pattern?: string;
    label?: string;
    title?: string;
  }[] = [
    {
      name: "name",
      placeholder: "Name",
    },
    {
      name: "phone",
      placeholder: "Phone number",
      pattern: "\\d*",
      title: "Must be a number",
    },
    {
      name: "guests",
      placeholder: "Number of guests",
      pattern: "\\d*",
      title: "Must be a number",
    },
    {
      name: "date",
      placeholder: "dd/mm/yy",
      pattern: "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[1,2])/20\\d{2}",
      label: "Date of reservation",
      title: "Must be of format day/month/year",
    },
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

  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    phone: "",
    guests: "",
    date: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = () => {
    console.log(form);
    setForm({
      name: "",
      phone: "",
      guests: "",
      date: "",
    });
  };

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
              <span className="flex aspect-square items-center justify-center rounded-full bg-black p-4 text-2xl text-accent">
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
        <form className="flex max-w-full flex-col justify-between gap-8 rounded-md bg-black px-8 py-16">
          {formInputs.map(({ name, placeholder, pattern, label, title }) => (
            <>
              <label
                htmlFor={name}
                className="sr-only"
              >
                {label ?? name}
              </label>
              <input
                className="w-full rounded-lg bg-neutral-900 px-2 py-4 sm:px-4"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={form[name]}
                required
                pattern={pattern}
                title={title}
              />
            </>
          ))}
          <button
            onClick={submit}
            className="block w-full"
            type="button"
          >
            <ButtonFull className="w-full">Reserve</ButtonFull>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
