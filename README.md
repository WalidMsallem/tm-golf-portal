## Quick start

1.  Clone this repo using `git@github.com:WalidMsallem/tm-golf-portal.git`

```
$  git clone git@github.com:WalidMsallem/tm-golf-portal.git
```

2.  Move to the appropriate directory: `cd tm-golf-portal`.

```
$ cd tm-golf-portal
```

3.  Install frontend dependencies and run the project.

```
$ yarn install
$ yarn start
```

_At this point the frontend will run under `http://localhost:3000`._

Now you're ready to rumble!

## Demo

Link of the demo on heroku :

[Demo here](https://trackman-glof.herokuapp.com/)

## General overview

This project provides an interface to manage Facilities with a shema of :

```
{
id : string ;
createdAt : string ;
name : string ;
type : "range" | "indoor" ;
address : string ;
}
```

so we can add, modify, delete, list and filter. And to ensure the R/W of the data, we provide a service layer that ensures this with the localstroage.
We can also switch with the following languages: English, French

## Fake data

Don't worry about filling the application with data.
We load the localstorage with data through the application services. The data is encrypted before storage.
This data charging action is applied only once, the first time the application loads on a browser, then the application loads its data directly from the local storage.

## Test

### Unit testing and snapshot testing

```
$  yarn test
```

### Cypress Test

Please make sure that the project is running on port `3000. `
Open the terminal and run the project:

```
$  yarn start
```

Then open another terminal and run this command

```
$  yarn cypress
```

## Main features

This frontend manages application state using **Redux**, makes it
immutable with **Immer\* and keeps access performant **reselect\*\*.

For managing asynchronous flows (e.g. logging in) we use **redux-saga**.

**material ui** as a design system,

**react-i18next** fror internationalization.

## Contributor

Developpeur : Walid M'sallem ( Full stack developpeur )
Contact : walidmsallem@gmail.com
