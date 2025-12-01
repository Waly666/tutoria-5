# tutoria-5

Proyecto de ejemplo: manipulaciones del DOM y mini calculadora.

## Archivos principales

- `index.html` — página principal
- `index.js` — lógica JS (eventos y calculadora)
- `styles.css` — estilos

## Instrucciones rápidas

1. Abrir `index.html` en el navegador.
2. Editar y revisar los cambios.

## Cómo subir a GitHub

- Crea un repositorio vacío en GitHub (por ejemplo `tutoria-5`).
- Luego en este directorio ejecuta:

```powershell
git remote add origin https://github.com/<tu-usuario>/tutoria-5.git
git branch -M main
git push -u origin main
```

Si prefieres usar la GitHub CLI (`gh`), puedes crear y pushear con `gh repo create`.

## Publicar en GitHub Pages

Este repositorio ya está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para activar GitHub Pages:

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** (Configuración).
3. En el menú lateral, busca **Pages**.
4. En la sección **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions**.
5. Guarda los cambios.

### Despliegue automático

Una vez activado, cada vez que hagas push a la rama `main`, el sitio se desplegará automáticamente.

También puedes ejecutar el despliegue manualmente:
1. Ve a la pestaña **Actions** en tu repositorio.
2. Selecciona el workflow **Deploy to GitHub Pages**.
3. Haz clic en **Run workflow**.

### Acceder al sitio

Tu sitio estará disponible en:
```
https://<tu-usuario>.github.io/tutoria-5/
```
