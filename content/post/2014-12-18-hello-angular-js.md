---
title: Hello Angular.js
author: Cezar Cruz
type: post
date: 2014-12-19T00:04:33+00:00
url: /hello-angular-js/
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Olá, hoje vou escrever um post bem básico de como utilizar **Angular.JS** no seu próximo projeto.

<!--more-->

Pra quem não sabe, o Angular.JS é um framework javascript MV*(C), feito pelo google para basicamente &#8220;deixar seu **html** dinâmico&#8221;, ou seja, com algumas tags no seu **HTML** será possível fazer atualização de dados, por exemplo.

Chega de papo, para mais informações nerds, acesse o [site do agunlar.][1]

Bom, o primeiro passo é adicionar o **javascript** na nossa página HTML:

<pre class="lang:js decode:true ">&lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.7/angular.js"&gt;&lt;/script&gt;</pre>

>  Vamos usar o CDN deles, fica a seu critério usar remoto ou local.

Depois de adicionarmos isso no header do nosso **HTML**, o próximo passo é adicionar a tag ng-app no elemento body, ele ficara assim:

<pre class="lang:default decode:true ">&lt;html lang="pt-BR" ng-app&gt;</pre>

Feito isso, seu **HTML** deverá estar assim:

<pre class="lang:default decode:true">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR" ng-app&gt;
&lt;head&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
    &lt;title&gt;Titulo&lt;/title&gt;
    &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.7/angular.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    1 + 1 = {{ 1 + 1 }}
&lt;/body&gt;
&lt;/html&gt;</pre>

>  Adicionei o código 1 + 1 = {{ 1 + 1 }} apenas pra verificar se está ok, caso esteja ok, a saida do seu **HTML** deverá ser 1 + 1 = 2. Simples assim.

Assim, concluímos que tudo que tiver dentro de {{ }} será processado pelo **Angular**. Agora vamos a um exemplo mais legal.

Troque o conteúdo do seu body pelo código abaixo:

<pre class="lang:default decode:true">&lt;input type="text" ng-model="valor"/&gt;
&lt;p&gt;{{valor}}&lt;/p&gt;</pre>

Nele temos o conteúdo do <p> sendo atualizado conforme é digitado o no input. O grande segredo está no ng-model e no <a class="ng-binding" tabindex="2" href="https://docs.angularjs.org/tutorial/step_04">Two-way Data Binding</a> do Angular.

Por ultimo um exemplo que mostra uma pontinha do potencial do **Angular.JS**, veja só:

<pre class="lang:default decode:true ">&lt;html lang="pt-BR" ng-app="meuApp"&gt;

&lt;script&gt;
        var meuApp = angular.module('meuApp',[]);
        meuApp.controller('HomeCtrl', ['$scope', function($scope) {
              $scope.valor = 'Oi Blog!';
        }]);
&lt;/script&gt;

&lt;div ng-controller="HomeCtrl"&gt;
        &lt;input type="text" ng-model="valor"/&gt;
        &lt;p&gt;{{valor}}&lt;/p&gt;
&lt;/div&gt;</pre>

Podemos ver as seguintes alterações:

  * Alteramos o ng-app no elemento HTML para o valor meuApp;
  * Alteramos o JavaScript, nele criamos o &#8220;meuApp&#8221;, que eh um module do Angular;
  * Em seguida, criamos o controller &#8220;HomeCtrl&#8221; e setamos o valor da variável &#8220;Valor&#8221;;
  * Criamos uma nova div com o valor de ng-controller setado para &#8220;HomeCtrl&#8221;, isso significa que tudo que está dentro da div, refere apenas ao que está na criação do controller no javascript.

> Atenção ao $scope, ele é o cara que devemos setar o valor do ng-model.

Nesse ultimo exemplo quero apenas mostrar que o Angular permite alterar o valor de um span, por exemplo, de dentro do javascript, e como essa alteração ocorre em tempo real, você pode utilizar, por exemplo, um webservice REST para buscar os dados e atribuir os valores tudo em tempo real e sem complicações.

Bom, acho que é isso, esse será o primeiro post de **Angular**, logo virá mais alguns. Obrigado e bons estudos!!

PS: Feliz Natal e um 2015 com muito amor!!

 [1]: https://angularjs.org/ "https://angularjs.org/"