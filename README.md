# Steve Ricapa — Portfolio

Portafolio de AI Engineering, arquitectura cloud-native, desarrollo full-stack y ciencia de datos. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion y MDX.

## Desarrollo local

Requisitos: Node.js 22 y pnpm 10.30.3.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abre `http://localhost:3000`. Antes de publicar:

```sh
pnpm lint
pnpm check-types
pnpm build
pnpm start
```

## Despliegue

Importa el repositorio propio en Vercel con el preset Next.js, o ejecuta `pnpm build` y `pnpm start` en un servidor Node.js. No es una exportación estática. Configura `APP_URL` con la URL HTTPS pública antes de compilar: sin ella el sitio local funciona, pero no genera enlaces canónicos públicos y solicita no indexar.

El gráfico consulta directamente el calendario público de GitHub de `steve-ricapa`, sin token. La caché se revalida cada cinco minutos. El total puede diferir de la vista autenticada del titular. Si GitHub no está disponible o cambia el formato de su calendario, se muestra un enlace al perfil en lugar de datos inventados.

## Contenido

- `src/features/portfolio/data/`: perfil, experiencia, estudios, tecnologías, proyectos publicados, certificaciones y premios.
- `src/features/doc/content/`: agrega aquí únicamente artículos propios listos para publicar. El índice, la búsqueda y el RSS no aparecen si no hay artículos. Las extensiones de proyectos MDX en `content/projects/` solo se muestran para slugs publicados en `PROJECTS`.
- `PORTFOLIO_TODO.md`: fuentes y próximos pasos. Los borradores privados de trabajo se guardan localmente y no forman parte del sitio.

## Créditos

Adaptado de la plantilla de M. Kashan Ashraf. Se conserva el aviso original de Chánh Đại en [LICENSE](LICENSE). Los iconos representan marcas de sus titulares. Ver [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para la procedencia de los iconos incorporados.
