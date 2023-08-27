import { MouseEventHandler, useRef } from "react";
import { twMerge as tw } from "tailwind-merge";

import CaretLeft from "../svg/CaretLeft";
import CaretRight from "../svg/CaretRight";

const HorizontalList = <T,>({
  listName,
  component,
  items,
  scrollDuration = 500,
  numItems,
  buttonClass,
  itemGap = "6rem",
}: {
  listName: string;
  component: React.FC<T>;
  items: T[];
  numItems?: { sm?: number; md?: number; lg?: number };
  scrollDuration?: number;
  buttonClass?: { both?: string; left?: string; right?: string };
  itemGap?: string;
}) => {
  const didClick = useRef(false);
  const isScrolling = useRef(false);
  const mouseX = useRef(0);
  const scroll = useRef(items.length);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    isScrolling.current = true;
    scroll.current = items.length + (scroll.current % items.length);
    listRef.current!.style.setProperty("--scroll", `${scroll.current}`);

    setTimeout(() => {
      scroll.current += direction;
      listRef.current!.style.setProperty("--scroll", `${scroll.current}`);
      containerRef.current!.classList.add("scroll");

      setTimeout(() => {
        containerRef.current!.classList.remove("scroll");
        isScrolling.current = false;
      }, scrollDuration);
    }, 10);
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
    didClick.current = true;
    mouseX.current = e.pageX;
    containerRef.current!.classList.add("drag");
  };
  const onMouseUp = () => {
    didClick.current = false;
    containerRef.current!.classList.remove("drag");
  };
  const onMouseOut = onMouseUp;
  const onMouseMove: MouseEventHandler<HTMLDivElement> = e => {
    if (!didClick.current || isScrolling.current) return;

    const diff = mouseX.current - e.pageX;
    if (Math.abs(diff) > 50) {
      mouseX.current = e.pageX;
      handleScroll(Math.sign(diff));
    }
  };

  return (
    <div
      className="horizontal-list-container"
      ref={containerRef}
    >
      <button
        className={tw(
          "absolute left-0 top-1/2 z-[1] flex aspect-square w-fit -translate-y-1/2 items-center justify-center rounded-full p-3 text-2xl text-accent transition-colors hover:bg-neutral-700",
          buttonClass?.both,
          buttonClass?.left,
        )}
        onClick={() => handleScroll(-1)}
        aria-hidden
      >
        <CaretLeft />
      </button>
      <button
        className={tw(
          "absolute right-0 top-1/2 z-[1] flex aspect-square w-fit -translate-y-1/2 items-center justify-center rounded-full p-3 text-2xl text-accent transition-colors hover:bg-neutral-700",
          buttonClass?.both,
          buttonClass?.right,
        )}
        onClick={() => handleScroll(1)}
        aria-hidden
      >
        <CaretRight />
      </button>
      <div
        className="overflow-hidden"
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      >
        <ul
          ref={listRef}
          className="horizontal-list"
          style={
            {
              "--scroll": scroll.current,
              "--duration": `${scrollDuration}ms`,
              "--sm-num-items": numItems?.sm,
              "--md-num-items": numItems?.md,
              "--lg-num-items": numItems?.lg,
              "--gap": itemGap,
            } as React.CSSProperties
          }
        >
          {items.map((item, idx) => (
            <li
              key={`${listName}-list-1-${idx}`}
              aria-hidden
            >
              {component(item)}
            </li>
          ))}
          {items.map((item, idx) => (
            <li key={`${listName}-list-2-${idx}`}>{component(item)}</li>
          ))}
          {items.map((item, idx) => (
            <li
              key={`${listName}-list-3-${idx}`}
              aria-hidden
            >
              {component(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalList;
