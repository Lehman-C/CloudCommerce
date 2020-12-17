import React from 'react'


const ItemCount =({stock,initial}) => {

    const [Contador,SetContador] = React.useState(initial);

    const onAdd = () => {
        if(Contador < stock){
        SetContador(Contador + 1);
    };
}
    const DisminuirContador = () => {
        SetContador(Contador -1);
    };


        return (
    <div>
<p>clicks {Contador}</p>
<button onClick={onAdd}>Aumentar</button>
<button onClick={DisminuirContador}>Disminuir</button>
    </div>
  
    )
  }


  export default ItemCount




  