var myMap = new Map()

//Insert Values Into the map


myMap.set(1,"One")
myMap.set(2,"Two")
myMap.set(3,"Three")
myMap.set(4,"Four")

console.log(myMap);

// Accessing the Map

for (const entries of myMap.entries()) {
    console.log(entries);
}


// Accessing the value

for (const value of myMap.values()) {
    console.log(value);
}

// Accessing the Keys in javascript

for(const keys of myMap.keys()){
    console.log(keys);
}

// Get in map

console.log(myMap.get(1));
console.log(myMap.get(3));


// Has in map
if(myMap.has(1)){
    console.log("Value is there");
}

// Delete in map

myMap.delete(2)
console.log(myMap);