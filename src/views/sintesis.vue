<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Para sintetizar el contenido de este componente formativo, se presenta el siguiente mapa conceptual:
    
    .titulo-sexto.color-acento-contenido.mt-5
      p <b>Figura 4.</b> <em>Análisis de riesgos en sistemas de agua y saneamiento - Protocolos de gestión de riesgo</em>

    .row.justify-content-center
      .col-lg-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
    

</template>

<script>
export default {
  name: 'Sintesis',
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
