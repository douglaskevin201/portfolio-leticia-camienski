# Portfólio de Leticia Camienski

[Português](#português) | [English](#english)

---

## Português

Site estático para apresentar os projetos de arquitetura, interiores e paisagismo de **Leticia Camienski**. O site foi desenvolvido por **Kevin Douglas**.

### Sobre o projeto

O portfólio reúne cinco projetos, uma apresentação profissional e uma galeria para cada projeto. As páginas de projeto permitem ampliar as imagens e ajustar o nível de zoom para consultar pranchas e outros detalhes.

### Recursos

- Página inicial com apresentação visual em tela cheia e projetos em destaque.
- Navegação entre projetos em destaque, automática ou pelos controles.
- Cartões de projeto com páginas individuais e galerias de imagens.
- Visualizador de imagens com zoom ajustável e navegação entre imagens.
- Layout adaptável a computadores e dispositivos móveis.
- Imagens otimizadas em formato WebP.
- HTML, CSS e JavaScript sem framework, etapas de compilação ou dependências de produção.

### Executar localmente

O site não precisa de instalação de dependências. Com Python instalado, abra o PowerShell na pasta do projeto e inicie um servidor local:

```powershell
py -m http.server 8000
```

Abra <http://localhost:8000> no navegador. Para encerrar o servidor, volte ao PowerShell e pressione `Ctrl+C`.

Também é possível abrir `index.html` diretamente, mas o servidor local é recomendado para que os recursos do navegador funcionem de forma consistente.

### Estrutura do repositório

```text
.
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   └── projects/       # Imagens WebP organizadas por projeto
├── index.html          # Página inicial
├── projeto.html        # Página e galeria de cada projeto
├── README.md
└── .gitignore
```

### Documentos privados

O currículo e outros arquivos pessoais podem continuar na pasta local `docs/`, mas essa pasta é excluída do Git pelo `.gitignore`. Arquivos PDF e documentos do Office também são ignorados. Essas regras ajudam a evitar a publicação acidental de documentos privados; confira sempre o conteúdo preparado para commit antes de enviar alterações.

### Créditos

- Portfólio: Leticia Camienski.
- Desenvolvimento do site: Kevin Douglas.

---

## English

A static website showcasing the architecture, interior design, and landscape projects of **Leticia Camienski**. The website was developed by **Kevin Douglas**.

### About the project

The portfolio features five projects, a professional introduction, and an individual image gallery for each project. Project pages include an image viewer with adjustable zoom for inspecting presentation boards and other details.

### Features

- Full-screen visual introduction with featured projects.
- Featured projects rotate automatically and can also be selected using the controls.
- Project cards link to individual pages with image galleries.
- Image viewer with adjustable zoom and image navigation.
- Responsive layouts for desktop and mobile devices.
- Optimized images in WebP format.
- Built with HTML, CSS, and JavaScript; no framework, build step, or production dependencies are required.

### Run locally

No dependencies need to be installed. With Python available, open PowerShell in the project directory and start a local server:

```powershell
py -m http.server 8000
```

Open <http://localhost:8000> in your browser. To stop the server, return to PowerShell and press `Ctrl+C`.

You can also open `index.html` directly, but using a local server is recommended for consistent browser behavior.

### Repository structure

```text
.
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   └── projects/       # WebP images organized by project
├── index.html          # Home page
├── projeto.html        # Project details and galleries
├── README.md
└── .gitignore
```

### Private documents

The résumé and other personal files may remain in the local `docs/` folder, which is excluded from Git by `.gitignore`. PDF and Office documents are also ignored. These rules help prevent accidental publication of private documents; always review staged files before committing changes.

### Credits

- Portfolio: Leticia Camienski.
- Website development: Kevin Douglas.
