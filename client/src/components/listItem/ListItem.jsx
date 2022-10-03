import "./listItem.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";

export default function ListItem() {
  return (
    <div className="listItem">
      <img
        src="https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2007/5/w1280/lrSp2n61IBX4i6NGh0xFtyTfSiJ.jpg"
        alt="Chrlie Bartlett Movie"
      />
      <div className="itemInfo">
        <div className="icons">
          <BsFillPlayFill />
          <IoIosAdd />
          <AiOutlineLike />
          <AiOutlineDislike />
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
    </div>
  );
}
