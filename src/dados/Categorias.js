export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  adicionarCategoria(novoCategoria) {
    this.categorias.push(novoCategoria);
    this.notificar();
  }
}
