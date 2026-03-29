const obj = {
  name: "Utkarsh",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};

obj.greet();

/**
 * undefined
 */