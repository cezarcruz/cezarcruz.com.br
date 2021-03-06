---
title: Tutorial básico usando CakePHP, Windows e Eclipse – Parte 2
author: Cezar Cruz
date: 2013-06-20T13:11:04+00:00
url: /tutorial-basico-usando-cakephp-windows-e-eclipse-parte-2/
categories:
- PHP
- CakePHP
tags:
- PHP
- CakePHP

---

Continuando com a segunda parte do tutorial básico usando CakePHP, Windows e Eclipse.

A primeira parte você encontra [aqui][1], paramos na tela em que é exibido uma mensagem de erro de conexão com o bando de dados no CakePHP, vamos lá.

Primeiro, precisamos criar uma base de dados, como estamos utilizando o Wamp, é só utilizar o phpMyAdmin, para o tutorial, vamos criar um base de dados chamada **cake.**

Depois de criado o banco de dados, vamos configurar ele no projeto:

Abra a pasta app->Config, nessa pasta, encontramos os arquivos relacionados ao configuração do CakePHP, o arquivo que conecta com a base de dados é o database.php.default, o primeiro passo é renomear ele para database.php:

> No Eclipse, o botão F2, é um atalho para renomear arquivos e pastas.

Após renomear o arquivo, vamos configurar a conexão com a base de dados, procure no arquivos por class DATABASE_CONFIG, ela deve esar assim:

```php
class DATABASE_CONFIG {

    public $default = array(
        'datasource' =>; 'Database/Mysql',
        'persistent' =>; false,
        'host' =>; 'localhost',
        'login' =>; 'user',
        'password' =>; 'password',
        'database' =>; 'database_name',
        'prefix' =>; '',
        //'encoding' => 'utf8',
    );

    public $test = array(
        'datasource' => 'Database/Mysql',
        'persistent' => false,
        'host' => 'localhost',
        'login' => 'user',
        'password' => 'password',
        'database' => 'test_database_name',
        'prefix' => '',
        //'encoding' => 'utf8',
    );
}
```

<!--more-->

Devemos alterar apenas o login, password e o database:

```php
'login' => 'root', 'password' => "",
'database' => 'cake'
```

> Lembrando que os dados de conexão pode variar de instalação para instalação, porém, o padrão do Wamp é o que está acima

Por fim, seu código deve ficar assim:

```php
class DATABASE_CONFIG {

    public $default = array(
        'datasource' => 'Database/Mysql',
        'persistent' => false,
        'host' => 'localhost',
        'login' => 'root',
        'password' => '',
        'database' => 'cake',
        'prefix' => '',
        //'encoding' => 'utf8',
    );

    public $test = array(
        'datasource' => 'Database/Mysql',
        'persistent' => false,
        'host' => 'localhost',
        'login' => 'user',
        'password' => 'password',
        'database' => 'test_database_name',
        'prefix' => '',
        //'encoding' => 'utf8',
    );
}
```

E ao acessar a pagina via navegador, deveremos ter o seguinte resultado:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457599/cake_php_home_final_sem_erros_vnpu2o.png"><img class="size-medium wp-image-60 aligncenter" alt="cake_php_home_final_sem_erros" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_281,w_300/v1454457599/cake_php_home_final_sem_erros_vnpu2o.png" width="300" height="281" /></a>
</p>

O Ultimo Warning restante é sugerindo a instalação do DebugKit, no momento não teremos utilidade para ele no nosso tutorial, então fica pra próxima 😉

Agora, vamos a parte teórica:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457598/estrutura_de_diretorios_cake_hvocmx.png"><img class="size-medium wp-image-61 aligncenter" alt="estrutura_de_diretorios_cake" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_300,w_210/v1454457598/estrutura_de_diretorios_cake_hvocmx.png" width="210" height="300" /></a>
</p>

Pra esse tutorial a parte mais importante do CakePHP é a que está dentro da pasta app, então não vou entrar em detalhe sobre as outras.

As pastas que utilizamos com mais frequência são Controller, View e Model (M V C):

A pasta Controller é onde colocamos nossos controladores, ou seja, onde trataremos as entradas e saídas da Aplicação.

A pasta Model é onde colocamos a parte que traz dados, não só de uma base de dados.

A pasta View é onde colocamos os arquivos relacionados a layouts (CSS, HTML) e exibição de conteúdo no navegador.

Resumindo:

Quando um usuário requisita uma página, ex: lista de livros, o controller recebe essa requisição, faz uma chamada no model para carregar os livros e envia para a view, que exibe para usuário.

Vamos criar nossa primeira página, mãos a obra.

Como quem recebe as requisições é o controller, então, vamos começar pelo controller:

Na pasta controller, criaremos o arquivo HomeController.php.

> Por convenção, o controller seguido da palavra Controller iniciada com letra maiúscula. ex: TimesController.php

> Quando criamos um controller HomeController.php, queremos dizer ao CakePHP que envie as solicitações http://localhost/cake/home para ele

Após criarmos o controller vamos editá-lo da seguinte forma:

```php
<?php
class HomeController extends AppController{
    public function index(){

    }
}
?>
```

Aqui uma menção a programação orientada a objetos. =D

Sempre devemos começar nosso controller, declarando class seguido do nome do controller extends AppController

> Repare que na pasta Controller temos o arquivo AppController.php, devemos (mas não somos obrigados) estender nossa classe dela pois podemos usar ela para carregar algo padrão para todos os outros controllers, um plugin por exemplo, ou desabilitar o uso da base de dados.

Na linha seguinte, colocamos public function index() que seria o mesmo que colocar a página index.php, essa será a função a ser executada caso não tenha nenhum parâmetro com a url home.

Sempre que criamos uma function no controller, devemos criar um arquivo .ctp (Cake Template) para que ela seja carregada automaticamente.

Como criamos a **function index** dentro do **controller Home**, devemos criar, dentro da pasta View, uma pasta chamada **Home** e um arquivo chamado **index.ctp**

> Se dentro do controller Home criarmos uma function cadastrar, devemos, dentro de View/Home, criar um arquivos cadastrar.ctp, ele será exibido quando a url for http://localhost/cake/home/cadastrar.

Esses arquivos de template é que irá ser exibido no navegador, os arquivos .ctp serão tratados como arquivos php, ou seja, você pode colocar HTML, Css, JS ou Php nele.

Para finalizarmos essa parte do tutorial, faremos o seguinte, coloque o código abaixo no no arquivo index.ctp

```php
<?php echo "HelloCake" ?>
```

Feito isso acesse o link http://localhost/cake/home, o resultado será o seguinte:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457597/hello_cake_tw5o6d.png"><img class="size-medium wp-image-63 aligncenter" alt="hello_cake" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_163,w_300/v1454457597/hello_cake_tw5o6d.png" width="300" height="162" /></a>
</p>

Está ai nossa primeira página utilizando o CakePHP, repare que ela já está estilizada, isso acontece porque não definimos nenhum layout, então ele carrega o layout padrão definido pelo CakePHP, em outro tutorial veremos com isso funciona.

Até a próxima.

 [1]: /tutorial-basico-usando-cakephp-windows-eclipse-parte1/