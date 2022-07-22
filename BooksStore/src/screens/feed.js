import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import RowCard from '../components/rowCard';
import ColumnCard from '../components/ColumnCard';

const BOOKS = [
  {
    capa: 'https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg',
    titulo: 'O Segredo nas Sombras',
    autor: 'Morgana Moraes',
    resumo:
      'Desde que se apaixonou por Pietr, um lobisomem russo, sua vida se misturou com uma complexa trama de poderes envolvendo a família do rapaz. Pietr e seus familiares são os últimos indivíduos de uma linhagem mutante que resultou de experimentos científicos promovidos durante a Guerra Fria.',
    id: 1,
  },
  {
    capa: 'https://a-static.mlcdn.com.br/1500x1500/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/e34228c8298bb47bf2a52f75bc740e00.jpg',
    titulo: 'O Menino do Dedo Verde',
    autor: 'Maurice Druon',
    resumo:
      'Um menino diferente de todo mundo. Com uma vidinha inteiramente sua, o pequeno de olhos azuis e cabelos loiros, deixava impressões digitais que suscitavam o reverdecimento e a alegria.',
    id: 2,
  },
  {
    capa: 'https://edit.org/photos/img/blog/zz7-flyer-personalizavel-para-capas-de-livros.jpg-840.jpg',
    titulo: 'Sussurros na Floresta',
    autor: 'Maria Silveira',
    resumo:
      '“Um simples pedaço de papel pode mudar a sua vida em um instante” Mira é uma garota comum que, sem saber, possui um destino grandioso. Desse modo, ela é apresentada a um mundo novo cheio de magia e beleza. Porém, o perigo está à espreita, e o verdadeiro inimigo não se trata de um homem e sim da Morte.',
    id: 3,
  },
  {
    capa: 'https://images-submarino.b2w.io/produtos/01/00/img/128898/3/128898358_2GG.jpg',
    titulo: 'Harry Potter e a criança amaldiçoada',
    autor: 'J.K. Rowling',
    resumo:
      'A história se passa 19 anos depois da batalha final entre Harry Potter e Voldemort. Harry Potter agora é um funcionário atarefado do Ministério da Magia tentando conciliar as tarefas do trabalho e a vida familiar; essa passa a ser a sua batalha. Hermione passa a ser a ministra da Magia; e Rony é dono de uma loja no beco diagonal.',
    id: 4,
  },
  {
    capa: 'https://http2.mlstatic.com/D_NQ_NP_617917-MLB32140972589_092019-O.jpg',
    titulo: 'Labirinto do Fauno',
    autor: 'Guilherme del toro',
    resumo:
      'O fascismo na Espanha dos anos 40 é uma realidade, nesse cenário, Ofélia é uma criança que acaba de se mudar com a mãe para a casa do padrasto, um homem cruel e monstruoso, porém, a magia que Ofélia conhece dos contos de fadas está prestes a se fazer real em sua vida.',
    id: 5,
  },
];

const Feed = () => {
  return (
    <View>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={styles.profilePick}
              />
              <Text style={styles.headerText}>Olá, Gabriel</Text>
            </View>
            <Icon name="search-outline" size={24} color="#000" />
          </View>
          <Text style={styles.title}>Popular Books</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={BOOKS}
            horizontal={true}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingLeft: 22}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <RowCard
                    image={item.capa}
                    author={item.autor}
                    title={item.titulo}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}>Newst</Text>
            <FlatList
              showsVeticalScrollIndicator={false}
              scrollEnabled={false}
              data={BOOKS}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                paddingLeft: 22,
                marginBottom: 100,
                marginTop: 28,
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <ColumnCard
                      image={item.capa}
                      author={item.autor}
                      title={item.titulo}
                      style={styles.columnCards}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <TouchableOpacity>
            <Icon
              name="home-outline"
              size={24}
              color="#000"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bookmark-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="settings-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 28,
    marginVertical: 42,
  },
  profilePick: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 12,
  },
  headerText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginLeft: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 22,
  },
  footerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#FFF',
    elevation: 1,
  },
  icone: {
    marginVertical: 27,
  },
  columnCards: {
    marginTop: 28,
  },
});

export default Feed;
