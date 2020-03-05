# YourScale

How to run applications step by step:

1. install node.js to https://nodejs.org/en/
2. Run PoweShell as administrator: set-executionpolicy remotesigned
3. Open power shell and type: npm install -g @ angular / cli
4. @ angular-devkit / build-angular
5. ng build
6. ng test
7. ng serve
8. http: // localhost: 4200 /

#adding important paths

9. npm install --save bootswatch
10.add in file main.scss(style.scss) styles bootswatch:

@import "~bootswatch/dist/Slate/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/Slate/bootswatch";

11. add src in all files where is been used css like that:
#app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    './app.component.css']
})
#in projeckt I used bootstrap, You must link the bootstrap in maine.html:
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/4987042dec.js" crossorigin="anonymous"></script> -->
    


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Programming server

Run `ng serve` for the development server. Go to `http: // localhost: 4200 /`. The application will be automatically reloaded if you change any source file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use the ng directive that generates | pipe service class guard | interface enum moduł`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist /` directory. Use the `--prod` flag for the production version.

## Running unit tests

Run `ng test` to perform unit tests via [Karma](https://karma-runner.github.io).

## Performing comprehensive tests

Run `ng e2e` to perform comprehensive tests via [Protractor](http://www.protractortest.org/).

## Further help

For more help on Angular CLI, use `ng help` or check [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

test
