import React from "react";
import PropTypes from "prop-types";
import { initAnimation } from "../helpers/basic-shape";

export default class BasicSquarePacer extends React.Component {
  static defaultProps = {
    color: "lightBlue",
    size: 200,
    inhale: 4000,
    inhaleHold: 4000,
    exhale: 4000,
    exhaleHold: 4000
  };
  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    inhale: PropTypes.number,
    inhaleHold: PropTypes.number,
    exhale: PropTypes.number,
    exhaleHold: PropTypes.number
  };
  componentDidMount() {
    initAnimation.bind(this)();
  }
  render() {
    let { size, color } = this.props;
    return (
      <div
        style={{
          width: size + "px",
          height: size + "px",
          border: `2px solid ${color}`
        }}
      >
        <div
          ref="pacer"
          style={{
            margin: "auto",
            background: color,
            width: size / 2,
            height: size / 2
          }}
        />
      </div>
    );
  }
}
