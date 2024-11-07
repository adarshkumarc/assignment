import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const StoryListPage = () => {
  const [stories, setStories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          "https://mxpertztestapi.onrender.com/api/sciencefiction"
        );
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching the stories:", error);
      }
    };

    fetchStories();
  }, []);

  const handleCardClick = (id) => {
    // Navigate to the story detail page
    history.push(`/story/${id}`);
  };

  return (
    <div className="story-list">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-card"
          onClick={() => handleCardClick(story.id)}
        >
          <img
            src={`https://ik.imagekit.io/dev24/${story.Image}`}
            alt={story.Title}
          />
          <h3>{story.Title}</h3>
          <p>{story.BriefDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryListPage;
