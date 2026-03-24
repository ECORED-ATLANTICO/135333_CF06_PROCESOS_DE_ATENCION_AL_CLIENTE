<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Asesoría
 
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La asesoría al cliente es un proceso estratégico que va más allá de simplemente responder preguntas; se trata de construir una relación de confianza y acompañamiento continuo. En el contexto digital, esta asesoría se potencia mediante herramientas tecnológicas, canales de comunicación variados y sistemas que permiten registrar, analizar y anticipar las necesidades de cada cliente, garantizando una experiencia personalizada y satisfactoria.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_2.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") La asesoría consiste en el conjunto de acciones organizadas para guiar al cliente en la elección, uso y aprovechamiento de un producto o servicio, asegurando que sus expectativas se cumplan en todo momento.
        p.mb-3(data-aos="zoom-in-right") En la era digital, el CRM (Customer relationship management) como sistema digital que permite gestionar, centralizar y analizar las interacciones con los clientes para mejorar la atención y fidelización es fundamental para la asesoría, ya que apoya con:
        .tarjeta.color-terciario-cv.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.order-2.order-lg-1(data-aos="zoom-in-right")
              ul.list-unstyled.mb-0
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Centralizar información sobre clientes y prospectos.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Registrar todas las interacciones, solicitudes y preferencias.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Personalizar la comunicación y las ofertas según el historial de compras y comportamientos previos.
                li.d-flex.align-items-start.mb-0
                  i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                  span Analizar patrones de consumo para anticipar necesidades y mejorar la atención.
            .col-4.col-lg-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_3.svg', class="img-fluid")
        
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="flip-left")
          h5 Figura 1.
          |    Funciones estratégicas del CRM en la gestión de clientes
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema1/img_4.svg', class="img-fluid d-none d-lg-block").mb-5
          img(src='@/assets/curso/tema1/img_5.svg', class="img-fluid d-block d-lg-none").mb-5
          figcaption <b>Nota.</b> Sena 2026.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="zoom-in-right")
        TabsA.color-primario-o.mb-0
          .tarjeta.color-primario-cv.p-4(titulo="Registro de interacciones")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-7.order-2.order-lg-1.mb-3
                p.mb-0 Documenta llamadas, correos, chats y visitas.
                p.mb-3 #[strong Ejemplo práctico:] un asesor registra una consulta sobre un producto, incluyendo dudas y recomendaciones dadas.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema1/img_6.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Segmentación de clientes")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-3
                p.mb-0 Clasifica clientes según comportamiento, preferencias y valor estratégico.
                p.mb-3 #[strong Ejemplo práctico:] identificar clientes VIP que reciben ofertas exclusivas.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema1/img_7.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Automatización de seguimiento")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-3
                p.mb-0 Programar alertas y recordatorios automáticos para interacciones futuras.
                p.mb-3 #[strong Ejemplo práctico:] el sistema envía un correo automático recordando la revisión de un producto adquirido.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema1/img_8.svg', class="img-fluid")
          .tarjeta.color-primario-cv.p-4(titulo="Análisis de datos")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-3
                p.mb-0 Genera reportes sobre patrones de compra, incidencias y satisfacción.
                p.mb-3 #[strong Ejemplo práctico:] detectar que un 20 % de los clientes de un producto específico reporta retrasos en entrega, para optimizar logística.
              .col-6.col-lg-3.order-1.order-lg-2.mb-3(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema1/img_9.svg', class="img-fluid")
      .col-12.col-lg-3.mb-0(data-aos="zoom-in-right")
        .row
          .col-5.col-lg-4.mb-3(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_10.svg', class="img-fluid")
          .col-12.col-lg-12.mb-0
            p.mb-3(data-aos="zoom-in-right") La integración del CRM transforma la asesoría en un proceso proactivo, donde no solo se responde a dudas, sino que se anticipan necesidades y se generan experiencias positivas, fomentando la fidelización a largo plazo.

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
                  p.mb-0.fw-bold Para fortalecer la comprensión sobre la gestión de relaciones con clientes, su funcionamiento y aplicación en la asesoría y el seguimiento, lo invitamos a consultar el siguiente recurso audiovisual. Este video permite comprender cómo el CRM apoya la personalización, la fidelización y la mejora continua en la atención al cliente: 
                .col-12.col-sm-auto.pe-4
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Ztr24-JBL2s" target="_blank")
                    span Ver video
                    i.fas.fa-file-download.ms-2

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Protocolo
    .mb-0 

    .bg_img_1.mb-0

      .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-0.h-100
          .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
            figure.p-0.m-0.h-100
              img(src="@/assets/curso/tema1/img_13.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
          .col-12.col-lg-7.p-5
            p.mb-0 El protocolo de asesoría digital establece pasos estructurados y consistentes que permiten a la organización brindar una atención uniforme, profesional y de alta calidad, independientemente del canal de comunicación utilizado. Este protocolo no solo asegura que cada cliente reciba información clara y coherente, sino que también optimiza los recursos del equipo de ventas y postventa, reduce errores humanos y asegura que toda interacción quede registrada para futuras referencias en el CRM.

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .col-12.col-lg-10.mb-0
          p.mb-0 Un protocolo bien definido tiene beneficios estratégicos clave:

      .custom-slider.mb-5(data-aos="zoom-in-right")
        SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--01.mb-3
            h5.text-center.mb-4 Estandarización de procesos 
            .tarjeta--slider__content.text-center.mb-2 Garantiza que todos los asesores sigan un mismo flujo de atención, evitando discrepancias y variaciones en la calidad del servicio.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--02.mb-3
            h5.text-center.mb-4 Optimización del tiempo
            .tarjeta--slider__content.text-center.mb-2 Al contar con pasos claros, los asesores pueden atender más clientes en menos tiempo, con mayor eficiencia y precisión.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--03.mb-3
            h5.text-center.mb-4 Reducción de errores
            .tarjeta--slider__content.text-center.mb-2 Minimiza la omisión de información crítica o pasos importantes, especialmente en interacciones complejas o consultas técnicas.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--04.mb-3
            h5.text-center.mb-4 Registro y trazabilidad
            .tarjeta--slider__content.text-center.mb-2 Toda la información de la interacción queda documentada en el CRM, permitiendo seguimiento, análisis y personalización de futuras comunicaciones
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--05.mb-3
            h5.text-center.mb-4 Mejora continua
            .tarjeta--slider__content.text-center.mb-2 Facilita la evaluación del desempeño del asesor y la identificación de áreas de mejora en la atención al cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          |  Protocolo de asesoría digital
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption 
              p <b>Nota.</b> Adaptado de Peppers & Rogers, (2017); Chaffey & Ellis-Chadwick, (2019); Buttle & Maklan (2019).
            thead
              tr
                th.col-auto.col-lg-3 Paso/Acción
                th.col-auto.col-lg-auto Herramienta digital sugerida
                th.col-auto.col-lg-auto Observaciones estratégicas
            tbody
              tr
                td.text-start Saludo y presentación del asesor.
                td.text-start Chat en vivo, videollamada, correo electrónico
                td.text-start Establece rapport y genera confianza desde el inicio.
              tr
                td.text-start Identificación de necesidades del cliente.
                td.text-start Formulario en CRM, cuestionario interactivo
                td.text-start Permite recopilar información precisa y segmentar al cliente según sus preferencias y perfil.
              tr
                td.text-start Presentación de soluciones.
                td.text-start Catálogo digital, demostraciones virtuales, videos explicativos
                td.text-start Muestra productos o servicios de manera clara, resaltando beneficios y diferenciadores.
              tr
                td.text-start Registro de interacción.
                td.text-start CRM con campos de comentarios, historial de compras y preferencias
                td.text-start Facilita seguimiento futuro, personalización de ofertas y análisis de comportamiento.
              tr
                td.text-start Confirmación de satisfacción.
                td.text-start Encuesta rápida, mensaje automatizado de confirmación
                td.text-start Verifica que el cliente está satisfecho y genera oportunidades de mejora.
              tr
                td.text-start Programación de seguimiento.
                td.text-start Alertas en CRM, recordatorios automáticos, notificaciones push
                td.text-start Mantiene la relación postventa activa, fomenta fidelización y posibles ventas futuras.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="flip-left")
      h5 Figura 2.
      |   Etapas del protocolo de asesoría digital
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/tema1/img_20.svg', class="img-fluid d-none d-lg-block").mb-5
      img(src='@/assets/curso/tema1/img_21.svg', class="img-fluid d-block d-lg-none").mb-5
      figcaption <b>Nota.</b> Sena 2026.

    .bg_img_2.mb-0

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-0
          .cajon.color-terciario.p-4(data-aos="zoom-in-right")
            p.mb-0 Al implementar este protocolo, las empresas logran que cada interacción con el cliente tenga un propósito claro y medible, fortaleciendo la relación y aumentando la probabilidad de satisfacción y lealtad. Además, el uso del CRM como herramienta central permite que las decisiones estratégicas de marketing y ventas se basen en datos confiables y actualizados, alineando la asesoría con los objetivos comerciales y de experiencia del cliente.

      Separador

      #t_1_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.3 Seguimiento
      .mb-0 

      .row.justify-content-center.align-items-center.mb-3
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_23.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          p.mb-0(data-aos="zoom-in-right") El seguimiento constituye un pilar fundamental dentro de la asesoría al cliente, ya que va más allá de la simple verificación de la entrega de un producto o servicio. Su propósito principal es garantizar la satisfacción del cliente, anticipar posibles inconvenientes y generar valor agregado mediante interacciones personalizadas y oportunas. La correcta gestión de la información, registrada en sistemas como el CRM, permite un abordaje estratégico, rápido y adaptado a las necesidades individuales de cada cliente, fortaleciendo la relación comercial y potenciando la fidelización a largo plazo. A continuación, se detallan estrategias para el seguimiento:

      p.mb-3(data-aos="zoom-in-right") Estrategias de seguimiento digital

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-cv")
          div(titulo="Llamadas de verificación")
            p.mb-0 Confirmar satisfacción y resolver dudas. 
            p.mb-0 #[strong Ejemplo práctico:] un asesor llama 3 días después de recibir un electrodoméstico para asegurarse de que funciona correctamente.
          div(titulo="Correos electrónicos personalizados")
            p.mb-0 Recordar mantenimiento, promociones o productos complementarios.
            p.mb-0 #[strong Ejemplo práctico:] enviar un email con tips de uso del producto comprado y ofertas relacionadas
          div(titulo="Notificaciones automáticas")
            p.mb-0 Alertar sobre próximos servicios, vencimientos o novedades.
            p.mb-0 #[strong Ejemplo práctico:] app envía notificación sobre actualización de software o revisión preventiva.
          div(titulo="Encuestas postventa")
            p.mb-0 Medir la experiencia del cliente.
            p.mb-0 #[strong Ejemplo práctico:] encuesta NPS o CSAT enviada automáticamente tras la compra.
          div(titulo="Gestión proactiva de incidencias")
            p.mb-0 Resolver problemas antes de que escalen.
            p.mb-0 #[strong Ejemplo práctico:] CRM alerta que un cliente reportó retrasos en envíos anteriores y programa seguimiento inmediato.
      .col-8.col-lg-4.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_25.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0
        .cajon.color-acento-botones.p-5(data-aos="zoom-in-right")
          p.mb-0 Un seguimiento efectivo no solo soluciona problemas, sino que también refuerza la confianza, impulsa la fidelización y aumenta la probabilidad de recompras y recomendaciones.
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .tarjeta.color-terciario-cv.rounded-0.p-4.p-lg-5
          .row.align-items-center
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.mb-4.mb-lg-0
              figure.m-0
                img(src="@/assets/curso/tema1/img_11.svg", alt="Icono video", class="img-fluid w-100")
            .col-12.col-md-8.col-lg-10
              .row.justify-content-between.align-items-center.mb-4
                .col-12.col-lg-9.mb-3.mb-lg-0
                  p.mb-0 Con el fin de profundizar en las estrategias de postventa digital y la importancia del seguimiento posterior a la compra, consulte el siguiente material. Este recurso explica cómo la postventa fortalece la relación con el cliente y contribuye a la recompra y lealtad: 
                .col-12.col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qX4N28LpIQo" target="_blank")
                    span Ver video
                    i.fas.fa-file-download.ms-2
              .row.justify-content-between.align-items-center
                .col-12.col-lg-9.mb-3.mb-lg-0
                  p.mb-0 Para ampliar los conocimientos sobre la temática, consultar el siguiente recurso académico, el cual aborda de manera detallada los fundamentos, enfoques y aplicaciones relacionadas con este tema:
                .col-12.col-lg-auto.text-center
                  a.boton.color-acento-botones(href="https://revistacientifica.fce.unam.edu.ar/index.php/visiondefuturo/article/view/557/433" target="_blank")
                    span Ver video
                    i.fas.fa-file-download.ms-2
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
