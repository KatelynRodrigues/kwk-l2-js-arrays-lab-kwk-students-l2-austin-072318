// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop(drivers[-1])
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(drivers[0])
}

function appendDriver(name){
var newArray = [...drivers, name]
return newArray
}

appendDriver("Broom")

function prependDriver(name){
  var newArray = [name, ...drivers]
  return newArray
}

function removeLastDriver(){
  var newArray = drivers.slice()
  return newArray
}