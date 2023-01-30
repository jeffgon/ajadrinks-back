import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log("Conectou com o mongoDB");
} catch (error) {
  console.error(error);
}

const db = mongoClient.db();

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const productsCollection = db.collection("products");
export const paymentCollection = db.collection("payments");
// productsCollection.insertMany([
//   {
//     title: "caiprinha de limão gostoso",
//     img: "http://f.i.uol.com.br/folha/comida/images/16082336.jpeg",
//     description: "bbbbbbbbbbbbb bbbbbbbbbb bbbbbbbb",
//     category: "drink",
//     size: 300,
//     price: 15.5,
//   },
//   {
//     title: "sexy on the beach ",
//     img: "https://www.receiteria.com.br/wp-content/uploads/sex-on-the-beach-01.jpg",
//     description: "bbbbbbbbbbbbb bbbbbbbbbb bbbbbbbb",
//     category: "drink",
//     size: 200,
//     price: 40.5,
//   },
// ]);

//No Thunder
/* { 

  "title": "Moscow Mule", 

  "image": "https://images.pexels.com/photos/10779226/pexels-photo-10779226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "cocktail", 

  "shortdescription":"Bebida suave a base de limão gengibre e Vodka.", 

  "description": " Nosso drink é composto de 50 ml de vodka, 20 ml de suco de limão, 20 ml de redução de gengibre, 5 gotas de Angostura bitter com uma deliciosa espuma de gengibre no topo.", 

  "price": "35.00" 

}, 

{ 

  "title": "Negroni", 

  "image": "https://images.pexels.com/photos/3794291/pexels-photo-3794291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "cocktail", 

  "shortdescription":"Bebida com notas de amargor a base de Gim, Vermut e Campari.", 

  "description": " Nosso drink é composto de de uma parte de gin, uma parte de vermute rosso (vermelho, semi-doce) e uma parte de Campari. É decorado com casca de laranja.", 

  "price": "40.00" 

}, 

{ 

  "title": "Fragaria", 

  "image": "https://images.pexels.com/photos/10823425/pexels-photo-10823425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "copyright", 

  "shortdescription":"Bebida com o agradável sabor doce de morangos frescos.", 

  "description": " Nosso drink é composto de de uma parte de vodka, hortelã, 10ml de suco de limão e 6 morangos inteiros.", 

  "price": "30.00" 

}, 

{ 

  "title": "Piscininha Amor", 

  "image": "https://images.pexels.com/photos/10580224/pexels-photo-10580224.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", 

  "category": "copyright", 

  "shortdescription":"Bebida lúdica e adocicada a base de licor de laranja.", 

  "description": " Nosso drink é composto de de 40ml de vodka Absolut, 20ml de suco de limão, 30ml de Curaçau Blue, completa completado com soda gelada e um ramo de hortelã para completar o sabor.", 

  "price": "45.00" 

}, 

{ 

  "title": "Heineken", 

  "image": "https://images.pexels.com/photos/11749397/pexels-photo-11749397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "beer", 

  "shortdescription":"Cerveja Heineken Puro Malte Lager 330ml.", 

  "description": "Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado, produzida com ingredientes 100% naturais: água, malte e lúpulo.ela possui teor alcoólico de 5% e a servimos a temperatura ideal de consumo de 3º a 5º.", 

  "price": "10.00" 

}, 

{ 

  "title": "Budweiser", 

  "image": "https://images.pexels.com/photos/6564098/pexels-photo-6564098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "beer", 

  "shortdescription":"Cerveja Budweiser American lager 330ml.", 

  "description": "A cerveja Budweiser é uma standard American lager de sabor leve, cor clara e aroma discreto. Maturada com madeira Beechwood, pra um sabor marcante no começo e suave no final.", 

  "price": "10.00" 

}, 

{ 

  "title": "Patrón Añejo", 

  "image": "https://images.pexels.com/photos/7601305/pexels-photo-7601305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "shot", 

  "shortdescription":"Primeira tequila ultra premium do mundo.", 

  "description": "45 mls da Tequila Patrón, lançada no mercado em 1989. É produzida na destilaria Patrón Spirits México. Possui coloração âmbar, seus aromas são amadeirados do carvalho, além de notas de baunilha e uva passa. No paladar, os aromas se confirmam, os sabores do carvalho, baunilha e uva passa aparecem com a adição de mel. O final deixa traços defumados e de caramelo na boca. ", 

  "price": "30.00" 

}, 

{ 

  "title": "Jägermeister", 

  "image": "https://images.pexels.com/photos/10415550/pexels-photo-10415550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "shot", 

  "shortdescription":"Bebida alemã, é um kräuterlikör, licor de ervas.", 

  "description": "45 mls de uma bebida produzida a partir da infusão de 56 ervas, raízes, frutas e especiarias em álcool neutro, com o objetivo de extrair seus sabores e aromas. Alguns dos 56 ingredientes do Jagermeister conhecidos são casca de laranja e limão, alcaçuz, anis, açafrão, gengibre, zimbro e ginseng, enquanto o restante é mantido em segredo.. ", 

  "price": "35.00" 

}, 

{ 

  "title": "Black Label", 

  "image": "https://images.pexels.com/photos/3868558/pexels-photo-3868558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "whiskey", 

  "shortdescription":"Dose do JK 12 anos blended scotch.", 

  "description": "Johnnie Walker Black Label é uma combinação requintada dos whiskies mais raros e excepcionais da Escócia. Ele é desenvolvido exclusivamente com whiskies envelhecidos por pelo menos 12 anos. É um blend de caráter encorpado e com notas defumadas.", 

  "price": "45.00" 

}, 

{ 

  "title": "Glenfiddich", 

  "image": "https://images.pexels.com/photos/1694853/pexels-photo-1694853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "whiskey", 

  "shortdescription":"Dose do Whisky 15 anos 100% puro malt escocês.", 

  "description": "O Glenfiddich 15 anos foi criado com um processo exclusivo. Este whisky de 15 anos amadurece em três tipos diferentes de barris de carvalho: sherry, bourbon tradicional e new oak. Depois o whisky é misturado em um grande tanque artesanal de madeira, o Solera Vat. Isso garante um malte único, consistente e equilibrado. O processo termina com um período de mistura em pequenos tonéis de envelhecimento. Um intrigante e complexo aroma. Paladar suave como a seda, revelando a maturação nos barris de xerez, com toques de marzipan, canela e gengibre. Um single malt encorpado e cheio de sabor. Final rico e com adocicado persistente..", 

  "price": "55.00" 

}, 

{ 

  "title": "Jacob's Creek", 

  "image": "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "wine", 

  "shortdescription":"Taça de Jacob's Creek Reserve Shiraz Limestone Coast", 

  "description": "Um vinho encorpado de grande estrutura, equilíbrio e complexidade que apresenta frutas premium de uma das regiões mais respeitadas da Austrália. Cor roxo vibrante, Sabores densos de ameixa são realçados por notas de cedro e taninos macios e sedosos.", 

  "price": "55.00" 

}, 

{ 

  "title": "Calvet Prestige", 

  "image": "https://images.pexels.com/photos/9153297/pexels-photo-9153297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "wine", 

  "shortdescription":"Vinho Francês estilo Bordeaux tinto.", 

  "description": "Bordeaux é uma das áreas mais famosas do mundo pelos seus maravilhosos vinhos. Este vinho vem da região de Bordeaux, no sudoeste da França, lar de alguns dos melhores vinhos do mundo. Escolha perfeita com carnes vermelhas, pizzas e massas, além de queijos.", 

  "price": "35.00" 

}, 

{ 

  "title": "Chivas Regal", 

  "image": "https://images.pexels.com/photos/6897387/pexels-photo-6897387.jpeg?auto=compress&cs=tinysrgb&w=400", 

  "category": "bottle", 

  "shortdescription":"Garrafa Whisky Chivas Regal 12 anos 1L.", 

  "description": "Blended Scotch Whisky 12 Anos, Chivas Regal é reconhecido mundialmente como o melhor dos premium blended scoth whiskies, constituindo-se em um padrão de excelência para todos os destilados. Com seu aroma complexo, mas ainda suave, e seu sabor esfumaçado, balanceado por sua qualidade harmonizada, Chivas Regal é o predileto entre os apreciadores de whisky.", 

  "price": "250.00" 

}, 

{ 

  "title": "Bollinger", 

  "image": "https://images.pexels.com/photos/3461205/pexels-photo-3461205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 

  "category": "bottle", 

  "shortdescription":"Garrafa Champagne Bollinger Brut Special Cuvée.", 

  "description": "Champagne Bollinger Brut Special Cuvée (750ml). Apresenta cor dourada, distinta de variedades de uvas pretas em bolhas muito finas. Aroma complexo de frutos maduros, maçã em compota, pêra,pêssegos e brioches, notas picantes e especiarias. No paladar, combinação sutil de estrutura e vivacidade, bolhas aveludadas em taninos macios, com final leve e muito sutil.", 

  "price": "1000.00" 

}, 

{ 

  "title": "Green Juice", 

  "image": "https://images.pexels.com/photos/756773/pexels-photo-756773.jpeg?auto=compress&cs=tinysrgb&w=400", 

  "category": "noalcohol", 

  "shortdescription":"Suco de Kiwi & maça verde.", 

  "description": "Suco de kiwi natural com grenadine green apple, aguá tônica e especiarias.", 

  "price": "17.00" 

}, 

{ 

  "title": "Maracuginger", 

  "image": "https://images.pexels.com/photos/9186767/pexels-photo-9186767.jpeg?auto=compress&cs=tinysrgb&w=400", 

  "category": "noalcohol", 

  "shortdescription":"Suco de Maracujá, gengibre e alecrim.", 

  "description": "Sabores distintos e selecionados formam um mix de sabor, contem maracujá, redução de gengibre e um ramo de alecrim.", 

  "price": "17.00" 

}  */