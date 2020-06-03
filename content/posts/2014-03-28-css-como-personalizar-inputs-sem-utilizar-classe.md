---
title: 'CSS: como personalizar inputs sem utilizar classe'
author: Cezar Cruz
date: 2014-03-28T19:23:34+00:00
url: /css-como-personalizar-inputs-sem-utilizar-classe/
categories:
  - CSS
tags:
  - CSS
---
Olás, vindo aqui hoje só pra manter o blog &#8220;ativo&#8221; heheh, hoje, uma dica bem simples de **css** pra personalizar <del>textbox</del> (mania de .net) inputs.

O código é o seguinte:

<pre class="lang:css decode:true">input[type=text] {
  /* regras de estilo aqui. */
}</pre>

Com o código **css** acima, não será mais preciso declarar uma classe no e colocar em cada elemento input, lembrando que pode ser utilizado em outros elementos, exemplo:

<pre class="lang:css decode:true">input[type=checkbox] {
    /* estilo aqui */
}</pre>

Parece bobo e preguiçoso, mas se levarmos em conta o quanto da pra economizar de Ctrl + C e Ctrl + V.

Espero que ajude, até mais.