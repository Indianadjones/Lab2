function bothMethods (value:string,spaces?:boolean):number

{

    let count:number = 0;

    
if(spaces){
    count = value.length;
}else{
    count = value.replace(" ","").length;
}

    return count;
}
console.log(bothMethods("test 1"));







