<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal  
      .titulo-principal__numero.bg01
        span.text-white 2
      h1 Monitoreo de gestión de riesgo en sistemas de tratamiento y distribución de agua potable

    .bg_fondo3
      .row.justify-content-center
        .col-md-10.mb-4.mb-md-0
          .contenedor--texto-right-green4(data-aos="fade-right")
            p.mb-5.mt-4 El proceso de monitoreo de gestión del riesgo en sistemas de potabilización de agua debe llevarse a cabo como medida preventiva en caso de presentarse una emergencia en el sistema, es importante, entonces, conocer los términos relacionados con la gestión de riesgos, así como los tipos de desastres que afectan las infraestructuras, como se muestra a continuación:
      
    .tarjeta(:style="{'background-image': `url(${require('@/assets/curso/tema2/img49.svg')})`}").p-1.mb-4
      SlyderE(indicadores="derecha")  
        .row.justify-content-center(data-aos="fade-down")
          .col-12.col-md-2
            ImagenInfografica.color-secundario.mb-4
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img02.png', alt='Texto que describa la imagen')
              .tarjeta.color-primario.p-3(x="50%" y="50%")
                .h5.mb-2 Amenaza.
                p Probabilidad de ocurrencia de un fenómeno potencialmente peligroso con origen natural o humano.
          .col-12.col-md-2
            ImagenInfografica.color-secundario.mb-4
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img03.png', alt='Texto que describa la imagen')
              .tarjeta.color-primario.p-3(x="50%" y="50%")
                .h5.mb-2 Vulnerabilidad.
                p Predisposición física, económica, política o social a sufrir daños en caso de presentarse una amenaza.
          .col-12.col-md-2
            ImagenInfografica.color-secundario.mb-4
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img04.png', alt='Texto que describa la imagen')
              .tarjeta.color-primario.p-3(x="50%" y="50%")
                .h5.mb-2 Riesgo.
                p Fenómeno que modifica de manera intensa la vida normal de una comunidad, región o país, causado por un evento natural.
          .col-12.col-md-2
            ImagenInfografica.color-secundario.mb-4
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img05.png', alt='Texto que describa la imagen')
              .tarjeta.color-primario.p-3(x="50%" y="45%")
                .h5.mb-2 Desastre natural. 
                p Fenómeno que modifica de manera intensa la vida normal de una comunidad, región o país, causado por un evento natural.
          .col-12.col-md-2
            ImagenInfografica.color-secundario.mb-4
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/img06.png', alt='Texto que describa la imagen')
              .tarjeta.color-primario.p-3(x="50%" y="45%")
                .h5.mb-2 Gestión de riesgo. 
                p Manejo de amenazas, desastres y minimización de la vulnerabilidad, el cual comprende desde la actividad planificadora hasta la reconstrucción, con el fin de superar la vulnerabilidad para incrementar la capacidad organizativa, social e institucional para la mitigación.
       
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0(data-aos="fade") 
            h4.mb-4 Impactos
            p Se debe identificar la vulnerabilidad de un sistema de tratamiento y distribución de agua potable para facilitar alternativas de intervención que sean técnicamente viables y económicamente factibles; de esta manera, es claro que cuando se presenta una situación de desastre sobre un sistema de agua para consumo humano, los daños no afectan solamente a dicho sistema, sino que, además, impactan de manera indirecta consecuencias a la salud pública y a la economía de las regiones afectadas (Manzur, 2002). 
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/img07.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0(data-aos="fade") 
            h4.mb-4 Tipos de daños presentados 
            p De acuerdo con Arteaga y Ordóñez (2019), cuando se presentan desastres que afectan la infraestructura de los sistemas de agua potable, los daños más comúnmente presentados son los directos y los indirectos.
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/img08.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0(data-aos="fade") 
            h4.mt-5.ms-2.mb-4 Directos
            ul.lista-ul.lh-sm
              li 
                i.lista-ul__vineta
                | Pérdida o contaminación de fuentes.
              li 
                i.lista-ul__vineta
                | Rupturas en tubos o accesorios, uniones, accesorios, aplastamiento o flexión de tuberías, etc.
              li 
                i.lista-ul__vineta
                | Daños estructurales, causados por a asentamientos diferenciales, licuefacción o corrimiento de fallas, etc.
              li 
                i.lista-ul__vineta
                | Obstrucción y colmatación de componentes por arrastre de sedimentos.
              li 
                i.lista-ul__vineta
                | Daños en equipos e infraestructura.
              li 
                i.lista-ul__vineta
                | Pérdida de recursos (químicos, agua almacenada, repuestos).
              li 
                i.lista-ul__vineta
                | Contaminación en redes de distribución.
              li 
                i.lista-ul__vineta
                | Colapso de captaciones.
              li 
                i.lista-ul__vineta
                | Cambios en el régimen hidrogeológico: disminución del caudal en las fuentes superficiales y subterráneas, cambio de sitio de salida de aguas manantiales y alteración de nivel de la capa freática.            
          .col-md-4
               figure.mt-5
                 img(src='@/assets/curso/tema2/img09.svg', alt='Texto que describa la imagen' style= 'width: 364px')

        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0(data-aos="fade") 
            h4.mt-4.ms-2.mb-4 Indirectos
            ul.lista-ul.lh-1
              li 
                i.lista-ul__vineta
                | Disminución de la cantidad de agua potable disponible.
              li 
                i.lista-ul__vineta
                | Modificación de la calidad del agua cruda debido a deslizamientos.
              li 
                i.lista-ul__vineta
                | Abandono del sistema.
              li 
                i.lista-ul__vineta
                | Enfermedades por carencia de agua o por acumulación de aguas lluvias o servidas; incremento de vectores.
              li 
                i.lista-ul__vineta
                | Presencia de malos olores.
              li 
                i.lista-ul__vineta
                | Aparición de vectores como moscas, cucarachas, roedores.
              li 
                i.lista-ul__vineta
                | Contaminación de cuencas.
              li 
                i.lista-ul__vineta
                | Cambios en los procesos de tratamiento de agua.
              li 
                i.lista-ul__vineta
                | Complicaciones con los seguros.
              li 
                i.lista-ul__vineta
                | Pérdida de ingresos (por agua no facturada, suspensión del servicio, etc.).
              li 
                i.lista-ul__vineta
                | Remuneración de horas extras.   
          .col-md-3
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='Texto que describa la imagen')

    separador

    .row.bg-tema2-1
      .col-lg-12.px-lg-5.px-4
        #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")  
          .h4 2.1 Procedimientos de evaluación y seguimiento
      
        .row.justify-content-center(data-aos="fade-right") 
          .col-lg-11
            .contenedor--texto-right-green5
              p.mb-5.mt-3.me-5.pe-5 Los procedimientos de evaluación y seguimiento incluyen la identificación y el análisis o evaluación del riesgo, como lo afirman Arteaga y Ordóñez (2019):
            .contenedor--texto-left2
              p.mb-5 El enfoque cualitativo o cuantitativo para determinar la naturaleza y el alcance del riesgo de desastres mediante el análisis de las posibles amenazas y la evaluación de las condiciones existentes de exposición y vulnerabilidad que conjuntamente podrían causar daños a las personas, los bienes, los servicios, los medios de vida y el medio ambiente del cual dependen; es decir, el proceso de estimar la probabilidad de que ocurra un acontecimiento y la magnitud probable de efectos adversos.  
            .contenedor--texto-right-green6
              p.mb-5 De la misma manera, según Arteaga y Ordóñez (2019), la evaluación de factores de riesgo en sistemas de potabilización debe <br>incluir: 
    
    .bg-header.mb-5
      .row
        .col-12.col-md-7.ms-md-5.ms-md-0.ps-md-5.ps-md-0
          h4 Aspectos a tener en cuenta en la evaluación de factores de riesgo en sistemas <br>de potabilización 
      .row.justify-content-center(data-aos="zoom-in-down") 
        .col-lg-10
            PasosA.color-acento-botones(tipo="l")
              .row.justify-content-evenly.align-items-end
                .col-md-7.mb-4.mb-md-0
                  p La identificación de las amenazas en materia de la infraestructura, funcionabilidad y operación.
                .col-md-3
                  figure
                    img(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen')

              .row.justify-content-evenly.align-items-center
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')
                .col-md-7.mb-4.mb-md-0
                  p.m-0 El diagnóstico de las condiciones técnicas de peligros, su ubicación, frecuencia y probabilidad.

              .row.justify-content-evenly.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p.m-0 Un análisis de la exposición y la vulnerabilidad que incluya elementos físicos, sociales, ambientales, económicos y de salud.
                .col-md-3
                  figure
                    img(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')

              .row.align-items-center
                .col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  p.m-0 La evaluación de la eficacia de la capacidad de resistencia y recuperación, respecto a los escenarios de riesgo probables. 
    
    .row.justify-content-end.mb-4
      .col-12.col-md-11.mb-4.mb-md-0
        .contenedor--texto-right-green4
          p.m-0 Al respecto, los autores citados antes también manifiestan que la evaluación de los riesgos de un sistema de tratamiento y distribución de agua potable debe tener en cuenta las amenazas y la vulnerabilidad en la zona donde se encuentra la infraestructura. Para ello, es necesario identificar las consecuencias que dichas amenazas y su respectivo análisis de vulnerabilidad considerando si se llega a concretar la amenaza, la:
    
    .row.justify-content-evenly.align-items-center.mb-5
      .col-lg-6
        ul.lista-ul--color.lh-1(data-aos="fade-right")  
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 Ubicación específica de las amenazas según la escala empleada.
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 Identificación de las estructuras del sistema expuestas a las amenazas.   
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 Caracterización de los efectos sobre la funcionalidad del sistema. 
                 
        p.m-0.my-5.ms-5 En esta misma línea, establecen que para la evaluación del riesgo es importante contar con:
        
        ul.lista-ul--color(data-aos="fade-right")  
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 Una información amplia y detallada. 
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 Un análisis específico.  
          li 
            i.fas.fa-bug(style="color: #491079")
            p.m-0.ps-3 La aplicación de metodologías de evaluación de riesgo.
             
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img15.svg' data-aos="fade-left")  

    .row.justify-content-end.mb-4
      .col-12.col-md-11.mb-4.mb-md-0
        .contenedor--texto-right-green7
          p.m-0 Lo anterior requiere de fuertes inversiones en recursos (físicos, materiales y humanos); por ello Arteaga y Ordóñez (2019) proponen que, como en la mayoría de los casos, las entidades encargadas de la gestión de riesgos en los sistemas de agua potable no cuentan fácilmente con dichos recursos, se emplee una herramienta denominada Estimación Rápida del Riesgos para Sistemas de Agua Potable y Saneamiento o QRE – WASH (por sus siglas en inglés para Quick Risk Estimation).

    .row.justify-content-center.align-content-center.mb-5
      .col-lg-4.align-self-center
        figure.mb-4
          img(src="@/assets/curso/tema2/img16.svg" data-aos="fade-right")        
      .col-lg-8.align-self-center
        p.mb-5.pb-4 De acuerdo con Arteaga y Ordóñez (2019), la herramienta QRE – WASH: 
        .contenedor--texto-left
          p … es una adaptación de la herramienta de autoevaluación de las variables utilizadas en la campaña ‘Ciudades Resilientes – Mi ciudad se está preparando’, basadas en instrumentos desarrollados por la Oficina de las Naciones Unidas para la Reducción del Riesgo de Desastres (UNDRR). Esta herramienta permite disponer de una aproximación cualitativa–cuantitativa del riesgo de desastres con la aplicación de ‘criterio de expertos’ o uso del método Delphi. 
        
    .row.justify-content-end.mb-4
      .col-12.col-md-11.mb-4.mb-md-0
        p.m-0 Esta herramienta identifica y evalúa los riesgos del sistema por medio de “la identificación de amenazas, la exposición que cada componente del sistema presenta ante las amenazas identificadas, la evaluación de las vulnerabilidades del componente y la calidad de las medidas de respuesta implementadas” (Arteaga y Ordóñez, 2019). 
    
    .row.ms-4.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-color.color.bg09.border.rounded-3(data-aos="fade-up") 
          .p-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img.img-especial2(src="@/assets/curso/tema2/img23.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.pt-2.me-3 Para una mejor comprensión del análisis de riesgo en sistemas de agua potable basado en la herramienta QRE – WASH, se recomienda al aprendiz consultar el siguiente documento.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/ANEXO2~1.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
                      img(src="@/assets/curso/tema2/img24.png" style="max-width: 123.32px; position: absolute; right: 85%; top: 200%; transform: translateY(-50%);")

    .row.justify-content-center.mb-4
      .col-lg-10
        p.text-center Igualmente, (Manzur, 2002) expone que se debe contar con estrategias que permitan la revisión oportuna de los riesgos, las cuales incluyen:  
    
    .bg_fondo5
      p.mb-4.text-center <b>Estrategias para una revisión oportuna de los riesgos</b>

      .row.mb-5.justify-content-evenly(data-aos="zoom-in-down") 
        .col-md-3.col-xl-3.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5 
            .tarjeta-numerada__numero.num_1
              .h2.numero 1
            p.text-center Definir el grado de centralización y descentralización del Estado en el funcionamiento de los niveles administrativos relacionados con riesgos.

        .col-md-3.col-xl-3.mb-4.mb-xl-0
          .tarjeta-numerada_2.color-secundario.p-5
            .tarjeta-numerada__numero.num_2
              .h2.numero 2
            p.text-center Cumplir con las funciones y responsabilidades de gestión de riesgo de instituciones como ministerios, organismos descentralizados nacionales, organismos locales de emergencia, prevención y atención de desastres, gobernaciones y municipios.

        .col-md-3.col-xl-3.mb-4.mb-xl-0
          .tarjeta-numerada_3.color-acento-contenido.p-5
            .tarjeta-numerada__numero.num_3
              .h2.numero 3
            p.text-center Incluir a las comunidades en la elaboración y control de planes y programas de gestión en materia de riesgo.

      .row.mb-5.justify-content-evenly(data-aos="zoom-in-down") 
        .col-md-3.col-xl-3.mb-4.mb-xl-0
          .tarjeta-numerada_4.color-acento-contenido.p-5
            .tarjeta-numerada__numero.num_4 
              .h2.numero 4
            p.text-center Garantizar en el nivel de permanencia, la continuidad y el profesionalismo de recursos humanos técnicos en cargos de tipo directivo y de gerencia media, en áreas con responsabilidad en gestión del riesgo.

        .col-md-3.col-xl-3.mb-4.mb-xl-0
          .tarjeta-numerada_5.color-acento-botones.p-5
            .tarjeta-numerada__numero.num_5
              .h2.numero 5
            p.text-center Institucionalizar en el sistema educativo superior la aplicación de asignaturas académicas relacionadas con gestión de desastres y emergencias.

    
    p En contexto, en la siguiente figura es posible apreciar la clara interrelación e interdependencia existente entre los factores de riesgo de desastres, la gestión de riesgo de desastres, los desastres y el desarrollo:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")  
      h5 Figura 1
    
    p.ms-4 <em>Ciclo vicioso de los desastres</em>

    .row
      .col.md-8
        figure
          img(src="@/assets/curso/tema2/img17.svg" data-aos="zoom-in-down") 
          p.text-end.pe-5 Nota. Tomada de Arteaga y Ordóñez (2019, p. 23).

    .contenedor--texto-right-gray2
      p.m-5 Se puede apreciar, de acuerdo con la figura anterior, que “si no se actúa sobre los factores, este se convierte en un ciclo vicioso, y para salir del mismo se requiere una mayor inversión de recursos” (Arteaga y Ordóñez, 2019).
    
    .row.ms-4
      .col-lg-1.align-self-center
        figure.ms-1
          img.list-inline-item(src="@/assets/curso/tema2/img25.svg" style="width: 79px" data-aos="zoom-out-right")  
      .col-lg-9.align-self-center
        p.list-inline-item.mt-2 De esta manera, deben plantearse medidas de gestión del riesgo de manera prospectiva, como:  

    p.mt-5.mx-5 <b>Medidas de riesgo que se deben plantear y su gestión</b>
    p.mb-5.mx-5 Según UNISDR (2016, citado por Arteaga y Ordóñez, 2019), deben plantearse medidas de gestión del riesgo de manera:
  
    .row.mb-5.justify-space-evenly.justify-content-center(data-aos="fade-up") 
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color.bg08(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-md-5.justify-center
              div
                img.img-responsive(src='@/assets/curso/tema2/img18.svg')
                div
                  h3.p-4.text-center.text-white Prospectiva. 

            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.pt-4.ms-3.text-white Prospectiva. 
              p.mt-5.small.ms-3.me-4.text-white Evitan la aparición de riesgos de desastres nuevos o mayores y abordan riesgos que podrían surgir a futuro si no se establecen políticas en materia de reducción.


      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-color.bg10(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-md-5.justify-center
              div
                img.img-responsive(src='@/assets/curso/tema2/img19.svg')
                div
                  h3.p-4.text-center Correctiva. 
              
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.pt-4.ms-3 Correctiva. 
              p.small.mt-5.ms-3.me-4 Tratan de reducir riesgos de desastres presentes y que deben ser gestionados de inmediato.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.cont1
        .tarjeta.tarjeta-flip.color-color.bg08(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-md-5.justify-center
              div
                img.img-responsive(src='@/assets/curso/tema2/img20.svg')
                div
                  h3.p-2.pt-3.text-center.text-white Compensatoria. 
              
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.pt-4.ms-3.text-white Compensatoria o gestión de riesgo residual. 
              p.small.m-5.ms-3.text-white Robustecen resiliencia social y económica de sociedades ante el riesgo residual que no se puede minimizar. 

    p.mb-4 Como manera de prevención de riesgos, es posible que las empresas prestadoras del servicio de acueducto, dentro de su sistema de gestión, establezcan la gestión de riesgo bajo la norma ISO 31000, la que se resume en la siguiente figura:
 
    .titulo-sexto.color-acento-contenido.mb-2
      h5 Figura 2
    
    p.mb-5 <em>Gestión de riesgos ISO 9001 – ISO 31000</em>

    .row
      .col.md-12
        figure
          img(src="@/assets/curso/tema2/img27.svg" data-aos="zoom-in-down") 
    
    Separador

    .row.bg-tema2-2
      .col-lg-12.px-lg-5.px-4
        #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")  
          .h4 2.2 Reporte de indicadores y anomalías presentadas en la gestión de riesgo de sistemas de tratamiento y<br> distribución de agua potable

        .row.justify-content-center.align-content-center.mb-5
          .col-lg-3.align-self-center
            figure.mb-4(data-aos="fade-right")  
              img.img295(src="@/assets/curso/tema2/img28.svg")    
          .col-lg-8.align-self-center
            .contenedor--texto-right-gray3
              p.mb-4.mt-5 Luego de conocer el riesgo al que está sometido el sistema de tratamiento y distribución, es importante establecer el reporte de indicadores, junto con las anomalías presentadas en la operación.
            .contenedor--texto-left-gray3
              p.mb-5 Con base en la Resolución 2115 de 2007, donde se definen los indicadores necesarios para determinar el grado de riesgo de calidad de agua potable en el sistema, se debe establecer el reporte de los indicadores y sus correspondientes conclusiones. A continuación se describen dichos indicadores: 
              figure
                img(src="@/assets/curso/tema2/img53.svg" style= "width: 100px" data-aos="zoom-in-down") 

    ul.lista-ul
      li 
        <i class="fas fa-circle fa-xs" style= "color:#491079 !important;"></i>
        p.ms-4 <b>Índice de Riesgo de la Calidad del Agua Potable (IRCA)</b>   
    
    .row.justify-content-center
      .col-md-10
        p En relación con los elementos relacionados con el cálculo y reporte del IRCA, existen cinco (5) niveles de riesgo de acuerdo con el valor calculado del indicador:
      .col.md-2
        figure.flex-end
          img.me-5(src='@/assets/curso/tema2/img29.svg' style="width: 177px") 

    .row.mt-4.justify-content-center.align-items-center(data-aos="fade-right")  
      .col-md-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.m-0 <b>Sin riesgo:</b> valor del IRCA de 0 a 5.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.m-0 <b>Bajo:</b> valor del IRCA de 5,1 a 14.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.m-0 <b>Medio:</b> valor del IRCA de 14,1 a 35.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.m-0 <b>Alto:</b> valor del IRCA de 35,1 a 80.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.m-0 <b>Inviable sanitariamente:</b> valor del IRCA de 80,1 a 100.
      .col-md-6
        figure(data-aos="fade-left")  
          img(src='@/assets/curso/tema2/img30.svg') 

    .contenedor--texto-right-green8
      p.mt-5.mb-5 Las acciones para tomar, dependiendo de los valores encontrados en la revisión (que serán notificados por parte de la autoridad sanitaria de manera inmediata), para los tipos de IRCA según el cuadro 7 del artículo 15 de la Resolución 2115 de 2007, son:

      
    LineaTiempoD.color-acento-contenido.mb-5.pb-5
      .row.justify-content-center.align-items-center(numero="1" titulo="IRCA por muestra ")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p <b>Sin riesgo:</b> continuar con el control y la vigilancia.
          p <b>Bajo:</b> informar a la empresa prestadora y al Comité de Vigilancia Epidemiológica. 
          p <b>Medio:</b> informar a la empresa prestadora, al Comité de Vigilancia Epidemiológica, al Alcalde y al Gobernador.
          p <b>Alto:</b> informar a la empresa prestadora, al Comité de Vigilancia Epidemiológica, al Alcalde, al Gobernador y a la Superintendencia de Servicios Públicos Domiciliarios.
          p <b>Inviable sanitariamente:</b> informar a la empresa prestadora, al Comité de Vigilancia Epidemiológica, al Alcalde, al Gobernador, a la Superintendencia de Servicios Públicos Domiciliarios, al Ministerio de Salud, al Instituto Nacional de Salud, al Ministerio de Vivienda, Ciudad y Territorio, a la Contraloría General y a la Procuraduría General.
        .col-md-5
          figure.ps-5.pb-4
            img(src='@/assets/curso/tema2/img31.svg', alt='Texto que describa la imagen' style="width: 412px")
            
      .row.justify-content-center.align-items-center(numero="2" titulo="IRCA mensual")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p <b>Sin riesgo:</b> agua apta para consumo humano.  Se debe continuar con la vigilancia.
          p <b>Bajo:</b> agua no apta para consumo humano, es susceptible para mejoramiento.
          p <b>Medio:</b> agua no apta para consumo humano, corresponde a una gestión directa de la empresa prestadora.
          p <b>Alto:</b> agua no apta para consumo humano, corresponde a una gestión directa de acuerdo con su competencia de la empresa prestadora, así como de los alcaldes y de los gobernadores respectivos.
          p <b>Inviable sanitariamente:</b> agua no apta para consumo humano, gestión directa de acuerdo con su competencia de la empresa prestadora, de los alcaldes, de los gobernadores y las entidades del orden nacional.
        .col-md-5
          figure.ps-5.ms-5
            img(src='@/assets/curso/tema2/img34.svg', alt='Texto que describa la imagen' style="width: 336px")

    .bg_fondo2.mb-4
      .row.justify-content-center.align-items-center(data-aos="zoom-in-up")
        .col-md-4.col-lg-4.mb-5
          figure
            img(src="@/assets/curso/tema2/img32.svg")        
        .col-md-8.col-lg-8
          p.p-4.me-5.mt-4 Con base en lo anterior, los reportes del IRCA que se entreguen por parte de la autoridad sanitaria deben ser acatados por la empresa prestadora del servicio de acueducto, responsable de la operación del sistema de tratamiento y distribución de agua potable, para adelantar las acciones necesarias tendientes a minimizar el riesgo de presencia de inconvenientes de salud pública en la población atendida por el sistema.
    
    ul.lista-ul.mb-5
      li 
        <i class="fas fa-circle fa-xs" style= "color:#491079 !important;"></i>
        .contenedor--texto-left3
          p.ms-4 Otros indicadores que se deben tener presente en la gestión de riesgo de sistemas de tratamiento y distribución de agua potable son:
    
    LineaTiempoD.color-acento-contenido.mb-5
      .row.justify-content-center.align-items-center(numero="1" titulo="IRABAm")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p El índice de riesgo municipal por abastecimiento de agua para consumo humano <b>(IRABAm)</b>, establecido en el artículo 17 de la Resolución 2115 de 2007, incluye las características de:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Tratamiento.
            li 
              i.lista-ul__vineta
              | Distribución.
            li 
              i.lista-ul__vineta
              | Continuidad del servicio prestado dentro del sistema. 

          p De acuerdo con el artículo 17 de la citada Resolución, dicho indicador tiene un valor entre cero (0) y cien (100) puntos. Si el valor calculado del IRABAm es cero (0), quiere decir que se cumplen las condiciones aceptables para cada una de las características o criterios de tratamiento, distribución y continuidad del servicio, mientras que si es de cien (100), quiere decir que ninguno de los criterios se cumple.
        .col-md-5
          figure.pe-5.pb-4
            img(src='@/assets/curso/tema2/img35.svg', alt='Texto que describa la imagen' style="width: 412px")
            
      .row.justify-content-center.align-items-center(numero="2" titulo="Cálculo IRABAm")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p En el artículo 18 de la Resolución 2115, se establece la fórmula para el cálculo del IRABAm:
          figure.pb-4
            img.mx-auto.d-block(src='@/assets/curso/tema2/img43.png' style="width: 300px")
          p En donde:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | M = municipio.
            li 
              i.lista-ul__vineta
              | PP = persona prestadora.
            li 
              i.lista-ul__vineta
              | Tpp = total de personas prestadoras en el municipio que calcularon el IRABApp.
            li 
              i.lista-ul__vineta
              | IRABApp = índice de riesgo por abastecimiento de agua de la persona prestadora.
            li 
              i.lista-ul__vineta
              | IRDm = índice de riesgo por distribución en el municipio (este indicador determina el riesgo en salud humana por la forma como se distribuye el agua en el municipio; el máximo puntaje es de 100 puntos).
        .col-md-5
          figure.pe-5
            img(src='@/assets/curso/tema2/img36.svg')

      .row.justify-content-center.align-items-center(numero="3" titulo="Cálculo IRABApp")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p El mismo artículo presenta la fórmula de cálculo del <u>Índice de riesgo por abastecimiento de agua de la persona prestadora (IRABApp)</u>:
          figure.pb-4
            img.mx-auto.d-block(src='@/assets/curso/tema2/img44.png' style="width: 230px")
          p En donde:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | IRABApp = índice de riesgo por abastecimiento de agua de la persona prestadora.
            li 
              i.lista-ul__vineta
              | PP = persona prestadora.
            li 
              i.lista-ul__vineta
              | IT = índice de tratamiento (puntaje asignado al evaluar los procesos de tratamiento, los ensayos básicos de laboratorio en planta de tratamiento y los trabajadores certificados de la persona prestadora, cuyo máximo puntaje es de ochenta (80) puntos).
            li 
              i.lista-ul__vineta
              | IC = índice por continuidad (puntaje asignado a la persona prestadora, con la información de continuidad de su área de influencia, cuyo máximo puntaje es de veinte (20) puntos.
        .col-md-5
          figure.pe-5
            img(src='@/assets/curso/tema2/img37.svg')
            
      .row.justify-content-center.align-items-center(numero="4" titulo="Índice Tratamiento (IT)")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p.me-5 Se debe calcular la sumatoria de puntajes que se asignan con base en los puntajes máximos establecidos en el cuadro 8 de la Resolución 2115, donde se establecen dichos puntajes según los procesos de tratamiento de agua, la dotación básica del laboratorio en la planta de tratamiento y los trabajadores certificados. Para más información del cálculo del IT es importante que se consulte el cuadro 8 del artículo 18 de la Resolución 2115, ubicada en la sección de material complementario.
        .col-md-5
          figure.pe-5
            img(src='@/assets/curso/tema2/img38.svg')

      .row.justify-content-center.align-items-center(numero="5" titulo="Índice Continuidad (IC)")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p Según la Resolución 2115 se presenta la fórmula:
          figure.pb-4
            img.mx-auto.d-block(src='@/assets/curso/tema2/img45.png' style="width: 230px")
          p En donde:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | (Nhs)j = número de horas prestadas en un mes en el sector j.
            li 
              i.lista-ul__vineta
              | (Ps)j	= población servida del sector j.
            li 
              i.lista-ul__vineta
              | 730	= número de horas que tiene un mes.
            li 
              i.lista-ul__vineta
              | Pt	= población total servida por la persona prestadora.
        .col-md-5
          figure.pe-5
            img.mx-auto.d-block(src='@/assets/curso/tema2/img39.svg')
            
      .row.justify-content-center.align-items-center(numero="6" titulo="Puntaje del IC")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p La Resolución 2015 establece que el puntaje IC, según las horas de servicio prestado, es:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | IC de 0 a 10 horas al día (insuficiente): cero (0).
            li 
              i.lista-ul__vineta
              | IC de 10,1 a 18 horas al día (no satisfactorio): diez (10).
            li 
              i.lista-ul__vineta
              | IC de 18,1 a 23 horas al día (suficiente): quince (15).
            li 
              i.lista-ul__vineta
              | IC de 23,1 a 24 horas al día (continuo): veinte (20).
        .col-md-5
          figure.pe-5
            img.mx-auto.d-block(src='@/assets/curso/tema2/img40.svg' style="width: 230px")

      .row.justify-content-center.align-items-center(numero="7" titulo="IRDm")
        .col-md-12.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p En la Resolución 2115 se establece la fórmula de cálculo como:
          p.text-center IRD_m=100−[(E1x%Red)+(E2x%Pilas)+(E3x%Carrotanque)+(E4xOtros)+(G∗F)]
          p En donde los puntajes son asignados a cada municipio, de acuerdo con los siguientes criterios:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | % Red	= porcentaje del total de la población del municipio que recibe agua para consumo humano por medio de la red de distribución.
            li 
              i.lista-ul__vineta
              | % Pilas = porcentaje del total de la población del municipio que recibe agua para consumo humano por medio de pilas públicas.
            li 
              i.lista-ul__vineta
              | % Carrotanques = porcentaje del total de la población del municipio que recibe agua para consumo humano por medio de carrotanques.
            li 
              i.lista-ul__vineta
              | % Otros = porcentaje del total de la población en el municipio que recoge agua para consumo humano directamente de pozos, lluvias, fuentes superficiales, garrafas, baldes, etc.
            li 
              i.lista-ul__vineta
              | g = número de total de conexiones domiciliarias / Número de viviendas.
            li 
              i.lista-ul__vineta
              | F = constante, valor de 10.
                    
      .row.justify-content-center.align-items-center(numero="8" titulo="Puntaje IRDm")
        .col-md-7.mb-4.mb-md-0
          .col-md-6.mb-4.mb-md-0
          p Con base en la fórmula del IRDm, los puntajes asignados para calificar cada forma de distribución son:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | E1 = 90 puntos.
            li 
              i.lista-ul__vineta
              | E2 = 50 puntos.
            li 
              i.lista-ul__vineta
              | E3 = 10 puntos.
            li 
              i.lista-ul__vineta
              | E4 = 5 puntos.
        .col-md-5
          figure.pe-5
            img(src='@/assets/curso/tema2/img33.svg')

    .row
      .col-lg-1.mb-4.mb-md-0
        figure
          img.img10.ms-5.mt-3.d-none.d-lg-block(src="@/assets/curso/tema2/img46.svg" style="width: 7.24px" data-aos="fade-right") 
      .col-lg-10
        .contenedor--texto-right-green4
          p.mb-5.mt-2 Considerando los valores calculados en las fórmulas de cada indicador (IRABApp e IRABAm), el artículo 19 de la Resolución 2115 de 2007 establece una clasificación del nivel de riesgo a la salud humana, así como las acciones a tomar según el tratamiento y la continuidad por parte de las empresas prestadoras y la distribución a nivel municipal, que se presentan en la Tabla 2.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")  
      h5 Tabla 2

    p.ms-4.mb-5 <em>Clasificación del nivel del riesgo en salud por IRABApp e IRABAm</em>

    figure
      img(src='@/assets/curso/tema2/img47.svg' data-aos="zoom-in-down") 
    
    p.mt-5.mb-5.text-center Nota. Tomada de la Resolución 2115 de 2007, artículo 19. 

    .row.banfondo1
      .col-lg-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center(data-aos="fade-right")  
          .col-lg-5.ms-4.mb-4.mb-md-0
            figure.justify-center
              img(src='@/assets/curso/tema2/img41.svg' style= "width: 465px")
          .col-lg-6
            figure.flex-end
              img.mb-4(src="@/assets/curso/tema2/img53.svg" style= "width: 100px" data-aos="zoom-in-down") 
            p.m-0 El artículo 20 de la Resolución 2115 de 2007 establece que dentro del procedimiento de registro del IRABAm, la empresa prestadora del servicio debe informar anualmente los Índices Mensuales de Continuidad (IC), que se requieren para calcular el IRABApp, al Sistema Único de Información (SUI) de la Superintendencia de Servicios Públicos Domiciliarios (SSPD).
        .row.justify-content-center
          .col-lg-11
            p Así mismo, se establece en el mismo artículo que las autoridades sanitarias departamentales, distrital y municipales de categorías 1, 2 y 3 deben reportar anualmente los datos empleados en el cálculo del Índice de Tratamiento (IT) y el Índice de Riesgo por Distribución Municipal (IRDm) al Sistema de Información de la Vigilancia de la Calidad del Agua para Consumo Humano (SIVICAP).     
              figure.flex-end
                img.margin2(src="@/assets/curso/tema2/img53.svg" style= "width: 100px" data-aos="zoom-in-down") 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
