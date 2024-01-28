import { useEffect, useState } from "react";

export const Accordion = ({ title, children, open }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  useEffect(() => {
    setShow(open);
  }, [open]);
  return (
    <div>
      <h3 onClick={toggleShow}>{title}</h3>
      {show && <div>{children}</div>}
    </div>
  );
};
