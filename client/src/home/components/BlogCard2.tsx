import React from "react";
import PropTypes from "prop-types";

const BlogCard2 = ({ item }: any) => {
  return (
    <div className="grid grid-flow-row border-2 rounded-md">
      <img
        className="h-[20em] col-span-2"
        src="https://wowthemesnet.github.io/mediumish-theme-jekyll/assets/images/12.jpg"
      />
      <div className="px-10 py-6 flex gap-2 flex-col">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p className="text-md text-gray-500">{item.detail}</p>
        <div>{item._id}</div>
      </div>
      <a href={"/blog/" + item._id}>Read more...</a>
    </div>
  );
};

BlogCard2.propTypes = {
  item: PropTypes.any,
};

export default BlogCard2;
