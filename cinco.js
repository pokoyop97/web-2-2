var Calculo = /** @class */ (function () {
    // constructor
    function Calculo(x, y) {
        // variables de clase declaradas y asignadas
        this.x = 0;
        this.y = 0;
        // métodos del constructor
        this.setX(x);
        this.setY(y);
    }
    // Setters
    Calculo.prototype.setX = function (x) {
        this.x = x;
    };
    Calculo.prototype.setY = function (y) {
        this.y = y;
    };
    // Getters
    Calculo.prototype.getX = function () {
        return this.x;
    };
    Calculo.prototype.getY = function () {
        return this.y;
    };
    Calculo.prototype.sumar = function () {
        return this.getX() + this.getY();
    };
    Calculo.prototype.restar = function () {
        return this.mayor() - this.menor();
    };
    Calculo.prototype.menor = function () {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    };
    Calculo.prototype.mayor = function () {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    };
    return Calculo;
}());
var calculo = new Calculo(30, 10);
console.log(calculo.restar());
console.log(calculo.mayor());
console.log(calculo.menor());
console.log(calculo.sumar());
