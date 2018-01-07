---
Categories: ["Java", "Intellij"]
type: post
Description: "Como exportar um arquivo .jar utilizando intellij"
Tags: ["Java"]
date: "2018-01-07T09:59:51-03:00"
title: "Como exportar um arquivo .jar utilizando intellij"
url: /como-exportar-jar-utilizando-intellij/
author: Cezar Cruz
---

Neste post, veremos como e simples, mas nao tao intuitivo, exportar um arquivo jar de um projeto java utilizando o Intellij.

<!--more-->
> Isso eh um quote

O primeiro passo e termos um projeto criado e aberto no intellij. Em seguida, ir no menu File -> Project Structure

![[1]](https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1515348274/project-structure_exlwia.png)

Selecione a opcao Artifacts, clique no + (mais) -> Jar -> From modules with dependencies

![Create jar from module](https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1515348901/create-jar-from-module_losxnf.png)

Na opcao Main Class, aponte para a classe "Main" do seu projeto, feito isso, sua configuracao deve ficar assim

![Resultado] (https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1515349212/jar-configurado_ycz8yn.png)

Para gerar o jar, Build -> Build Artifacts, selecionar o seu jar e a opcao build. 

O arquivo sera gerado na pasta out/artifacts/<nome do seu projeto>.

Para executar, o velho comando de sempre

```
java -jar <nome do seu projeto>
```

[1]:https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1515348274/project-structure_exlwia.png "Project Structure"