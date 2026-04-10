const string = "hello how are you?";

function acronym(string) {
  let result = "";
  const item = string.split(" ");
  for (let itm of item) {
    result += itm[0].toUpperCase();
  }

  return result;
}

console.log(acronym(string));
