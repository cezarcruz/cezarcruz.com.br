---
title: Como usar Case em select no Oracle
author: Cezar Cruz
type: post
date: 2014-07-30T19:51:56+00:00
url: /como-usar-case-em-select-no-oracle/
dsq_thread_id:
  - 2886320272
dsq_needs_sync:
  - 1
categories:
  - SQL
  - Oracle
tags:
  - SQL
  - Oracle

---
Olás,

Hoje uma dica rápida sobre oracle: Como utilizar o **Case** em um select no Oracle.

<!--more-->

O **Case**, basicamente é um &#8220;if/else&#8221;, por exemplo, se um condição for for verdadeira ele faz determinada ação.

A utilização do Case é bem simples, veja abaixo:

<pre class="lang:plsql decode:true">SELECT 
     CASE nome_coluna 
     WHEN 'valor_ocorrer' THEN 'substitui_por_isso'
     ELSE 'valor_padrão'
     END
FROM tabela;
</pre>

Explicando:

**CASE** o nome da coluna WHEN o valor que irá retornar THEN substitui por esse valor ELSE não encontre o valor na cláusula, usa este como default END.

Também é possível utilizar mais de uma cláusula, bastando apenas acrescentar elas da seguinte forma:

<pre class="lang:plsql decode:true">SELECT 
     CASE nome_coluna 
     WHEN 'valor_ocorrer' THEN 'substitui_por_isso'
     WHEN 'valor2_ocorrer' THEN 'substitui_por_isso'
     WHEN 'valor3_ocorrer' THEN 'substitui_por_isso'
     ELSE valor_padrão
     END
FROM tabela;</pre>

Simples, porem muuuuuuito útil em alguns casos.

É isso ae, use com moderação, boa sorte e até!!