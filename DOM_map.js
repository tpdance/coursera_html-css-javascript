fucntion handleClick(event) {
  event.stopPropogration();

  var node = event.target;
  var thisPath = node.nodeName;

  while (node.parentNode) {
    node = node.parentNode;
    thisPath = node.nodeName + " > " + thisPath;
  }
  alert(thisPath);
}
