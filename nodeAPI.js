const arg = process.argv.slice(2);
 
const category  = arg[0];
const limit = Number(arg[1]);
 
console.log(`Category is ${category}, limit is ${limit}`);