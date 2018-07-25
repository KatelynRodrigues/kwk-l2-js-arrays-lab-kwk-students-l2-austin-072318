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
let newdrivers = drivers.push(name)
 return newdrivers
}

appendDriver("Broom")