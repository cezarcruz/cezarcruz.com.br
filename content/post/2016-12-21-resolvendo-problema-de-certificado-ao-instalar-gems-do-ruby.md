---
title: Resolvendo problema de certificado ao instalar gems do ruby
author: Cezar Cruz
type: post
date: 2016-12-21T11:14:46+00:00
url: /resolvendo-problema-de-certificado-ao-instalar-gems-do-ruby/
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Depois de instalar o Ruby (RubyInstaller) no Windows e tentar utilizar o comando:
  
`gem install bundler`
  
O seguinte erro acontecia:
  
_SSLv3 read server certificate B: certificate verify failed_

Para corrigir, basta digitar o comando abaixo:
  
`gem install rubygems-update --source "http://rubygems.org" update_rubygems`
  
=)