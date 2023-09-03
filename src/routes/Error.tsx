import ButtonSkeleton from "@/components/ButtonSkeleton";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="space-y-6 text-center">
    <div className="mx-auto w-fit items-center toMd:grid">
      <h1 className="col-span-full row-span-full text-6xl uppercase text-lightningYellow toMd:text-[10rem]">
        OOPS!
      </h1>
      <p className="col-span-full row-span-full mt-auto rounded-xl p-2 text-lg font-bold backdrop-blur toMd:text-3xl">
        404 - The page can't be found
      </p>
    </div>
    <Link
      className="mx-auto block w-fit"
      to="/"
    >
      <ButtonSkeleton>Go to homepage</ButtonSkeleton>
    </Link>
  </div>
);

export default Error;
