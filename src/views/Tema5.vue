<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Marketing relacional
    
    .bg_img_7.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1.mb-0
          p.mb-4(data-aos="zoom-in-right") El marketing relacional surge como una evolución del marketing tradicional centrado exclusivamente en la transacción. Su enfoque principal no es solo vender, sino construir relaciones sostenibles y de largo plazo con los clientes. Esta orientación estratégica permite fortalecer la confianza, incrementar la lealtad y generar valor mutuo entre la organización y el consumidor.
          .tarjeta.color-secundario-cv.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_2.svg', class="img-fluid")
              .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
                p.mb-0 A diferencia del enfoque transaccional, el marketing relacional prioriza la retención sobre la captación, la personalización sobre la masificación y la experiencia sobre el precio. En entornos altamente competitivos, esta estrategia se convierte en un factor diferenciador clave.
        .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img_3.png', class="img-fluid")

      Separador

      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1 Concepto
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_4.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          p.mb-3(data-aos="zoom-in-right") El marketing relacional es una estrategia orientada a establecer, mantener y fortalecer relaciones duraderas con los clientes mediante interacciones continuas, personalizadas y basadas en la confianza. Su propósito es generar satisfacción constante, incrementar la repetición de compra y fomentar la recomendación positiva.
          .row.justify-content-center.align-items-center.mb-3
            .col-2.col-lg-1.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
              figure.p-0
                img(src='@/assets/curso/tema5/img_5.svg', class="img-fluid")
            .col-12.col-lg-11.mb-0
              p.mb-0(data-aos="zoom-in-right") Este enfoque se fundamenta en el conocimiento profundo del cliente, el uso estratégico de la información y la creación de experiencias consistentes en todos los puntos de contacto. Implica comprender necesidades, anticipar expectativas y ofrecer soluciones adaptadas al perfil de cada segmento.
          .cajon.color-terciario.p-4(data-aos="zoom-in-right")
            p.mb-0 El marketing relacional también integra herramientas tecnológicas como sistemas CRM, automatización de comunicaciones y análisis de datos, lo que permite segmentar, personalizar y medir la efectividad de las acciones implementadas.


    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Estrategias
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para aplicar el marketing relacional de manera efectiva, las organizaciones desarrollan estrategias que buscan fortalecer el vínculo con el cliente a lo largo del tiempo. Estas estrategias combinan comunicación, personalización, seguimiento y generación de valor agregado. A continuación, se presentan las principales estrategias utilizadas en el marketing relacional:



</template>

<script>
export default {
  name: 'Tema5',
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
