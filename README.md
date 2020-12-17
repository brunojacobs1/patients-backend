# Patients-backend
Backend para el proyecto final del Angular Bootcamp

## Antes de comenzar
1. Ejecutar `npm install` en el directorio de la aplicación
2. Ejecutar `npm run dev`
3. La aplicación correrá en el puerto 3001

## Endpoints
|    ruta     |     returns     | 
| ----------- | ----------- |
| `get` **/api/pacientes** | Lista de pacientes |
| `get` **/api/pacientes/:id** | Paciente |
| `post` **/api/pacientes/** | Agregar paciente |
| `post` **/api/pacientes/:id/ingresos** | Agregar ingreso a paciente |
| `delete` **/api/pacientes/:id** | Eliminar paciente |
| `get` **/api/diagnosticos/** | Lista de diagnósticos |
| `get` **/api/diagnosticos/:codigo** | Diagnóstico |
