<img src="../src/common/img/default-avatar.png" id="start" align="right" alt="Project logo" width="50" >

# Server 'User badge creator'.

> Database with authorization, CRUD users and PDF file creation with text and picture. 


![NestJS](https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TypeOrm](https://img.shields.io/badge/TypeOrm-3178C6?style=for-the-badge)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)
![PDFKit](https://img.shields.io/badge/PDFKit-F4F4F4?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Multer](https://img.shields.io/badge/Multer-e2e2e2?style=for-the-badge)
![Passport](https://img.shields.io/badge/Passport-34E27A.svg?style=for-the-badge&logo=Passport&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)

---

[Description](#description) •
[Project setup](#project-setup) •
[Features](#features) •
[How To Use](#how-to-use) •
[Project Status](#project-status) •
[Room for Improvement](#room-for-improvement) •
[License](#license) •
[Contact](#contact)

<img src="./assets/badge.png" width="500" />
<img src="./assets/swagger.png" width="500" />

## Description

Database with authorization and with the ability to add, delete and edit employee data. It is possible to create a badge with a photo and data of an employee in the database and save it locally in PDF format.

## Project setup

- Clone this repo to your desktop and run ```yarn``` or ```npm install``` to install all the dependencies.
- connect db (inject variables into .env file)
- Once the dependencies are installed, you can run ```yarn dev``` or ```npm dev``` to start the application.
- Enjoy.

> ### ```dockerized``` branche: 
> - Clone this repo to your desktop.
> - Install docker and docker-compose.
> - Run ```docker-compose up``` for run project.
> - Run ```docker-compose down``` for stop project.
> - Enjoy.

## Features
- CRUD with authorization.
- Load images to server.
- Assembly pdf file.
- Storing data in the database in binary form and local loading as a pdf file

## How To Use

Run [Live Demo](https://user-badge-creatorserver.uladzimirstanke.repl.co/swagger)

1. Create user
2. Login with created user
3. Add user avatar
4. Сreate user badge(``POST`` user email in ``users/badge``)
5. Load user badge from server using user id (``GET`` user id in ``users/badge/:id``)

## Project Status

Project is: *in progress*

## Room for Improvement

To do:
- [ ] Add refresh token
- [ ] Add admin and user rights

Improvement:
- [ ] Add Next client

## License

This project is open source and available under the [MIT](../LICENSE).

## Contact
Created by [@RimidalU](https://www.linkedin.com/in/uladzimir-stankevich/) - feel free to contact me!

<p align="right"><a href="#start"><img width="45rem" src="./assets/pageUp.svg"></a></p>

<!-- MARKDOWN LINKS & IMAGES -->

