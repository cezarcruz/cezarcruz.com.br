---
title: Como deixar uma div transparente (CSS)
author: Cezar Cruz
date: 2013-06-13T03:20:05+00:00
url: /como-deixar-uma-div-transparente-css/
categories:
  - CSS
tags:
  - CSS
---
Olás,

aqui não é bem um tutorial, está mais para uma dica:

Se você quer deixar sua div transparente, você pode utilizar isso, por exemplo, pra deixar a imagem de background visível, deve ser inserido no seu css a seguinte regra:

<!--more-->
```css
.transparente{
background: rgb(0, 0, 0) transparent;
background: rgba(0, 0, 0, 0.7);
/* Para navegadores IE 5.5 - 7 */
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#000000);
/* Para navegadores IE 8 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#000000, endColorstr=#000000)";
}
```

lembrando que quando o nome da regra começa com **.** (ponto), ela deve ser utilizada como class:

<pre class="lang:css decode:true">&lt;div class="transparente"&gt;&lt;/div&gt;</pre>

E caso queira alterar a cor do bloco transparente basta alterar as regras rgb e rgba.

É isso ai, até a próxima.