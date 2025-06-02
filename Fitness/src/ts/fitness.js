"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FitnessNap = void 0;
var FitnessNap = /** @class */ (function () {
    function FitnessNap(napNeve) {
        this.tevekenysegNev = "";
        this.edzesIntenzitasErtek = 3; // ÚJ mező, alapértelmezett 3
        this.napNeve = napNeve;
        this.elegetettKaloria = 0;
        this.edzesHossz = 0;
        this.pihenoNap = false;
    }
    FitnessNap.prototype.edzesIntenzitas = function () {
        if (this.pihenoNap)
            return "-";
        return this.edzesIntenzitasErtek.toString();
    };
    FitnessNap.prototype.tevekenyseg = function () {
        return this.pihenoNap ? "Pihenés" : "Edzés";
    };
    return FitnessNap;
}());
exports.FitnessNap = FitnessNap;
