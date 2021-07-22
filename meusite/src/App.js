import React from 'react';
/*2.É o que será retornado para o usuário */
const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.facebook} lkn={props.linkedin} ytb={props.youtube}/>
            <hr/>
        </div>

    );

}
const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a>
            <a href = {props.lkn}>|Linkedin|</a>
            <a href = {props.ytb}> Youtube|</a>
        </div>


    );

}
/*3.Componente responsável pelas 3 características*/
const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o (a) {props.nome}</h2>
            <h3> Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
            


        </div>


    );
}

/*1.Aqui encontra-se o componente principal onde é lançado os dados*/
function App() {

    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Nilton Lopes" cargo="Programador" 
            idade="29" facebook = "http://facebook.com" linkedin="http://linkedin.com" youtube="http://youtube.com"/>
                    
            <Equipe nome="Lucas" cargo="Design" idade="22"
            facebook = "http://facebook.com" linkedin="http://linkedin.com" youtube="http://youtube.com"/>

            <Equipe nome="Sayonara" cargo="Front-End" idade="34"
            facebook = "http://facebook.com" linkedin="http://linkedin.com" youtube="http://youtube.com"/>
        </div>
    );
}
export default App;





