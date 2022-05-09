<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal  
      .titulo-principal__numero.bg01
        span.text-white 1
      h1 Plan de acción de riesgo en sistemas de tratamiento y distribución de agua potable

    .row.justify-content-center.align-content-center.mb-5
      .col-lg-5.align-self-center
        figure.mb-4
          img(src="@/assets/curso/tema1/img01.svg" data-aos="zoom-in-down")     
      .col-lg-7.align-self-center
        .contenedor--texto-right-green3.mb-4.mb-lg-0  
          p.mb-4.pt-4 Para minimizar los riesgos identificados en el diagnóstico del sistema de tratamiento y distribución de agua potable, se deben seguir lineamientos e instructivos para el correcto manejo de sustancias peligrosas empleadas en la planta de potabilización. De igual manera, es necesario implementar acciones relacionadas con la correcta operación y el adecuado mantenimiento de los sistemas de tratamiento y distribución de agua potable.
      
    p La importancia de evaluar los riesgos en un sistema de abastecimiento de agua de consumo humano radica en la identificación de eventos que puedan ser potencialmente peligrosos y su evaluación.   
    p.mb-4 En palabras de Amézquita, Pérez y Torres (2014):
   
    .row.mb-5.justify-content-center.align-content-center(data-aos="zoom-in")
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 La evaluación del riesgo es un instrumento de gestión para empresas prestadoras del servicio que permite priorizar recursos humanos y financieros hacia el mejoramiento de las medidas de control como estrategia para reducir los riesgos y asegurar la calidad del agua potable en el sistema de distribución de agua.
            i.fas.fa-quote-right
        
    separador

    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-out-right")
      h2 1.1.	Instructivos de almacenamiento, manejo y transporte de sustancias peligrosas

    .bg_grad-01
      .row.justify-content-center.align-content-center.mb-5
        .col-lg-5.align-self-center
          figure(data-aos="zoom-out-right")
            img(src="@/assets/curso/tema1/img09.png")       
        .col-lg-7.align-self-center
            .contenedor--texto-right-gray1.mb-4.mb-lg-0
              p.mb-4.mt-5 Se deben conocer las sustancias peligrosas que comúnmente se emplean en los sistemas de potabilización. 
            p.mb-4 Lo anterior depende del sistema de tratamiento que se tenga, lo cual incide directamente en la manipulación de sustancias peligrosas; no es igual contar con una planta potabilizadora tipo convencional, en la que se emplean sustancias para las operaciones de mezcla rápida-coagulación-floculación, el ajuste o estabilización del pH y la desinfección, o con una que únicamente cuente con procesos de filtración por múltiples etapas, en la cual generalmente solo se emplea el desinfectante como sustancia química dentro del proceso. También se encuentran en el mercado diversas opciones de plantas de potabilización compactas, con procesos más sencillos.
            .contenedor--texto-left-gray1
              p.mb-4 Sin embargo, para todos los casos es imperativo emplear instructivos de almacenamiento, manejo y transporte de sustancias peligrosas, para evitar o minimizar riesgos a la salud de los operadores y población atendida por el sistema, así como al medio ambiente. Las sustancias más empleadas en los sistemas de tratamiento de agua potable se presentan en la Tabla 1.

    .titulo-sexto.color-secundario(data-aos="zoom-out-right")
      h5 Tabla 1 

    p.mb-5 <em>Sustancias más empleadas en sistemas de potabilización de agua</em>

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        table
          thead
            tr.bg03
              td.text-center <b>Sustancia química</b>
              td.text-center <b>Operación donde se emplea dentro del tratamiento</b>
            tr
          tbody
            tr
              td.text-center Sulfato de aluminio - Al2(SO4)3
              td.text-center Coagulación-Floculación
            tr.bg04
              td.text-center Cloruro férrico - FeCl3
              td.text-center Coagulación-Floculación
            tr
              td.text-center Sulfato férrico - Fe2(SO4)3
              td.text-center Coagulación-Floculación
            tr.bg04
              td.text-center Sulfato ferroso - FeSO4
              td.text-center Coagulación-Floculación
            tr
              td.text-center Policloruro de aluminio (PAC) - Al2(OH)3Cl3
              td.text-center Coagulación-Floculación
            tr.bg04
              td.text-center Ácido sulfúrico - H2SO4
              td.text-center Acondicionamiento de pH
            tr
              td.text-center Hidróxido de calcio - Ca (OH)2
              td.text-center Acondicionamiento de pH
            tr.bg04
              td.text-center Óxido de calcio - CaO
              td.text-center Acondicionamiento de pH
            tr
              td.text-center Cloro - Cl2
              td.text-center Desinfección
            tr.bg04
              td.text-center Dióxido de cloro - ClO2
              td.text-center Desinfección
            tr
              td.text-center Hipoclorito de sodio - NaClO
              td.text-center Desinfección
            tr.bg04
              td.text-center Ozono - O3
              td.text-center Desinfección
            

    p Dos insumos importantes a la hora de almacenar y manera las sustancias peligrosas son:

    .tarjeta.color.bg04.p-1.p-md-3.mb-5
      SlyderE(indicadores="derecha")
        .row.justify-content-center.me-4.me-md-0
          .col-md-12(data-aos="zoom-out-right")
            p.mb-4.mt-3.ms-4.ms-md-0 <b>Hoja de Datos de Seguridad de Materiales o MSDS</b>
            p.mb-4.ms-4.ms-md-0 Es conocido que para su manejo cada sustancia debe contar con la Hoja de Datos de Seguridad de Materiales o MSDS (Material Safety Data Sheet), la que debe ser entregada al sistema de tratamiento por el fabricante de cada sustancia. En dicha MSDS se incluye información relacionada con los peligros del empleo de sustancias químicas para la salud humana y para los ecosistemas. También proporciona información al respecto de situaciones y medidas en los casos de emergencia.
            p.mb-4.ms-4.ms-md-0 Las MSDS deben contar por lo menos con la información indicada en el diagrama.
            p.pb-2.pb-md-5.ms-4.ms-md-0 A manera de ejemplo, es importante que se haga la consulta las MSDS de lproductos sulfato de aluminio e hipoclorito de sodioos, que se encuentran en la sección de material complementario, para apropiar los contenidos de información.

          .row.justify-content-center(data-aos="fade") 
            .col-12.col-md-4
              .row.justify-content-around.align-items-center
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img11.svg')
                .col-12.col-md-9
                  p.mb-4.ms-4.ms-md-0 Identificación de los componentes químicos. 
              .row.justify-content-around.align-items-center
                .col-12.col-md-3   
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img12.svg')
                .col-12.col-md-9
                  p.mb-4.ms-4.ms-md-0 Características fisicoquímicas.
              .row.justify-content-around.align-items-center
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img13.svg')
                .col-12.col-md-9  
                  p.ms-4.ms-md-0 Información relacionada con los peligros a la salud y al medio ambiente.
            .col-12.col-md-4
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3   
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img14.svg')
                .col-12.col-md-9 
                  p.ms-4.ms-md-0 Información relacionada con el fabricante de la sustancia.
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img15.svg')
                .col-12.col-md-9 
                  p.ms-4.ms-md-0 Información relacionada con los peligros de explosión e incendio.
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img16.svg')
                .col-12.col-md-9
                  p.ms-4.ms-md-0 Precauciones para un uso y manejo seguros.
            .col-12.col-lg-4
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img17.svg')
                .col-12.col-md-9
                  p.mb-4.ms-4.ms-md-0 Componentes peligrosos.
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img18.svg')
                .col-12.col-md-9
                  p.mb-4.ms-4.ms-md-0 Información relacionada con la reactividad.
              .row.justify-content-around.align-items-center  
                .col-12.col-md-3
                  figure.justify-center
                    img.img60.mb-4(src='@/assets/curso/tema1/img19.svg')
                .col-12.col-md-9
                  p.mb-4.ms-4.ms-md-0 Control en la exposición y en la protección personal.
                                
        
        .row.justify-content-center.mb-5
          .col-md-11
            h4.mb-5.ms-4.ms-md-0 Instructivos de manejo de sustancias peligrosas
            p.mb-4.ms-4.ms-md-0 Además de las MSDS de los productos químicos empleados en la potabilización del agua, es fundamental que dentro del sistema de gestión de la planta de tratamiento se cuente con los instructivos para el manejo interno de los productos químicos. 
            p.mb-5.ms-4.ms-md-0 Al respecto, en el diagrama se presenta el contenido de un instructivo de manejo de sustancias peligrosas en una planta de potabilización:
          .row.justify-center(data-aos="fade") 
            .col-12.col-md-2
              ImagenInfografica.manito.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img35.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Objeto.
                  p Se debe presentar el propósito para el cual se elabora el instructivo de manejo de las sustancias peligrosas. 
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img36.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Alcance. 
                  p Campo de aplicación del instructivo, en este caso el manejo de las sustancias peligrosas. 
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img37.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Definiciones. 
                  p Términos de difícil interpretación para los operarios encargados del manejo de sustancias químicas.
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img38.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Referencias.
                  p Documentos legales y técnicos consultados para la elaboración del instructivo, relacionados con la potabilización de agua, el riesgo y los componentes de las sustancias empleadas.
          .row.justify-center
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img39.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Condiciones.
                  p Para el almacenamiento, manejo y transporte de sustancias químicas. Descripción del paso a paso o actividades que se deben llevar a cabo en el empleo seguro de sustancias químicas.
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img40.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Señalización y etiquetado. 
                  p Descripción de las etiquetas y señales necesarias según las sustancias químicas empleadas en el sistema de tratamiento.
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img41.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 Manejo y disposición de residuos. 
                  p Descripción de las actividades relacionadas con el manejo seguro de los residuos peligrosos generados por el empleo de las sustancias químicas.
            .col-12.col-md-2
              ImagenInfografica.noindicador.color-secundario.me-5.me-md-0.mb-5.indica_s1
                template(v-slot:imagen)
                  figure.ms-4.ms-md-0
                    img(src='@/assets/curso/tema1/img42.svg', alt='Texto que describa la imagen')
                .tarjeta.bg12.p-3(x="-3%" y="51%")
                  h4.mb-2 MSDS de sustancias empleadas. 
                  p Anexo de las MSDS de las sustancias químicas que se emplean en el sistema de tratamiento.
    
    .row.justify-center.mb-5.mb-md-4
      .col-12.col-lg-10.mb-5.mb-md-0
        .tarjeta.bgr2.p-4.p-md-5.mb-5.mb-md-0(data-aos="fade-left") 
          .row.justify-content-around
            .col-8.col-sm-6.col-md-5.col-xxl-4.mb-4.mb-md-0
              img.img_float(src="@/assets/curso/tema1/img28-1.png" )

            .col-md.col-lg-7.position-relative 
              p.mb-4 Se invita al aprendiz a ver la página 1 y 2 del documento Cloruro férrico, ficha de datos de seguridad (Sigma-Aldrich, 2013), para afianzar los conceptos sobre Hoja de Datos de Seguridad de Materiales o MSDS, ubicado en la sección de material complementario.
              
              a.boton.bgr1.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
              img.posit.img116(src="@/assets/curso/tema1/img29.png")          

    separador
    #t_1_2.titulo-segundo.color-secundario(data-aos="zoom-out-right")
      h2 1.2.	Instructivos de operación y mantenimiento de sistemas de tratamiento y distribución de agua potable

    p.mb-4 Con el fin de complementar la determinación del riesgo en los sistemas de agua potable, se debe conocer la estructura de los instructivos empleados en la operación y mantenimiento de dichos sistemas, como se muestra a continuación:

    .tarjeta(:style="{'background-image': `url(${require('@/assets/curso/tema2/img49.svg')})`}")(data-aos="zoom-out-left")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-7
            p.ms-3.ms-md-0.me-2.me-md-0 En las operaciones o procesos básicos de la potabilización de agua deben existir instructivos que presenten actividades llevadas a cabo en cada una de las operaciones. Es importante recordar las operaciones básicas:
            ul.lista-ul.ms-3.ms-md-0
              li 
                i.lista-ul__vineta
                | Mezcla rápida-coagulación.
              li
                i.lista-ul__vineta
                | Floculación.
              li 
                i.lista-ul__vineta
                | Sedimentación.
              li
                i.lista-ul__vineta
                | Filtración.
              li 
                i.lista-ul__vineta
                | Desinfección.
          .col-md-4
            figure
              img.mt-4.px-4.px-md-0(src='@/assets/curso/tema1/img31.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-12.col-md-11.mb-4
            p.m-0.mt-4.mt-md-0.ms-3.ms-md-0 Al igual que los instructivos de almacenamiento, manejo y transporte de sustancias peligrosas, 
            p.ms-3.ms-md-0 la estructura de los instructivos de operación y mantenimiento es similar:
          .row.justify-content-center.mt-4
            .col-12.col-md-10.ms-5.ms-md-0
              .row.justify-contet-end
                .col-8.col-lg-2
                  ImagenInfografica.manito.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img20.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5(x="-3%" y="51%")
                      h4.mb-2 Objeto.
                      p Se debe presentar el propósito para el cual se elabora el instructivo de operación y/o mantenimiento.
                .col-8.col-lg-2
                  ImagenInfografica.noindicador.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img21.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5.ms-md-0(x="-3%" y="51%")
                      h4.mb-2 Alcance. 
                      p Campo de aplicación del instructivo, en este caso la operación y/o mantenimiento.
                .col-8.col-lg-2
                  ImagenInfografica.noindicador.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img22.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5.ms-md-0(x="-3%" y="51%")
                      h4.mb-2 Definiciones. 
                      p Términos de difícil interpretación para los operarios encargados de la operación y/o mantenimiento.
                .col-8.col-lg-2
                  ImagenInfografica.noindicador.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img23.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5.ms-md-0(x="-3%" y="51%")
                      h4.mb-2 Referencias.
                      p Documentos legales y técnicos consultados para la elaboración del instructivo, relacionados con la potabilización de agua, la operación y/o mantenimiento.
                .col-8.col-lg-2
                  ImagenInfografica.noindicador.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5.ms-md-0(x="-3%" y="51%")
                      h4.mb-2 Condiciones para el almacenamiento, manejo y transporte de sustancias químicas. 
                      p Descripción del paso a paso de acciones a efectuar en operación y/o mantenimiento.
                .col-8.col-lg-2
                  ImagenInfografica.noindicador.color-secundario.mb-4.mb-md-0.indica_s1.ps-5.ps-md-0
                    template(v-slot:imagen)
                      figure
                        img(src='@/assets/curso/tema1/img25.svg', alt='Texto que describa la imagen')
                    .tarjeta.bg12.p-3.ms-5.ms-md-0(x="-3%" y="51%")
                      h4.mb-2 Manejo y disposición de residuos.
                      p Descripción de las actividades relacionadas con el manejo de los residuos originados en operación y/o mantenimiento.

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.m-0.mt-0.mt-md-5.ms-3.ms-md-0.me-2.me-md-0 Cabe resaltar que los instructivos de operación y mantenimiento deben estar inmersos en el manual de operación de la planta de potabilización, documento que sirve de referencia para todas las operaciones del sistema de tratamiento. Debe ser un documento de consulta obligatoria y permanente de los operarios del sistema, así como de los funcionarios que dirigen las operaciones. 
          .col-md-4
            figure.p-4
              img(src='@/assets/curso/tema1/img32.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.m-0.mt-0.mt-md-5.ms-3.ms-md-0.me-2.me-md-0 En la sección de material complementario se encuentra un ejemplo de manual de operación de una planta, muy importante para la consulta y contextualización de las operaciones de una planta potabilizadora, llamada “manual de operación y mantenimiento del sistema de suministro y tratamiento de agua potable” de las plantas de potabilización de agua superficial “La Guaricha” y “La Gota Fría”, de la empresa Emdupar S.A. E.S.P. del municipio de Valledupar-Cesar (Emdupar S.A. E.S.P.).
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img34.svg', alt='Texto que describa la imagen')
           

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
