<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Solicitudes

    .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema4/img_1.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
            p.mb-0 Una solicitud es una petición formal realizada por un cliente o usuario que demanda atención, información, ejecución de un servicio o acción específica por parte de la organización. No se trata únicamente de recibir un requerimiento; una gestión adecuada implica transformar cada solicitud en una oportunidad para mejorar la experiencia del cliente y optimizar los procesos internos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-4(data-aos="zoom-in-right") La correcta administración de las solicitudes garantiza eficiencia, transparencia y satisfacción, fortaleciendo la relación con el cliente y la reputación institucional. Además, permite establecer un proceso estandarizado y documentado, que asegura que cada petición sea atendida de manera coherente y oportuna, reduciendo errores, evitando duplicidad de esfuerzos y facilitando la trazabilidad de las acciones ejecutadas.
        .tarjeta.color-secundario-cv.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_2.svg', class="img-fluid")
            .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
              p.mb-0 El manejo estratégico de solicitudes implica un ciclo completo que abarca registro, clasificación, análisis, trámite, resolución y seguimiento, asegurando que cada caso reciba una atención personalizada y documentada. Esta gestión proporciona retroalimentación valiosa para la mejora continua de productos, servicios y procesos internos, transformando cada interacción con el cliente en un recurso de aprendizaje y desarrollo organizacional.
      .col-6.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img_3.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_4.svg', class="img-fluid")
      .col-12.col-lg-11.mb-0
        p.mb-0(data-aos="zoom-in-right") Asimismo, la implementación de sistemas digitales, como CRM o plataformas de gestión de solicitudes, permite centralizar la información, priorizar requerimientos críticos y generar métricas que orientan la toma de decisiones estratégicas. De esta manera, la organización no solo responde a necesidades puntuales, sino que fortalece la confianza del cliente, potencia la fidelización y contribuye al crecimiento sostenible del negocio.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto
    .mb-0 
    
    .bg_img_6.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")
        .col-12.col-lg-10.mb-0
          p.mb-3(data-aos="zoom-in-right") Una solicitud es una petición formal realizada por un cliente o usuario que requiere atención, información, servicio o ejecución de una acción específica. La correcta gestión de las solicitudes garantiza eficiencia, transparencia y satisfacción, fortaleciendo la relación con el cliente y la reputación de la empresa.
          p.mb-0(data-aos="zoom-in-right") El manejo estratégico de solicitudes implica registrar, clasificar, tramitar y dar seguimiento a cada petición, asegurando respuesta oportuna y documentada, y generando retroalimentación para la mejora continua.

      Separador

      #t_4_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.2 Tipología
      .mb-0 

      .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img_11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las solicitudes de los clientes pueden clasificarse según su naturaleza y el tipo de respuesta requerida. Comprender estas categorías permite organizar procesos internos, asignar responsables y garantizar respuestas oportunas, aumentando la satisfacción y confianza del cliente. La siguiente tabla presenta los principales tipos de solicitudes y ejemplos prácticos de cómo se aplican en distintos contextos: 

    p.mb-5(data-aos="zoom-in-right") Tipos de solicitudes y ejemplos de aplicación

    .row.justify-content-center.align-items-start.mb-5
      .col-8.col-lg-4.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_8.png', class="img-fluid")
      .col-12.col-lg-8.mb-3(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-cv")
          div(titulo="Informativa")
            p.mb-0 Petición de información sobre productos, servicios, promociones o políticas de la empresa.
            p.mb-0 #[strong Ejemplo práctico:] cliente solicita horarios de atención, detalles de garantía o disponibilidad de un producto en tienda física y en línea.
          div(titulo="Operativa")
            p.mb-0 Solicitud relacionada con la ejecución de un servicio, entrega de productos o seguimiento de pedidos.
            p.mb-0 #[strong Ejemplo práctico:] cliente solicita programación de instalación de un electrodoméstico, confirmación de envío o actualización del estado de su pedido.
          div(titulo="Reclamativa ")
            p.mb-0 Petición para corregir un error, resolver incidencias o atender incumplimientos de manera formal.
            p.mb-0 #[strong Ejemplo práctico:] cliente reporta un cobro incorrecto, un producto dañado o retraso en la entrega y pide corrección inmediata con evidencia documental.
          div(titulo="Administrativa.")
            p.mb-0 Trámites internos, documentales o solicitudes que requieren registro y respuesta formal dentro de la organización.
            p.mb-0 #[strong Ejemplo práctico:] cliente solicita certificación de pago, comprobante de compra, constancia de afiliación o historial de servicios recibidos.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Trámite
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") El trámite de solicitudes es un proceso estructurado que asegura la correcta recepción, registro, análisis y respuesta de cada petición realizada por el cliente. Su adecuada gestión permite garantizar transparencia, trazabilidad y oportunidad en la atención, además de contribuir a la mejora continua de los procesos internos. Un trámite organizado reduce errores, evita reprocesos y fortalece la percepción de profesionalismo en la organización.

    .bg_img_4.mb-0

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Recepción:] la recepción consiste en identificar formalmente la solicitud a través de los diferentes canales disponibles, ya sean presenciales, telefónicos o digitales. En esta etapa se verifica que la información básica esté completa, como datos del cliente, descripción clara de la petición y evidencia soporte si aplica. Una recepción adecuada evita interpretaciones erróneas y facilita el tratamiento posterior del caso.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Registro:] el registro implica documentar la solicitud en un sistema de gestión, como un CRM o base de datos institucional. Esta etapa garantiza trazabilidad, control de tiempos de respuesta y seguimiento interno. Además, permite generar estadísticas que apoyan la toma de decisiones y la identificación de tendencias recurrentes en las solicitudes recibidas.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Clasificación:] consiste en categorizar la solicitud según su naturaleza (informativa, operativa, reclamativa o administrativa) y asignarla al área o responsable correspondiente. Esta etapa optimiza tiempos de respuesta y evita duplicidad de esfuerzos. Una clasificación adecuada asegura que cada caso sea tratado por el personal competente y con los recursos apropiados.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_11.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Evaluación:] en la fase de evaluación se analiza detalladamente la petición del cliente, verificando información, documentos y condiciones asociadas. Esta revisión permite determinar la viabilidad de la solicitud, las posibles alternativas de solución y los tiempos estimados de respuesta. Una evaluación rigurosa reduce riesgos legales y operativos.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_12.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Resolución:] consiste en ejecutar la acción solicitada o emitir una respuesta formal fundamentada. Puede implicar corrección de errores, entrega de información, reposición de productos o ajustes administrativos. Es fundamental que la respuesta sea clara, oportuna y coherente con las políticas de la organización, garantizando transparencia y satisfacción del cliente.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_13.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            p.mb-0 #[strong Seguimiento y cierre:] aquí se verifica que la solución implementada haya sido efectiva y que el cliente se encuentre satisfecho con la respuesta recibida. Esta etapa incluye confirmar la finalización del caso y registrar los resultados para auditoría y análisis posterior. El cierre adecuado fortalece la confianza y aporta información valiosa para la mejora continua del servicio.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img_14.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="flip-left")
          h5 Figura 4.
          |    Trámite de solicitudes – Procesos clave
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema4/img_15.svg', class="img-fluid d-none d-lg-block").mb-5
          img(src='@/assets/curso/tema4/img_16.svg', class="img-fluid d-block d-lg-none").mb-5
          figcaption <b>Nota.</b> Sena 2026.
</template>

<script>
export default {
  name: 'Tema4',
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
