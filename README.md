<img src="../master/client/src/assets/imagenes/healthyEcologic.png">

# HealthyEcologic 

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

#### 1. Motivación

Un día comprando unas verduras me pareció excesivo el precio de los productos agrícolas. Me puse a pensar sobre este hecho y me di cuenta que tendría que haber algún modo de que los ganaderos pudiesen obtener más beneficios sin tener que vender sus productos a un precio muy elevado y que el consumidor no tuviese que pagar tanto dinero, pudiendo comprar productos de calidad sin la necesidad de que por ello debiese pagar cantidades desorbitadas. 

Healthy ecologic aparece en un momento en el que los productores locales perciben un margen de beneficio muy pequeño por la venta de sus productos y los ciudadanos pagan cantidades muy elevadas por éstos. 

#### 2. Objetivos

El objetivo de este proyecto es crear una aplicación de escritorio basándose en la compra-venta de alimentos naturales y en un futuro ser una plataformas para móviles.

Este proyecto tendrá 3 tipos de usuarios: proveedor, cliente y admin. Esta variedad permitirá a cada rol hacer diferentes tipos de acciones.

-Los proveedores podrán subir sus productos, sus precios y sus propias descripciones si lo desean. Incluso tendrán una pestaña propia para ver sus productos en stock.

-Los clientes podrán comprar los productos que deseen de la web, ya sea de un solo productor o de varios. Además, podrán valorar si el proveedor o su producto es de calidad y leer los comentarios del resto de usuarios sobre dicho producto.

La aplicación mostrará diferentes pestañas dependiendo si eres un tipo de usuario u otro y para ello crearemos historias de usuario. Este hecho nos ayuda a agilizar el proceso de desarrollo.

#### 3. Demostración

+ Justificación de los objetivos alcanzados:

	1. El proveedor desea registrarse para poder vender sus productos.

	2. El proveedor quiere añadir sus nuevos productos para poder venderlos.
	
	3. El proveedor quiere consultar sus productos en venta.

	4. El proveedor quiere borrar diferentes productos.

	5. El proveedor quiere actualizar sus productos.

	6. El proveedor quiere consultar su información personal.

	7. El cliente se interesa por los diferentes productos de la página y los añade a la cesta.

	8. El cliente está interesado en ver los diferentes productos de su carrito o cesta antes de finalizar la compra.

	9. El cliente quiere finalizar la compra de sus productos.

	10. El cliente quiere consultar sus últimas compras.

	11. El cliente quiere añadir sus comentarios sobre los productos.

#### 4. Testing

La aplicación contendrá test de tipo E2E creados con selenium IDE


<img src="https://swat-it.co/wp-content/uploads/2015/tools_icons/Selenium-logo.gif">



#### 5. Descripción técnica:

+ Arquitectura de la aplicación y tecnologías utilizadas:

	HealthyEcologic es una web de compra-venta de alimentos para versión escritorio que se desarrollará con el patrón de modelo-vista-controlador(MVC) y utilizará una metodología de desarrollo por Prototipos.
	
   **-Vista** :
   
	 **Angular**: Todo el front o vista estará diseñado con Angular framework de javascript la versión que utilizaré es 8.0.3.
	
	**PrimeNG**: Nos provee de componentes para el front o vista del proyecto y la versión que utilizaré es 8.0.0.
	 
   **-Controlador** :
	
	**Node** : Será nuestro backend y crearemos la API REST del proyecto y la versión de node es 12.4.0.

   **-Modelo**: 
	
	**Mysql**: Será la base de datos del proyecto y contendrá todos los datos y la versión que utilizará es 10.4.11.
	
   **-Control de versiones**:
	
	**Git**: Lo usaremos como control de versión y la versión que utilizaremos es 2.19.1.
	
+ Dependencias del proyecto:

   **Cors**: Te permite hacer middleware para conectar backend y el front, facilitando los problemas que te pueden dar los CORS y la versión que utilizaremos es 2.8.6.
   
   **Express**: Te ofrece un conjunto sólido de características para las aplicaciones web y móviles y la versión que usaremos es  4.17.6. 
   
   **Mysql**: Este es un controlador node.js para mysql y la versión que utilizaremos es 2.15.10.
   
   **Promise-mysql**: Es la misma librería para conectar sql pero soporta promise gracias a bluebird y la versión que utilizaremos es 4.1.3.
   
   **Bcryptjs**: Sirve para securizar las contraseñas y la versión que utilizaremos es 2.4.3.
   
   **Morgan**:  Te permite ver el registro de peticiones HTTP y la versión que utilizaremos es 1.9.0.
   
   **Typescript**:  Es una librería que permite dar tipos a las variables javascript y utilizaremos la versión 3.8.3.
   
   **Nodemon**: Recarga el script automáticamente cuando hacemos cualquier en él 2.0.3.

+ Arquitectura de la aplicación:

<img src="../master/client/src/assets/documentacion/diagrama.png">	

+ Diagrama de componentes:

<img src="../master/client/src/assets/documentacion/diagrama_componentes.png">

+ Opcional: Diagrama E/R de la base de datos (o el que proceda).

<img src="../master/client/src/assets/documentacion/db.png">




#### 6.Metodología de desarrollo utilizada

**La metodología del desarrollo del proyecto ha sido crear los siguientes aspectos:**

-El contenido en la base de datos

-El controlador que haga las peticiones a la base datos

-El servicio que haga las llamadas al controlador

-El componente que utilizará el servicio

**En git el flujo de trabajo es el siguiente:**

- El contenido relacionado con el backend o base de datos se realiza en la rama conexión-bbdd

- El contenido relacionado con el front, se hace en la rama front

- A continuación se mezclan los cambios en develop y posteriormente se agregan los cambios de develop a master


#### 7.Diagrama de Gantt previo y final del desarrollo de la app

**Previo**

<img src="../master/client/src/assets/documentacion/diagrama_de_gant.png">

**Final**

<img src="../master/client/src/assets/documentacion/clockify.png">

**Justificación del exceso de tiempo**

Tuve un exceso de horas de 19 por culpa de diferentes errores y en buscar de información para añadir funcionalidades a la aplicación.

#### 8.Clockify

<img src="../master/client/src/assets/documentacion/datos_clockify.png">

**Análisis y justificación del tiempo invertido.**

Tuve un exceso de horas de 19 en las cuales las dedique a: 

- Implementación de la funcionalidad del "search"

- Se añadieron test E2E a la aplicación

- Se añadio el despliegue de la aplicación

#### 9.Presupuesto

<img src="../master/client/src/assets/documentacion/presupuesto.png">


#### 10.Conclusiones

**Posibles mejoras.**

- Añadir sesiones

- Crear el componentes de detalles de factura 

- Mejorar la base de datos con nuevas tablas

- Añadir Ids a los productos 

**Principales dificultades encontradas.**

