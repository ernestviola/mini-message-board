# Mini Message Board

A message board application that allows users to post messages. There is no
database attached to this project so messages do not persist on refresh.

The project is a lesson in the MVC pattern and uses express to register
middleware. Docker was used in order to publish the project to the Google Cloud
Platform.

## Features

- A main page for to show all messages in reverse chronological order
- A new message page and form for users to input their new messages
- Server side rendering using ejs
- Containerized deployment using Docker

## Routes

- home /
- new message /new

## Tech

- Node.js
- Express.js
- Ejs
- Docker
