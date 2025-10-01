<a name="readme-top"></a>

# 🚀 Workflow de Releases Automáticas

Esta GitHub Action crea releases automáticamente cuando publicas una etiqueta de versión. ⚡

## 📦 Cómo Crear un Release

### 1️⃣ **Asegúrate de que tus cambios estén confirmados:**

```bash
git add .
git commit -m "Tu mensaje de commit"
```

### 2️⃣ **Crea y publica una etiqueta de versión:**

```bash
# Crea una nueva etiqueta (ej: v1.0.0)
git tag v1.0.0

# Publica la etiqueta a GitHub
git push origin v1.0.0
```

### 3️⃣ **El workflow hará automáticamente:**

- 📥 Instalar dependencias usando `pnpm`
- 🔨 Construir el proyecto con `pnpm run build`
- 📦 Crear un archivo `dist.zip` con los archivos compilados
- 🎉 Crear un GitHub release con el nombre de la etiqueta
- 📎 Adjuntar el archivo `dist.zip` al release

---

## 🏷️ Convención de Nombres para Etiquetas

Las etiquetas deben seguir el formato `v*.*.*` (ej: v1.0.0, v2.1.3, v0.0.1) para activar el workflow.

**Ejemplos:**

- ✅ `v1.0.0` - **Activará** el workflow
- ✅ `v2.1.3` - **Activará** el workflow
- ✅ `v0.0.1` - **Activará** el workflow
- ❌ `1.0.0` - **NO activará** (falta el prefijo 'v')
- ❌ `release-1.0` - **NO activará** (formato incorrecto)

---

## 👀 Ver los Releases

Después de que el workflow se complete, puedes encontrar tu release en:

```
https://github.com/susarrodev/kilam.net/releases
```

---

## 💾 Descargar un Release

Los usuarios pueden descargar el archivo `dist.zip` desde la página de releases y desplegarlo en su servidor. 🌐

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>
