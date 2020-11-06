console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerData);

function traerData(){
    console.log('datos pruesto');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'consulta.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';
            for(let item of datos){
                respuesta.innerHTML += `
                <tr>
                <td>${item.verFactura}</td>
                <td>${item.nombres}</td>
                <td>${item.direccion}</td>
                <td>${item.cuenta}</td>
                <td>${item.codigo}</td>
                <td>${item.numeroMedidor}</td>
                <td>${item.deuda}</td>
                <td>${item.mesesPendientes}</td>
                <td>${item.fechaUltimaPago}</td>
                <td>${item.fechaVencimiento}</td>
                <td>${item.pagarBancaVirtual}</td>
              </tr>
                `
            }
        }
    }
}