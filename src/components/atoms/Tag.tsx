import React from "react";

export const Tag = ({ task: { id, title, bgColor } }) => {
  const tabStyle = `font-open text-xs text-white font-medium bg-${bgColor}`;
  return <span className={tabStyle}>{title}</span>;
};
