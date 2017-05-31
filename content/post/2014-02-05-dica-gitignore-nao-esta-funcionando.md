---
title: 'Dica git: .gitignore não está funcionando corretamente'
author: Cezar Cruz
type: post
date: 2014-02-05T15:36:20+00:00
url: /dica-gitignore-nao-esta-funcionando/
dsq_thread_id:
  - 2772720790
dsq_needs_sync:
  - 1
categories:
  - Outros

---
## Olás, aqui vai um dica rapidinha, pra quem usa Git.

Quando atualizamos o .gitignore (arquivo utilizado pra descrever pastas ou arquivos que não devem ser versionados), pode ser que os arquivos que colocamos neles continuem sendo versionados, pra que ele funcione corretamente, devemos limpar o cache local:

    git rm -r --cached .

Rode o comando acima no root do diretório.

Depois, procedimento padrão:

    git add .

    git commit -m ".gitignore funcionando ;)"

Espero que ajude, até mais. =D