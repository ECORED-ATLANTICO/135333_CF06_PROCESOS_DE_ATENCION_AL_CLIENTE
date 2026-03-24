<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Postventa digital
    
    .bg_img_8.mb-0

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema6/img_2.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 La postventa digital hace parte fundamental de la experiencia del cliente en entornos virtuales. No se limita a resolver problemas después de la compra, sino que integra seguimiento, acompañamiento y generación de valor mediante herramientas tecnológicas. En un mercado altamente digitalizado, esta etapa influye directamente en la reputación online, la fidelización y la recompra.
      
      .row.justify-content-center.align-items-center.mb-3
        .col-2.col-lg-2.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema6/img_3.png', class="img-fluid")
        .col-12.col-lg-8.mb-0
          p.mb-0(data-aos="zoom-in-right") Las organizaciones que gestionan adecuadamente su postventa digital logran fortalecer la confianza, mejorar la percepción de marca y convertir clientes satisfechos en promotores activos. Por ello, no debe considerarse un proceso reactivo, sino una estrategia continua de relación.

      Separador

      #t_6_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.1 Definición
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema6/img_4.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          p.mb-3(data-aos="zoom-in-right") La postventa digital es el conjunto de acciones, procesos y herramientas tecnológicas que una empresa implementa después de concretar una venta a través de canales digitales, con el fin de garantizar satisfacción, resolver incidencias y mantener la relación con el cliente.
          .tarjeta.color-primario-cv.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Incluye atención mediante chat en línea, correo electrónico, redes sociales, plataformas de tickets, asistentes virtuales y sistemas CRM. Su objetivo no es únicamente solucionar problemas, sino acompañar al cliente durante el uso del producto o servicio.
          p.mb-0(data-aos="zoom-in-right") Además, permite recopilar datos estratégicos sobre comportamiento, nivel de satisfacción y oportunidades de mejora, convirtiéndose en una fuente clave para la toma de decisiones comerciales.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Etapas
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La postventa digital no es una acción aislada, sino un proceso estructurado que se desarrolla mediante etapas organizadas y secuenciales. Cada fase cumple una función específica dentro de la experiencia del cliente y contribuye a fortalecer la percepción de confianza, eficiencia y profesionalismo de la empresa.

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_6.svg', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-0(data-aos="zoom-in-right") Una adecuada gestión por etapas permite garantizar coherencia en la comunicación, reducir tiempos de respuesta y ofrecer soluciones oportunas. Además, facilita el seguimiento interno, la medición de resultados y la mejora continua del servicio digital. A continuación, se presentan las principales etapas que conforman la postventa digital:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Etapas de la postventa digital
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Sena, 2026.
        thead
          tr
            th.col-auto.col-lg-3 Etapa
            th.col-auto.col-lg-5 Descripción
            th.col-auto.col-lg-auto Finalidad
        tbody
          tr
            td.text-start Confirmación de compra.
            td.text-start Envío automático e inmediato de comprobantes digitales, factura electrónica, resumen del pedido y condiciones de entrega. Incluye detalles claros sobre tiempos estimados, políticas de cambio y canales de contacto.
            td.text-start Generar seguridad en la transacción, evitar incertidumbre y reafirmar la confianza del cliente en el proceso de compra.
          tr
            td.text-start Seguimiento.
            td.text-start Monitoreo continuo del estado del pedido o servicio mediante correos electrónicos, mensajes de texto o notificaciones en la plataforma. Permite informar avances, posibles retrasos o cambios en la entrega.
            td.text-start Mantener informado al cliente, reducir ansiedad frente al proceso y demostrar compromiso con el cumplimiento.
          tr
            td.text-start Soporte y atención
            td.text-start Gestión de consultas, reclamos o solicitudes a través de chat en línea, redes sociales, correo electrónico o sistemas de tickets. Incluye respuestas personalizadas y soluciones documentadas.
            td.text-start Resolver inquietudes de manera ágil, minimizar experiencias negativas y fortalecer la percepción de respaldo empresarial.
          tr
            td.text-start Retroalimentación
            td.text-start Solicitud de opinión mediante encuestas digitales, valoraciones en la plataforma o comentarios en redes sociales. Se analizan los resultados para detectar fallas o fortalezas.
            td.text-start Medir el nivel de satisfacción, identificar oportunidades de mejora y optimizar procesos internos.
          tr
            td.text-start Fidelización
            td.text-start Implementación de estrategias posteriores a la compra como envío de promociones personalizadas, contenido educativo, programas de puntos o beneficios exclusivos. 
            td.text-start Incentivar la recompra, fortalecer la relación a largo plazo y convertir clientes satisfechos en promotores de la marca.
    
    .bg_img_9.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-5
              .row.justify-content-center.align-items-center
                .col-12.col-lg-8.mb-4.mb-lg-0
                  p.mb-4 Escucha el podcast <strong>“Charlas que venden”</strong> y su episodio
                  TarjetaAudio.color-primario-o.mb-0(
                    texto="<h4 class='mb-0'>Postventa digital y fidelización del cliente</h4>"
                    :audio="require('@/assets/curso/tema5/img_15.png')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = true"
                    style="border: none !important; padding: 0 !important; background: transparent !important;"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .col-8.col-lg-4.d-none.d-lg-block.position-relative
                  figure
                    img(src='@/assets/curso/tema5/img_15.png', class="cita-decorada__imagen-flotante-1")

      Separador

      #t_6_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.3 Proceso y procedimientos
      .mb-0 

      p.mb-0(data-aos="zoom-in-right") El proceso de postventa digital requiere lineamientos claros para garantizar coherencia, rapidez y calidad en la atención.
      p.mb-5(data-aos="zoom-in-right") No basta con responder mensajes; es necesario establecer protocolos definidos. Es necesario establecer:

      .subtitulo-destacado.mb-5(data-aos="zoom-in-right")
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Proceso general

    TabsB.color-secundario.mb-5(data-aos="zoom-in-right")
      .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Recepción del requerimiento")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-9.order-2.order-lg-1
            p.mb-0 El cliente contacta a la empresa mediante canales digitales como chat, correo o redes sociales. El sistema debe generar confirmación automática de recepción.
          .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_9.svg', class="img-fluid")
      .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Registro en plataforma digital")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-9.order-2.order-lg-1
            p.mb-0 La solicitud se documenta en un sistema CRM o herramienta de gestión de tickets para asegurar trazabilidad y control de tiempos.
          .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_10.svg', class="img-fluid")
      .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Análisis y clasificación")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-9.order-2.order-lg-1
            p.mb-0 Se identifica el tipo de caso (consulta, reclamo, soporte técnico o devolución) y se asigna al área correspondiente.
          .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_11.svg', class="img-fluid")
      .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Respuesta y solución")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-9.order-2.order-lg-1
            p.mb-0 Se proporciona solución clara, detallada y documentada, respetando tiempos establecidos en los acuerdos de servicio (SLA). 
          .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_12.svg', class="img-fluid")
      .py-4.py-md-5.tarjeta--bg-img.color-acento-contenido-cv(titulo="Seguimiento y cierre")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-9.order-2.order-lg-1
            p.mb-0 Se verifica que el cliente esté satisfecho y se registra el caso como cerrado, dejando evidencia digital para auditoría.
          .col-4.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_13.svg', class="img-fluid")

    .subtitulo-destacado.mb-5(data-aos="zoom-in-right")
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Procedimientos

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_14.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        p.mb-4(data-aos="zoom-in-right") La postventa digital requiere la implementación de procedimientos estandarizados que garanticen coherencia, calidad y rapidez en la atención al cliente. No basta con disponer de canales digitales; es necesario establecer lineamientos claros que orienten la actuación del personal y el uso de herramientas tecnológicas.
        .row.justify-content-center.align-items-center.mb-0
          .col-2.col-lg-1.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema6/img_15.png', class="img-fluid")
          .col-12.col-lg-11.mb-0
            p.mb-0(data-aos="zoom-in-right") Estos procedimientos permiten organizar el flujo de trabajo, asegurar el cumplimiento de tiempos de respuesta y mantener un control adecuado sobre cada caso atendido. Además, contribuyen a fortalecer la experiencia del cliente, ya que promueven respuestas consistentes, soluciones efectivas y protección de la información. A continuación, se presentan los principales procedimientos que sustentan una gestión eficiente de la postventa digital:


    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Procedimientos clave en la postventa digital
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Sena, 2026.
        thead
          tr
            th.col-auto.col-lg-3 Procedimiento
            th.col-auto.col-lg-5 Descripción
            th.col-auto.col-lg-auto Impacto en la experiencia
        tbody
          tr
            td.text-start Protocolos de respuesta
            td.text-start Establecer tiempos máximos y estándares de comunicación digital.
            td.text-start Mejora la percepción de eficiencia.
          tr
            td.text-start Automatización
            td.text-start Uso de respuestas automáticas y chatbots para consultas frecuentes.
            td.text-start Reduce tiempos de espera.
          tr
            td.text-start Escalamiento de casos
            td.text-start Transferencia a niveles superiores cuando el caso lo requiere.
            td.text-start Garantiza solución adecuada.
          tr
            td.text-start Registro y análisis de datos
            td.text-start Monitoreo de métricas como tiempo de respuesta y satisfacción.
            td.text-start Permite mejora continua.
          tr
            td.text-start Protección de datos
            td.text-start Aplicación de políticas de seguridad y confidencialidad digital.
            td.text-start Genera confianza y cumplimiento normativo.
</template>

<script>
export default {
  name: 'Tema6',
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
