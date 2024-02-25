// File: src/index.ts

class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}!`;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());
