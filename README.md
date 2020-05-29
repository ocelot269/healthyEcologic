# HealthyEcologic

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

	Este patrón, también conocido como patrón MVC, divide una aplicación interactiva en 3 partes:

	**modelo**: Es la representación de la información con la cual el sistema opera, por lo tanto gestiona todos los accesos a dicha información, tanto consultas como actualizaciones, implementando también los privilegios de acceso que se hayan descrito en las especificaciones de la aplicación . Envía a la 'vista' aquella parte de la información que en cada momento se le solicita para que sea mostrada (típicamente a un usuario). Las peticiones de acceso o manipulación de información llegan al 'modelo' a través del 'controlador'.

	**vista** : Presenta el 'modelo' (información y lógica de negocio) en un formato adecuado para interactuar (usualmente la interfaz de usuario)

	**controlador** :responde a eventos (usualmente acciones del usuario) e invoca peticiones al 'modelo' cuando se hace alguna solicitud sobre la información (por ejemplo, editar un documento o un registro en una base de datos). También puede enviar comandos a su 'vista' asociada si se solicita un cambio en la forma en que se presenta el 'modelo'

En La Vista Utilizo Angular, Framework De Javascript Junto A Primeng Que Te Provee De Componentes Para Angular.

En El Controlador Utilizaré Node.Js Que Es Javascript Orientado A Eventos AsíNcronos, Node.Js Está DiseñAdo Para Crear Aplicaciones Network Escalables , Y Es Not Blocking Permite Que Las Operaciones De Entrada  Siempre Tengan Salida,Funciona Perfecta Con La AsincroníA Ya Que Está Hecha Con Javascript Como Nuestro Front Y Compatibilidad Con La Base De Datos Que Utilizaremos En El Proyecto.

En El Modelo Utilizaré Mysql Una Base De Datos Relacional La Cual Me Permitirá Hacer Las Tablas Y Sus Relaciones Al Ser Una Sql .

<img src="../master/healthyecologic/client/src/assets/imagenes/healthyEcologic.png"> 

+ Diagrama de componentes. [doc]
+ Opcional: Diagrama E/R de la base de datos (o el que proceda).





