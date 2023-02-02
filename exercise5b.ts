function numberOfCharacters (value:string):number
{
    return value.replace(" ", "").length;
}

console.log("The number of characters with no spaces is:" 
+numberOfCharacters("Test 1"));




