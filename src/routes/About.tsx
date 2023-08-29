import Banner from "../components/Banner";
import HalfSection from "../components/HalfSection";

import story from "../assets/story.png";
import EyebrowHeading from "../components/EyebrowHeading";

const About = () => (
  <>
    <Banner text={"About Beer Boutique"} />
    <div className="space-children">
      <Story />
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

export default About;
