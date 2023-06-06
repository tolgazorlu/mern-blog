import BlogCard from "./BlogCard";

const Featured = () => {
  return (
    <section className="px-[11em] flex flex-col">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-xl">Featured</span>
        <div className="w-full">
          <hr className="w-1/12 border-1 border-gray-900" />
          <hr className="w-full border-gray-300" />
        </div>
      </div>
      <div className="py-[2em] grid grid-cols-2 gap-4">
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Featured;
