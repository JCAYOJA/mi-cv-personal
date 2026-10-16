cat << 'EOF' > README.md
# 🚀 Proyecto CV Personal Orquestado con Docker Compose

Este proyecto implementa y despliega una aplicación web completa para visualizar mi Currículum Vitae (CV) personal. La solución utiliza una arquitectura de tres capas completamente contenerizada y automatizada.

## 🛠️ Arquitectura y Tecnologías
La solución está compuesta por los siguientes servicios integrados en una red aislada de Docker:

*   **Frontend:** ReactJS servido mediante un servidor de producción **Nginx** (Puerto `3000`).
*   **Backend:** API REST desarrollado en **Node.js** con Express (Puerto `4000`).
*   **Base de Datos:** Motor **MySQL 8.0** con persistencia local mediante volúmenes (Puerto `3307`).

---

## 📋 Requisitos Previos
Antes de iniciar la aplicación, asegúrate de cumplir con lo siguiente:
1. Tener instalado [Docker Desktop](https://docker.com) y el motor activo.
2. Contar con una terminal con soporte para Git.
3. Verificar que los puertos locales `3000`, `4000` y `3307` de tu máquina anfitriona no estén siendo ocupados por otros procesos.

---

## 🚀 Instrucciones de Ejecución

Sigue estos pasos ordenados en tu terminal para poner en marcha el proyecto desde cero:

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd mi-cv-personal
```

### 2. Inicializar la aplicación de forma automática
Ejecuta la instrucción oficial de orquestación en segundo plano. Docker Compose se encargará de descargar las imágenes, entrelazar las redes, generar los volúmenes persistentes e inicializar automáticamente las tablas y registros mediante los scripts SQL:
```bash
docker compose up -d
```

### 3. Acceso a la aplicación
Una vez levantada la infraestructura, abre tu navegador e ingresa a las siguientes direcciones:
*   **Interfaz del CV (Frontend):** [http://localhost:3000](http://localhost:3000)
*   **API REST (Backend):** [http://localhost:4000/cv](http://localhost:4000/cv)

---

## 👤 Estudiante
*   **Nombre:** Jhonny Cayoja  
*   **Institución:** Universidad USIP  
*   **Materia:** Administración de Contenedores y Orquestación  

EOF
