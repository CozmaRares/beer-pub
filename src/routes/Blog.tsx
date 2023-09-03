import blogImg from "@/assets/blog-img.jpg";
import Image from "@/components/Image";
import { cn } from "@/shadui/utils";
import InferProps from "@/utils/InferProps";
import { format } from "date-fns";

const BLOG_PROPS: Omit<InferProps<[typeof BlogPost]>, "className"> = {
  img: { src: blogImg, alt: "image placeholder" },
  title: "Title",
  type: "Type",
  author: "Author",
  date: format(new Date(), "PPP"),
};

const Blog = () => (
  <div className="bounded-section space-y-8 py-4">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[3fr,2fr]">
      <BlogPost
        {...BLOG_PROPS}
        className="md:col-span-2 lg:col-span-1 lg:row-span-2"
      />
      <BlogPost {...BLOG_PROPS} />
      <BlogPost {...BLOG_PROPS} />
    </div>
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {new Array(Math.floor(Math.random() * 8) + 2).fill(0).map(() => (
        <BlogPost
          {...BLOG_PROPS}
          className="md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
        />
      ))}
    </div>
  </div>
);

const BlogPost: React.FC<{
  img: { src: string; alt: string };
  title: string;
  type: string;
  author: string;
  date: string;
  className?: string;
}> = ({ img, title, type, author, date, className }) => (
  <article className={cn("relative", className)}>
    <Image
      src={img.src}
      alt={img.alt}
      className="h-full w-full rounded-md object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 space-y-1 rounded-b-md bg-black/80 p-2 sm:p-4">
      <p className="font-shadows text-xs text-lightningYellow toMd:text-lg">
        {type}
      </p>
      <h2 className="font-teko text-2xl leading-5 toMd:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="hidden flex-row items-center gap-2 text-xs toMd:flex lg:text-base">
        <span className="before:content['By_'] before:font-shadows before:text-lightningYellow">
          {author}
        </span>
        <span className="block h-[1em] w-[2px] bg-lightningYellow" />
        <time>{date}</time>
      </div>
    </div>
  </article>
);

export default Blog;
