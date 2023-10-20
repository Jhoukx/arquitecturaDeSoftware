# Arquitecturas de software

Como tal no hay una definición en concreto sobre la arquitectura de software ya que surgen discusiones a favor y en contra. Pero esta se entiende como el diseño de más alto nivel de la estructura de un sistema y este sistema esta compuesto por un conjunto de patrones y abstracciones que proporcionan un marco claro para la implementación del sistema.

###  ¿Qué es un patrón de diseño?

Un patrón de diseño es una estructura recurrente que resuelve un problema general de diseño en un contexto en particular.

**Características**

- Son patrones a mediana escala
- Son independientes del lenguaje de programación 
- No afecta la estructura general del software
- Influye en un módulo o subsistema

*Nota:* El libro *Desing patterns* fue el que popularizo los patrones de diseño.

### Clasificación de los patrones de diseño 

<img src="https://edteam-media.s3.amazonaws.com/infographics/original/48356f9b-7c43-4437-8594-48eb92e858f0.png" style="zoom:100%">

### ¿Cómo diferenciar un patrón arquitectónico?

Se suele reconocer por tener un impacto global en la aplicación, e incluso puede regir la forma de trabajar o comunicarse con otros componentes, por este motivo es que cualquier cambio sobre ellos tendrá un impacto sobre los componentes relacionados. 

**Arquitectura en capas**

Un ejemplo típico  es la arquitectura en 3 capas, el cual consiste en separar la aplicación en 3 capas diferentes, las cuales se dividen en presentación, negocio y capa de datos.

<img src="https://rjcodeadvance.com/wp-content/uploads/2019/10/image-4.png" style="zoom:100%">

En este ejemplo la capa de presentación tiene la tarea de generar las vistas, la capa de negocio tiene la responsabilidad de implementar la lógica de negocio, cómo implementar las operaciones, realizar cálculos, validaciones,etc.Por último, la capa de datos tiene la responsabilidad de interactuar con la base de datos, como guardar,actualizar o recuperar información de la base de datos. 

**Aspectos importantes**

- Sí alguna de las capas falla fallará toda la aplicación

- Sí se decide cambiar el patrón arquitectónico una vez ha sido construida, tendremos un impacto mayor, pues tendremos que modificar todas las vistas para ya no usar la capa de negocios. 

### ¿Qué son los estilos arquitectónicos?

Un estilo arquitectónico establece un marco de referencia a partir del cual es posible construir aplicaciones que comparten un conjunto de atributos y cararacterísticas mediante el cual es posible clasificarlos e identificarlos. 

*Nota: Los estilos arquitectónicos son diferentes a los patrones arquitectónicos*



<img src="https://user-images.githubusercontent.com/31961588/273671383-ded4fc19-ef72-4c8f-bf8b-edff99344e78.png" style="zoom:100%">

Los estilos arquitectónicos son los de más alto nivel, y sirve como  base para implementar muchos de los patrones arquitectónicos que  conocemos, de la misma forma, un patrón arquitectónico puede ser  implementado utilizando uno o más patrones de diseño.

###  Conceptos importantes

- ##### Atributos de calidad de software

  Un atributo de calidad es una **propiedad medible** de un sistema, que indica qué tan bien el sistema **satisface** las necesidades de las partes interesadas. Algunos atributos comunes son :

  1. Desplegabilidad
  2. Escalabilidad
  3. Modificabilidad
  4. Rendimiento 
  5. Seguridad, etc.

- ##### Acoplamiento 

  El acoplamiento es nivel de dependencia que existe entre dos unidades de software, es decir, indica hasta qué grado una unidad de software puede funcionar sin recurrir a la otra. Cuando el nivel de dependencia es alto se dice que tiene un alto acoplamiento.
  
- ##### Cohesión
  
  La cohesión mide que tan relacionados están las unidades de software  entre sí, buscando que todas las unidades de software busquen cumplir un único objetivo o funcionalidad.
  
  En la práctica, se busca que todos los compontes de software que  construyamos sean altamente cohesivos, es decir, que el módulo esté  diseñado para resolver una única problemática.
  
- **SOLID**

  Es en realidad de unión de 5 principios que para muchos son los más importantes de todos, este acrónimo fue introducido por primera vez a principios de la década del 2000 por Robert C. Martin (mejor conocido por muchos como “el tío Bob”). El acrónimo SOLID hace referencia a:

<img src="https://media.licdn.com/dms/image/D4D12AQF4-ItMunO2Ww/article-cover_image-shrink_720_1280/0/1668786184657?e=2147483647&v=beta&t=Dyb5L8_Ong1E4Nn00ak5-XS8tM7-kF5mrtj4ZdXF_-w" style="zoom:100%">



------

#### 🎗Autor

👨‍💻 John Edward González Esparragoza

 