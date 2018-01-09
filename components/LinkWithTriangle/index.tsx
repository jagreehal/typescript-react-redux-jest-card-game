import * as React from "react";

type Props = {
  id: string,
  text: string,
  action: any,
  bgColour?:string
};

export default (props: Props) => {
  const bgColour = `bg-${props.bgColour || 'yellow'}`;  

  return (
    <a
      id={props.id}
      className={`f6 link ph4 pv4 black mr5 ${bgColour}`}
      onClick={props.action}
    >
      {props.text}
    </a>
  );
};
