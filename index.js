const receivesAFunction = (callback) =>{
    callback()
}
function returnsANamedFunction (){
   function eyes(){ 
    return `o.o`
}
return eyes
}

function returnsAnAnonymousFunction(){
    return function(){}
 }