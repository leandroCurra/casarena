# Casarena · Bikinis mayorista

Prototipo del sitio web mayorista de Casarena, diseñado en [Claude Design](https://claude.ai/design).

## Qué es esto

Este repo contiene el prototipo de diseño (HTML/CSS/JS) del sitio de venta mayorista de Casarena: catálogo de bikinis, lista de precios, condiciones mayoristas, y los assets de marca (logo, íconos, fotografía).

> **Nota:** los archivos `.dc.html` son prototipos generados por Claude Design, no producción lista para deploy. Ver `DESIGN_HANDOFF.md` para instrucciones de cómo implementarlos en un stack real (React, Vue, etc).

## Estructura

```
project/
├── Casarena Mayorista.dc.html      # Home / catálogo principal
├── Condiciones Mayoristas.dc.html  # Página de condiciones
├── catalogo.json                   # Datos del catálogo (con fotos)
├── catalogo-sin-foto.json          # Datos del catálogo (sin fotos)
├── assets/
│   ├── logo.svg
│   ├── icons/                      # Íconos SVG (vectores marinos, etc)
│   ├── imagery/                    # Fondos (mar, arena, sombras de palmera)
│   └── products/                   # Fotos de producto por modelo/color
├── uploads/                        # Fotos, catálogos y material subido
└── _ds/                            # Design system (tokens, componentes)
```

## Marca

Casarena es una marca de bikinis mayorista con identidad estival, ágil, generosa, señorial y federal — hecha para revendedoras, no para consumidoras finales. Ver `DESIGN_HANDOFF.md` y el brandbook para más contexto.
