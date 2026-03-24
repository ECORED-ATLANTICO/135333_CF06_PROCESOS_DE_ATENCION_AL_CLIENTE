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

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_7.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right")
        TabsA.color-primario-o.mb-0
          .tarjeta.color-primario-cv.p-4(titulo="Programas de fidelización")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Sistemas de recompensas que incentivan la repetición de compra y fortalecen la lealtad.
                p.mb-3 #[strong Ejemplo práctico:] acumulación de puntos por compras que pueden redimirse por descuentos o productos.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_8.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Personalización de la oferta.")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Adaptación de productos, servicios y comunicaciones según el perfil del cliente.
                p.mb-3 #[strong Ejemplo práctico:] envío de promociones basadas en historial de compras y preferencias registradas.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_9.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Comunicación continua")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Interacción permanente mediante canales digitales y tradicionales para mantener el vínculo.
                p.mb-3 #[strong Ejemplo práctico:]  envío de boletines informativos con novedades, promociones y contenido de valor.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_10.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Atención postventa.")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Seguimiento después de la compra para garantizar satisfacción y resolver inquietudes.
                p.mb-3 #[strong Ejemplo práctico:] llamada de verificación días después de la entrega de un producto.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_11.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Gestión de bases de datos (CRM).")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Uso de sistemas tecnológicos para almacenar y analizar información del cliente.
                p.mb-3 #[strong Ejemplo práctico:] registro de historial de compras y comportamiento para diseñar campañas segmentadas.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_12.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Marketing de contenido.")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Generación de información útil y relevante que fortalece la relación con el cliente.
                p.mb-3 strong Ejempl#[o práctico:] publicación de guías, tutoriales o consejos relacionados con el producto adquirido.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_13.svg', class="img-fluid")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-terciario-cv.rounded-3.overflow-hidden
          .row.align-items-center.mb-0
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-5
              figure.m-0
                img(src="@/assets/curso/tema1/img_11.svg")
            .col-12.col-md-8.col-lg-10.p-4
              .row.justify-content-between.align-items-center.g-3
                .col-12.col-sm
                  p.mb-0.fw-bold Para ampliar la comprensión del marketing relacional y su impacto en la construcción de vínculos a largo plazo con los clientes, lo invitamos a consultar. Este recurso muestra cómo integrar herramientas digitales para fortalecer la lealtad y el compromiso del cliente: 
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dk9-jCp6oJY" target="_blank")
                    span Ver video
                    i.fas.fa-file-download.ms-2

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8.mb-4.mb-lg-0
                p.mb-4 Escucha el podcast <strong>“Charlas que venden”</strong> y su episodio
                TarjetaAudio.color-primario-o.mb-0(
                  texto="<h4 class='mb-0'>Marketing relacional</h4>"
                  :audio="require('@/assets/curso/tema5/img_15.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = true"
                  style="border: none !important; padding: 0 !important; background: transparent !important;"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-8.col-lg-4.d-none.d-lg-block.position-relative
                figure
                  img(src='@/assets/curso/tema5/img_15.png', class="cita-decorada__imagen-flotante-1")

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
