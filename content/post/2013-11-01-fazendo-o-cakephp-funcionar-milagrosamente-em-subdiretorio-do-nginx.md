---
title: Fazendo o CakePHP funcionar milagrosamente em um subdiretório do NGINX
author: Cezar Cruz
type: post
date: 2013-11-01T13:11:15+00:00
url: /fazendo-o-cakephp-funcionar-milagrosamente-em-subdiretorio-do-nginx/
dsq_thread_id:
  - 2773717257
dsq_needs_sync:
  - 1
categories:
  - PHP
  - CakePHP
tags:
  - PHP
  - CakePHP

---
Olás, uma dica rápida pra fazer o CakePHP rodar satisfatoriamente no NGINX.

Caso queira saber como instalar o cake, é soh <a title="Como instalar o Nginx + PHP + MySql no Ubuntu" href="https://cezarcruz.com.br/blog/2013/10/como-instalar-o-nginx-php-mysql-no-ubuntu/" target="_blank">clicar aqui</a>. 😉

Sem mais delongas, basta abrir o arquivo de configuração do NGINX e adicionar as seguintes linhas, depois das configurações padrões para funcionamento com o PHP:

<pre class="lang:sh decode:true">location /cake {
               rewrite     ^/cake$ /cake/ permanent;
               rewrite     ^/cake/(.+)$ /$1 break;
               root        /usr/share/nginx/html/cake/app/webroot;
               try_files   $uri /$uri/ @cakephp;
       }

       location @cakephp {
               set $q $request_uri;
               if ($request_uri ~ "^/cake(.+)$") {
                       set $q $1;
               }
               fastcgi_param SCRIPT_FILENAME       /usr/share/nginx/html/cake/app/webroot/index.php;
               fastcgi_param QUERY_STRING          url=$q;
       }</pre>

Lembrando que essa configuração é pra quando estiver usando um subdiretório, no caso, /cake, e os parâmetros  fastcgi\_param SCRIPT\_FILENAME e root devem apontar para o diretório &#8220;fisico&#8221; do CakePHP..

É isso ai, espere que ajude.

Até mais!