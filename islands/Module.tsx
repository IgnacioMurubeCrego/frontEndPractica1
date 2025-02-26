import { useSignal } from "@preact/signals";
import type { FunctionalComponent } from "preact/src/index.js";

type Props = {
  name: String;
  texto:String
}

export const Module: FunctionalComponent<Props> = (props: Props) => {
  const name = props.name;
  const signal = useSignal(false);
  const text = useSignal(props.texto);
  const change = () => {
    signal.value = !signal.value;
  };
  
  return (
    <div>

      <div class="container">
        <table>
          
          <tr>
            <td><h2 class="titulo" >{name} </h2></td>
            <td><button class="button" onClick={change}> 
              {signal.value ? "Mostrar menos" : "Mostrar más"}</button></td>
          </tr>

        
          {signal.value && (
            <div>
            <tr>
              <hr  class="line"></hr>
            </tr>
           

            <tr>
               
              <td><div class="Texto">
              <p>
                {text}
              </p>

              <input 
                type="text"
                class="module-input"
                placeholder="Input de texto"
                onChange={(e) => {
                  text.value = text.value + e.currentTarget.value;
                }}
              />

              </div></td>
          </tr>
          </div>
          )}
   

        </table>
      </div>  

      
    </div>                                                           
  )
}

 