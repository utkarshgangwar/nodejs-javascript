const obj = {
  name: "Utkarsh",
  greet() {
    console.log(this.name);
  },
};

const fn = obj.greet;
fn();

/**
 * undefined
 */