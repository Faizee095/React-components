import { useEffect } from "react";

const useCount = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  });
  return <div></div>;
};

export default useCount;
