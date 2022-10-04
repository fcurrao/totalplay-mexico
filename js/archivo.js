
// /////////////////////////////////////////////////////////////
// //                  chatbot
// /////////////////////////////////////////////////////////////


const botonRobot = document.getElementById(`chatboot1`)
const robotitoapagado = document.getElementById(`robot2`)
const botonRobotCerrar = document.getElementById(`botoncerrar`)
let sound = new Audio('../public_html/sound/pop.mp3')
let statusSound = false;

botonRobot.addEventListener("click", () => {

    if (statusSound == false) {
        sound.play();
        setTimeout(function () {
            sound.pause();
        }, 900);
    }

    robotitoapagado.className += " noseve nomasrobot";
    statusSound = true;

})



botonRobotCerrar.addEventListener("click", () => {
    sound.play();
    setTimeout(function () {
        sound.pause();
    }, 900);
    statusSound = false

    robotitoapagado.classList.remove('noseve');
    robotitoapagado.classList.remove('nomasrobot');
})


////////////////////////chat 

const areachat = document.getElementById("chat")
const botonenviarChat = document.getElementById("enviarChat")



botonenviarChat.addEventListener("click", () => {
    var valorUsuario = document.getElementById("userchat").value;
    areachat.innerHTML += ` &nbsp;  ${valorUsuario}   `
    document.getElementById("userchat").value = ""
})














///////////////////////////////////////////////////////////
//  boton mas
///////////////////////////////////////////////////////////

const contenedorPlus = document.getElementById('divpromo1');
var statusContenedor = false;



const ejecutandose = () => {
    if (statusContenedor == false) {

        contenedorPlus.innerHTML = `
        <div class="divpromox">
        <div class="df">
            <img class="imgmbps" src="../public_html/img/50.png" alt="mbps" width="90px" height="65px">
            <p class="textpromos">+ 80 Canales + 50 Canales HD</p>
        </div>
        <div>
            <buton class="boton1fijo cccc">LO QUIERO</buton>
            



        </div>
    </div>
    

        ` 
        
    } if (statusContenedor == true) {

        contenedorPlus.innerHTML = `
<div id="divpromo2" class="divpromo2">
<div class="divpromox2">
    <div class="df22">
        <img class="imgmbps" src="../public_html/img/50.png" alt="mbps" width="90px" height="65px">
        <p class="textpromos">+ 80 Canales + 50 Canales HD</p>
    </div>



    <buton class="boton1fijo botonplus">LO QUIERO</buton>

    <div>
        <div id="seveono" class="parteoculta">
            <div class="dispflex">
                <p>TELEFONÍA FIJA: Llamadas ilimitadas MEX / EUA / CAN / Incluye llamadas ilimitadas a
                    celular</p><br></br>


                <div class="other">
                    <img clas="imgcc" src="../public_html/img/wifi (1).svg"></img> &nbsp;&nbsp;Conexión a
                    Internet


                    <div class="other2"> <img clas="imgcc" src="../public_html/img/ui.svg"></img>
                    </div>
                    <div class="other3">
                        <p> Llamadas ilimitadas </p>
                        <p class="tt">Nacionales | A EUA y Canadá | A móviles </p>
                    </div>
                </div>

            </div>


        </div>
        
    </div>

</div>

</div>
 


`  

    }
}



const botonprueba = document.getElementById('divconteplus');
botonprueba.addEventListener('click', () => {
    if(statusContenedor == false){
        botonprueba.innerHTML =  `<div id="divless" class="botonmas plusss less"><p id="botonmasplus" class="menoss"> -</p></div>`
        statusContenedor = true;
    }else {
        statusContenedor = false;
        botonprueba.innerHTML =  `<div id="divplus" class="botonmas plusss"><p id="botonmasplus" class="plus">+</p></div>`
    }
    
    console.log("statusContenedor", statusContenedor)
    ejecutandose()

    })


 
















    ///////////////////////////////////////////////////////////



    // const seveono = document.getElementById('seveono');
    // const divbotonmas = document.getElementById('divplus');
    // const botonmas = document.getElementById('botonmasplus');
    // const divpromox = document.getElementById('divpromox');
    // var botonmenos2 = document.getElementById("btnm");

    // const botonmenos = document.getElementById("btnm");

    // console.log("botonmasplus", botonmas)


    // function abrirpromo() {
    //     divpromo1.innerHTML = `
    
    
    // `
    //     var botonmenos2 = document.getElementById("btnm2");
    //     console.log("boton menos", botonmenos)
    // }


    // function cerrarpromo() {
        //     divpromo1.innerHTML = `
        //     <div class="divpromo">
        //     <div class="df">
        //         <img class="imgmbps" src="../public_html/img/50.png" alt="mbps" width="90px" height="65px">
        //         <p class="textpromos">+ 80 Canales + 50 Canales HD</p>
        //     </div>
        //     <div>
        //         <buton class="boton1fijo">LO QUIERO</buton>
        //       <div id="divplus" class="botonmas">
        //             <p id="botonmasplus" class="plus">+</p>
        //         </div>
        //          <!--  <div id="seveono">
        //             <p id="btnm" class="menos">-</p>
        //         </div> -->

        //     </div>
        // </div>


        // `
    // }


    // botonmas.addEventListener('click', () => {
    //     abrirpromo()
    //     console.log("boton menos", botonmenos)
    //     var botonmenos2 = document.getElementById("btnm2");

    // })

    // botonmenos.addEventListener('click', () => {
    //     alert("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    //     // cerrarpromo()
    // })


    // botonmenos2.addEventListener('click', () => {
    //     alert("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    //     // cerrarpromo()
    // })




