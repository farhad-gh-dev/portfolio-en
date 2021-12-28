import React from "react";
import "./loading.scss";

interface Props {
  message?: string;
  coverPage?: boolean;
}

const Loading: React.FC<Props> = ({ message, coverPage = false }) => {
  return (
    <div className={`loading${coverPage ? " cover-page" : ""}`}>
      <div className="loading-spinner"></div>
      {message ? (
        <div className="loading-text-container">
          <span className="loading-text">{message}</span>
          <div className="loading-text-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Loading;
