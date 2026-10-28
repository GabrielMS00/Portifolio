# Portfólio · Gabriel Souza

Landing page em React + TypeScript + Vite.

```bash
npm install
npm run dev      # servidor local
npm run build    # typecheck + build de produção em dist/
```

## Onde editar

Todo o conteúdo fica em `src/data`:

| Arquivo | O que controla |
| --- | --- |
| `profile.ts` | Nome, resumo, disponibilidade e links de contato (e-mail, GitHub, LinkedIn) |
| `projects.ts` | Projetos: descrição, características, stack, telas e links |
| `skills.ts` | Competências por camada |

A quantidade de projetos e a numeração (PRJ-01, FIG. 1.1) são calculadas a partir desses arquivos. Para adicionar um projeto, inclua mais um item em `projects.ts`: o layout alterna sozinho entre galeria à esquerda e à direita.

## Imagens dos projetos

- `public/projects/<id>/` guarda as imagens usadas no site, já em WebP e com no máximo 1280 px de altura.
- `design-assets/prints/<id>/` guarda os prints originais de cada app. Essa pasta não vai para o site; serve de arquivo para escolher e exportar novas telas.

Para trocar ou adicionar uma tela:

1. Exporte a imagem (WebP, ~1280 px de altura) para `public/projects/<id-do-projeto>/`, por exemplo `public/projects/bora-onde/09-configuracoes.webp`. Os arquivos seguem a ordem em que as telas aparecem (`01-`, `02-`…), e o original de cada um tem o mesmo nome em `design-assets/prints/<id-do-projeto>/`.
2. Em `src/data/projects.ts`, preencha `image` (e, se quiser, `alt`) na tela correspondente:

```ts
{
  title: 'Configurações',
  caption: 'Preferências da conta e do feed.',
  image: '/projects/bora-onde/09-configuracoes.webp',
  alt: 'Tela de configurações do Bora Onde',
}
```

Sem `image`, a página mostra um espaço reservado (390 × 844 px).

## Demo

Quando um projeto tiver demo publicada, defina `demoUrl` em `projects.ts`: o botão "Ver demo" aparece ao lado de "Ver repositório". Sem `demoUrl`, só o botão do repositório é exibido.
