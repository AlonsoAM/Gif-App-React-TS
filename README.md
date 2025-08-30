# 🎬 GIF Search App

Una aplicación moderna y eficiente para buscar GIFs utilizando la API de Giphy, construida con React, TypeScript y Vite.

## 📋 Descripción

**GIF Search App** es una aplicación web interactiva que permite a los usuarios buscar y visualizar GIFs de manera rápida y sencilla. La aplicación incluye características como historial de búsquedas, caché de resultados para mejorar el rendimiento, y una interfaz de usuario limpia y responsive.

## ✨ Características

- 🔍 **Búsqueda en tiempo real** - Busca GIFs con entrada debounced para optimizar las llamadas a la API
- 📝 **Historial de búsquedas** - Acceso rápido a términos de búsqueda anteriores
- ⚡ **Caché inteligente** - Almacenamiento en caché de resultados para evitar llamadas redundantes a la API
- 🎨 **Interfaz moderna** - Diseño limpio y responsive con componentes reutilizables
- 🔒 **Type-safe** - Desarrollo seguro con TypeScript
- 🚀 **Alto rendimiento** - Construcción optimizada con Vite y HMR (Hot Module Replacement)

## 🛠️ Tecnologías

- **React** 19.1.1 - Biblioteca de UI
- **TypeScript** 5.8.3 - Tipado estático
- **Vite** 7.1.2 - Build tool y dev server
- **Axios** 1.11.0 - Cliente HTTP
- **ESLint** - Linting y formateo de código
- **Giphy API** - Servicio de GIFs

## 📦 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Clave API de Giphy ([obtener aquí](https://developers.giphy.com/))

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/03-gif-app.git
   cd 03-gif-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` basado en `.env.template`:

   ```bash
   cp .env.template .env
   ```

   Añade tu clave API de Giphy:

   ```env
   VITE_GIPHY_API_KEY=tu_clave_api_aqui
   ```

4. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo con HMR

# Producción
npm run build        # Compila TypeScript y construye para producción
npm run preview      # Vista previa de la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar el código
```

## 📁 Estructura del Proyecto

```
src/
├── GifApp.tsx                 # Componente principal de la aplicación
├── main.tsx                   # Punto de entrada
├── index.css                  # Estilos globales
├── gifs/                      # Módulo de funcionalidad GIF
│   ├── actions/              # Acciones y lógica de negocio
│   │   └── get-gif-by-query.action.ts
│   ├── api/                  # Configuración de API
│   │   └── giphy.api.ts
│   ├── components/           # Componentes específicos de GIFs
│   │   ├── GifList.tsx
│   │   └── PreviousSearches.tsx
│   ├── hooks/                # Custom hooks
│   │   └── useGifs.tsx
│   └── interfaces/           # Interfaces TypeScript
│       └── gif.interface.ts
├── shared/                   # Componentes y utilidades compartidas
│   └── components/
│       ├── CustomHeader.tsx
│       └── SearchBar.tsx
└── mock-data/               # Datos de prueba para desarrollo
```

## 🔧 Configuración

### ESLint

El proyecto incluye una configuración de ESLint con reglas recomendadas para:

- JavaScript/TypeScript
- React Hooks
- React Refresh

Para personalizar la configuración, edita el archivo `eslint.config.js`.

### TypeScript

Configuración estricta de TypeScript dividida en:

- `tsconfig.json` - Configuración base
- `tsconfig.app.json` - Configuración de la aplicación
- `tsconfig.node.json` - Configuración para Node.js

## 🎯 Uso

1. **Buscar GIFs**: Escribe un término en la barra de búsqueda
2. **Ver resultados**: Los GIFs aparecerán automáticamente debajo
3. **Historial**: Haz clic en búsquedas anteriores para repetirlas rápidamente
4. **Navegación**: Scroll para ver más resultados

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios siguiendo las [directrices de commit](COMMIT_GUIDELINES.md)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👥 Autor

**Alonso Anchante**

- GitHub: [@AlonsoAM](https://github.com/AlonsoAM)

## 🙏 Agradecimientos

- [Giphy](https://giphy.com/) por proporcionar la API de GIFs
- [Vite](https://vitejs.dev/) por la increíble herramienta de desarrollo
- [React](https://react.dev/) por el framework UI

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!
