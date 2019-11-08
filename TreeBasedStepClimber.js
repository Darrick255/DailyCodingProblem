function staircase(N,jumps){
  var root= BuildNode({},0)
  var uniques = []
  var stack = [];
  stack.push(root);       // stack is now [2]
  while(stack.length>0){
    var cnode = stack.pop();
    for (var j= 0; j<jumps.length;j++){
      var node = BuildNode(cnode,jumps[j])
      if (node.sum == N){
        uniques.push(node);
        console.log('found unique, curently: ' +uniques.length);
      } else if (node.sum < N){
        stack.push(node);
      } else if(node.sum >N){
        //invalid do nothing
      }
    }
  }
  
  console.log(uniques.length);
  if (uniques.length<=500){
    for(var i=0; i<uniques.length;i++){
        console.log(uniques[i].jumps.toString())
    }
  }
  return uniques;
  
  
  
}

function BuildNode(parent, mod){
 //f parent = null
  node = {sum:parent.sum+mod||0,jumps:[]};
  if (typeof parent.sum !== 'undefined'){
    node.jumps = parent.jumps.slice(0)
    node.jumps.push(mod)
  }
  return node
}
