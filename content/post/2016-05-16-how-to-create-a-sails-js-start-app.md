---
title: How to create a Sails.JS start app
author: Cezar Cruz
type: post
date: 2016-05-16T15:39:06+00:00
url: /how-to-create-a-sails-js-start-app/
dsq_needs_sync:
  - 1
categories:
  - NodeJS
  - SailsJS
tags:
  - NodeJS
  - SailsJS

---
Hello folks.

For this post i think doing something different. I will try to write this post in English. Any question, please, chat me. Thanks.

<!--more-->

What is Sails.JS?

> Sails makes it easy to build custom, enterprise-grade Node.js apps. (<http://sailsjs.org/>)

First of all, we will need node and npm installed, so, follow this guide to do it: <https://nodejs.org/en/download/package-manager/> . Now, we can install Sails.JS:

<pre>npm -g install sails</pre>

This step maybe need a while.

To verify if Sails is installed, you can do that:

<pre>sails --version</pre>

If you see something like &#8220;0.12.3&#8221;, Well done, Sails is installed. Next step is create an app, to do this, you must run that:

<pre>sails new sailsapp</pre>

This command will take a while, because it will create a folder with basic structure of Sails and install your dependencies. When the command ends, you can see follow message and the app folder:

<pre>info: Created a new Sails app `sailsapp`!</pre>

In this new folder, will can see the files created by Sails. To run our app, you need to execute this command:

<pre>sails lift</pre>

This time, the command will be executed fast, so, <span id="result_box" class="short_text" lang="en"><span class="">quickly</span></span> you can see a message saying something like that:

<pre>...
debug: Environment : development
debug: Port        : 1337
...
</pre>

The most important part of this message is the Sails port, to check your new app, you just need access this URL: http://localhost:1337/

Now we can add a simple endpoint just running this command (before run this command, you need stop Sails server with a &#8220;Ctrl+C&#8221;):

`sails generate api Hello`

This command will generate two files:

  * HelloController.js (app/controllers) 
      * A common empty controller file.
  * Hello.js (api/models/) 
      * A common empty model file.

To create a new endpoint, you need to edit the HelloController.js and add the code bellow:

<pre>module.exports = {
        action: function (req, res) {
                return res.send('Hello!');
        }
};
</pre>

In this code, &#8220;action&#8221; is the name of the endpoint. The endpoint will be composed by: Controller name (without &#8216;Controller&#8217;) and the action name, in our case, will be: <http://localhost:1337/hello/action>

Now you can start Sails again, but this time, it will ask you what to do with Model. To this example, you just need answer &#8220;2&#8221;, then, your app will start normally.

Now, go to [Hello folks.

For this post i think doing something different. I will try to write this post in English. Any question, please, chat me. Thanks.

<!--more-->

What is Sails.JS?

> Sails makes it easy to build custom, enterprise-grade Node.js apps. (<http://sailsjs.org/>)

First of all, we will need node and npm installed, so, follow this guide to do it: <https://nodejs.org/en/download/package-manager/> . Now, we can install Sails.JS:

<pre>npm -g install sails</pre>

This step maybe need a while.

To verify if Sails is installed, you can do that:

<pre>sails --version</pre>

If you see something like &#8220;0.12.3&#8221;, Well done, Sails is installed. Next step is create an app, to do this, you must run that:

<pre>sails new sailsapp</pre>

This command will take a while, because it will create a folder with basic structure of Sails and install your dependencies. When the command ends, you can see follow message and the app folder:

<pre>info: Created a new Sails app `sailsapp`!</pre>

In this new folder, will can see the files created by Sails. To run our app, you need to execute this command:

<pre>sails lift</pre>

This time, the command will be executed fast, so, <span id="result_box" class="short_text" lang="en"><span class="">quickly</span></span> you can see a message saying something like that:

<pre>...
debug: Environment : development
debug: Port        : 1337
...
</pre>

The most important part of this message is the Sails port, to check your new app, you just need access this URL: http://localhost:1337/

Now we can add a simple endpoint just running this command (before run this command, you need stop Sails server with a &#8220;Ctrl+C&#8221;):

`sails generate api Hello`

This command will generate two files:

  * HelloController.js (app/controllers) 
      * A common empty controller file.
  * Hello.js (api/models/) 
      * A common empty model file.

To create a new endpoint, you need to edit the HelloController.js and add the code bellow:

<pre>module.exports = {
        action: function (req, res) {
                return res.send('Hello!');
        }
};
</pre>

In this code, &#8220;action&#8221; is the name of the endpoint. The endpoint will be composed by: Controller name (without &#8216;Controller&#8217;) and the action name, in our case, will be: <http://localhost:1337/hello/action>

Now you can start Sails again, but this time, it will ask you what to do with Model. To this example, you just need answer &#8220;2&#8221;, then, your app will start normally.

Now, go to][1] , and you will see the &#8220;Hello!&#8221; message.

For now, this is it! Thank you!

**References**

  * <http://sailsjs.org/>
  * <http://sailsjs.org/documentation/concepts/>
  * <http://sailsjs.org/get-started>

 [1]: http://localhost:1337/hello/action