# Consola M&C PLICA

Herramienta creada con Express para el backend y React para el frontend. Esta herramienta busca facilitar el manejo de los recursos de la plataforma de conciencia cibersituacional PLICA mediante la implementaci贸n de un sistema de gesti贸n de sensores y subsistemas, un sistema de visualizaci贸n y un sistema de administraci贸n de usuarios.

## Comenzando 馃殌

Estas instrucciones te permitir谩n arrancar una copia del proyecto en tu m谩quina local para prop贸sitos de desarrollo y pruebas.

### Pre-requisitos 馃搵

Para el correcto funcionamiento de la aplicaci贸n es necesario tener instalados Node.js, Git, Docker, Docker Compose, Apache Kafka, Apache Zookeeper y GoTTY.

**Node.js:** https://nodejs.org/es/download/

**Git:** https://git-scm.com/downloads

**Docker:** https://docs.docker.com/get-docker/

**Docker Compose:** https://docs.docker.com/compose/install/

**Apache Kafka:** https://kafka.apache.org/downloads

**Apache Zookeeper:** https://zookeeper.apache.org/releases.html

**GoTTY:** https://github.com/yudai/gotty

### Instalaci贸n 馃敡

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

## Despliegue 馃摝

Para desplegar el proyecto basta con arrancar el frontend y el backend.
Para ello, en ambos sitios hacemos:
```
npm start
```

## Construido con 馃洜锔?

* [React](https://es.reactjs.org/) - La biblioteca JavaScript utilizada en el frontend
* [Redux](https://es.redux.js.org/) - Complemento de React para la gesti贸n del estado de la aplicaci贸n
* [Express](https://expressjs.com/es/) - Infraestructura utilizada para los servicios REST
* [SQLite](https://www.sqlite.org/index.html) - Base de datos utilizada

## Autor 鉁?

**Manuel E. Garc铆a G贸mez**