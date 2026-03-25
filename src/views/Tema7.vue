<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Niveles de cumplimiento

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los niveles de cumplimiento representan el grado en que una organización satisface los compromisos adquiridos con sus clientes, tanto en términos de calidad, tiempo, servicio y condiciones pactadas. Constituyen un indicador fundamental del desempeño empresarial y del nivel de confiabilidad que perciben los usuarios.
          br
          br
          |  En entornos competitivos, el cumplimiento no solo implica entregar un producto o servicio, sino hacerlo bajo los estándares prometidos y dentro de los plazos establecidos. Por ello, medir y gestionar adecuadamente estos niveles permite fortalecer la reputación corporativa, reducir reclamaciones y mejorar la experiencia del cliente.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_2.png', class="img-fluid")
      .col-12.col-lg-10.mb-0
        p.mb-3(data-aos="zoom-in-right") El nivel de cumplimiento se define como el grado de conformidad entre lo prometido por la organización y lo efectivamente entregado al cliente. Este concepto abarca aspectos como tiempos de respuesta, calidad del servicio, exactitud en la información, condiciones comerciales y resolución de solicitudes.
        .tarjeta.color-secundario-cv.p-4.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11.order-2.order-lg-1(data-aos="zoom-in-right")
              p.mb-0 Un alto nivel de cumplimiento genera confianza, credibilidad y fidelización, mientras que un bajo nivel puede ocasionar inconformidades, pérdida de clientes y afectación de la imagen corporativa. Por esta razón, el cumplimiento debe gestionarse como un compromiso estratégico y no únicamente operativo.
            .col-3.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema7/img_3.svg', class="img-fluid")
        p.mb-0(data-aos="zoom-in-right") Además, los niveles de cumplimiento están estrechamente relacionados con acuerdos de servicio (SLA), políticas internas y estándares de calidad definidos por la empresa.

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.2 Medición
    .mb-0 

    .tarjeta--bg-img.color-acento-botones-cv.rounded-3.p-0.mb-5.overflow-hidden(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src="@/assets/curso/tema7/img_4.png" class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
            p.mb-0 La medición de los niveles de cumplimiento constituye un proceso técnico y sistemático que permite evaluar de manera objetiva el desempeño de la organización frente a los compromisos contractuales y estándares de servicio definidos. Esta medición se fundamenta en la aplicación de indicadores clave de desempeño (KPI), métricas operativas y herramientas tecnológicas que garantizan trazabilidad, control y análisis de datos en tiempo real.

    .row.justify-content-center.align-items-center.mb-4
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_5.svg', class="img-fluid")
      .col-12.col-lg-11.mb-0
        p.mb-0(data-aos="zoom-in-right") Para asegurar precisión en los resultados, las empresas implementan sistemas de gestión como plataformas CRM (Customer relationship management), software de gestión de tickets, ERP (Enterprise resource planning) y tableros de control o dashboards analíticos. Estas herramientas permiten consolidar información proveniente de diferentes canales (correo electrónico, chat, redes sociales, call center y plataformas digitales), facilitando la visualización de métricas y la generación de reportes automatizados.

    p.mb-4(data-aos="zoom-in-right") Entre los principales indicadores utilizados para medir los niveles de cumplimiento se encuentran:

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-cv")
          div(titulo="Tiempo de respuesta (Response time)")
            p.mb-0 Mide el plazo promedio transcurrido entre la recepción de una solicitud y la primera respuesta emitida por la organización. Se calcula mediante registros automáticos en sistemas de atención y es fundamental para evaluar eficiencia operativa.
          div(titulo="Cumplimiento de entregas (On-time delivery rate)")
            p.mb-0 Indica el porcentaje de pedidos o servicios entregados dentro del plazo acordado con el cliente. Este indicador se obtiene mediante integración entre sistemas logísticos y plataformas de ventas, permitiendo identificar retrasos y cuellos de botella.
          div(titulo="Índice de satisfacción del cliente (CSAT)")
            p.mb-0 Se determina a través de encuestas digitales posteriores al servicio, valoraciones en línea o formularios automatizados. Proporciona una medida cuantitativa de la percepción del cliente respecto al cumplimiento de expectativas.
          div(titulo="Tasa de resolución en primer contacto (First contact resolution – FCR)")
            p.mb-0 Mide el porcentaje de casos solucionados sin necesidad de transferencias o escalamiento. Este indicador está directamente relacionado con la capacitación del personal y la eficacia de los protocolos de atención.
          div(titulo="Número de reclamaciones recurrentes")
            p.mb-0 Evalúa la frecuencia de incidencias repetitivas asociadas a un mismo proceso o servicio. Se analiza mediante minería de datos y categorización automática de casos, permitiendo detectar fallas estructurales
      .col-8.col-lg-4.order-1.order-lg-2.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_6.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_7.png', class="img-fluid")
      .col-12.col-lg-9.mb-0
        .row.justify-content-center.align-items-center.mb-3
          .col-2.col-lg-1.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
            figure.p-0
              img(src='@/assets/curso/tema7/img_8.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0
            p.mb-0(data-aos="zoom-in-right") Adicionalmente, algunas organizaciones incorporan métricas avanzadas como el net promoter score (NPS), análisis de tiempos de ciclo (cycle time), cumplimiento de acuerdos de nivel de servicio (SLA) y auditorías internas de calidad. Estas mediciones pueden integrarse en modelos de gestión como ISO 9001, Balanced scorecard o metodologías de mejora continua como Lean management y Six sigma.
        .tarjeta.color-acento-botones-cv.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 La medición constante y sistemática permite identificar desviaciones respecto a los estándares establecidos, anticipar riesgos operativos y diseñar planes de acción correctivos o preventivos. Asimismo, facilita la comparación de resultados frente a metas estratégicas internas, indicadores históricos y benchmarks del sector, promoviendo una cultura organizacional orientada a la excelencia y al mejoramiento continuo.

    Separador

    #t_7_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.3 Manejo
    .mb-0 

    .bg_img_10.mb-0

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema7/img_10.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 El manejo de los niveles de cumplimiento corresponde a la fase de intervención estratégica posterior a la medición. Mientras que la medición permite identificar el estado actual del desempeño, el manejo se enfoca en la toma de decisiones, la implementación de acciones correctivas y la consolidación de una cultura organizacional orientada al cumplimiento.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-4(data-aos="zoom-in-right")
          p.mb-0 Esta etapa implica convertir los resultados de los indicadores en planes concretos de mejora, alineados con los objetivos estratégicos de la organización. Su propósito no es únicamente corregir desviaciones, sino prevenir su recurrencia y fortalecer la sostenibilidad operativa.
        .col-12.col-lg-10.mb-4(data-aos="zoom-in-right")
          .subtitulo-destacado.mb-0(data-aos="zoom-in-right")
            .subtitulo-destacado__fondo
              h4.subtitulo-destacado__texto Enfoques estratégicos para el manejo del cumplimiento
        .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
          p.mb-0 El manejo efectivo se desarrolla bajo tres enfoques principales: preventivo, correctivo y estratégico.

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 5.
        |  Enfoques de gestión del cumplimiento
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption 
            p <b>Nota.</b> Adaptada del ciclo PHVA de W. Edwards Deming (1986), la norma ISO 9001:2015 y el modelo balanced scorecard de Robert Kaplan y David Norton (1996).
          thead
            tr
              th.col-auto.col-lg-2 Enfoque
              th.col-auto.col-lg-2 Objetivo
              th.col-auto.col-lg-auto Aplicación práctica
              th.col-auto.col-lg-auto Beneficios clave
              th.col-auto.col-lg-auto Herramientas / Indicadores
          tbody
            tr
              td.text-start Preventivo.
              td.text-start Evitar desviaciones antes de que ocurran.
              td.text-start Ajustar capacidad logística en temporadas de alta demanda; planificar inventarios según previsión de ventas.
              td.text-start Minimiza riesgos, reduce reprocesos y mantiene estándares operativos.
              td.text-start Pronósticos de demanda, análisis de capacidad, checklists preventivos.
            tr
              td.text-start Correctivo.
              td.text-start Resolver incumplimientos detectados.
              td.text-start Reasignar rutas de distribución ante retrasos reiterados; corregir errores de facturación.
              td.text-start Restaura niveles de servicio, mejora satisfacción del cliente y evita escalamiento de problemas.
              td.text-start Registro de incidencias, CRM, análisis de desviaciones, auditorías internas.
            tr
              td.text-start Estratégico.
              td.text-start Integrar el cumplimiento a la planeación corporativa.
              td.text-start Incorporar metas de cumplimiento en el cuadro de mando integral; definir KPIs de cumplimiento en planes estratégicos.
              td.text-start Alinea desempeño con objetivos organizacionales, fortalece cultura de responsabilidad y sostenibilidad.
              td.text-start Balanced scorecard, indicadores estratégicos, informes de gestión periódicos.
            tr
              td.text-start Proactivo.
              td.text-start Anticipar riesgos y optimizar procesos antes de que se conviertan en problemas.
              td.text-start Implementar simulaciones de escenarios críticos o pruebas de estrés en procesos operativos.
              td.text-start Reduce pérdidas, incrementa eficiencia y fomenta innovación en procesos.
              td.text-start Modelos de simulación, análisis de riesgo, revisiones de procesos.
            tr
              td.text-start Integrador.
              td.text-start Vincular cumplimiento con gestión de talento y calidad.
              td.text-start Incluir indicadores de cumplimiento en evaluaciones de desempeño y planes de capacitación.
              td.text-start Fortalece la cultura de calidad, compromiso del personal y consistencia en resultados.
              td.text-start KPIs de desempeño, evaluaciones 360°, auditorías de calidad.

    p.mb-4(data-aos="zoom-in-right") Cuando los indicadores muestran resultados por debajo del estándar, se debe activar un protocolo formal de mejora:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.color-secundario-v.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema7/img_11.svg', class="img-fluid") 
          p.mb-0 #[strong Diagnóstico técnico:] Análisis comparativo entre meta y resultado real, identificando brechas porcentuales.
      .col-12.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.color-secundario-v.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema7/img_12.svg', class="img-fluid") 
          p.mb-0 #[strong Análisis de causa raíz:] Aplicación de herramientas como matriz causa-efecto o análisis de procesos para determinar origen estructural del incumplimiento.
      .col-12.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.color-secundario-v.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema7/img_13.svg', class="img-fluid") 
          p.mb-0 #[strong Plan de mejora documentado:] Definición de responsables, cronograma, recursos asignados e indicadores de control.
      .col-12.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.color-secundario-v.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema7/img_14.svg', class="img-fluid") 
          p.mb-0 #[strong Evaluación de impacto:] Medición posterior para validar efectividad de las acciones implementadas.

    .bg_img_11.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_15.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          .subtitulo-destacado.mb-4(data-aos="zoom-in-right")
            .subtitulo-destacado__fondo
              h4.subtitulo-destacado__texto Integración del cumplimiento en la gestión organizacional
          p.mb-4(data-aos="zoom-in-right") Para evitar que el manejo sea reactivo, el cumplimiento debe integrarse en:
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-7
                  ul.list-unstyled.cita-decorada__texto.mb-3
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Planeación estratégica anual.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Evaluación de desempeño del personal.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Gestión de riesgos operativos.
                    li.d-flex.align-items-start.mb-0
                      i.fa-solid.fa-check.me-2.flex-shrink-0(style="color:#21C9B8; font-size: 15px; line-height: 1.5;").mb-0
                      span Políticas de calidad y servicio.
                  p.cita-decorada__texto.mb-2 Esto permite que el cumplimiento deje de ser un indicador aislado y se convierta en un eje transversal de la organización.
                .col-12.col-lg-5.d-none.d-lg-block 
                  figure
                    img(src='@/assets/curso/tema7/img_16.png', class="cita-decorada__imagen-flotante-2")
      .subtitulo-destacado.mb-4(data-aos="zoom-in-right")
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Impacto del manejo efectivo

      p.mb-5(data-aos="zoom-in-right") Un manejo técnico y estratégico de los niveles de cumplimiento:

      .custom-slider.mb-5(data-aos="zoom-in-right")
        SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--06.mb-3
            h5.text-center.mb-4 Disminuye variabilidad en los procesos.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--07.mb-3
            h5.text-center.mb-4 Reduce costos por reprocesos y compensaciones.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--08.mb-3
            h5.text-center.mb-4 Mejora estabilidad operativa.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--09.mb-3
            h5.text-center.mb-4 Incrementa la fidelización del cliente.
          .tarjeta--fondo-img-1.h-100(data-aos="zoom-out-up")
            .tarjeta--10.mb-3
            h5.text-center.mb-4 Fortalece la ventaja competitiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="flip-left")
          h5 Figura 4.
          |    Trámite de solicitudes – Procesos clave
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema7/img_23.svg', class="img-fluid d-none d-lg-block").mb-3
          img(src='@/assets/curso/tema7/img_24.svg', class="img-fluid d-block d-lg-none").mb-3
          figcaption <b>Nota.</b> Sena 2026.
</template>

<script>
export default {
  name: 'Tema7',
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
