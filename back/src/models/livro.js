class Livro {
  constructor(i) {
    this.id = i.id;
    this.titulo = i.titulo;
    this.autor = i.autor;
    this.data_emprestado = i.data_emprestado;
    this.data_devolucao = i.data_devolucao;
    this.nome_cliente = i.nome_cliente;
  }

  create() {
    return `INSERT INTO livro VALUE(DEFAULT,'${this.titulo}','${this.autor}', '${this.data_emprestado}', '${this.data_devolucao}', '${this.nome_cliente}')`;
  }

  read() {
    if (this.id == undefined) return `SELECT * FROM livro`;
    else return `SELECT * FROM livro WHERE id = ${this.id}`;
  }

  update() {
    if (this.data_devolucao == undefined) {
      return `UPDATE livro SET title = '${this.titulo}', autor = '${this.autor}', data_emprestado = '${this.data_emprestado}', data_devolucao = '${this.data_devolucao}', nome_cliente = '${this.nome_cliente}' WHERE id = ${this.id}`;
    } else {
      return `UPDATE livro SET title = '${this.titulo}', autor = '${this.autor}', data_emprestado = '${this.data_emprestado}', data_devolucao = '${this.data_devolucao}', nome_cliente = '${this.nome_cliente}' WHERE id = ${this.id}`;
    }
  }

  delete() {
    return `DELETE FROM livro WHERE id = ${this.id}`;
  }
}

module.exports = Livro;
