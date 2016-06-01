
var input1 = document.getElementById("enter").addEventListener("click", function(){
  var treeHeight = document.getElementById("height").value;
  tree(treeHeight)
});


var input2 = document.getElementById("enter").addEventListener("click", function(){
  var treeSymbol = document.getElementById("symbol").value;
  tree(treeSymbol)
});

function tree (input1, input2) {
for (var i = 0; i <= input1; i++) {
	console.log(input2);
}
};




