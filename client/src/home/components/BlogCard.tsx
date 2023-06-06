import React from "react";

const BlogCard = () => {
  return (
    <div className="grid grid-flow-col border-2 rounded-md">
      <img
        className="h-[20em] col-span-2"
        src="https://wowthemesnet.github.io/mediumish-theme-jekyll/assets/images/12.jpg"
      />
      <div className="px-10 py-6 flex gap-2 flex-col">
        <h1 className="font-bold text-xl">Let's test spoilers</h1>
        <p className="text-md text-gray-500">
          Director Roland Suso Richter’s enigmatic psychological thriller
          (direct to video/DVD) was based upon screenwriter Michael Cooney’s own
          play “Point of Death” - a title that...
        </p>
        <div>content</div>
      </div>
    </div>
  );
};

export default BlogCard;
