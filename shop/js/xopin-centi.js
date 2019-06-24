const prod = (pId,pNome, pValor, pDescricao, pImg)=>{
    return {
        id:pId,
        nome:pNome,
        valor:pValor,
        descricao:pDescricao,
        img:pImg
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
    retorno.push(prod(0,'KIT MECÂNICO DE SKATE DE DEDO',75,'Um sofisticadíssimo e inexistente kit para proporcionar as melhores manobras que seus dedos farão!','skate'));
    retorno.push(prod(1,'1 CRÉDITO DE CARBONO',10,'Finja salvar a natureza pagando um café pra gente!','carbono'));
    retorno.push(prod(2,'CAIXA DE TACHINHAS COLORIDAS',5,'Tachinhas imaginárias que vão garantir uns bons chicletes para nós!','tachinha'));
    retorno.push(prod(3,'AR CONDICIONADO',1500,'Um ar condicionado para um frescor inexistente que garantirá um ano de IPTU pra gente!','ar'));
    retorno.push(prod(4,'BOX SENHOR DOS ANEIS',75,'Não assistindo o seu precioso para nós termos uma preciosa adição nas nossas contas!','lotr'));
    retorno.push(prod(5,'BESO DE VINO ROSÉ 2017',120,'Seja chegado a este vinho com fortes traços de nada!','vinho'));
    retorno.push(prod(6,'PACK 6 XERETA FRAMBOESA',25,'Seja chegado a este frescor beirando ao nulo!','xereta'));
    retorno.push(prod(7,'GELADEIRA CONSUL FROST FREE DUPLEX',1900,'Garanta a refrescância dos refrigerantes xereta inexistente com esta igual inexistente geladeira!','consul'));
    retorno.push(prod(8,'COZINHA COMPLETA TOPAZIO',680,'Uma cozinha que não será entregue.','cozinha'));
    retorno.push(prod(9,'PIJAMA DO SULLEY',220,'Não durma com este não-pijama!.','pijama'));
    retorno.push(prod(10,'CANECA COMUNISTA',18,'Para quem gosta de trollar o capitalismo agindo no ato de simular uma compra de uma caneca que não existe para na verdade dar dinheiro pra um simpático casal!','caneca'));
    retorno.push(prod(11,'COSPLAY DE PEQUENA SEREIA',140,'Sereias não existem? Grandes coisas, esta fantasia também não!','sereia'));
    retorno.push(prod(12,'FAIXA DE LUZES LED',212,'Luzes mais seguras para sua visão, já que não terá luz para acender!','led'));
    retorno.push(prod(13,'PLUG DE TOMADA COM USB',25,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','tomada'));
    retorno.push(prod(14,'RELÓGIO DE PAREDE DIFERENTÃO',245,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','relogio'));
    retorno.push(prod(15,'MAPA DO RÉRI PÓRTI',45,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','harry'));
    retorno.push(prod(16,'VESTIDO DA AUDREY',90,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','audrey'));
    retorno.push(prod(17,'PIJAMA DE PINGUIM',140,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','pinguim'));
    retorno.push(prod(18,'RELÓGIO DESPERTADOR COM PROJEÇÃO DE HORA',99,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','despertador'));
    retorno.push(prod(19,'CHUVEIRO COM LED',250,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','chuveiro'));    
    retorno.push(prod(20,'ACELERADOR DE PARTÍCULAS',1500,'Tão novo que nem existe!','acelerador'));
    retorno.push(prod(21,'SAMBA',2.50,'O delicioso sabor de zero estoque!','samba'));
    retorno.push(prod(22,'KIT PARA SKI',250,'Inexistente radical!','ski'));
    retorno.push(prod(23,'BANDEIRA DA SÍRIA',37,'Nenhuma em estoque, mas a compra não é de verdade, então tá sossegado!','siria'));
    retorno.push(prod(24,'BONÉ MALUF GOVERNADOR',15.87,'O melhor boné da história deste site, tão bom que nem existe no nosso armazém!','maluf'));

    return retorno;
}
var estoque = prods();
const load = ()=>{    
    document.getElementById('lista-produtos').innerHTML='';
    for(let item of estoque){
        document.getElementById('lista-produtos').innerHTML+=html(item);
    }
}
const compre_baton = (id)=>{
    let item = estoque[id];
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
