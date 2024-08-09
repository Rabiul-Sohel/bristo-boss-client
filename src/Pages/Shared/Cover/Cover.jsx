import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={2}
      bgImage={img}
      bgImageAlt="the cat"
      strength={400}
    >
      {/* Content goes here. Parallax height grows with content height. */}
      <div
        className="hero min-h-[60vh] bg-center bg-cover"
        // style={{
        //   backgroundImage: `url(${img})`,
        // }}
      >
        <div className="hero-content text-center text-neutral-content w-full h-full">
          <div className=" w-2/3 h-2/5 bg-black bg-opacity-50 text-white flex items-center justify-center">
            <div>
              <h1 className="mb-5 text-5xl font-semibold"> {title} </h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
