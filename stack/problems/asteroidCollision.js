class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();

function asteroidCollision(asteroids) {
  for (let i = 0; i < asteroids.length; i++) {
    console.log(asteroids[i]);
    const currentAsteroid = asteroids[i];
    const previousAsteroid = asteroids[i - 1];
    if (stack.stack.length === 0) {
      stack.push(currentAsteroid);
      continue;
    }

    if (currentAsteroid <= 0 && previousAsteroid > 0) {
      const parsedCurrentAsteroid = String(currentAsteroid);

      const absoluteValue = Number(
        parsedCurrentAsteroid.split("").splice(1).join(""),
      );

      if (absoluteValue === previousAsteroid) {
        stack.pop();
        continue;
      } else if (previousAsteroid > absoluteValue) {
        continue;
      } else if (absoluteValue > previousAsteroid) {
        stack.pop();

        stack.push(currentAsteroid);
        console.log("index", stack.stack.indexOf(-5));
        for (
          let j = stack.stack.indexOf(currentAsteroid) - 1;
          j < stack.stack.length;
          j--
        ) {
          console.log(stack.stack[j]);
          if (absoluteValue > stack.stack[j]) {
            stack.stack.splice(j, 1);
          } else if (stack.stack[j] > absoluteValue) {
            stack.stack.pop();
            break;
          } else if (stack.stack[j] === absoluteValue) {
            stack.stack.splice(j, 1);
            stack.stack.pop();
            break;
          }
        }
      }
    } else {
      stack.push(currentAsteroid);
    }
  }

  console.log(stack.stack);
}

asteroidCollision([-2, -1, 1, 2]);
