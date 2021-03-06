---
title: Como instalar Apache + PHP + MySQL no Ubuntu
author: Cezar Cruz
date: 2013-07-02T15:54:23+00:00
url: /como-instalar-apache-php-mysql-no-ubuntu/
categories:
    - LAMP
tags:
    - LAMP
---

Olás, nesse tutorial veremos como instalar e configurar o Ubuntu para rodar nossos sites em PHP.

<!--more-->

Aqui uma grande surpresa minha, é muito mais fácil instalar e rodar o PHP no Linux do que no Windows, é claro que o Windows tem os famosos pacotes "Wamp" que facilitam bastante, mas caso queira instalar separadamente o PHP, Apache e MySQL, ai é outra história, mas vamos lá, os passos são bem simples, primeiro, abra o Terminal e digite:

`sudo apt-get install apache2`

Esse comando irá instalar o apache, lembrando que o computador deve estar conectado na internet. Para verificar se o apache foi instalado corretamente, basta acessarmos http://localhost, e verificar se essa tela aparece:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457596/Apache_funcionando_srvzvh.png"><img class="size-medium wp-image-86 aligncenter" alt="Apache_funcionando" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_198,w_300/v1454457596/Apache_funcionando_srvzvh.png" width="300" height="197" /></a>Nessa altura já podemos publicar páginas HTML estáticas no diretório <strong>/var/www</strong> que elas estarão disponíveis para acesso.
</p>

> Não esqueça de dar permissão de escrita na pastar /var/www para o seu usuário, da seguinte forma:
> 
> `sudo chmod -R 777 /var/www/`
> 
> **OBSERVAÇÃO MUITO IMPORTANTE:** só deve ser utilizado esse comando em ambiente de desenvolvimento, caso queira se aprofundar um pouco mais no assunto de permissões, sugiro que leia o seguinte texto:
> 
> <http://rberaldo.com.br/chmod-permissoes-em-sistemas-linux-e-unix-like/>

O próximo passo é instalar o PHP, no mesmo terminal onde instalamos o Apache, digitamos o  seguinte comando:

`sudo apt-get install php5 php5-cli php5-dev php5-mcrypt php5-curl php5-gd libapache2-mod-php5`

Para verificarmos se a instalação do PHP ocorreu tudo bem, criaremos um arquivo chamado info.php na pasta **/var/www** com o seguinte conteúdo:

```php
<?php phpinfo(); ?>
```

O resultado deve ser igual a figura a seguir

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457595/instalacao_ok_php_e6m45l.png"><img class="size-medium wp-image-87 aligncenter" alt="instalacao_ok_php" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_198,w_300/v1454457595/instalacao_ok_php_e6m45l.png" width="300" height="197" /></a>
</p>

Pronto, já temos o Apache e o PHP funcionando, agora o próximo passo é instalar o MySQL, tão simples quanto os anteriores, basta rodar o comando a seguir no Terminal:

`sudo apt-get install mysql-client-5.5 mysql-server-5.5 php5-mysql phpmyadmin`

Esse comando irá instalar, além do MySQL o phpMyAdmin que é uma interface para interação com o MySQL feita em PHP que é uma ótima alternativa para criar bancos e tabelas e todas as hospedagens que utilizei até hoje usam o phpMyAdmin como padrão para gerenciar base de dados.

A instalação do MySQL exige uma pequena interação para criarmos a senha do usuário root que acessa o banco de dados. Não vou entrar em detalhes de que devemos criar uma senha forte para o usuário root e etc... a intenção do post é outra, então utilizaremos a senha "**root**", sem aspas, então, na primeira tela solicitada digitamos root, na tela seguinte repetimos a a senha, e é só aguardar a conclusão da instalação.

Para verificarmos se o MySQL foi instalado corretamente, basta acessar o nosso arquivo info.php, http://localhost/info.php, e procurarmos por MySQL

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457593/instalacao_mysql_ok_j00hp4.png"><img class="size-medium wp-image-89 aligncenter" alt="instalacao_mysql_ok" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_208,w_300/v1454457593/instalacao_mysql_ok_j00hp4.png" width="300" height="207" /></a>
</p>

Pronto, agora temos instalado nosso ambiente PHP x Linux com apenas 3 linhas de comando, muito fácil.

> Edit
> 
> Pro PhpMyAdmin funcionar corretamente, precisamos criar um link simbólico apontando pra ele, dentro da pasta /var/www, digite o seguinte comando:
> 
> `ln -s /usr/share/phpmyadmin`
> 
> Agora sim, tudo funcionando.

Até.