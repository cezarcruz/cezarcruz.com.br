---
title: Como parar um serviço Windows utilizando CSharp
author: Cezar Cruz
type: post
date: 2013-06-21T12:22:39+00:00
url: /como-parar-um-servico-windows-utilizando-csharp/
dsq_thread_id:
  - 2788106295
dsq_needs_sync:
  - 1
categories:
  - Outros

---
Saindo um pouco do PHP, vamos para a plataforma .NET, nesse tutorial (guia rápido hehhehe), vou ensinar como parar e subir um serviço Windows utilizando CSharp, vamos lá.

Primeiro, vamos intanciar o ServiceController passando como o parâmetro  o nome do serviço que iremos gerenciar

<pre class="lang:c# decode:true">using System.ServiceProcess;

ServiceController service = new ServiceController("xxxservico");</pre>

Aqui como paramos o serviço

<pre class="lang:c# decode:true">if (service.Status.Equals(ServiceControllerStatus.Running))
                        service.Stop();</pre>

  *  Primeiro, verificamos se o serviço e está rodando
  * Coso ele esteja, paramos ele usando o metodo Stop.

Para iniciar basta utilizar isso

<pre class="lang:c# decode:true ">if (service.Status.Equals(ServiceControllerStatus.Stopped))
                        service.Start();</pre>

  *  Verificamos se o serviço está parado
  * Caso esteja, iniciamos ele

Simples e pratico, até mais!!