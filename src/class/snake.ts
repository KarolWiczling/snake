class Snake {
      body: Array < Points > = [];

  constructor() {
  }
  move(directionPoint: Point) {
    const snakeFace: Point = structuralClone(body[0]);
    snakeFace.addTo(directionPoint);
    body.pop();
    body.Unshift(snakeFace);
  }
}