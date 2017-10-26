---
title: Como instalar drivers nvidia no Elementary OS Loki
author: Cezar Cruz
type: post
date: 2016-09-12T14:01:11+00:00
url: /como-instalar-drivers-nvidia-no-elementary-os-loki/
dsq_needs_sync:
  - 1
categories:
  - Linux

---
Olás,

recentemente foi lançado a nova versão do Elementary OS, uma distribuição que tem como meta ser &#8220;Uma alternativa rápida e código aberto ao Windows e macOS&#8221;, após a instalação, como sempre, é necessário instalar os drivers da placa de vídeo, uma forma bem simples é executar esse comando:

<pre class="lang:sh decode:true ">sudo ubuntu-drivers debug && sudo ubuntu-drivers autoinstall</pre>

bem simples, após a conclusão da instalação, basta reiniciar a maquina e desfrutar. =)

<https://elementary.io/>