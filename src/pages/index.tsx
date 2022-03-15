import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Index
 */
const Index = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push({ query: { tab: "tab1" } })}>
        Tab 1
      </button>
      <button onClick={() => router.push({ query: { tab: "tab2" } })}>
        Tab 2
      </button>
      {router.query.tab !== "tab2" && <MyTab1Content />}
    </div>
  );
};

export default Index;

/**
 * MyTab1Content
 */
const MyTab1Content = () => {
  const [, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);

  return <MyWidget increment={increment} />;
};

/**
 * MyWidget
 */
type TProps = {
  increment: () => void;
};

const MyWidget = ({ increment }: TProps) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    const handleClick = () => {
      if (!isMountedRef.current) {
        return;
      }
      increment();
    };
    document.addEventListener("click", handleClick);
    return () => {
      isMountedRef.current = false;
      document.removeEventListener("click", handleClick);
    };
  }, [increment]);

  return <div>My widget</div>;
};
