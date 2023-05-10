    //working with boolean datatype
    var b:boolean = true
console.log(b)

b = false
console.log(b)


// working with any
var any1:any = 7676        
console.log(any1)

any1 = true              
console.log(any1)

any1 = [56,87,456]
console.log(any1)

any1 = 'This is TypeScript Code'     
console.log(any1)

any1=34.67
console.log(any1)         

// working with array of Strings
var str_array : object = ["mahi", "virat", "sachin", "shikhar", "pant"]
console.log("Printing Array of Strings : "+ str_array)
console.log("Printing fifth element of array : " + str_array[4])

//working with Heterogenous array
var htr_array : object = ["sachin", 98, "TypeScript", true ]
console.log("Printing Heterogenous Array : "+htr_array)
console.log("The second element in heterogenous array is " + typeof htr_array[1]+ " and the value is " + htr_array[1])