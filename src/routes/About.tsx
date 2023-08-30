import Banner from "../components/Banner";
import HalfSection from "../components/HalfSection";
import EyebrowHeading from "../components/EyebrowHeading";

import story from "../assets/story.png";

import john from "../assets/john.png";
import anthony from "../assets/anthony.png";
import thomas from "../assets/thomas.png";

const About = () => (
  <>
    <Banner text={"About Beer Boutique"} />
    <div className="space-children">
      <Story />
      <Staff />
    </div>
  </>
);

const Story = () => (
  <section>
    <HalfSection
      content={
        <EyebrowHeading
          className="mx-auto flex h-full max-w-[600px] flex-col justify-center space-y-4 p-8"
          eyebrow={{ content: "Our story" }}
          heading={{ content: "Process of Creating" }}
          description={
            <>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Our main goal has always been to create a pub with the best
                selection of beers and simple food.
              </p>
              <p className="text-gray-400">
                Our selection of beers is a result of long and scrupulous
                experiments that give us thousands of taste combinations. Each
                and every beer of ours has a unique recipe and a solid standard
                of preparation, supervised closely by our beer masters. We want
                you to feel all the richness of an original draft beer and also
                offer a wide variety of bottled beers from the best local
                producers.
              </p>
            </>
          }
        />
      }
      img={{
        src: story,
      }}
      reverse
    />
  </section>
);

const Staff = () => {
  const staff: {
    img: string;
    name: string;
    title: string;
    description: string;
    imgPosition?: string;
  }[] = [
    {
      img: john,
      name: "John Wasker",
      title: "Beer Master",
      description:
        "John is a talented and dedicated beer master. Not a single beer recipe reaches our guests without his approval. He can find a perfect balance of tastes, maintaining the precision of the brewing process.",
      imgPosition: "object-[100%,60%]",
    },
    {
      img: anthony,
      name: "Anthony Kiedis",
      title: "Chef",
      description:
        "Being a generally versatile cook, Andrew is a sucker for grill food. Any meal involving grilled fish, meats, or vegetables lies within his masterful cooking skills. He creates great pairings for our beer.",
    },
    {
      img: thomas,
      name: "Tomas Welsh",
      title: "Manager",
      description:
        "He is the universal soldier of Beer Boutique. Thomas is a person that can help in the kitchen, bring the orders to guests, and watch over the stock. He keeps things in line even on the busiest hours.",
      imgPosition: "object-[70%,50%]",
    },
  ];

  return (
    <section className="bounded-section">
      <EyebrowHeading
        className="text-center"
        eyebrow={{ content: "Our professional team" }}
        heading={{ content: "Meet Our Team" }}
        description={{
          content: "Learn more about our brewers, bartenders, and chefs.",
        }}
      />
      <ul className="flex flex-col flex-wrap justify-center gap-8 text-center md:flex-row lg:flex-nowrap">
        {staff.map(({ img, name, title, description, imgPosition }) => (
          <li className="h-full space-y-4 md:w-2/5 lg:w-full">
            <div className="aspect-[7/8] w-full">
              <img
                src={img}
                className={"h-full w-full object-cover " + (imgPosition ?? "")}
              />
            </div>
            <h3 className="font-teko text-3xl uppercase">{name}</h3>
            <h4 className="font-bold uppercase text-accent">{title}</h4>
            <p className="text-gray-400">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
