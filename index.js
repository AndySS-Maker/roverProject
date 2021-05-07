const rover = {
  position: { x: 0, y: 0 },
  direction: "N",
  travelLog: [{ x: 0, y: 0 }],
};

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      0;
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.position.y > 0) rover.position.y = rover.position.y - 1;
      break;
    case "W":
      if (rover.position.x > 0) rover.position.x = rover.position.x - 1;
      break;
    case "S":
      if (rover.position.y < 10) rover.position.y = rover.position.y + 1;
      break;
    case "E":
      if (rover.position.x < 10) rover.position.y = rover.positioin.x + 1;
      break;
  }
  rover.travelLog.push({ y: rover.position.y, x: rover.position.x });
}

function command(commandlist) {
  for (let i = 0; i < commandlist.length; i++) {
    const cmd = commandlist[i];
    console.log(cmd);
    switch (cmd) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
    }
  }
}

command("llff");
console.log(`direction: ${rover.direction} x:${rover.position.x} y:${rover.position.y}`);
console.log(rover.travelLog);
