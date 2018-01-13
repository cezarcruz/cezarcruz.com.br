---
title: Criando um controller com Angular.JS utilizando padrões
author: Cezar Cruz
type: post
date: 2015-04-28T02:55:37+00:00
url: /criando-um-controller-com-angular-js-utilizando-padroes/
dsq_needs_sync:
  - 1
categories:
  - JavaScript
  - AngularJS
tags:
  - JavaScript
  - AngularJS

---
Ol<span class="st">ás</span>, hoje vamos ver como criar um Controller no Angular.JS utilizando [styleguide][1] criado pelo John Papa.

<!--more-->

Vamos l<span class="st">á</span>, o primeiro passo é iniciarmos o arquivo utilizando o Immediately Invoked Function Expression (IIFE), ele garante que as variáveis fique apenas no escopo utilizado cuidando para que não aconteça colisões de variáveis. Para isso colocamos o código abaixo:

<pre class="lang:js decode:true ">(function(){
    //conteúdo aqui
})();</pre>

Feito isso, criamos o controller, efetivamente:

<pre class="lang:js decode:true ">angular.module('app.seriado').controller('SeriadosCtrl', SeriadosCtrl);</pre>

Na única linha acima, setamos o controller SeriadosCtrl no angular module com a function SeriadosCtrl, o código ficar<span class="st">á</span> mais completo, com o exemplo abaixo:

<pre class="lang:default decode:true">(function() {
	/**
	 * Controller do seriados.
	 */
angular.module('app.seriado').controller('SeriadosCtrl', SeriadosCtrl);

	SeriadosCtrl.$inject = ['$location', 'SeriadoService','$modal'];

	function SeriadosCtrl($location, SeriadoService, $modal) {
	
	}
})();</pre>

Nas linhas acima temos o complemento da criação de um controller e ainda utilizamos a injeção de dependências no controller, pra isso utilizamos o <function_name>.$inject = <dependências>, lembrando que a ordem das dependências e a assinatura da function (SeriadosCtrl) devem ser as mesmas.

Não sei dizer quanto a desempenho, mas quanto a legibilidade de código, fica muito melhor utilizando o styleguide.

Bom, é isso ai, espero que possa ajudar. Até o próximo tuto de Angular.JS.

Abraços.

 [1]: https://github.com/johnpapa/angular-styleguide