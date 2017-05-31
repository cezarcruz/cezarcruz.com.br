---
title: Como utilizar o $http interceptor do Angular.JS
author: Cezar Cruz
type: post
date: 2015-07-10T14:12:35+00:00
url: /como-utilizar-o-http-interceptor-do-angular-js/
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Olás, hoje uma dica para como utilizar um $http interceptor do Angular.JS.

<!--more-->

Como o próprio nome já diz, o interceptor serve para interceptar requisições http ($http.get, $http.post, etc..) request do angular. Utilizo para os casos abaixo:

  * Colocar um header em todas as requisições que serão enviadas ao backend;
  * Ter um tratamento genérico para todas as resposta do backend (ex.: erro 404, erro 500 );
  * Iniciar e parar uma spinner de forma automática a cada requisição ao backend;

Basicamente, precisamos criar um Factory, injetar o [$q][1], e usando convenção do Angular, implementar algumas functions.

Uma descrição mais detalhada pode ser encontrada [na página da api $http do angular][2].

Na página do angular podemos ver que temos 4 tipos de interceptors (functions), são eles:

  * _request_: esse interceptor é executado toda vez que temos um $http.get;
  * _requestError_: esse interceptor é executado quando o &#8220;request&#8221; retorna um erro ou uma &#8220;rejeição de promisse&#8221;;
  * _response_: esse interceptor é executado quando temos uma resposta para o _request_;
  * _responseError_: esse interceptor é executado quando temos uma resposta com erro;

Para o nosso exemplo, vou utilizar apenas o request e o responseError, para inserir um header na requisição e tratar um erro de acesso negado, vamos lá:

Primeiro vamos criar um factory:

<pre class="lang:js decode:true">(function(){
	angular.module('app', []).factory('Interceptor', Interceptor);
	
	Interceptor.$inject = ['$q'];
	
	function Interceptor($q) {
		
	}	
})();</pre>

Com o Interceptor criado, vamos adicionar as functions necessárias para interceptar as requisições:

<pre class="lang:default decode:true">function Interceptor($q) {		
		return {
			request: function(config) {											
				config.headers['X-TOKEN'] = "exemplo";				
				return config;
			},
			responseError: function(error) {
				if (error.status === 401 || error.status === 403) {
					//faz alguma coisa.
				}
				return $q.reject(error);
			}
		};
	}</pre>

No request temos uma function que recebe um valor &#8220;config&#8221;, nele temos os dados da requisição, os headers, etc&#8230; No exemplo acima, adicionamos um header na requisição e damos um &#8220;return&#8221; com os dados alterados. Quando ele passa por esse interceptor, ele faz a alteração e o fluxo da requisição continua normalmente.

Já o responseError é executado quando obtemos uma resposta com o status 40x, que representa algum tipo de erro no lado do servidor, no nosso caso, quando temos um erro 401 ou 403, eu executo alguma ação e uso o $q.reject para que a requisição vá para o callback de error do $http do angular.

Mas pra isso funcionar ainda falta um passo importante, registrar o interceptor no Angular:

<pre class="lang:default decode:true">angular.module('app').config(['$httpProvider', Interceptor]);
	
function Interceptor($httpProvider) {
	$httpProvider.interceptors.push('Interceptor');		
}</pre>

Feito isso, todas as requisições $http irão passar pelo interceptor acima.

É isso ai, até a próxima.

 [1]: https://docs.angularjs.org/api/ng/service/$q
 [2]: https://docs.angularjs.org/api/ng/service/$http