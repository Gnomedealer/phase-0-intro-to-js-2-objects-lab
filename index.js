const employee = {
    name: "Denny",
    streetAddress: "13 Broadway"
} 
function updateEmployeeWithKeyAndValue(object, key, value){
    const copyobject = {...object}

    copyobject[key] = value
    
    return copyobject
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
     object[key] = value
    return object
}
function deleteFromEmployeeByKey(object, key){
    const newobject = {...object}
    delete newobject[key]
    return newobject 
}
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}
