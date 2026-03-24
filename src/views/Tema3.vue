<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Resolución de conflictos 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-v.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La resolución de conflictos es una competencia esencial para cualquier organización orientada al cliente. Se enfoca en manejar desacuerdos o insatisfacciones de manera constructiva, evitando escaladas y fortaleciendo la confianza. Implementar técnicas adecuadas permite restaurar relaciones y asegurar la continuidad de la interacción comercial.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Concepto
    .mb-0 
    
    .bg_img_5.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema3/img_3.png', class="img-fluid")
        .col-12.col-lg-9.mb-0
          p.mb-3(data-aos="zoom-in-right") La resolución de conflictos se refiere al conjunto de procesos que permiten identificar, gestionar y solucionar discrepancias entre clientes, proveedores o empleados de manera efectiva. Su objetivo es minimizar impactos negativos sobre la satisfacción del cliente, la imagen de la empresa y las relaciones comerciales.
          .tarjeta.color-primario-cv.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-11.order-2.order-lg-1(data-aos="zoom-in-right")
                p.mb-0 Una gestión eficaz de conflictos no solo restaura la relación, sino que también fortalece la lealtad del cliente, fomenta la confianza y puede convertirse en una ventaja competitiva si la resolución es percibida como rápida, justa y transparente.
              .col-3.col-lg-1.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema3/img_4.svg', class="img-fluid")

      Separador

      #t_3_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.2 Técnicas
      .mb-0 

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema3/img_5.png')
        .bloque-texto-t__texto.col-9.mb-0
          p.mb-0 En la gestión profesional de conflictos, es fundamental utilizar técnicas que se adapten tanto al tipo de problema como al perfil del cliente involucrado. La aplicación adecuada de estas herramientas permite transformar situaciones potencialmente negativas en oportunidades de mejora, fortalecer la confianza y proteger la relación comercial. La siguiente tabla describe las principales técnicas, su propósito y ejemplos de cómo se aplican en la práctica:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Estrategias clave para el manejo de conflictos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> Adaptado de Fisher, R., Ury, W., & Patton, B., (2011). 
        thead
          tr
            th.col-auto.col-lg-3 Técnica
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Ejemplo práctico
        tbody
          tr
            td.text-start Negociación.
            td.text-start Consiste en establecer un diálogo directo con las partes involucradas para llegar a un acuerdo que sea aceptable para todos. Esta técnica busca satisfacer los intereses de las partes sin perjudicar la relación a largo plazo.
            td.text-start Un cliente solicita la devolución de un electrodoméstico que presenta un defecto. El asesor negocia un reemplazo inmediato y, adicionalmente, ofrece entrega gratuita para mantener la satisfacción del cliente.
          tr
            td.text-start Mediación.
            td.text-start Implica la intervención de un tercero neutral que facilita la comunicación entre las partes en conflicto, ayudando a que encuentren soluciones mutuamente beneficiosas.
            td.text-start Un retraso en la entrega de un pedido genera malestar. Un mediador del área de atención al cliente coordina entre logística y el cliente, proponiendo una nueva fecha de entrega y una compensación simbólica, evitando escalamiento del conflicto.
          tr
            td.text-start Escucha activa.
            td.text-start Consiste en prestar atención plena al cliente, validar sus emociones y comprender sus necesidades reales. Esto permite identificar la raíz del conflicto y generar soluciones precisas.
            td.text-start El cliente reporta un error en la factura. El asesor escucha cuidadosamente todos los detalles, reformula el problema para confirmar entendimiento y ofrece la corrección de manera inmediata.
          tr
            td.text-start Compromiso.
            td.text-start Busca soluciones intermedias donde ambas partes ceden en algunos aspectos, alcanzando un acuerdo equilibrado que mantenga la relación y genere satisfacción parcial para todos.
            td.text-start Un cliente desea cambiar un producto fuera de plazo. La empresa ofrece conservar el producto actual; pero aplica un descuento en la siguiente compra, asegurando que ambas partes se beneficien.
          tr
            td.text-start Solución proactiva.
            td.text-start Se basa en anticipar problemas antes de que se conviertan en conflictos formales y ofrecer alternativas preventivas. Esta técnica reduce el impacto negativo y mejora la percepción del cliente sobre la empresa.
            td.text-start La empresa detecta retrasos recurrentes en la entrega de ciertos pedidos. Antes de que los clientes reclamen, envía notificaciones informando del retraso y ofrece fechas alternativas de entrega con prioridad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="flip-left")
          h5 Figura 3.
          |    Técnicas de resolución de conflictos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema3/img_6.svg', class="img-fluid d-none d-lg-block").mb-5
          img(src='@/assets/curso/tema3/img_7.svg', class="img-fluid d-block d-lg-none").mb-5
          figcaption <b>Nota.</b> Sena 2026.

</template>

<script>
export default {
  name: 'Tema3',
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
