import React from "react";
// @ts-ignore
import { Button, Divider, Space, Tour } from "antd";

import { useRef, useState } from "react";

// @ts-ignore
import { connect } from "umi";

interface ITournode {
  ref1: object;
  ref2: object;
  ref3: object;

  [propsName: string]: any;
}

interface IRef {
  current: object;
}

const Tourhelp = (props: ITournode) => {
  const setOpen = (bool: boolean) => {
    props.dispatch({
      type: "TourhelpopenModel/changeTouropen",
      payload: {
        bool,
      },
    });
  };

  const steps = [
    {
      title: "Upload File",
      description: "Put your files here.",
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),

      target: () => (props.ref1 as IRef).current,
      placement: "rightBottom",

    },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => (props.ref2 as IRef).current,
      placement: "rightBottom",

    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: () => (props.ref3 as IRef).current,
      placement: "rightBottom",

    },
  ];

  return (
    <>
      <Tour
        steps={steps as any}
        open={props.touropen}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    touropen: state.TourhelpopenModel.touropen,
  };
};
export default connect(mapStateToProps)(Tourhelp);
