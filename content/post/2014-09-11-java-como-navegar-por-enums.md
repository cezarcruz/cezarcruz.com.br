---
title: Java – Como navegar por ENUMs
author: Cezar Cruz
type: post
date: 2014-09-11T18:37:27+00:00
url: /java-como-navegar-por-enums/
dsq_thread_id:
  - 3023797802
dsq_needs_sync:
  - 1
categories:
  - Java

---
Olás,
  
hoje uma dica rápida pra navegarmos por uma classe java que contenha **enums**:

Considerando nosso **enum**:

<pre class="lang:java decode:true">public enum Cidades {
    CAMPINAS, HORTOLANDIA, SUMARE, VALINHOS
}</pre>

Pra navegamos por ele basta fazer o seguinte:

<pre class="lang:default decode:true">for (Cidades c : Cidages.values()) {
    System.out.println(c.toString());
}</pre>

Utilizando o método **values**, obtemos um list do tipo do nosso **enum** com todos os **enum**, daí pra frente é só diversão.

Abraços!