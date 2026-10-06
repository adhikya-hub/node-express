import fs from "fs/promises";

// fs.readFile("./text.txt", "utf8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// const data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);

// fs.readFile("./text.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// readFile();

const writeFile = async () => {
  try {
    await fs.writeFile("./text.txt", "hello");
    console.log("written");
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  try {
    await fs.appendFile("./text.txt", "appended");
    console.log("app to");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
