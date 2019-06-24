Array.prototype.shuffle = function(){
return this.map((a) => ({sort: Math.random(), value: a}))
           .sort((a, b) => a.sort - b.sort)
           .map((a) => a.value)
}
const prod = (pId,pNome, pValor, pDescricao, pImg,pPagSeg)=>{
    return {
        id:pId,
        nome:pNome,
        valor:pValor,
        descricao:pDescricao,
        img:pImg,
        pagseg:pPagSeg
    }
}
const html  = (item)=>{
    let vl = parseFloat(item.valor).toFixed(2);
    return  `
        <div class="col col1">
            <div class="f_p_item">
            <div class="f_p_img">
                <img class="img-fluid" src="img/liquida/${item.img}.jpg" alt="${item.descricao}" style="width:300px; height:350px; object-fit: cover;">								
            </div>
            <a href="javascript:compre_baton(${item.id})">
                <h4>${item.nome}</h4>
            </a>
            <h5>R$${vl}</h5>
        </div>
    </div>
    `;
}
const prods = ()=>{
    let retorno = [];
    retorno.push(prod(0,'KIT MECÂNICO DE SKATE DE DEDO',75,'Um sofisticadíssimo e inexistente kit para proporcionar as melhores manobras que seus dedos farão!','skate','56D85E365050101884DEAFAA8C582BA6'));
    retorno.push(prod(1,'1 CRÉDITO DE CARBONO',10,'Finja salvar a natureza pagando um café pra gente!','carbono','ED70E6DA2222BB4444296F8A0DC8C14A'));
    retorno.push(prod(2,'CAIXA DE TACHINHAS COLORIDAS',5,'Tachinhas imaginárias que vão garantir uns bons chicletes para nós!','tachinha','A089D3DC6E6EF65224159FB6CEFE416F'));
    retorno.push(prod(3,'AR CONDICIONADO',1500,'Um ar condicionado para um frescor inexistente que garantirá um ano de IPTU pra gente!','ar','14AF754FD6D61F3774A2BFB53ED403B6'));
    retorno.push(prod(4,'BOX SENHOR DOS ANEIS',75,'Não assistindo o seu precioso para nós termos uma preciosa adição nas nossas contas!','lotr','81060D4A15155B5DD466DF912E60280D'));
    retorno.push(prod(5,'BESO DE VINO ROSÉ 2017',120,'Seja chegado a este vinho com fortes traços de nada!','vinho','F31D1A010404F52664310FA9A1C6DEDF'));
    retorno.push(prod(6,'PACK 6 XERETA FRAMBOESA',25,'Seja chegado a este frescor beirando ao nulo!','xereta','7677AC80BFBF18B334AADF804319F80D'));
    retorno.push(prod(7,'GELADEIRA CONSUL FROST FREE DUPLEX',1900,'Garanta a refrescância dos refrigerantes xereta inexistente com esta igual inexistente geladeira!','consul','E6D14CB5D2D26F1114D28FA16371DB54'));
    retorno.push(prod(8,'COZINHA COMPLETA TOPAZIO',680,'Uma cozinha que não será entregue.','cozinha','394977AC8B8B762FF4760F892531676D'));
    retorno.push(prod(9,'PIJAMA DO SULLEY',220,'Não durma com este não-pijama!.','pijama','880A6C1DDDDD9AF884CE1FBB75346A19'));
    retorno.push(prod(10,'CANECA COMUNISTA',18,'Para quem gosta de trollar o capitalismo agindo no ato de simular uma compra de uma caneca que não existe para na verdade dar dinheiro pra um simpático casal!','caneca','AF5D5B09A3A3041EE4EAEFB504A5975E'));
    retorno.push(prod(11,'COSPLAY DE PEQUENA SEREIA',140,'Sereias não existem? Grandes coisas, esta fantasia também não!','sereia','2C44E8841D1D08BFF4ACCF9B05073D4C'));
    retorno.push(prod(12,'FAIXA DE LUZES LED',212,'Luzes mais seguras para sua visão, já que não terá luz para acender!','led','8DD578C35A5A8ECDD4A6AF87E11E6555'));
    retorno.push(prod(13,'PLUG DE TOMADA COM USB',25,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','tomada','E7824E6208084D4774594F8D0DAE838F'));
    retorno.push(prod(14,'RELÓGIO DE PAREDE DIFERENTÃO',245,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','relogio','5FD822514444616664835F85794400E6'));
    retorno.push(prod(15,'MAPA DO RÉRI PÓRTI',45,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','harry','CB8B5D391B1B84144492DF81FBFBAB46'));
    retorno.push(prod(16,'VESTIDO DA AUDREY',90,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','audrey','18A2F0844141C13AA4608FA005093400'));
    retorno.push(prod(17,'PIJAMA DE PINGUIM',140,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','pinguim','688948DBD4D4120AA41EAF857A5FA653'));
    retorno.push(prod(18,'RELÓGIO DESPERTADOR COM PROJEÇÃO DE HORA',99,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','despertador','CAA84322CDCDFD4444C98F96DC82BF0B'));
    retorno.push(prod(19,'CHUVEIRO COM LED',250,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','chuveiro','20512FB1636379BAA4BBBFA6512FC065'));    
    retorno.push(prod(20,'ACELERADOR DE PARTÍCULAS',1500,'Tão novo que nem existe!','acelerador','7550F996FBFBF7044451EF971B0D1102'));    
    retorno.push(prod(21,'SAMBA',2.50,'O delicioso sabor de zero estoque!','samba','D680574E6E6E0F49947F7F9FE003D254'));
    retorno.push(prod(22,'KIT PARA SKI',250,'Inexistente radical!','ski','2A8A240ED2D2C6E884E56F8E843619F6'));
    retorno.push(prod(23,'BANDEIRA DA SÍRIA',37,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','siria','75A46F9A3131921884FBFFB50177E3D5'));
    retorno.push(prod(24,'BONÉ MALUF GOVERNADOR',15.87,'O melhor boné da história deste site, tão bom que nem existe no nosso armazém!','maluf','CC7A328E1111264884F5CFB343403318'));
    retorno.push(prod(25,'ACELERADOR DE PARTÍCULAS SEMI NOVO',987.65,'Usou tanto que deixou de existir o coitado!','acelerador','60877B78131351D0041FBF9706CBEF7D'));
    retorno.push(prod(26,'NOTEBOOK',2100,'Aiai notebook vc n existe msm viu','notebook','C1AA75C49999A72664F45F97FE6D6869'));

    return retorno.shuffle();
}
var estoque = prods();
const load = ()=>{    
    document.getElementById('lista-produtos').innerHTML='';
    for(let item of estoque){
        document.getElementById('lista-produtos').innerHTML+=html(item);
    }
}
const compre_baton = (id)=>{
    let item = estoque.filter((x)=>x.id===id)[0];
    sessionStorage.setItem('produto',JSON.stringify(item));
    location.href='single-product.html';
}
const ending_credits = ()=>{
    Swal.fire({
        title: 'Bacana?',
        html:`Pois bem, feito pelo <a href="http://paiva-thiago.github.io/" target="_blank">Thiago</a>`,
        width: 600,
        padding: '3em',
        backdrop: `
          rgba(0,0,123,0.1)
          url("./img/rex.gif")
          center top
          no-repeat
        `
      })
}

load();
