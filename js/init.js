< ! -  El  núcleo  Firebase  JS  SDK  es  siempre  necesaria  y  debe  ser  aparece  primero  - >
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js" > < / script >

< ! -  TODO : Add  SDK  para  firebase  productos  que  usted  desee  para  su uso
     https: //firebase.google.com/docs/web/setup#available-libraries ->
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js" > < / script >

< guión >
  // La configuración de Firebase de su aplicación web
  // Para Firebase JS SDK v7.20.0 y versiones posteriores, MeasureId es opcional
  var  firebaseConfig  =  {
    apiKey : "AIzaSyD9gq87WAJA0xN5rLxAOMgfI1ymSaGl0ZI" ,
    authDomain : "awic41m-fc70a.firebaseapp.com" ,
    projectId : "awic41m-fc70a" ,
    storageBucket : "awic41m-fc70a.appspot.com" ,
    messagingSenderId : "237383882126" ,
    appId : "1: 237383882126: web: 953d0b9598fe7eba24c0df" ,
    measurementId : "G-NWLWP6QBXC"
  } ;
  // Inicializar Firebase
  base de fuego . initializeApp ( firebaseConfig ) ;
  base de fuego . analítica ( ) ;
< / script >
