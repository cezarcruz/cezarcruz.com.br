---
title: Como salvar autenticação no repositório local usando GIT
author: Cezar Cruz
type: post
date: 2014-11-06T23:49:38+00:00
url: /como-salvar-autenticacao-no-repositorio-local-usando-git/
dsq_needs_sync:
  - 1
categories:
  - Git
tags:
  - Git
---
Uma dica bem curtinha, porém útil:
  
Como configurar o git para não pedir senha ao baixar ou subir dados no repositório remoto, para isto, basta entrar no seu repositório local e digitar o comando abaixo:

<pre class="line-pre ">git config credential.helper cache</pre>

Pra salvar apenas por um tempo determinado, utilizar:

<pre class="lang:default decode:true">git config credential.helper 'cache --timeout=60000'</pre>

=D