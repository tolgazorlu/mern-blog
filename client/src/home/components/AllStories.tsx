import PropTypes from "prop-types";
import BlogCard2 from "./BlogCard2";

const AllStories = ({ blogs }: any) => {
  return (
    <section className="px-[11em] flex flex-col">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-xl">All Stories</span>
        <div className="w-full">
          <hr className="w-1/12 border-1 border-gray-900" />
          <hr className="w-full border-gray-300" />
        </div>
      </div>
      <div className="py-[2em] grid grid-cols-3 gap-4">
        {Object.keys(blogs || {}).map((item: any, index) => {
          return <BlogCard2 key={index} item={blogs[item]} />;
        })}
      </div>
    </section>
  );
};

AllStories.propTypes = {
  blogs: PropTypes.array,
};

export default AllStories;
