import { useState } from 'react';

const ContadorProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div className="contador-producto">
      <button onClick={disminuir}>-</button>
      <span>{cantidad}</span>
      <button onClick={aumentar}>+</button>
    </div>
  );
};

export default ContadorProducto;