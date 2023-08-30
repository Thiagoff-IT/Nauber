// Importar as bibliotecas e módulos necessários
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Página de Detalhes da Linha
function LinhaDetalhes() {
  const { id } = useParams();
  const [linha, setLinha] = useState({});
  const [classe, setClasse] = useState({});

  useEffect(() => {
    // Chamar a API para obter a linha específica
    fetch(`www.lojanauber.com.br/app/linha/${id}`)
      .then((response) => response.json())
      .then((linha) => {
        setLinha(linha);
        // Após obter a linha, chamar a API para obter a classe relacionada
        fetch(`www.lojanauber.com.br/app/classe/${linha.id}`)
          .then((response) => response.json())
          .then((classe) => {
            setClasse(classe);
          })
          .catch((error) => {
            console.error('Erro ao obter a classe da API:', error);
          });
      })
      .catch((error) => {
        console.error('Erro ao obter os dados da API:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalhes da Linha {id}</h1>
      <p>ID: {linha.id}</p>
      <p>Name: {linha.name}</p>
      {/* Verificar se a propriedade linhas existe antes de usar o método join */}
      <p>Linhas: {classe.linhas ? classe.linhas.join(', ') : ''}</p>
      {/* Aqui você pode mostrar a foto da linha utilizando linha.photo */}
      {/* Aqui você pode mostrar a foto da classe utilizando classe.photo */}
    </div>
  );
}

export default LinhaDetalhes;
