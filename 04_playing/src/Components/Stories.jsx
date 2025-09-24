import React, { useState, useEffect } from "react";
import StoriesList from "./StoriesList";

export default function Stories() {
  const [stories, setStories] = useState([]);

  async function getStoriesData() {
    try {
      let res = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json`
      );
      let data = await res.json();
      console.log(data);
      setStories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoriesData();
  }, []);

  return (
    <>
      <p>This is Stories component</p>
      <StoriesList stories={stories} />
    </>
  );
}
