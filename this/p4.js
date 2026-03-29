const obj = {
  name: "Utkarsh",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

obj.greet();

/**
 * undefined
 */