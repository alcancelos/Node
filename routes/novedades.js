var express = require('express');
var router = express.Router();
var novedades = [
    {
        titulo: 'REPRO 2',
        fecha: '26/10/2021',
        contenido: 'El sistema para que las empresas tramiten, a través del sitio web de la AFIP, la inscripción al programa REPRO 2 estará habilitado entre el 25 y el 31 de octubre de 2021 inclusive. El Programa de Recuperación Productiva 2 es una herramienta diseñada por el Gobierno nacional para sostener el empleo en sectores con dificultades económicas en el marco de la pandemia del COVID-19.'
    }, {
        titulo: 'Programa Registradas',
        fecha: '27/09/2021',
        contenido: 'Con el objetivo de promover la formalización del empleo de las trabajadoras de casas particulares, el Gobierno Nacional pone en marcha Registradas. El programa consiste en la transferencia de una suma entre el 30% y 50% del salario durante 6 meses a las nuevas trabajadoras que sean registradas por sus empleadores. La iniciativa busca reducir la informalidad del sector, garantizar la permanencia en un empleo registrado y promover la bancarización. La inscripción al programa debe ser solicitada por la parte empleadora a través de la página web de la AFIP hasta el 31 de diciembre.'
    }, {
        titulo: 'Cambios en el Impuesto a las Ganancias',
        fecha: '24/09/2021',
        contenido: 'La Administración Federal de Ingresos Públicos (AFIP) reglamentó el incremento del nivel de ingresos salariales a partir del cual las trabajadoras y los trabajadores empiezan a pagar Impuesto a las Ganancias. La modificación comenzará a regir con los salarios de septiembre que se pagan en octubre. De esta forma, quienes perciban una remuneración bruta mensual de hasta $175.000 no se verán alcanzados por el tributo. La medida beneficia a más de 1.200.000 personas. La normativa también excluye del cálculo del impuesto al pago del Salario Anual Complementario que se abona en diciembre.'
    }
];
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('novedades', {
        title: 'OP Jurídico Contable',
        isNovedades: true,
        Nov: novedades
    });
});

module.exports = router;