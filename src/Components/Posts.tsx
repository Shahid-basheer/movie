import { useState, useEffect, useLayoutEffect } from "react";
import Recommendation from "./Recommendation";
import Cards from "./Cards";
import { getAllMovies } from "./FirebaseFunctions";
const Posts = () => {
  const [state, setState] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    if (state.length) {
      setIsLoading(false);
    }
  }, [state]);
  useEffect(() => {
    getAllMovies().then((res) => setState(res));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className=" bg-black">
      <h1 className="text-3xl font-sans font-bold leading-5 p-3">
        Latest movies
      </h1>
      <div className="grid xm:grid-cols-2 max-[500px]:pl-3 max-[500px]:pr-3 xm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3:col-span-4 lg:pl-5 pr-5 xl:grid-cols-5 ">
        {state.map((movie: any, key: number) => (
          <Cards key={key} movies={movie} width={"min-w-300"} />
        ))}
      </div>
      <Recommendation />
    </div>
  );
};

export default Posts;
