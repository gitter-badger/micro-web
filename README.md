# Micro Website Starter

[![Join the chat at https://gitter.im/smisy/micro-web](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/smisy/micro-web?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/smisy/micro-web.svg?branch=master)](https://travis-ci.org/smisy/micro-web)
[![Join the chat at https://gitter.im/smisy/micro-web](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/smisy/micro-web?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The software is based on Angular 2 version-alpha 37, Polymer 1.0

## Usage

1. Install global dependencies **if necessary**

        npm install -g jspm superstatic live-server

2. Install node packages:

        npm install
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
