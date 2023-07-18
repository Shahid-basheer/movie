import Cards from "./Cards";
import { useEffect, useLayoutEffect, useState } from "react";
import { getAllMovies } from "./FirebaseFunctions";

const Recommendation = (props: any) => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllMovies().then((res: any) => setState(res));
  }, []);

  useLayoutEffect(() => {
    if (state.length) {
      setIsLoading(false);
    }
  }, [state]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-black w-full h-screen">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-full h-screen bg-black p-3">
      <h1 className="xxm:text-xl lg:text-3xl font-sans font-bold leading-5 p-3">
        Recommendation for you
      </h1>
      <div className="flex flex-row w-full h-390 shadow-2xl rounded mt-4  overflow-x-auto overflow-y-hidden style-scroll">
        {state.map((movie: any, index: number) => (
          <div key={index}>
            <Cards
              movies={movie}
              width={"min-w-280"}
              handleUpdate={props.handleUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
