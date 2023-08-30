import { PointerEventHandler, TouchEventHandler, useRef } from "react";
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

  const click = (x: number) => {
    didClick.current = true;
    mouseX.current = x;
    containerRef.current!.classList.add("drag");
  };
  const drag = (x: number) => {
    if (!didClick.current || isScrolling.current) return;

    const diff = mouseX.current - x;
    if (Math.abs(diff) > 50) {
      mouseX.current = x;
      handleScroll(Math.sign(diff));
    }
  };

  const onPointerDown: PointerEventHandler<HTMLDivElement> = e =>
    click(e.pageX);
  const onPointerUp = () => {
    didClick.current = false;
    containerRef.current!.classList.remove("drag");
  };
  const onPointerMove: PointerEventHandler<HTMLDivElement> = e => drag(e.pageX);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = e =>
    click(e.targetTouches[0].pageX);
  const onTouchEnd = onPointerUp;
  const onTouchMove: TouchEventHandler<HTMLDivElement> = e =>
    drag(e.targetTouches[0].pageX);

  return (
    <div
      className="horizontal-list-container max-h-[100vh]"
      ref={containerRef}
    >
      <button
        className={tw(
          "absolute -left-[2%] top-1/2 z-[1] flex aspect-square min-h-fit -translate-y-1/2 items-center justify-center rounded-full p-3 text-2xl text-accent transition-colors hover:bg-neutral-700 xl:-left-[5%]",
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
          "absolute -right-[2%] top-1/2 z-[1] flex aspect-square min-h-fit -translate-y-1/2 items-center justify-center rounded-full p-3 text-2xl text-accent transition-colors hover:bg-neutral-700 xl:-right-[5%]",
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
        onPointerUp={onPointerUp}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
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
