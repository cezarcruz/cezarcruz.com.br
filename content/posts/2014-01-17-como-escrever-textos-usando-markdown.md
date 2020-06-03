---
title: Como escrever textos usando Markdown
author: Cezar Cruz
date: 2014-01-17T14:36:48+00:00
url: /como-escrever-textos-usando-markdown/
categories:
  - Markdown
tags:
  - Markdown
---
Olás, nesse tutorial, vou mostrar como utilizarmos o **Markdown** para escrevermos textos formatados em Html. Esse tutorial será, basicamente, um spin-off da saga Jekyll.

**Markdown** é uma ferramenta de conversão texto pra HTML para escrever textos para web. **Markdown** permite escrever usando um texto fácil de ler e escrever e depois converte em uma estrutura valida de XHTML (ou HTML). Pra uma definição melhor, veja o [site do projeto][1].

<!--more-->

Um local onde o **Markdown** é bastante utilizado é nos arquivos .md utilizado no [Git Hub][2].

Mas vamos lá, pra escrevermos texto começamos sempre com o titulo, hehehe. Pra gerarmos  um titulo em **Markdown** é tranquilo, veja:

<pre class="lang:yaml decode:true">007 - Um novo dia pra morrer
============================</pre>

Colocamos a partir de três símbolos de **= **(igual)  abaixo do texto, e o HTML gerado é:

<pre class="lang:xhtml decode:true">&lt;h1&gt;007 - Um novo dia pra morrer&lt;/h1&gt;</pre>

Bem sussa, pra gerar um subtítulo, é tão simples quanto:

<pre class="lang:yaml decode:true">O Daniel Craig é o James Bond mais zica
---------------------------------------</pre>

Colocamos a partir de três traços abaixo do texto, e o HTML gerado é:

<pre class="lang:xhtml decode:true">&lt;h2&gt;O Daniel Craig é o James Bond mais zica&lt;/h2&gt;</pre>

Pra escrever títulos, podemos utilizar outras formas também:

<pre class="lang:default decode:true">#Titulo 1
##Subtítulo
###SubSubtítulo
.....</pre>

E o resultado é:

<pre class="lang:xhtml decode:true">&lt;h1&gt;Titulo 1&lt;/h1&gt;
&lt;h2&gt;Subtítulo&lt;/h2&gt;
&lt;h3&gt;SubSubtítulo&lt;/h3&gt;</pre>

Para escrevermos um texto, também é bem simples, o que devemos atentar é que pra começarmos um novo paragrafo, devemos deixar uma linha em branco no texto **Markdown**:

<pre class="lang:default decode:true">Curabitur consequat commodo magna. Nulla vel eros nec dui malesuada gravida. Donec pellentesque, quam et varius consectetur, risus orci dapibus ante, quis euismod diam metus sed erat.

Mauris aliquet pretium ante, a rutrum libero facilisis a. Nulla facilisi. Praesent semper ornare felis, non pharetra elit vestibulum pulvinar.

Phasellus quis lacus ultrices, posuere urna eu, pellentesque metus. Donec vulputate velit sit amet augue mattis rutrum. Phasellus ultrices tempor elit vitae vulputate. Praesent quis ullamcorper justo. Cras euismod nisl nibh, eu pulvinar lectus condimentum ut.</pre>

O HTML gerado segue abaixo:

<pre class="lang:xhtml decode:true">&lt;p&gt;Curabitur consequat commodo magna. Nulla vel eros nec dui malesuada gravida. Donec pellentesque, quam et varius consectetur, risus orci dapibus ante, quis euismod diam metus sed erat. &lt;/p&gt;

&lt;p&gt;Mauris aliquet pretium ante, a rutrum libero facilisis a. Nulla facilisi. Praesent semper ornare felis, non pharetra elit vestibulum pulvinar. &lt;/p&gt;

&lt;p&gt;Phasellus quis lacus ultrices, posuere urna eu, pellentesque metus. Donec vulputate velit sit amet augue mattis rutrum. Phasellus ultrices tempor elit vitae vulputate. Praesent quis ullamcorper justo. Cras euismod nisl nibh, eu pulvinar lectus condimentum ut.&lt;/p&gt;</pre>

No meio do texto, podemos colocar palavras em itálico ou negrito, por exemplo:

<pre class="lang:default decode:true">_consequat_
**consequat**</pre>

Resultado:

<pre class="lang:default decode:true">&lt;em&gt;consequat&lt;/em&gt;
&lt;strong&gt;consequat&lt;/strong&gt;</pre>

Pra adicionarmos uma citação:

<pre class="lang:default decode:true">&gt; Ser ou não ser, eis a questão.</pre>

O HTML gerado é:

<pre class="lang:default decode:true">&lt;blockquote&gt;
&lt;p&gt;Ser ou não ser, eis a questão&lt;/p&gt;
&lt;/blockquote&gt;</pre>

Em **Markdown**, sempre que vc começar a linha com > (maior) ele será uma citação e se você continuar em varias linhas seguidas, será apenas uma única citação com e um paragrafo, mas caso você coloque um linha em branco com sinal de > (maior) entre duas linhas com sinal de > (maior)  mas que tenha algum conteúdo, você irá criar um novo paragrafo, porem, está dentro de uma única citação.

