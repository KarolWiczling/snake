class Point {
  constructor(x, y) {
    const x: number = x;
    const y: number = y;

  }
  isEquel(point: Point): boolean {
    if (this.x === point.x && this.y === point.y) {
      return true
    }
    return false;
  }
}