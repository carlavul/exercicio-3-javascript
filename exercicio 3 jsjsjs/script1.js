var idade;
var nome;
nome=prompt('qual e seu nome ');
idade=Number (prompt('qual e sua idade'));


if(idade>=18 && idade <= 35) {

    document.write (nome  +"tiene" + idade + "anos, es maior de idade, ainda e jovem ");

} else if ( idade >35 && idade <= 44 ){
document.write (nome+'tiene' + idade+ 'anos esta em a  , crisis dos 40')
}else if(idade>44 && idade<=55){
document.write(nome +'tiene'+idade +'anos, voce esta um pouco maior de idade')
}

else {
    document.write(nome+ "tiene"+idade+"anos, es menor de idade, anda a estudiar");
}
