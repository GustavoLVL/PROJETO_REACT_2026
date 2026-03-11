import React, { useState } from 'react';

function Atividade() {

  const [atividades, setAtividades] = useState(['João', 'Maria', 'Carlos']);
 const [novoNome, setNovoNome] = useState('');
const adicionarNome = () => {
            if (novoNome !== '') {
            setAtividades([...atividades, novoNome]);
            setNovoNome(''); 
    }
  };
 return (
            <div>
             <h3>Adicionar nome</h3>
        <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Digite um nome"/>
      <button onClick={adicionarNome}>Adicionar</button>
 <h3>Lista</h3>
      <ul>
        {atividades.map((atividade, index) => (
          <li key={index}>{atividade}</li>
        ))}
 </ul>
    </div>
  );
}
export default Atividade;