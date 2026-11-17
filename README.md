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

El gráfico de contribuciones consulta el historial público de `steve-ricapa` a través de `github-contributions-api.jogruber.de`, sin token. Se cachean respuestas válidas por un día. Si la API devuelve un error o no está disponible, se muestra un enlace al perfil en lugar de un gráfico vacío. Puedes configurar `GITHUB_CONTRIBUTIONS_API_URL` en el servidor para usar un proveedor compatible con `/v4/<usuario>?y=last`. Si tu proveedor requiere un token, mantenlo en el servidor del proveedor; no lo expongas en variables `NEXT_PUBLIC_*` ni dentro de la URL.

## Contenido

- `src/features/portfolio/data/`: perfil, experiencia, estudios, tecnologías, proyectos publicados, certificaciones y premios.
- `src/features/doc/content/`: agrega aquí únicamente artículos propios listos para publicar. El índice, la búsqueda y el RSS no aparecen si no hay artículos. Las extensiones de proyectos MDX en `content/projects/` solo se muestran para slugs publicados en `PROJECTS`.
- `PORTFOLIO_TODO.md`: fuentes y próximos pasos. Los borradores privados de trabajo se guardan localmente y no forman parte del sitio.

## Créditos

Adaptado de la plantilla de M. Kashan Ashraf. Se conserva el aviso original de Chánh Đại en [LICENSE](LICENSE). Los iconos representan marcas de sus titulares. Ver [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para la procedencia de los iconos incorporados.
