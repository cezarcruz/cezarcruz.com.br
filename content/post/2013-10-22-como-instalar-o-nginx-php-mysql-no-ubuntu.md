---
title: Como instalar o Nginx + PHP + MySql no Ubuntu
author: Cezar Cruz
type: post
date: 2013-10-22T12:48:50+00:00
url: /como-instalar-o-nginx-php-mysql-no-ubuntu/
dsq_thread_id:
  - 2773317475
dsq_needs_sync:
  - 1
categories:
  - Outros

---
## Hoje uma dica bem simples: como instalar o Nginx (Servidor WEB) + PHP e MySql no Ubuntu.

O **Nginx** (Pronuncia Engine-x) é um concorrente do Apache para servir páginas web. Para servir páginas estáticas, sem dúvidas é muito melhor que o Apache e tem um ganho com páginas dinâmicas também ([Apache vs Nginx][1]). O que pude comprovar é o uso de memória, por exemplo, o **Nginx** usa bem menos e o tempo de reposta é bem menor quando comparado ao Apache. Vamos lá.

<!--more-->

O primeiro passo é Instalar o **Nginx**:

<pre class="lang:sh decode:true">sudo apt-get install nginx</pre>

> A versão no repositório oficial do Ubuntu é um pouco desatualizada, mas irá funcionar muito bem pra esse tutorial

Depois de instalado, basta iniciar o serviço:

<pre class="lang:sh decode:true">/etc/init.d/nginx start</pre>

A página de boas vindas é a seguinte:<figure id="attachment_231" style="width: 300px" class="wp-caption aligncenter">

[<img class="size-medium wp-image-231 " title="Welcome to nginx" alt="nginx-imagen-inicial" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_169,w_300/v1454457576/nginx-imagen-inicial_krlgoc.png" width="300" height="169" />][2]<figcaption class="wp-caption-text">Welcome to nginx</figcaption></figure> 

<p style="text-align: left;">
  Pra instalar o PHP é tão simples quanto o <strong>Nginx</strong>:
</p>

<pre class="lang:sh decode:true">apt-get install php5-fpm</pre>

> O Php FPM é o interpretador utilizado para os códigos PHP. [Mais sobre PHP FPM][3]

Pra integrar o **Nginx** com o PHP temos que por a mão na massa, é necessário alterar um arquivo de configuração:

<pre class="lang:sh decode:true">/etc/nginx/sites-available/default</pre>

Pra configuração básica, é preciso fazer duas pequenas alterações:

No começo do arquivo, precisamos adicionar **index.php** entre **index** e **index.html**, ficando assim:

<pre class="lang:sh decode:true">index index.php index.html index.htm</pre>

e mais abaixo, basta &#8220;descomentar&#8221; algumas linhas, onde começa o **location  ~* .php**
  
, ficando assim:

<pre class="lang:sh decode:true">location ~* .php$ {
                fastcgi_split_path_info ^(.+.php)(/.+)$;
                # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini

                # With php5-cgi alone:
        #       fastcgi_pass 127.0.0.1:9000;
                # With php5-fpm:
                fastcgi_pass unix:/var/run/php5-fpm.sock;
                fastcgi_index index.php;
                include fastcgi_params;
        }</pre>

Agora que está tudo configurado, é preciso reiniciar o **Nginx**:

<pre class="lang:sh decode:true">/etc/init.d/nginx restart</pre>

Pra verificarmos se está tudo funcionando, criamos um arquivo na pasta publica do Nginx (/usr/share/nginx/html) chamado info.php, com o conteúdo abaixo:

<pre class="lang:php decode:true">&lt;?php
        phpinfo();
?&gt;</pre>

Acessar por **http://localhost/info.php** E o resultado, claro:<figure id="attachment_232" style="width: 300px" class="wp-caption aligncenter">

[<img class="size-medium wp-image-232 " title="PHP info no Nginx" alt="phpinfo-nginx" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_169,w_300/v1454457574/phpinfo-nginx_lk5sxg.png" width="300" height="168" />][4]<figcaption class="wp-caption-text">PHP info no Nginx</figcaption></figure> 

<p style="text-align: left;">
  Tudo funcionando, agora é hora de instalar o MySQL, mesmo comando simples de sempre:
</p>

<pre class="lang:sh decode:true">apt-get install mysql-server mysql-client php5-mysql</pre>

Para verificar se o MySql está corretamente instalado basta acessar novamente **http://localhost/info.php **e procurar por MySql, o resultado deve ser igual o abaixo:<figure id="attachment_234" style="width: 300px" class="wp-caption aligncenter">

[<img class="size-medium wp-image-234 " title="PHP info Nginx" alt="phpinfor-mysql-nginx" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_169,w_300/v1454457573/phpinfor-mysql-nginx_m0w6xb.png" width="300" height="168" />][5]<figcaption class="wp-caption-text">PHP info Nginx</figcaption></figure> 

<p style="text-align: left;">
  Agora é só se divertir, até mais!!
</p>

<h1 style="text-align: left;">
  Bonus
</h1>

[Como usar o apt-get][6]

[Sobre o Nginx][7]

[CodeIgniter no Nginx][8]

 [1]: http://systemsarchitect.net/apache2-vs-nginx-for-php-application/
 [2]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457576/nginx-imagen-inicial_krlgoc.png
 [3]: http://php-fpm.org/about/
 [4]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457574/phpinfo-nginx_lk5sxg.png
 [5]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457573/phpinfor-mysql-nginx_m0w6xb.png
 [6]: http://www.infowester.com/aptget1.php
 [7]: http://wiki.nginx.org/Main
 [8]: http://wiki.nginx.org/Codeigniter