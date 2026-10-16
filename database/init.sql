-- 1. Creación de la tabla de datos personales según la rúbrica
CREATE TABLE IF NOT EXISTS persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    foto VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Creación de la tabla de formación académica con su llave foránea obligatoria
CREATE TABLE IF NOT EXISTS formacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    institucion VARCHAR(150) NOT NULL,
    anio VARCHAR(50) NOT NULL,
    persona_id INT,
    FOREIGN KEY (persona_id) REFERENCES persona(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Inserción automática de tus datos personales reales (Jhonny Cayoja)
INSERT INTO persona (id, nombre, apellido, ciudad, foto) 
VALUES (1, 'Jhonny', 'Cayoja', 'Cochabamba', '/images/perfil.jpg');

-- 4. Inserción automática de tu listado de formación académica real
INSERT INTO formacion (titulo, institucion, anio, persona_id) 
VALUES 
('Bachiller en Ciencias', 'Colegio MARCOS BELTRAN AVILA Oruro Bolivia', '2000', 1),
('Diplomado en Full Stack Developer', 'Universidad USIP', '2026', 1),
('Analista de de Sistemas', 'Universidad UCATEC Cochabamba Bolivia', '2001', 1),
('Ingeniería de Sistemas', 'Universidad UNO Santa Cruz Bolivia', 'En curso 2006', 1),
('Certificación en Docker y Contenedores', 'Universidad USIP Docker Inc.', '2026', 1),
('Curso Avanzado de React y Node.js', 'Universidad UPEA La Paz Diplomado Frontend', '2025', 1),
('Curso Avanzado de PostgreSQL', 'Universidad UPEA La Paz Diplomado', '2025', 1);
