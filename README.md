# Code State

[![CI](https://github.com/js-rom/test-app-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/js-rom/test-app-frontend/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=js-rom_test-app-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=js-rom_test-app-frontend)
[![CD](https://github.com/js-rom/test-app-frontend/actions/workflows/cd-docker-render.yml/badge.svg)](https://github.com/js-rom/test-app-frontend/actions/workflows/cd-docker-render.yml)
[![Render](https://img.shields.io/website?url=https%3A%2F%2Ftest-app-frontend-o1vb.onrender.com)](https://test-app-frontend-o1vb.onrender.com)

# TestAppFrontend

Esta aplicacion es el Front-end del proyecto final para el ciclo superior de Desarrollo de Aplicaciones Web.

💡 El proyecto consiste en desarrollar una aplicación web para una institución educativa. Esta herramienta permitirá:

- Generar cuestionarios tipo test.
- Ofrecer a los alumnos acceso online a las pruebas.
- Corregir automáticamente los cuestionarios realizados.

🔐 La aplicación contará con dos perfiles de usuario:

📘 Perfil de Administración:
- Gestionar cuestionarios
- Gestionar cursos
- Gestionar alumnos
- Asociar cuestionarios a cursos
- Asociar alumnos a cursos

🎓 Perfil de Alumno:
- Acceder a sus cursos
- Realizar los cuestionarios disponibles
- Consultar sus calificaciones
- Revisar cuestionarios ya realizados

## Tecnologías necesarias
`TypeScript` `Angular` `GitHub` `GitHub Actions` `Sonarcloud` `GitHub packages` `Docker` `Render`

##  ▶️ Aplicación
https://test-app-frontend-o1vb.onrender.com

##  ⚙️ Instalación del proyecto
Clonar repositorios, mediante consola:

test-app-frontend

```sh

> cd <folder path>
> git clone https://github.com/js-rom/test-app-frontend.git
> cd test-app-frontend
test-app-frontend> docker build -f Dockerfile-dev -t test-app-frontend .
test-app-frontend> docker run -d -p 4200:4200 --name test-app-frontend-app test-app-frontend
http://localhost:4200

```

# Angular Docs

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
