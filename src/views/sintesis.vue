<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-2.mb-3(data-aos="zoom-in-right")
        figure
        img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-lg-10.mb-3
        p.mb-0(data-aos="zoom-in-right") El componente formativo Conexión y postventa digital desarrolla los fundamentos y estrategias necesarias para gestionar de manera integral la relación con el cliente en entornos digitales. Integra procesos de asesoría, análisis de la percepción del cliente, resolución de conflictos y gestión estructurada de solicitudes, orientados a fortalecer la experiencia y la satisfacción. Asimismo, aborda el marketing relacional y la postventa digital como herramientas clave para la fidelización, junto con la medición y el manejo de los niveles de cumplimiento, promoviendo una cultura organizacional basada en la calidad, la mejora continua y el cumplimiento de compromisos en escenarios digitales.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Conexión y postventa digital desarrolla los fundamentos y estrategias necesarias para gestionar de manera integral la relación con el cliente en entornos digitales. Integra procesos de asesoría, análisis de la percepción del cliente, resolución de conflictos y gestión estructurada de solicitudes, orientados a fortalecer la experiencia y la satisfacción. Asimismo, aborda el marketing relacional y la postventa digital como herramientas clave para la fidelización, junto con la medición y el manejo de los niveles de cumplimiento, promoviendo una cultura organizacional basada en la calidad, la mejora continua y el cumplimiento de compromisos en escenarios digitales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
