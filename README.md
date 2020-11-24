### enlamano.js


#### instalación

```bash
npm install enlamano.js
// o con yarn
yarn add enlamano.js
```



#### como usar


```javascript
import enlamano from 'enlamano.js';

const enlamano = require("enlamano.js");

const mano = enlamano(
    "<usuario>",
    "<paswword>",
    "<URL_ENTORNO>"
);

// tomar en cuenta que los parámetros deben ir con la primera
// letra en mayúsculas
let params = {
    Documento: "11111111",
    TipoDocumento: "IDE",
    DatosEntrada: {
        Salario: 24000,
        Sexo: 1,
        Region: 1,
        Edad: 42,
    },
};

const r = mano.request(params);

r.then((data) => {
    console.log(data);
});

```

#### datos de entrada
- Salario - double
- Sexo - int (1 - Mujer, 2 - Hombre)
- Region - int (1 - Montevideo, 2 - Interior)
- Edad - int




#### ejemplo de respuestas

```javascript
{
  accion: 'SIN OFERTA PARA ESTE CLIENTE',
  oferta: '',
  tasaMenosDe12: '',
  tasa12OMas: '',
  financiacion: [],
  documento: '11111111',
  tipoDocumento: 'IDE'
}
```


```javascript
{
  accion: 'CALCULAR OFERTA',
  oferta: '18000',
  tasaMenosDe12: '156',
  tasa12OMas: '163',
  financiacion: [
    { coutas: 6, oferta: 6000, valorCuota: 1389 },
    { coutas: 6, oferta: 8000, valorCuota: 1846 },
    { coutas: 8, oferta: 8000, valorCuota: 1506 },
    { coutas: 10, oferta: 8000, valorCuota: 1306 },
    { coutas: 6, oferta: 10000, valorCuota: 2303 },
    { coutas: 8, oferta: 10000, valorCuota: 1878 },
    { coutas: 10, oferta: 10000, valorCuota: 1629 },
    { coutas: 12, oferta: 10000, valorCuota: 1467 },
    { coutas: 6, oferta: 12000, valorCuota: 2749 },
    { coutas: 8, oferta: 12000, valorCuota: 2239 },
    { coutas: 10, oferta: 12000, valorCuota: 1940 },
    { coutas: 12, oferta: 12000, valorCuota: 1746 },
    { coutas: 15, oferta: 12000, valorCuota: 1620 },
    { coutas: 8, oferta: 15000, valorCuota: 2795 },
    { coutas: 10, oferta: 15000, valorCuota: 2422 },
    { coutas: 12, oferta: 15000, valorCuota: 2180 },
    { coutas: 15, oferta: 15000, valorCuota: 2021 },
    { coutas: 10, oferta: 18000, valorCuota: 2903 },
    { coutas: 12, oferta: 18000, valorCuota: 2613 },
    { coutas: 18, oferta: 18000, valorCuota: 2252 }
  ],
  documento: '11111111',
  tipoDocumento: 'IDE'
}
```

#### errores

```javascript
{
  errores: [ { codigo: 'Documento', mensaje: 'El documento es requerido.' } ]
}
```

hay otro tipo de errores que se controlan por códigos http

- 401: Unauthorized ​-​ Error de credenciales
- 403: Unauthorized ​-​ Request rechazado por temas de seguridad
- 404: Not found ​-​ URL incorrecta
- 415: Unsupported media type ​-​ (si no se envía un json)
- 412: Unprocessable entity ​-​ Generalmente asociado a un modelo incorrecto500: Internal server error ​-​ Asociado al error de ejecución mencionado en el body
- 503: Service unavailable ​-​ El servidor no está respondiendo