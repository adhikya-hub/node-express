import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greet(name) {
  console.log("hello", name);
}
function goodBye() {
  console.log("Bye");
}

myEmitter.on("greet", greet);
myEmitter.on("goodBye", goodBye);

myEmitter.emit("greet", "john");
myEmitter.emit("goodBye");

myEmitter.on("error", (err) => {
  console.log("An Error Occured:", err);
});

myEmitter.emit("error", new Error("something wrong"));
