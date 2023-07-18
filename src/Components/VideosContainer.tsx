import Recommendation from "./Recommendation";

const VideosContainer = (props: any) => {
  return (
    <div>
      <Recommendation handleUpdate={props.handleUpdate} />
    </div>
  );
};

export default VideosContainer;
