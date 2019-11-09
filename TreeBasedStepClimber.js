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
        //console.log('found unique, curently: ' +uniques.length);
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
        //console.log(uniques[i].jumps.toString())
    }
  }
  return uniques.length;
  
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

function num_ways(n){
    if (n==0 || n==1){
        return 1;
    }
    else {
        return num_ways(n-1)+ num_ways(n-2)
    }
}

function num_ways_bottom_up(n){
    if(n==0||n==1){
        return 1;
    }
    var nums =[]
    nums[0] ==1;
    nums[1] ==1;
    for(var i=2;i<=n;i++){
        nums[i] = nums[i-1] + nums[i-2]
    }
    return nums[n]
}


function num_ways_x(n,s){
    if (n==0){
        return 1;
    }
    var total = 0;
    for(var i=0;i<s.length;i++){
        var el = s[i];
        if(n-el >=0){
            total+= num_ways_x(n-el,s)
        }
    }
    return total;
}

function num_ways_bottom_up_x(n,s){
    if (n==0){
        return 1;
    }
    debugger
    var nums =[]
    nums[0] ==1;
    for(var i=1;i<=n;i++){
        var total = 0;
        for(var j=0;j<s.length;j++){
            var el = s[j];
            if (i-el >=0){
                total += nums[i-el]
            }
        }
        nums[i]=total;
    }
    return nums[n]
}

function testing(min,max,steps){
    for (var t=min;t<=max;t++){
        console.log('t value is ' + t + ', steps value is: ' + JSON.stringify(steps));
        console.log(staircase(t,steps));
        console.log(num_ways_bottom_up_x(t,steps));
        if(num_ways_bottom_up_x(t,steps)==staircase(t,steps)){
            console.log('true');
        }
    }
}
