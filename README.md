# Users CRUD

_aplicación web ,consumiendo un API(https://github.com/WallMonfortt/src)_

## Para clonar los repositorios necesarios 🚀

_utiliza el comando_

```
git clone https://github.com/WallMonfortt/src (Backend)
git clone 
```

### Pre-requisitos 📋

_Para el uso y edición de estos repositorio es necesario tener instalado en el equipo : react , nodeJS & MySQL_

_Crea la base de Datos en MySQL con el siguiente script:_
```
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int NOT NULL
);

```

### Instalación 🔧

_Una vez completado los prerrequisitos y clonado los repositorios deberas hacer la instalacion de las dependencias_

_Dentro de la carpeta de cada proyecto mediante el terminal ejecuta:_

```
npm i 
```
o
```
npm install
```

_Agrega al proyecto de backend(https://github.com/WallMonfortt/src) un archivo .env siguiendo la estructura del archivo.envExample o de la siguiente manera:_

```
PORT=9000
DB_USERNAME=root(o el nombre de usuario que utilizaste en MySQL)
DB_PASSWORD=(la contraseña que usas para conectarte a tu base de datos local MySQL)
DB_HOST=localhost
DB_NAME=users
```
_dentro del proyecto backend ejecuta el comando:_
```
npm run dev  (para inicializar el servidor)
```
_Y dentro del proyecto Frontend ejecuta el comando:_
```
npm start  (para inicializar la aplicación web)
```
_Y listo! ahora podras visualizar y hacer modificaciones al codigo del repositorio_


## Despliegue 📦

__

## Construido con 🛠️

_Las herramientas ocupadas para el desarrollo fronend de esta prueba son_

* [React](https://reactjs.org/) - La libreria usada
* [Redux](https://redux.js.org/) - Gestión de estado
* [SASS](https://sass-lang.com/) - preprocesador CSS 
* [NODEjs](https://nodejs.org/en/about/) - Entorno de ejecución
* [axios](https://www.npmjs.com/package/axios) - Manejo de peticiones
* [boostrap, reacstrap](https://reactstrap.github.io/) - Container, Table
* [React-hook-form](https://react-hook-form.com/) - Manejo de formulario
* [sweetAlert](https://sweetalert2.github.io/) - Manejo de Alertas

_Las herramientas ocupadas para el desarrollo backend de esta prueba son_

* [NODEjs](https://nodejs.org/en/) - La libreria usada
* [express](https://nodejs.org/en/) - Entorno de desarrollo
* [nodemon](https://www.npmjs.com/package/nodemon) - reinicio de servidor
* [Sequelize](https://www.npmjs.com/package/sequelize) - Multi dialect ORM
* [dotenv](https://www.npmjs.com/package/dotenv) - Variables de entorno
* [corns](https://www.npmjs.com/package/cors) - peticiones al servidor
* [MySQL](https://www.mysql.com/) - Base de datos

## Autor ✒️

* **Dynamic Solutions** - *Requisitos de la aplicación web* 

* **Wal-Monfortt** - *Jr Developer* - [WalMonfortt](https://wal-monfortt.netlify.app/)

---
⌨️ con ❤️ por [WallMonfortt](https://github.com/WallMonfortt) 😊
