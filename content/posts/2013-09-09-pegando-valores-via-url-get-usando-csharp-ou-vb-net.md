---
title: Pegando valores via Url (GET) usando CSharp ou VB.NET
author: Cezar Cruz
date: 2013-09-09T18:26:46+00:00
url: /pegando-valores-via-url-get-usando-csharp-ou-vb-net/
categories:
  - NET
tags:
  - NET
---
Dica rápida pra pegar valores (GET) em urls em ASP .NET:

Temos o seguinte link:

http://exemplo.com/pag.aspx?rel=valor&lang=br

Pra pegar o valor utilizando csharp:

<pre class="lang:c# decode:true">string valor = Request.QueryString["rel"];</pre>

Ou:

<pre class="lang:c# decode:true">foreach(string params in Request.QueryString)
{
    Response.write(Request.QueryString[params])
}</pre>

Pra pegar o valor utilizando VB.NET:

<pre class="lang:vbnet decode:true">Dim valar As String = Request.QueryString("rel")</pre>

Ou:

<pre class="lang:vbnet decode:true">For Each param As String In Request.QueryString()
    Response.Write(Request.QueryString(param))
Next</pre>

Fácil fácil, até.