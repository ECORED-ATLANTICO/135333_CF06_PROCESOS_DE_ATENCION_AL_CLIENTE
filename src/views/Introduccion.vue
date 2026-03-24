<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-0
        p.mb-0(data-aos="zoom-in-right") La gestión del servicio al cliente se ha consolidado como un eje estratégico para las organizaciones, al impactar directamente la percepción, la confianza y la fidelización. La integración de procesos estructurados, herramientas tecnológicas y criterios de calidad permite optimizar la experiencia del cliente y fortalecer la competitividad empresarial.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid") 
      .col-12.col-lg-8
        .tarjeta.color-primario-cv.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid")
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 Este componente formativo orienta al aprendiz en la aplicación de buenas prácticas en la atención y gestión del cliente, abordando fundamentos conceptuales, protocolos operativos y mecanismos de seguimiento que contribuyen al cumplimiento organizacional y a la mejora continua del servicio.
        p.mb-0(data-aos="zoom-in-right") Durante el desarrollo del componente, el aprendiz adquirirá criterios técnicos para analizar, medir y gestionar el desempeño en la atención al cliente, mediante el uso de indicadores, estrategias preventivas y correctivas, y enfoques orientados a la satisfacción y sostenibilidad empresarial.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
