class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}
// clase hija
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  // función add
  add(point: Point3D) {
    // llamada a la función del padre
    var point2D = super.add(point);
    // devolvemos resultado
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}
// Método que implementa extends en TypeScript
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
// Clase padre
var Point = (function() {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.add = function(point) {
    return new Point(this.x + point.x, this.y + point.y);
  };
  return Point;
})();
// clase hija
var Point3D = (function(_super) {
  __extends(Point3D, _super);
  function Point3D(x, y, z) {
    _super.call(this, x, y);
    this.z = z;
  }
  // función add
  Point3D.prototype.add = function(point) {
    // llamada a la función del padre
    var point2D = _super.prototype.add.call(this, point);
    // devolvemos resultado
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  };
  return Point3D;
})(Point);