Pra criarmos uma lista não ordenada, temos um segredinho também, temos que pular uma linha depois do ultimo paragrafo, veja:

<pre class="lang:default decode:true">Lista de compras

* alface
* tomate
* cebola
* couve</pre>

O resultado:

<pre class="lang:default decode:true">&lt;p&gt;Lista de compras&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;alface&lt;/li&gt;
&lt;li&gt;tomate&lt;/li&gt;
&lt;li&gt;cebola&lt;/li&gt;
&lt;li&gt;couve&lt;/li&gt;
&lt;/ul&gt;</pre>

Além do * (asterisco), podemos utilizar o sinal de + (soma) ou &#8211; (subtração) pra formarmos uma lista.

Pra termos uma lista ordenada, segue a mesma ideia da lista não ordenada:

<pre class="lang:default decode:true">Lista de compras

1. alface
2. tomate
3. cebola
4. couve</pre>

E resultado:

<pre class="lang:default decode:true">&lt;p&gt;Lista de compras&lt;/p&gt;

&lt;ol&gt;
&lt;li&gt;alface&lt;/li&gt;
&lt;li&gt;tomate&lt;/li&gt;
&lt;li&gt;cebola&lt;/li&gt;
&lt;li&gt;couve&lt;/li&gt;
&lt;/ol&gt;</pre>

Pra criamos uma lista aninhada, basta uma colocarmos o subitem com um espaço na frente:

<pre class="lang:default decode:true">Lista de compras

* alface
 * tomate
* cebola
 * couve</pre>

O resultado:

<pre class="lang:default decode:true">&lt;p&gt;Lista de compras&lt;/p&gt;

&lt;ul&gt;
    &lt;li&gt;alface
        &lt;ul&gt;
            &lt;li&gt;tomate&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;cebola
        &lt;ul&gt;
            &lt;li&gt;couve&lt;/li&gt;
            &lt;li&gt;espinafre&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;</pre>

A ideia é a mesma para a lista ordenada.

Pra criamos um link com uma página da web:

```md
Esse o [link para o meu blog](https://cezarcruz.com.br/blog/ "Meu blog")
```

O resultado vem logo abaixo:

<pre class="lang:default decode:true">&lt;p&gt;Esse o &lt;a href="https://cezarcruz.com.br/blog/" title="Meu blog"&gt;link para o meu blog&lt;/a&gt;&lt;/p&gt;</pre>

Repare que o que está dentro do colchetes é o que irá virar um link, o endereço vem dentro de parênteses e utilizar o title dentro do parênteses é opcional, caso não queira, basta deixar somente o endereço.

Ainda com links, podemos usar ele de uma forma um pouco mais organizada, utilizando referencias:

<pre class="lang:default decode:true">O site do [G1][1] é igual ao do [R7][2]

[1]: http://g1.com "Site do G1"
[2]: http://r7.com "Site do R7"</pre>

O Resultado segue como de costume:

<pre class="lang:default decode:true">&lt;p&gt;O site do &lt;a href="g1.com" title="Site do G1"&gt;G1&lt;/a&gt; é igual ao do &lt;a href="r7.com" title="Site do R7"&gt;R7&lt;/a&gt;&lt;/p&gt;</pre>

Pra utilizarmos referencias em links, temos que atentar aos fatos:

  * O que estiver entre os primeiros colchetes é o que irá se tornar &#8220;clicável&#8221;;
  * O segundo colchetes é a referencia, nela, podemos utilizar uma letra ou palavra e elas não são _case sensitive_;
  * No local onde deixamos organizada as referencias, temos de colocar : (dois pontos) depois dos colchetes pra que funcione corretamente;
  * Não esquecer de por **http://**;

Pra utilizarmos imagens, o código é semelhante ao de links:

<pre class="lang:default decode:true">![O alt](https://www.google.com.br/images/srpr/logo11w.png "Logo do google")</pre>

E o lindo resultado:

<pre class="lang:default decode:true">&lt;p&gt;Olha essa imagem: &lt;img src="https://www.google.com.br/images/srpr/logo11w.png" alt="O alt" title="Logo do google"&gt;&lt;/p&gt;</pre>

A diferença básica entre links e imagens é a ! (exclamação) antes do código.

Bom por enquanto é isso ai, são bem básicas, mas é o suficiente pra nos prepararmos pros próximos tutoriais de Jekyll.

Abraços.

Links úteis

  * [Markdown editor online][3]
  * [Site oficial do Markdown][4]
  * [Jekyll beeeeem básico][5]

 [1]: http://daringfireball.net/projects/markdown/
 [2]: https://github.com/
 [3]: http://markable.in/editor/
 [4]: http://daringfireball.net/
 [5]: /como-utilizar-o-jekyll-pra-criar-um-blog-com-paginas-estaticas-jekyll-parte-1/ "Como utilizar o Jekyll pra criar um blog com páginas estáticas. Jekyll parte 1"