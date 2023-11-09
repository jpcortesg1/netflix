import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/400129752.sd.mp4?s=20dedc99899d30a94aaedd105097a7c4f42f6d43&profile_id=164&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{
        left: isHovered && index * 225 - 50 + index * 2.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2007/5/w1280/lrSp2n61IBX4i6NGh0xFtyTfSiJ.jpg"
        alt="Chrlie Bartlett Movie"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop muted />
          <div className="itemInfo">
            <div className="icons">
              <BsFillPlayFill className="icon" />
              <IoIosAdd className="icon" />
              <AiOutlineLike className="icon" />
              <AiOutlineDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              recusandae!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
