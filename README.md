# Angular4LoginCRUDapp

Warstwa front-endowa została stworzona z wykorzystaniem narzędzia [Angular CLI](https://github.com/angular/angular-cli). Warstwa backendowa została stworzona od samego początku. Cała aplikacja została napisana z wykorzystaniem języka [TypeScript](https://www.typescriptlang.org).

Aplikacja została napisana z wykorzystaniem technologi [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): Baza danych
* [**E**xpress.js](http://expressjs.com): Serwer aplikacji
* [**A**ngular 4](https://angular.io): Framework frontendowy 
* [**N**ode.js](https://nodejs.org): Środowisko uruchomieniowe

Inna technologia wykorzystana w projekcie:
* [Angular CLI](https://cli.angular.io): Frontendowy interfejs linii poleceń wspomagający budowę aplikacji w frameworku Angular 4
* [Bootstrap](http://www.getbootstrap.com): Framework wspomagający budowę GUI aplikacji
* [Font Awesome](http://fontawesome.io): Ikony
* [JSON Web Token](https://jwt.io): Uwierzytelnianie użytkowników
* [Angular 2 JWT](https://github.com/auth0/angular2-jwt): Wsparcie technologii JWT dla Angulara 4 
* [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js): Szyfrowanie haseł

## Wymagania wstępne
1. Zainstaluj [Node.js](https://nodejs.org) oraz serwer bazy danych [MongoDB](https://www.mongodb.com)
2. Zainstaluj Angular CLI: `npm i -g @angular/cli`
3. W głównym folderze aplikacji pobierz wszystkie zależności: `npm i`

## Uruchamianie
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) jednym poleceniem uruchamia serwer bazy danych MongoDB, buduję zależności wymagane przez Angulara, kompiluję pliki napisane wTypeScript oraz uruchamia serwer Express.

Następnie zostanie automatycznie uruchmione okno w domyślne używanej przeglądarce pod adresem [localhost:4200](http://localhost:4200). Wszystkie pliki Angulara oraz serwera Express są stale monitorowane. W przypadku dokonania jakiś zmian w kodzie, nastąpi automatycznie uruchomienie skryptu który zbuduje oraz zrestartuje serwer Expressa oraz przeładuję aplikację otworzoną w oknie przeglądarki.

### Production mode
`npm run prod`: Kompiluje, buduje z wykorzystaniem technologi AOT [Ahead-of-Time Compilation](https://angular.io/guide/aot-compiler) oraz uruchamia aplikację w trybie produkcyjm pod adresem [localhost:8000](http://localhost:8000) 

## Wgrywanie aplikacji na serwer (Heroku)
1. Przejdź na stronę Heroku i stwórz nową aplikację
2. Zainstaluj aplikację Heroku na swoim komputerze [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
3. `heroku login`
4. `cd my-project/`
5. `git init`
6. `heroku git:remote -a your-app-name`
7. Pobierz nowo utworzone repozytorium i skopiuj wszystkie pliki do folderu `my-project` 
8. Edytuj plik `.gitignore` i usuń z niego linię z `/dist`
9. Edytuj plik `.env` i zamień ściężkę z adresem URI serwera MongoDB na adres umożliwiający zdalne połączenie się z serwerem MongoDB server. Serwer z bazą danych MongoDB można utworzyć za pomocą Heroku lub mLab.
10. `npm i`
11. `ng build -prod` lub `ng build -aot -prod`
12. `tsc -p server`
13. `git add .`
14. `git commit -m "Going to Heroku"`
15. `git push heroku master`
16. `heroku open`
17. Zostanie otworzone okno domyślnej przeglądarki użytkownika z uruchomioną aplikacją w trybie online

## Rozbudowa aplikacji

Użyj w terminalu komendę `ng generate component component-name` która posłuży do wygenerowania nowego komponentu w aplikacji `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Uruchamianie testów jednostkowych

Użyj w terminalu komendę `ng test` aby wykonać testy napisane przy użyciu frameworka [Karma](https://karma-runner.github.io).

## Uruchamianie testów end-to-end

Użyj w terminalu komendę `ng e2e` aby wykonać testy napisane przy użyciu frameworka [Protractor](http://www.protractortest.org/).

## Dodatkowa pomoc

Aby uzyskać więcej pomocy na temat Angular CLI użyj komendy `ng help` albo odwiedź stronę [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
