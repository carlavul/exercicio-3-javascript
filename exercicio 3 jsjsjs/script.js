//FUNCION PARA CREAR LOS PARAMETROS DEL REGISTRO

function Pessoa(nome,idade,nacionalidade){
    this.nome=nome;
    this.idade=idade;
    
  
  }
  
  function confereMaisVelho(pessoas){
    let maiorIdade;
    let pessoaMaisVelho;
  
  
   for   (let pessoa of pessoas){
    
     if (typeof maiorIdade == 'undefined') {
       maiorIdade > pessoa.idade
       pessoaMaisVelho = pessoa
     }else{
       if (pessoa.idade > maiorIdade) {
         maiorIdade = pessoa.idade
         pessoaMaisVelho = pessoa
       }
     }
   
  
  return pessoaMaisVelho
    }
  }
  console.log('estos foram os registos que fueram feitos');
      function listaRegistro(Registro){
        Registro.forEach(Registro => {
          console.log(`${Registro.nome} possui ${Registro.idade} anos`)
        });
  
      }
  
  
  
   let Registro=[ ]
  /// PARA QUE SE REPITA EL LOP.
   while (true){
       
                ///DATOS DE LA PERSONA 
     let nome= prompt('digite seu nome ');
     let idade= Number (prompt('digite sua idade'));
     
     
  
   
     //CREA REGISTRO, "ESA VARIABLE pessoa VA  RECIBIR LO QUE SE CREA EN LA FUNSIOM "
   
     let pessoa= new Pessoa (nome,idade)
   
  
     Registro.push(pessoa)
  
     let resposta = prompt('deseja registrar a outra pessoa?')
  
     if (resposta=='não'|| resposta=='NÃO'|| resposta=='nao'|| resposta=='NAO'||resposta=='no'){
         break;
  
     }
  
   } 
   
 listaRegistro(Registro)