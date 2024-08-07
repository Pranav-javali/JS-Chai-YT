
//named IIFE
( function chai(){
    console.log(`DB Connect`)
})();

//unnamed IIFE
( () => {
    console.log(`DB Connect using Arrow`)
})();

//Pass Parameter 
( (name) => {
    
    console.log(`DB Connect using Arrow with parameter ${name}`)
})('Pranav')