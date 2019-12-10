//comandos para ejecutar nuestras pruebas:
/*
    1.- protractor conf.js    // ejecutamos nuestro archivo de configuracion que ya tiene en el atributo specs las pruebas que va a ejecutar
    2.- protractor conf.js --suite=smoke,longRunning  // va a ejecutar 2 de las 3 suites que tenemos configuradas en nuestro config esto,
            nos permite organizar nuestras pruebas por funcionalida y no solo dejar que se ejecuten todas porque si o generar nuestro workflow
            asi corremos primeros las pruebas rapidas por ejemplo o que toman menos tiempo y despues las pruebas que tardan mas tiempo.
*/

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./**/*.spec.js'],

    suites:{
        smoke: './smoke/*.spec.js',
        longRunning: './ratings/a.bunch.of.long.test.spec.js',
        full: './**/*.spec.js'
    },
    // chromeDriver: '/usr/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_78.0.3904.105',
    // directConnect:true,
    capabilities: {
        'browserName': 'firefox'
      },     
    onPrepare: function(){
        // browser.driver.manage().window().setPositio(0,0);
        // browser.driver.manage().window().setSize(1280,720);
        browser.driver.manage().window().maximize();
    }
}


/*
Test Flow

TDD >> Smoke Test >> PROTRACTOR >> QA

Software Development Life Cycle

Feature Branch >> Write Code >> Write PROTRACTOR >> Merge Develop in >> Build / Unit Tests >> RUN PROTRACTOR >> Merge into Develop >> Feature Branch again

Para poder correr mis pruebas de PROTRACTOR: 
    1.- Necesito tener inslado selenium por lo menos a nivel del proyecto, se agrega en las dependencias del proyecto package.json
    2.- Necesito levantar el servidor de Selenium donde se crearan las sessiones que van a ejecutar las pruebas. 
        con el comando: webdriver-manager start
    3.- Levantar el sitio que vamos a probar para que encuentre el url que pusimos en las pruebas. En este proyecto estoy se usa grunt 
        un javaScript Task runner para automatizar el build de los componentes de nuestra aplicacion para debugear. una vez instalado en 
        nuestro equipo solo ejecutamos el comando grunt en la ruta donde tenemos nuestro archivo gruntfile.js 
    4.-Ya que tenemos nuestro server arriba en otra terminal vamos a ejecutar las pruebas de protractor con alguno de los siguientes 
        comandos: protractor conf.js     o      protractor conf.js --suite=smoke,longRunning     en caso de que tengamos nuestros test 
        divididos por suites.
    
*/