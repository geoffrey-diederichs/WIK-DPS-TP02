# Headers API

Ce projet est la suite du [TP1](https://github.com/geoffrey-diederichs/WIK-DPS-TP01) : des images docker eécutant une API simple développée en TypeScript avec le module natif `http` de `Node.js`.

Cette API expose un endpoint `/ping` qui retourne les headers de la requête HTTP au format JSON lorsqu'une requête GET est effectuée. Toute autre requête retourne une réponse vide avec un code HTTP 404.

## Prérequis

- `Docker`

## Usage

Image Docker avec un seul stage :

```console
$ git clone https://github.com/geoffrey-diederichs/WIK-DPS-TP01.git

$ cd WIK-DPS-TP02/

$ docker build -t single -f Dockerfile .

$ docker run --rm --init -p 3000:3000 single
```

You can now use the API :

```console
$ curl localhost:3000/ping
{"message":"Headers received","headers":{"host":"localhost:3000","user-agent":"curl/8.6.0","accept":"*/*"}}
```
