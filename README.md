# Headers API

Ce projet est la suite du [TP1](https://github.com/geoffrey-diederichs/WIK-DPS-TP01) : des images docker exécutant une API simple développée en TypeScript avec le module natif `http` de `Node.js`.

Cette API expose un endpoint `/ping` qui retourne les headers de la requête HTTP au format JSON lorsqu'une requête GET est effectuée. Toute autre requête retourne une réponse vide avec un code HTTP 404.

## Prérequis

- `Docker`

## Usage

Avant tout, clonez le projet :

```console
$ git clone https://github.com/geoffrey-diederichs/WIK-DPS-TP02.git

$ cd WIK-DPS-TP02/
```

### Un seul stage :

```console
$ docker build -t single -f Dockerfile .

$ docker run --rm --init -p 3000:3000 single
```

Vous pouvez maintenant utiliser l'API :

```console
$ curl localhost:3000/ping
{"message":"Headers received","headers":{"host":"localhost:3000","user-agent":"curl/8.6.0","accept":"*/*"}}
```

### Plusieurs stages :

```console
$ docker build -t single -f Dockerfile.2 .

$ docker run --rm --init -p 3000:3000 single
```

Vous pouvez maintenant utiliser l'API :

```console
$ curl localhost:3000/ping
{"message":"Headers received","headers":{"host":"localhost:3000","user-agent":"curl/8.6.0","accept":"*/*"}}
```

## API routes

- `GET /ping` : renvoie un `json` avec les headers de la requête envoyé.

- Autres routes : `404 not found`.