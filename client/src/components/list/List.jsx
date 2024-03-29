import { useState } from "react";
import { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List() {
  const listRef = useRef();

  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    let size = listRef.current.children.length;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber((current) => current - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
    }
    if (direction === "right" && sliderNumber < size - 6) {
      setSliderNumber((current) => current + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <HiOutlineChevronLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
        </div>
        <HiOutlineChevronRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
