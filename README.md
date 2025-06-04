# CapsulaAngular


### Inicializar app
npm  install
ng serve -o

### Crear nuevo modulo
 ng generate module home --route home --module app
 ng generate module modules/home2 --route home2 --module app


 ng generate module home --route home --module app-routing


### Crear componente sin archivo de test
ng generate component home/header --skip-tests
ng generate component home/body --skip-tests  
ng generate component home/footer --skip-tests

### Crear service
ng g s services/mensaje --skip-

### Crear directiva
ng generate directive directives/resaltar --skip-tests

### Instalar SweetAlert2
npm install sweetalert2

### Crear SharedModule
ng generate module modules/components/shared --flat --module app
