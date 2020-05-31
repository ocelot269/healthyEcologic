<img src="../master/client/src/assets/imagenes/healthyEcologic.png">

# HealthyEcologic 

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

#### 1. Motivación

Un dia comprando unas verduras me parecio excesivo el precio de los productos agricolas cuando estos mismos ganaderos podrian vender a menos de la mitad del precio habitual pudiedon obtener mas beneficios mientras el consumidor ahorra un dineral.

Healthy ecologic aparece en un momento en el cual los productores locales perciben un precio muy diminuto por sus productos.

#### 2. Objetivos

El objetivo de este proyecto es crear una aplicación de escritorio de  compra-venta de alimentos naturales y en un futuro para plataformas móviles.

Este proyecto tendrá 3 tipos de usuarios, proveedor, cliente y admin lo que permitirá a cada rol hacer diferentes tipos de acciones.

Los proveedores podrán subir sus productos, sus precios y sus propias descripciones si lo desean, también tendrán una pestaña propia para ver sus productos en stock.

Los clientes podrán comprar los productos que deseen de la web, ya sea de un solo productor o de varios. Podrán valorar si el productor o su producto es de calidad y leer los comentarios de los demas.

La aplicación mostrará diferentes pestañas dependiendo si eres un tipo de usuario u otro y para ello crearemos historias de usuario para agilizar el proceso de desarrollo.

#### 3. Demostración

+ Justificación de los objetivos alcanzados y no alcanzados, si se da el
caso (mejor que no se de).

	1.  El proveedor desea registrarse para poder vender sus productos.

	2. El proveedor quiere añadir sus nuevos productos para poder venderlos.

	3. El cliente se interesa por los diferentes productos de la página y los añade a la cesta.

	4. El cliente está interesado en ver los diferentes productos de su carrito o cesta antes de finalizar la compra.

	5. El cliente quiere finalizar la compra de sus productos.

	6. El proveedor quiere consultar sus productos en venta y unidades.

	7. El proveedor quiere borrar diferentes productos y unidades.

	8. El proveedor quiere actualizar sus productos .

	9. El proveedor quiere consultar su información personal.

	10. El cliente quiere consultar su última compra.

	11. El cliente quiere añadir sus comentarios sobre los productos

#### 4. Descripción técnica:
+ Arquitectura de la aplicación y tecnologías utilizadas.

	HealthyEcologic es una web de compra-venta de alimentos para versión escritorio que se desarrollará con el patrón de modelo-vista-controlador(MVC) y utilizará una metodología de desarrollo por Prototipos.
	
   **Vista** :
	 **Angular**: Todo el front o vista estará diseñado con Angular framework de javascript la versión que utilizaré es 8.0.3.
	 **PrimeNG**: Nos provee de componentes para el front o vista del proyecto y la versión que utilizaré es 8.0.0.
	 
   **Controlador** :
	**Node** : Será nuestro backend y crearemos la API REST del proyecto y la versión de node es 12.4.0.

   **Modelo**: 
	**Mysql**: Será la base de datos del proyecto y contendrá todos los datos y la versión que utilizaré es 10.4.11.
	
   **Control de versiones**:
	**Git**: Lo usaremos como control de versión y la versión que utilizaremos es 2.19.1.
	
+ Dependencias del proyecto

   **Cors**: Te permite hacer middleware para conectar backend y el front facilitando los problemas que te puede dar los CORS y la versión que utilizaré 2.8.6.
   **Express**: Te ofrece  un conjunto sólido de características para las aplicaciones web y móviles  y la versión que usaré es  4.17.6. 
   **Mysql**: Este es un controlador node.js para mysql y la versión que utilizaré es 2.15.10.
   **Promise-mysql**: Es la misma librería para conectar sql pero soporta promise gracias a bluebird y la versión que utilizaré es 4.1.3.
   **Bcryptjs**: Sirve para securizar las contraseñas y la versión que utilizaré es 2.4.3.
   **Morgan**:  Te permite ver el registro de peticiones HTTP y la versión que utilizaré es 1.9.0.
   **Typescript**:  Es una librería que permite dar tipos a las variables javascript y utilizaré la versión 3.8.3.
   **Nodemon**: Recarga el script automáticamente cuando hacemos cualquier en él 2.0.3.
	
	
	
	
+ Diagrama de componentes. [doc]
+ Opcional: Diagrama E/R de la base de datos (o el que proceda).





