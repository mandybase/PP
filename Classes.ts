
//Defina 3 classes em um arquivo Typescript 
//Cada classe deve ter no minimo 3 propriedades
class Cachorro{
    nome: string;
    idade: number;
    raça: string ;
    }
    let dog1= new Cachorro();
    dog1.nome='Snoop';
    dog1.idade=3;
    dog1.raça='Vira-lata';
    
    class Pessoa{
        nome: string;
        idade: number;
        telefone: number;
        }
        let dono1= new Pessoa();
        dono1.nome='Daniel';
        dono1.idade=21;
        dono1.telefone= 4557575;
        

        class Atendimento{
            serviço: string;
            horario: any;
            detalhes:string;
        
        }
        let s1=new Atendimento();
        s1.serviço='Exercicio';
        s1.horario= '14:30';
        s1.detalhes='corrida';
    
        console.log(dog1);
        console.log(dono1);
        console.log(s1);



