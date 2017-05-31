---
title: Como usar Javascript e CSS no CakePHP
author: Cezar Cruz
type: post
date: 2013-07-26T13:27:09+00:00
url: /como-usar-javascript-e-css-no-cakephp/
dsq_thread_id:
  - 2772758248
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Olá, hoje mais uma dica sobre CakePHP, vou ensinar como colocar CSS e Javascript corretamente no seu projeto CakePHP.

<!--more-->

Os arquivos de CSS e Javascript devem ser colocados no diretório app/webroot, repare que ao abrir esse diretório, nos deparamos com a seguinte estrutura:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457587/estrutura_webroot_aay6x5.png"><img class="size-full wp-image-117 aligncenter" alt="estrutura_webroot" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457587/estrutura_webroot_aay6x5.png" width="135" height="205" /></a>Nesse ponto já fica obvio onde devemos colocar nossos arquivos:
</p>

Arquivos de estilo na pasta CSS

Arquivos de script na pasta js

Arquivos de imagem na pasta img

depois de colocarmos nossos arquivos no devido lugar, devemos fazer o seguinte para que o arquivos sejam anexados a página de forma correta:

No nosso arquivos de layout padrão, no caso, o app/View/Layouts/default.ctp, dentro da tag **<head>** devemos colocar o seguinte código:

Para arquivos CSS:

<pre class="lang:php decode:true">echo $this-&gt;Html-&gt;css(array('estilo'));</pre>

Para arquivos javascript

<pre class="lang:php decode:true">echo $this-&gt;Html-&gt;script('javascript')</pre>

>  Não é necessário colocar a extensão do arquivo, o CakePHP cuida de tudo 😉

No arquivos final, quando o browser renderizar, o resultado será o seguinte:

<pre class="lang:php decode:true">&lt;link rel="stylesheet" type="text/css" href="/cake/css/estilo.css" /&gt;
&lt;script type="text/javascript" src="/cake/js/javascript.js"&gt;</pre>

&nbsp;

Simples e bem fácil, essa foi uma dica de como colocar Javascript e CSS no seu projeto CakePHP.

É isso ai, até mais.

&nbsp;