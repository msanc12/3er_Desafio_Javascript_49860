class Visita {
    constructor(Nom, Ape, Doc) {
        this.Nom = Nom;
        this.Ape = Ape;
        this.Doc = Doc;
    }
}

let oMensaje = document.getElementById("divMje");

function Registrar() {
    let ListaNegra = [
        {id:1, nombre:"Omega", DNI:"12345678", Motivo:"Escapó de Kamino", Foto: "https://static.wikia.nocookie.net/esstarwars/images/c/c6/OmegaDisneyPlusAvatar.png"},
        {id:2, nombre:"Fennec Shand", DNI:"33333333", Motivo:"Cazarrecompensas en contra del Imperio", Foto:"https://static.wikia.nocookie.net/esstarwars/images/9/9f/TBBF_Fennec_Shand.png"},
        {id:3, nombre:"Capitán Rex", DNI:"44444444", Motivo:"No cumplió con la Orden 66", Foto:"https://static.wikia.nocookie.net/esstarwars/images/8/89/Captain_Rex_old.png"},
    ];

    let vs_Nombre = document.getElementById('firstName');
    let vs_Apellido = document.getElementById('lastName');
    let vs_DNI = document.getElementById('DNI');

    var buscarListaNegra = ListaNegra.filter(item => item.DNI == vs_DNI.value);

    //console.log(buscarListaNegra);

    let result = document.getElementById("resultado");

    if (buscarListaNegra.length != 0)
    {
        oMensaje.innerHTML = '<br><div class="alert alert-danger" role="alert">Alerta revisar el aviso! Aplicar Orden 66</div>';
        //alert("Alerta revisar el aviso");
        var dni = buscarListaNegra[0].DNI;
        var nombre = buscarListaNegra[0].nombre;
        var motivo = buscarListaNegra[0].Motivo;
        var foto = buscarListaNegra[0].Foto;
        result.innerHTML = `<div class="card" style="width: 18rem;"><img class="card-img-top" src="${foto}" ><div class="card-body"><h5 class="card-title">${nombre}</h5><p class="card-text">"${motivo}"</p></div></div>`;
    }else{
        oMensaje.innerHTML = '<br><div class="alert alert-success" role="alert">Registro de visita realizado.</div>';
        //alert("Visita Registrada");
        result.innerHTML = `<div class="card"><img class="card-img-top img-thumbnail" src="https://m.media-amazon.com/images/I/41Hh5ZiV2DL._AC_.jpg" width="50px" ><div class="card-body"><h5 class="card-title">Registrado:<br>  ${vs_Nombre.value} ${vs_Apellido.value}</h5><p class="card-text">"${vs_DNI.value}"</p></div></div>`;

        GuardarVisita(vs_Nombre.value, vs_Apellido.value, vs_DNI.value);
    }
    
}

function GuardarVisita(oNom, oApe, oDoc)
{
    let NuevaVisita = new Visita(oNom, oApe, oDoc);
    let visitas = JSON.parse(localStorage.getItem("visita")) || [];
    visitas.push(NuevaVisita);
    localStorage.setItem("visita", JSON.stringify(visitas));
    
}

function ListarVisita()
{
    


}

function Validar(){
    let valCampos = "";
    let vs_Nombre = document.getElementById('firstName').value;
    let vs_Apellido = document.getElementById('lastName').value;
    let vs_DNI = document.getElementById('DNI').value;
    if (vs_Nombre == "")
    {
        valCampos = valCampos + " Ingrese Nombre.";
    }else{
        valCampos = valCampos + " ";
    }
    if (vs_Apellido == "")
    {
        valCampos = valCampos + " Ingrese Apellido.";
    }else{
        valCampos = valCampos + " ";
    }
    if (vs_DNI == "")
    {
        valCampos = valCampos + " Ingrese DNI.";
    }else{
        valCampos = valCampos + " ";
    }
    return valCampos;
}

function Ini()
{
    var validacion = Validar();
    if (validacion)
    {
        //console.log(validacion);
        if (validacion.trim().length > 0)
        {
            oMensaje.innerHTML = `<br><div class="alert alert-warning" role="alert">${validacion}</div>`;
            //alert(validacion);
            return;
        }else{
            oMensaje.innerHTML = '';
            Registrar();
        }
    }else{
        return;
    }
}

document.getElementById("btn_RegistrarValidar").onclick = Ini;
