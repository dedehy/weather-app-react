import React from "react";
import { RiLoaderFill } from "react-icons/ri";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <RiLoaderFill className="loadingIcon" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
