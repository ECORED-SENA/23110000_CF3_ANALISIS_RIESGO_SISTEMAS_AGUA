<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Para sintetizar el contenido de este componente formativo, se presenta el siguiente mapa conceptual:
    
    .titulo-sexto.color-acento-contenido.mb-2
      h5 Figura 4
      | <em>Análisis de riesgos en sistemas de agua y saneamiento - Protocolos de gestión de riesgo</em>

    .row.justify-content-center.mt-5.mb-5
      .col-lg-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
    
    .row.justify-content-center
      .col-md-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-center Anexo. Síntesis


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
