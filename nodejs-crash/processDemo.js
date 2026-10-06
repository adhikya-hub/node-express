// console.log(process);
console.log(process.argv);
console.log(process.argv[1]);

console.log(process.env.LOGNAME);

console.log(process.pid);

console.log(process.cwd());

console.log(process.title);

console.log(process.memoryUsage());

console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`exit wiyy ${code}`);
});

process.exit(0);
console.log();
