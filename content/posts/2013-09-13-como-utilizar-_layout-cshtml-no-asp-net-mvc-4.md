---
title: Como utilizar _Layout.cshtml no ASP.NET MVC 4
author: Cezar Cruz
date: 2013-09-13T12:37:24+00:00
url: /como-utilizar-_layout-cshtml-no-asp-net-mvc-4/
categories:
  - NET
tags:
  - NET
---
Nesse tutorial vamos aprender como utilizar o arquivo de _Layout.cshtml no nosso <a href="https://cezarcruz.com.br/blog/2013/09/criando-o-primeiro-projeto-aspnet-mvc-com-csharp/" target="_blank">primeiro projeto MVC 4</a>.

Assim como no Web Forms com seu Master Page, o MVC tem o seu arquivo master também, porém ele é chamado de _Layout.cshtml, nele colocamos nosso layout padrão de páginas.

<!--more-->

> Quando uma View começa com _ (underline) significa que ela não estará navegável, ou seja, não será possível acessar seu conteúdo através de requisições do browser.

Para começarmos a utilizar um layout padrão nas nossas páginas devemos criar dois arquivos cshtml:

  * _ViewStart.cshtml: na raiz da pasta View do projeto;
  * _Layout.cshtml: dentro da pasta Shared que por sua vez está dentro da pasta View;

O arquivo _ViewStart.cshtml contem apenas uma referencia para nosso layout, pois ele sera processado antes de chamar a View, podemos incluir lógica nesse arquivo, por exemplo, pra carregar um layout pra mobile quando vier uma requisição de um navegador mobile. O arquivo deve ficar assim:

<pre class="lang:asp decode:true">@{
    Layout = "~/Views/Shared/_Layout.cshtml";
}</pre>

O arquivo _Layout.cshtml é onde iremos colocar nosso Layout padrão.

E não podemos esquecer do diretório onde colocamos as folhas de estilo, basta criar, na raiz do projeto, uma pasta chamada Content, crie também um arquivo chamado Site.css, pode deixar em branco, voltaremos nele mais tarde.

Pra criamos um layout dinâmico, o primeiro passo é modelar ele estático, depois colocamos as funções dinâmicas. Vamos definir nosso layout utilizando Html:

<pre class="lang:asp decode:true">&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Titulo&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- Cabeçalho, menu, --&gt;
        &lt;header&gt;
        &lt;/header&gt;
        &lt;!-- Conteudo vai aqui --&gt;

        &lt;!-- Rodapé --&gt;
        &lt;footer&gt;
            &copy; 2013
        &lt;/footer&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>

Está ai a definição do nosso layout (^^), claro que isso é apenas para fins de tutorial, agora que temos nosso layout definido, hora de deixar ele um pouco mais &#8220;esperto&#8221;:

No tag head, trocamos os dados por esse:

<pre class="lang:asp decode:true">&lt;meta charset="utf-8" /&gt;
&lt;title&gt;@ViewBag.Title&lt;/title&gt;
&lt;link href="@Url.Content("~/Content/Site.css")" rel="stylesheet" type="text/css" /&gt;</pre>

A linha 2 é a variavel com o titulo da View que está sendo carregado, o valor dessa variável pode ser definida tanto no controller como na propria View;

A linha 3 é o link para o css que iremos utilizar aqui.

Agora definimos nosso rodapé:

<pre class="lang:asp decode:true">&lt;footer&gt;
      &copy; @DateTime.Now.Year
&lt;/footer&gt;</pre>

Bem simples, o único processamento do servidor será pra exibir o ano corrente.

E agora o mais importante, onde queremos que nossa View apareça no layout:

<pre class="lang:asp decode:true">&lt;div id="main"&gt;
     @RenderBody()
&lt;/div&gt;</pre>

Para que o conteúdo das Views apareçam no Layout, devemos colocar @RenderBody(). O @RenderBody() sem duvidas é a parte mais importante do layout, sem ele não teremos dados das Views no nosso layout.

O resultado final do _Layout.cshtml ficou assim:

<pre class="lang:xhtml decode:true">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;title&gt;@ViewBag.Title&lt;/title&gt;
        &lt;link href="@Url.Content("~/Content/Site.css")" rel="stylesheet" type="text/css" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
        &lt;/header&gt;
        &lt;div id="main"&gt;
            @RenderBody()
        &lt;/div&gt;
        &lt;footer&gt;
            &copy; @DateTime.Now.Year
        &lt;/footer&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>

E agora, quando criarmos uma View, ela automaticamente virá com o código do layout. Pra exibirmos o titulo, podemos fazer de duas formas, usando o controller:

<pre class="lang:c# decode:true">public ActionResult Index()
{
     ViewBag.Title = "Titulo da página";
     return View();
}</pre>

Ou podemos colocar na própria View, pra isso colocamos o código na primeira linha do arquivo, ficando assim:

<pre class="lang:asp decode:true">@{
    ViewBag.Title = "Titulo da página";
}</pre>

O ultimo arquivo a ser renderizado é o [View].cshtml, ou seja, se definirmos o ViewBag.Title na View e no controller, o valor utilizado será o da View. No final, o HTML gerado será o seguinte:

<pre class="lang:asp decode:true">&lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;title&gt;Titulo da página&lt;/title&gt;
        &lt;link href="/Content/Site.css" rel="stylesheet" type="text/css" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
        &lt;/header&gt;
        &lt;div id="main"&gt;

        &lt;/div&gt;

        &lt;footer&gt;
            &copy; 2013
        &lt;/footer&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>

Limpo e bonito.

Existe outras formas de utilizar layout padrão no MVC 4, mas isso é assunto para outro post.

Até mais!