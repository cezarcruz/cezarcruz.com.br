---
title: Como navegar por um field manytomany em um template Django
author: Cezar Cruz
date: 2014-11-11T13:58:36+00:00
url: /como-navegar-por-um-field-manytomany-em-um-template-django/
categories:
  - Django
tags:
  - Django
---

Olás,  hoje mais uma dica curtinha: como navegar por um campo **manytomany** em um template **Django**.

<!--more-->

Basta entendermos que o campo **manytomany** vem como um list, então a navegação fica simples, veja:

```jsp
{% for item in list_pedidos_abertos %}
   {% for serv in item.servicos.all %}
       <p>{{ serv.nome }}</p>
   {% endfor %}
{% endfor %}
```

Onde _list\_pedidos\_abertos_ é uma lista de pedidos (pode ser qualquer coisa), e nessa lista de pedidos temos _item.servicos_, que é uma lista com os serviços associados a esse pedido, então, para implementar um laço, basta utilizar o _item.servicos.all_ e estará na forma que estamos acostumados a fazer.

É isso ai, até!!

=D