import { Carousel } from "flowbite-react";

const CarousalContainer = () => {
  return (
    <div className="pt-3 bg-black w-full h-screen">
      <Carousel className="opacity-40">
        <img
          alt="..."
          src="https://assets.gqindia.com/photos/60defab2f957deba6aa1e896/16:9/pass/Godzilla%20vs%20Kong.jpg"
        />
        <img
          alt="..."
          src="https://i.ytimg.com/vi/2pL9ZCqpATQ/maxresdefault.jpg"
        />
        <img
          alt="..."
          src="https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/fbadcc5e5daa3d7877aed734a7bfd857_1280x800.jpg"
        />
        <img alt="..." src="https://cdn.wallpapersafari.com/62/19/eiQ9qv.jpg" />
      </Carousel>
    </div>
  );
};

export default CarousalContainer;
