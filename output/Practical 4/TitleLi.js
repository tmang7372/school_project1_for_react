export function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: function () {
      props.onMouseEnter();
    },
    onMouseLeave: function () {
      props.onMouseLeave();
    }
  }, /*#__PURE__*/React.createElement("b", null, props.title), " : ", !props.isHidden && props.text);
}