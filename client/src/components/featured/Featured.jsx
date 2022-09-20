import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movie" ? "Movies" : "Series "} </span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="criem">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://cdn.pocket-lint.com/r/s/x1920/assets/images/155659-tv-news-feature-what-is-the-best-order-to-watch-the-matrix-movies-image6-n4msmyjaxw.jpg"
        alt="profile picture"
      />
      <div className="info">
        <img
          src="https://occ-0-2433-1432.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeeMILAyu161f6TSuh-poQWNKfIo_pl9aeifrQ7noJsTYX78AbLCLDsPzCHSp7N0OfCGrU3nGDFtynNnZ3lKQbXuPgpbRObPUCcAPFgwtp2K.png?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          officiis et eligendi, quasi architecto, nihil nostrum debitis ullam
          necessitatibus eum nesciunt, quaerat aliquam. Aperiam corporis in
          illum aut, vero earum.
        </span>
        <div className="buttons">
          <button className="play">
            <BsFillPlayFill />
            <span>Play</span>
          </button>
          <button className="more">
            <BsInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
