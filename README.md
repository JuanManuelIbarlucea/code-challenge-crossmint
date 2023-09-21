# code-challenge-crossmint

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/JuanManuelIbarlucea/code-challenge-crossmint.git
$ cd code-challenge-crossmint
```

To install, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```

## Usage

### Building

```sh
$ npm run build
```

This task will compile TypeScript, creates the resulting JS in the `build/` folder

### Make a polyanet cross

```sh
$ npm run cross
```
This will create the polyanet cross for the phase 1 challenge using the crossmint.challenge API.
Created the function MakeAPolyanetCross() that takes two parameters `padding` and `colNumber`.
It creates Polyanets running along the Identity and Exchange matrix adding around it the `padding` amount of spaces. 


### Make the Crossmint logo

```sh
$ npm run logo
```
This will create the Crossmint logo for the phase 2 challenge using the crossmint.challenge API.
Created the function MakeCrossmintLogo() that takes as base the current goal map and iterates through it calling the api
whenever an entity is found.

### Clear the map

```sh
$ npm run clear
```
This will clear the current challenge's map. Found out there's an API call that returns the current map and used it to make
development faster.
