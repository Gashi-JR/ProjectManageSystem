import React, { useState } from "react";
//@ts-ignore
import Icon from "supercons";
import "./Btn.less";
import { Tour } from "antd";
import { useLocation } from "@@/exports";
import { connect } from "umi";

interface IBtnprop {
  [propsName: string]: any;
}

function Btn(props: IBtnprop) {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("login") && (
        <Icon
          glyph="idea"
          size={32}
          className="icon"
          style={{ marginTop: "16px", position: "fixed", right: 172 }}
          onClick={() => {
            props.dispatch({
              type: "TourhelpopenModel/changeTouropen",
              payload: {
                bool: true,
              },
            });
          }}
        />
      )}
      <Icon
        glyph="terminal"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 122 }}
      />
      <Icon
        glyph="checkbox"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 72 }}
      />
      <Icon
        glyph="view-close"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 22 }}
      />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state.TourhelpopenModel.touropen);
  return { touropen: state.TourhelpopenModel.touropen };
};

export default connect(mapStateToProps)(Btn);
