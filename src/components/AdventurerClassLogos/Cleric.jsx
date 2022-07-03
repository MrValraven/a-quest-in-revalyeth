import React from "react";
import "./styles.scss";

const Cleric = ({ color = "#FFFFFF" }) => {
  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path
        id="healer"
        d="M367.844 23.563c-1.25-.007-2.497 0-3.75.03-39.558 1.014-80.216 21.152-108.656 61.938-35.39-50.06-91.964-68.935-140.938-58.905C61.602 37.46 17.574 83.133 19.844 154.188c2.375 74.366 56.072 131.622 109.844 179.968 26.885 24.173 54.033 46.28 75.468 67 21.435 20.72 36.758 40.126 41.313 57.125l9.03 33.69 9-33.69c3.988-14.88 19.58-34.12 41.594-55.03 22.014-20.91 49.996-43.803 77.47-68.78 54.944-49.96 109.165-108.878 106.905-180.876-2.19-69.696-45.2-115.576-96.75-127.125-8.46-1.896-17.126-2.865-25.876-2.907zm-227.97 19.125c39.622-.274 81.748 20.09 107.532 64.75l7.75 13.437V239.75c-1.484-.18-2.968-.28-4.5-.28-20.714 0-37.53 16.784-37.53 37.5 0 20.715 16.816 37.5 37.53 37.5 1.533 0 3.016-.104 4.5-.283v117.657c-8.78-15.032-21.796-29.428-37-44.125-1.05-1.015-2.117-2.047-3.187-3.064 13.682-2.09 24.186-13.89 24.186-28.156 0-15.744-12.788-28.5-28.53-28.5-15.304 0-27.784 12.052-28.47 27.188-13.032-11.32-26.6-22.92-39.97-34.938-52.87-47.538-101.56-101.075-103.655-166.656-2.022-63.343 34.622-99.42 79.72-108.656 7.047-1.444 14.288-2.2 21.625-2.25zm40.75 41.75c-20.713 0-37.5 16.785-37.5 37.5 0 4.616.85 9.04 2.376 13.124-.136-.002-.27 0-.406 0-12.153 0-22 9.848-22 22 0 12.154 9.847 22 22 22 12.152 0 22-9.846 22-22v-.125c4.197 1.624 8.76 2.5 13.53 2.5 20.715 0 37.5-16.783 37.5-37.5 0-20.716-16.785-37.5-37.5-37.5zm26.314 83.687c-10.834.55-19.438 9.53-19.438 20.5 0 11.325 9.176 20.5 20.5 20.5s20.5-9.175 20.5-20.5-9.176-20.5-20.5-20.5c-.354 0-.713-.018-1.063 0zm-33.844 52.438c-14.362 0-26 11.636-26 26 0 14.363 11.638 26.03 26 26.03s26.03-11.67 26.03-26.03c0-14.364-11.668-26-26.03-26z"
      />
    </svg>
  );
};

export default Cleric;
