# Pokemon Trainer App
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.
The project was a part of a front-end development course and was intented to teach fundamentals of Angular. It includes working with different components,pages, api and tailwind css. 

## Install
To start this application you need to clone it from github as following:

```
git clone https://github.com/suay-selay/Pokemon-app
```
```
cd Pokémon-app
```
and then:
```
npm install -g @angular/cli
```


## Usage
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

In order to set up the project and access the api correct you will need to create a new map and name it "environments" in the "src/app". It should contain then two files one called "environment.ts" and the other called "environment.prod.ts". 

Inside environment.ts file you need to have following code:
```
export const environment = {
production: false,
apiUsers:<your url>,
apiPokemons:<your url>,
API_KEY:<your key> 
};
```
And inside environment.prod.ts file you should have this code:
```
export const environment = {
production: true,
apiUsers:<your url>,
apiPokemons:<your url>,
API_KEY:<your key> 
};
```

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Contributors 
Sona Rahimova (@suay-selay) and 
Huwaida Al Hamdawee (@Huwaida-al) 

## Contributing 
No contributions allowed.
