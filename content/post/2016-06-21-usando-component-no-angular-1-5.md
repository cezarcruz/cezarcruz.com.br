---
title: Utilizando component no Angular 1.5
author: Cezar Cruz
type: post
date: 2016-06-22T01:55:53+00:00
url: /usando-component-no-angular-1-5/
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Olá,

Hoje vamos ver uma forma de usar uma nova funcionalidade do Angular 1, o component.

O component é um tipo especial de diretiva, que permite criar, de uma forma simplificada, web components e pavimentar o caminho para uma futura migração para o Angular 2. Para mim a principal vantagem é poder criar peças de códigos reaproveitáveis de uma maneira bem mais simples que criar uma diretiva e suas configurações complexas (manipulação de DOM ainda deve ser feito por diretivas).

<!--more-->

Para esse tutorial, o primeiro passo é criar um controller:

<pre class="lang:js decode:true ">(function() {
  angular.module('home-module').controller('HomeController', HomeController);
  function HomeController() {
    this.valor = 'Blog do Cezar';
  }
})();</pre>

Esse é um controller comum, que já estamos acostumados a criar no angular. O único ponto de atenção é quanto ao &#8216;this&#8217;, ao invés de utilizarmos &#8216;$scope&#8217;, podemos adicionar os valores direto no &#8216;this&#8217;, abaixo mostro como ele é carregado no template.

Agora que temos um controller, vamos criar um template para mostrar o nosso valor na tela:

<pre class="lang:default decode:true ">{{ ::vm.valor }}</pre>

No nosso arquivo &#8216;home.html&#8217;, usamos a mesmas sintaxe que estamos acostumados, repare que usamos o &#8216;vm&#8217; antes da variável que declaramos no controller, no código abaixo mostro o motivo ;).

Depois de criarmos o controller e a view, vamos finalmente criar o nosso component, veja:

<pre class="lang:js decode:true ">angular.module('home-module').component('homeModule', {
  templateUrl: 'home.html',
  controller: 'HomeController as vm',
});</pre>

Para criarmos o component, basta colocar o &#8216;.component&#8217; no modulo, como parâmetros, ele recebe o nome e um objeto com as configurações do componente. O nome do componente segue o mesmo padrão das diretivas:

Nome: **homeModule**
  
Referencia em outras partes da aplicação: **home-module**

O parâmetro &#8216;templateUrl&#8217; passamos o caminho da view que criamos anteriormente. Podemos também, substituir esse parâmetro por &#8216;templatle&#8217; e colocar a view diretamente inline, para algo pequeno, me parece muito bom.

Por fim, o parâmetro &#8216;controller&#8217;, que como o nome sugere, injetamos o controller no nosso component, repare que adicionamos os valores &#8216;as vm&#8217; junto ao controller, é assim que definimos que o &#8216;this&#8217;, do controller, é referenciado na view como &#8216;vm&#8217;, se adicionarmos apenas o nome do controller, o Angular infere que você irá utilizar &#8216;$ctrl&#8217; na view.

E por fim, para adicionarmos nosso component na aplicação, podemos fazer igual faríamos normalmente com uma diretiva &#8216;<home-module></home-module>&#8217; ou adicionar ele como uma uma rota, assim:

<pre class="lang:js decode:true ">$routeProvider.when('/home', {
  template: '&lt;home-module&gt;&lt;/home-module&gt;'
});</pre>

E&#8217; isso ai, simples e fácil.

Espero que ajude, abraços!

**Referencias**

[https://toddmotto.com/exploring-the-angular-1-5-component-method/][1]
  
[https://docs.angularjs.org/guide/component][2]

[1]: https://toddmotto.com/exploring-the-angular-1-5-component-method/
[2]: https://docs.angularjs.org/guide/component