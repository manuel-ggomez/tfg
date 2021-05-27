# Consola M&C PLICA

Herramienta creada con Express para el backend y React para el frontend. Esta herramienta busca facilitar el manejo de los recursos de la plataforma de conciencia cibersituacional PLICA mediante la implementación de un sistema de gestión de sensores y subsistemas, un sistema de visualización y un sistema de administración de usuarios.

## Comenzando 🚀

Estas instrucciones te permitirán arrancar una copia del proyecto en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Para el correcto funcionamiento de la aplicación es necesario tener instalados Node.js, Git, Docker, Docker Compose, Apache Kafka, Apache Zookeeper y GoTTY.

**Node.js:** https://nodejs.org/es/download/

**Git:** https://git-scm.com/downloads

**Docker:** https://docs.docker.com/get-docker/

**Docker Compose:** https://docs.docker.com/compose/install/

**Apache Kafka:** https://kafka.apache.org/downloads

**Apache Zookeeper:** https://zookeeper.apache.org/releases.html

**GoTTY:** https://github.com/yudai/gotty

### Instalación 🔧

**En el backend**

Instalamos las dependencias
```
npm install
```

Arrancamos e inicializamos la base de datos
```
npx sequelize-cli db:migrate
npx sequelize-cli db:all 
```

**En el frontend**

Instalamos las dependencias
```
npm install
```

## Despliegue 📦

Para desplegar el proyecto basta con arrancar el frontend y el backend.
Para ello, en ambos sitios hacemos:
```
npm start
```

## Construido con 🛠️

* [React](https://es.reactjs.org/) - La biblioteca JavaScript utilizada en el frontend
* [Redux](https://es.redux.js.org/) - Complemento de React para la gestión del estado de la aplicación
* [Express](https://expressjs.com/es/) - Infraestructura utilizada para los servicios REST
* [SQLite](https://www.sqlite.org/index.html) - Base de datos utilizada

## Autor ✒

**Manuel E. García Gómez**