import PropTypes from "prop-types";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AllStories from "../components/AllStories";
import Featured from "../components/Featured";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3001/")
          .then((response) => response.json())
          .then((data: any) => setBlogs(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Featured />
      <AllStories blogs={blogs} />
    </>
  );
};

Home.proptype = {
  blogs: PropTypes.object,
};

export default Home;
