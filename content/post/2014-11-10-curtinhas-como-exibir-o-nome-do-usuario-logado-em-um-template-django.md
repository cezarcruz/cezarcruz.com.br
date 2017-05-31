---
title: 'Curtinhas: Como exibir o nome do usuário logado em um template django'
author: Cezar Cruz
type: post
date: 2014-11-10T11:42:29+00:00
url: /curtinhas-como-exibir-o-nome-do-usuario-logado-em-um-template-django/
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Olá, uma dica curtinha hoje:

Como exibir o nome do usuário logado em um sistema/site utilizando Django 1.7+.

<!--more-->

Basta colocar no template (página html) a linha abaixo para exibir o nome completo:

<pre class="lang:default decode:true">{{ user.get_full_name }}</pre>

Para exibir o username:

<pre class="lang:default decode:true ">{{ user.get_username }}</pre>

Para mais informações acesse:

<https://docs.djangoproject.com/en/1.7/topics/auth/>

Até.