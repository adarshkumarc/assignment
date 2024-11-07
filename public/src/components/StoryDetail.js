import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryDetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [storyDetail, setStoryDetail] = useState(null);

  useEffect(() => {
    const fetchStoryDetail = async () => {
      try {
        const response = await axios.get(
          `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
        );
        setStoryDetail(response.data);
      } catch (error) {
        console.error("Error fetching story detail:", error);
      }
    };

    fetchStoryDetail();
  }, [id]);

  if (!storyDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story-detail">
      <div className="story-header">
        <img
          src={`https://ik.imagekit.io/dev24/${storyDetail.Image}`}
          alt={storyDetail.Title}
        />
        <h2>{storyDetail.Title}</h2>
        <p>{storyDetail.BriefDescription}</p>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button>Details</button>
        <button>About the Author</button>
        <button>Reviews</button>
      </div>

      <div className="tab-content">
        {/* Add dynamic content for each tab */}
        <div className="tab-panel">Story Content: {storyDetail.Content}</div>
      </div>
    </div>
  );
};

export default StoryDetailPage;
