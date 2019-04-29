import anime from "animejs";
export function initAnimation() {
  let { size } = this.props;
  var tl = anime.timeline({
    easing: "linear",
    loop: true,
    targets: this.refs.pacer
  });

  tl.add({
    width: size,
    height: size,
    duration: this.props.inhale
  })
    .add({ duration: this.props.inhaleHold })
    .add({
      width: size / 2,
      height: size / 2,
      duration: this.props.exhale
    })
    .add({ duration: this.props.exhaleHold });
}
