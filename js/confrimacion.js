const medioPago=document.querySelector("#pago")
medioPago.addEventListener("change", (e) => {
            let datosPago = document.getElementById("datos-pago");
        datosPago.innerHTML=` 
        <label for="datosTarjetaCredito" class="col-sm-2 col-form-label"></label>
        <div class="col-sm-10" style="margin-bottom: 1rem">
        <span>Ingrese numero de tarjeta de crédito</span>
          <input type="text" class="form-control" id="inputPassword">
        </div>
        <label for="CVC" class="col-sm-2 col-form-label"></label>
        <div class="col-sm-10">
        <span>Ingrese CVC</span>
          <input type="password" class="form-control" id="inputPassword">
        </div>
        `;
    })

    const enviar=document.getElementById('enviar')
    enviar.addEventListener('click', ()=> {
        alert('Compra confirmada')
    })

    const limpiar=document.getElementById('limpiar')
    limpiar.addEventListener('click', () =>{
        let limpiarForm= document.getElementById('formulario')
        limpiarForm.innerHTML=`
        <fieldset id="formulario">
            <div class="input-group">
                <span class="input-group-text">Nombre y apellido</span>
                <input type="text" aria-label="First name" class="form-control">
                <input type="text" aria-label="Last name" class="form-control">
              </div>
              <br>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Dirección de Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">No compartiremos con nadie tu email</div>
          </div>
        
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Femenino
            </label>
          </div>
         
        <br>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">Acepto los términos y condiciones</label>
          </div>
        <br>
        <select class="form-select" aria-label="Default select example">
            <option selected>Provincia</option>
            <option value="Alemania">Buenos Aires</option>
            <option value="Argentina">Córdoba</option>
            <option value="Bélgica">Mendoza</option>
            <option value="3">Neuquén</option>
            <option value="3">Salta</option>
            <option value="3">Santa Fé</option>
            <option value="3">Tucumán</option>
          </select>
        <br>
        <select class="form-select" id="pago" aria-label="Default select example">
            <option selected>Método de Pago</option>
            <option value="Alemania">Visa Débito</option>
            <option value="Argentina">Visa Crédito</option>
            <option value="Bélgica">MasterCard Débito</option>
            <option value="3">MasterCard Crédito</option>
            <option value="3">American Express</option>
          </select>
          <div id="datos-pago"></div>
        
        <button type="button" class="btn btn-primary btn-sm espacio-botones" id="enviar">Enviar</button>
        <button type="button" class="btn btn-secondary btn-sm espacio-botones" id="limpiar">Limpiar</button>
    </fieldset>
  
`
    })