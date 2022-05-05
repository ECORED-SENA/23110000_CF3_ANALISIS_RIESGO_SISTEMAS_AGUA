<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero.bg01
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-0 Bienvenido al componente formativo <b>Protocolos de gestión de riesgo en sistemas de tratamiento.</b> A continuación, conocerá los temas que se tratarán a lo largo del mismo.
    .contenedor--texto-right-green9.mb-5(data-aos="fade") 
      p.m-0 ¡Muchos éxitos en su proceso de aprendizaje!

    figure.mb-5(data-aos="fade") 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nGSUomulFpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
