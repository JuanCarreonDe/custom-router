import { BUTTONS, EVENTS } from "../../const";

export const navegate = (href) => {
  window.history.pushState({}, "", href);
  // avisar que se a cambiado la url
  const navegationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navegationEvent);
};

export const Link = ({resetScroll, target, to, ...props }) => {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTONS.primary; //primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault();
      navegate(to);
      resetScroll && window.scrollTo(0,0)
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
};

export default Link;
