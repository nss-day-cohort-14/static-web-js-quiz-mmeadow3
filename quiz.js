
var tree = { };

var Height = document.getElementById("height");
var Symbol = document.getElementById("symbol");

var newTree = document.getElementById('build');
build.addEventListener('click', makeTree);

height.addEventListener('keypress', keypressEvent);
symbol.addEventListener('keypress', keypressEvent);

function keypressEvent (event) {
  if ( event.keyCode === 13 ) {
    makeTree();
  }; 
};

 function makeTree() {
  tree.height = height.value;
  tree.sym = symbol.value;
	handleGrowTree(tree);
};

function handleGrowTree(tree) {

  var spaces;
  var spaceCounter = tree.height - 1;

  var character;
  var characterCounter = 1;
  for (var i = 0; i < tree.height; i++) {
    spaces = ' '.repeat(spaceCounter);
    character = tree.sym.repeat(characterCounter);
    spaceCounter--
    characterCounter = characterCounter + 2;

    console.log(spaces + character);
};
};