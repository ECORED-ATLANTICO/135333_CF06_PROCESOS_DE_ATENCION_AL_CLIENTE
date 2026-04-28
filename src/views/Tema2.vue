<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Percepción del cliente

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La percepción del cliente constituye un elemento central en la gestión de la experiencia de consumo. No se trata solo de la calidad objetiva de productos o servicios, sino de cómo el cliente interpreta, valora y compara cada interacción con la marca. Entender esta percepción permite diseñar estrategias que incrementen la satisfacción, fortalezcan la lealtad y optimicen la toma de decisiones comerciales.
    
    .bg_img_3.mb-0

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Concepto
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_3.png', class="img-fluid")
        .col-12.col-lg-10.mb-0
          p.mb-0(data-aos="zoom-in-right") La percepción del cliente refleja cómo un consumidor interpreta y evalúa un producto, servicio o marca con base en sus experiencias previas, expectativas y estímulos del entorno. Esta percepción influye directamente en la decisión de compra y en la disposición a recomendar o repetir la experiencia con la empresa. Comprenderla permite planear estrategias de atención, comunicación y fidelización que generen valor tanto para el cliente como para la organización.

      Separador

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Criterios
      .mb-0 
    
    p.mb-3(data-aos="zoom-in-right") Para analizar la percepción del cliente, es fundamental identificar los criterios que determinan cómo los consumidores valoran la oferta de la empresa. La siguiente tabla sintetiza los principales factores que influyen en la percepción del cliente, acompañados de ejemplos prácticos que ilustran cada criterio:
    p.mb-5(data-aos="zoom-in-right") Criterios de percepción
    br
    br
    
    .bg_img_4.mb-0

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Calidad percibida
            p.mb-0 Grado en que el cliente considera que el producto o servicio cumple sus expectativas.
            p.mb-0 #[strong Ejemplo práctico:] un cliente valora la durabilidad de un electrodoméstico más que su diseño.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_5.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Valor percibido
            p.mb-0 Relación percibida entre el beneficio recibido y el costo pagado.
            p.mb-0 #[strong Ejemplo práctico:] un servicio de <em>streaming</em> con amplia biblioteca y precio accesible.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_6.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Confianza
            p.mb-0 Seguridad que el cliente siente respecto a la marca o proveedor.
            p.mb-0 #[strong Ejemplo práctico:] cliente repite compra en una tienda por buen historial de entregas.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_7.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Satisfacción
            p.mb-0 Nivel de cumplimiento de expectativas tras la compra o servicio.
            p.mb-0 #[strong Ejemplo práctico:] cliente satisfecho con atención rápida y soluciones efectivas.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Experiencia emocional
            p.mb-0 Impacto de factores subjetivos, como emociones, sensaciones y recuerdos.
            p.mb-0 #[strong Ejemplo práctico:] cliente se siente cómodo y bien recibido en una tienda física.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Reputación
            p.mb-0 Influencia de opiniones de terceros y valoración social de la marca.
            p.mb-0 #[strong Ejemplo práctico:] opiniones positivas en redes sociales y recomendaciones de conocidos.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_10.png', class="img-fluid")
      br

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Manejo
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo de la percepción del cliente requiere acciones estratégicas en cada interacción que la persona tenga con la marca. Estas estrategias buscan generar experiencias positivas, consistentes y memorables que incrementen la satisfacción, la lealtad y la recomendación. La siguiente información resume las principales acciones que pueden implementarse, con su objetivo y ejemplos prácticos de aplicación:


    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-4.col-xl-3.mb-3.mb-lg-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_12.png', class="img-fluid")
      .col-12.col-lg-12.col-xl-9.mb-0
        p.mb-3(data-aos="zoom-in-right") Estrategias clave para el manejo de la percepción del cliente
        TabsA.color-primario-o.mb-0.dos
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Monitoreo de la satisfacción")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Medir y analizar la percepción del cliente tras la compra o servicio.
                p.mb-3 #[strong Ejemplo práctico:] realizar encuestas postventa, NPS o CSAT y analizar comentarios en canales digitales.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_13.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Comunicación clara y transparente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Garantizar que el cliente reciba información precisa y confiable.
                p.mb-3 #[strong Ejemplo práctico:] brindar detalles sobre productos, servicios, precios, garantías y políticas de devolución.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_14.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Personalización de la experiencia")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Adaptar la oferta y la atención según el perfil y preferencias del cliente.
                p.mb-3 #[strong Ejemplo práctico:] ofrecer recomendaciones personalizadas según historial de compras y comportamiento en la tienda.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_15.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Gestión proactiva de incidencias")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Resolver problemas antes de que se conviertan en quejas formales.
                p.mb-3 #[strong Ejemplo práctico:] CRM alerta sobre retrasos de entrega y programa seguimiento inmediato con el cliente.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_16.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Entrenamiento del personal")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Desarrollar habilidades del equipo en atención y resolución de problemas.
                p.mb-3 #[strong Ejemplo práctico:] capacitar al personal en empatía, comunicación efectiva y manejo de situaciones difíciles.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_17.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4.h-100(titulo="Refuerzo de marca")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Fortalecer la relación emocional con el cliente y su fidelidad.
                p.mb-3 #[strong Ejemplo práctico:] implementar programas de fidelización, <em>branding</em> coherente y recompensas por lealtad.
              .col-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_18.svg', class="img-fluid")

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
                  p.mb-0 Para ampliar los conocimientos sobre la temática, consultar el siguiente recurso académico, el cual aborda de manera detallada los fundamentos, enfoques y aplicaciones relacionadas con este tema:
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(href="https://doi.org/10.5281/zenodo.17972281" target="_blank")
                    span Abir video
                    i.fas.fa-file-download.ms-2
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
