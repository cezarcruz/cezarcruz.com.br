---

title: Como instalar o Maven no Windows
author: Cezar Cruz
date: 2014-07-08T14:38:57+00:00
url: /como-instalar-o-maven-windows/
categories:
    - Maven
tags:
    - Maven
---
Olás, depois de um tempo parado, voltamos com um post ensinando como instalar o Maven.

Pra quem não sabe, o Maven é basicamente um repositório de libs/jars, que armazena tudo em um único servidor remoto, com isso, teremos sempre certeza de que todos os ambientes (desenvolvimento e build), estarão com as mesmas versões de dependências, entre outras coisas, pelo Maven é possível realizar testes unitários automatizados.

Vamos lá, o primeiro passo é ter instalado o JVM no seu sistema, feito isso, não se esqueça de adicionar o JAVA_HOME no path, o próximo passo é baixar o Maven no site:

[Lista de downloads][1], hoje a versão mais recente é a 3.2.2, escolha o pacote apache-maven-3.2.2-bin.zip, e faça o download.

Após a conclusão do download, descompacte os arquivos, pra esse tutorial iremos utilizar a pasta C:dev, após descompactar, devemos adicionar uma nova variável de ambiente no path do Windows:<figure id="attachment_379" style="width: 244px" class="wp-caption aligncenter">

[<img class="wp-image-379 size-medium" src="https://res.cloudinary.com/cezarcruz-com-br/image/upload/h_300,w_244/v1454457569/Propriedades-do-sistema_bs5ku1.png" alt="Propriedades do sistema" width="244" height="300" />][2]<figcaption class="wp-caption-text">Janela de propriedades do sistema</figcaption></figure> <figure id="attachment_380" style="width: 273px" class="wp-caption aligncenter">[<img class="wp-image-380 size-medium" src="https://res.cloudinary.com/cezarcruz-com-br/image/upload/h_300,w_273/v1454457567/Variaveis_de_ambiente_enmiij.png" alt="Variaveis_de_ambiente" width="273" height="300" />][3]<figcaption class="wp-caption-text">Janela de variáveis de ambiente.</figcaption></figure>

Na janela Variáveis de ambiente, no grupo Variáveis do sistema, devemos adicionar uma nova variável chamada M2_HOME, tudo em maiúsculo, o campo valor da variavel deve ser o caminho de instalação do Maven, no nosso caso C:devapache-maven-3.2.2



<img class="wp-image-381 size-medium" src="https://cezarcruz.com.br/wp-content/uploads/2014/07/nova_variavel_de_sistema-300x129.png" alt="nova_variavel_de_sistema" width="300" height="129" />



Agora já está tudo instalado e configurado, o próximo passo é testar, para isso, basta abrirmos uma janela de comando (dos) e digitar o comando mvn, o resultado dever ser igual o abaixo:

<img class="size-medium wp-image-382" src="https://cezarcruz.com.br/wp-content/uploads/2014/07/tela_comando_mvn-300x58.png" alt="Saida do comando mvn" width="300" height="58" />

Depois disso, é só usar.

Logo logo, estarei postando mais uns tutorias básicos sobre Java e Maven, abraços e até.

 [1]: http://maven.apache.org/download.cgi
 [2]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457569/Propriedades-do-sistema_bs5ku1.png
 [3]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457567/Variaveis_de_ambiente_enmiij.png
 [4]: https://cezarcruz.com.br/wp-content/uploads/2014/07/nova_variavel_de_sistema.png
 [5]: https://cezarcruz.com.br/wp-content/uploads/2014/07/tela_comando_mvn.png