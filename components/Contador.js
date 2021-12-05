const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h1 className={contador < 0 ? 'menor' : 'mayor'}>Contador: {contador}</h1>
      <hr />
      <button onClick={incrementar}>Aumentar</button>
      <button onClick={decrementar}>Disminuir</button>
    </div>
  );
};
