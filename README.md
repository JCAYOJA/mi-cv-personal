# Mi CV Personal - Práctica Final Docker 🐋

Aplicación web de Currículum Vitae personal orquestada completamente con **Docker Compose**, utilizando contenedores independientes integrados para el Frontend, Backend y Base de Datos.

---

## 🛠️ Arquitectura del Proyecto

La solución está compuesta por tres servicios comunicados mediante una única red virtual aislada:

| Servicio | Tecnología | Puerto Interno | Puerto Externo | Versión de Imagen |
| :--- | :--- | :---: | :---: | :--- |
| **frontend** | React + Nginx | `3000` | `3000` | `nginx:1.27-alpine` |
| **backend** | Node.js (Express) | `4000` | `4000` | `node:20-alpine` |
| **database** | MySQL | `3306` | `3307` | `mysql:8.0` |

---

## 📋 Información del Estudiante
- **Nombre:** Jhonny Cayoja
- **Ciudad:** Cochabamba, Bolivia
- **Institución:** Universidad USIP
- **Formación Académica Registrada:** 7 Certificaciones/Títulos iniciales sembrados automáticamente.

---

## ⚙️ Inicialización Automática de la Base de Datos
La base de datos MySQL se crea e inicializa de manera autónoma al arrancar el contenedor. Las tablas `persona` y `formacion`, junto con las llaves foráneas y registros iniciales, se despliegan automáticamente mediante scripts SQL montados en la ruta interna:
`/docker-entrypoint-initdb.d`

---

## 🚀 Instrucciones de Ejecución

Para clonar e iniciar de manera integral toda la infraestructura en segundo plano sin intervención manual, ejecute los siguientes comandos en su terminal:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   ```

2. **Ingresar a la carpeta raíz del proyecto:**
   ```bash
   cd mi-cv-personal
   ```

3. **Desplegar la aplicación con un solo comando:**
   ```bash
   docker compose up -d
   ```

4. **Acceso en el Navegador:**
   Abra su navegador web favorito e ingrese a la siguiente dirección local para visualizar el CV final:
   👉 **http://localhost:3000**
