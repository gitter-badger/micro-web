[![Build Status](https://travis-ci.org/smisy/micro-web.svg?branch=master)](https://travis-ci.org/smisy/micro-web)
# Micro Website Starter

The software is based on Angular.alpha37, Polymer 1.0

## Usage

1. Install global dependencies **if necessary**

        npm install -g jspm superstatic live-server
        npm install

2. Install node packages:

        jspm install
        bower install

3. Start the server

        ss

   **Optional**: If you want a "live reload" server then `cd` into the `src` directory and run `live-server` from the command-line.

4. Open a browser and navigate to the site/port shown by Superstatic.
If you use the live reload option then a browser will automatically be displayed and any changes to files will cause it to reload.


**Note:**

Bundling isn't used in this project since the overall goal is to provide a starter project for people interested in
playing around with an early version of Angular 2.
