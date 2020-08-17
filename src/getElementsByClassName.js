// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  var emptyArr = [];

  node = node || document.body;

  if (node.classList.contains(className)) {
    emptyArr.push(node);
  }

  for (var i = 0; i < node.children.length; i++) {
    var childRes = getElementsByClassName(className, node.children[i]);
    emptyArr = emptyArr.concat(childRes);
  }

  return emptyArr;
};
