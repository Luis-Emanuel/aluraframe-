class NegociacaoController {

  constructor() {
  
    let $ = document.querySelector.bind(document)
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacaoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacaoes);
  }
  
  adiciona(event) {
    event.preventDefault();
    
    this._listaNegociacaoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacaoes);
    this._limparFormulario();
    
  };

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value);
  }

  _limparFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
