<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal  
      .titulo-principal__numero.bg01
        span.text-white 3
      h1 Elaboración de informe de riesgo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-out-right") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p El informe de los riesgos a los que está sometido el sistema de tratamiento y distribución de agua potable debe ser elaborado anualmente, como un control interno por la empresa prestadora del servicio, con base en los datos obtenidos del cálculo de los indicadores.

    p.mt-5 Dicho informe debe contener como mínimo los siguientes ítems:

    .titulo-sexto.color-acento-contenido.mb-2
      h5 Figura 3

    p.ms-4 <em>Ítems necesarios para el informe de riesgos.</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-md-6.mb-5.mb-md-0(data-aos="fade-right") 
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Introducción:") presentación del propósito del informe de resultados y a quiénes va dirigido.
          
          p.text-small(numero="2" titulo="Objetivos:") presentación de los objetivos a alcanzar con el informe de riesgo.
          
          p.text-small(numero="3" titulo="IRCA:") presentación de los datos empleados para la obtención del IRCA, su proceso de cálculo y resultados.
          
          p.text-small(numero="4" titulo="IRABAm:") presentación de los datos empleados para la obtención del IRABAm, su proceso de cálculo y resultados.

          p.text-small(numero="2" titulo="IRABApp:") presentación de los datos empleados para la obtención del IRABApp, su proceso de cálculo y resultados.
          
          p.text-small(numero="3" titulo="Conclusiones:") presentación de las conclusiones según los resultados obtenidos de cada indicador y acordes con los objetivos planteados.
          
          p.text-small(numero="4" titulo="Anexos:") inclusión de los documentos que se consideren importantes como anexos, para complementar la información obtenida (resultados de laboratorio, catastro de redes, planos de redes de distribución, catastro de usuarios/suscriptores del servicio, datos de los tipos de distribución, descripción de procesos de tratamiento de agua en la planta, descripción de dotación del laboratorio de la planta, certificaciones de trabajadores de la empresa prestadora y los que se consideren necesarios).
      .col-md-5
        figure
         img.mb-4(src='@/assets/curso/tema3/img02.svg' data-aos="fade-left")  

</template>

<script>
export default {
  name: 'Tema3',
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
