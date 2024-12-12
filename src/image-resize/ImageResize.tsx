import React from "react";
import { FC } from "react";
import { debounce } from "lodash";

export const ImageResize: FC = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (imgRef.current) {
        const ratio =
          imgRef.current.naturalWidth / imgRef.current.naturalHeight;
        if (dimensions.width / dimensions.height > ratio) {
          setDimensions({
            height: dimensions.height,
            width: dimensions.height,
          });
        } else {
          setDimensions({
            height: dimensions.width,
            width: dimensions.width,
          });
        }
      } else {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }
    }, 10);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const imgRef = React.createRef<HTMLImageElement>();

  const styles = {
    width: dimensions.width,
    height: dimensions.height,
  };

  return (
    <div>
      Rendered at {dimensions.width} x {dimensions.height}
      <br />
      <img
        ref={imgRef}
        style={styles}
        src="https://img.freepik.com/free-vector/digital-device-mockup_53876-89354.jpg?size=338&ext=jpg"
        alt="My SVG"
      />
    </div>
  );
};
