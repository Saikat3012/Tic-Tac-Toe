
import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,H3,
  Title,
  Button,
} from 'native-base';

import Icons from './Components/Icons';
import Snackbar from 'react-native-snackbar';

const itemArray=new Array(9).fill('empty')


const App = () => {

  const [isCross,setCross]=useState(false)
  const [winMessage,setWinMessage]=useState('')

  const changeItem=(itemNumber)=>{
    
    if(winMessage){
      return Snackbar.show({
        text: winMessage,
        backgroundColor:'#000',
        textColor:'fff'
      })
    }

    if(itemArray[itemNumber]=='empty'){
      itemArray[itemNumber]=isCross?'cross':'circle'
      setCross(!isCross)
    }else{
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor:'red',
        textColor:'#fff'
      })
    }
    checkWinner()
  }

  const reloadGame=()=>{
    setCross(false)
    setWinMessage('')
    itemArray.fill('empty',0,9);

  }

  const checkWinner=()=>{
    if(
      itemArray[0]!='empty' &&
      itemArray[0]===itemArray[1] &&
      itemArray[0]===itemArray[2]){
        setWinMessage(`${itemArray[0]} Won`)
      }
      else if(
        itemArray[3]!='empty' &&
        itemArray[3]===itemArray[4] &&
        itemArray[3]===itemArray[5]){
          setWinMessage(`${itemArray[3]} Won`)
        }
      else if(
        itemArray[6]!='empty' &&
        itemArray[6]===itemArray[7] &&
        itemArray[6]===itemArray[8]){
          setWinMessage(`${itemArray[6]} Won`)
        }
      else if(
        itemArray[0]!='empty' &&
        itemArray[0]===itemArray[3] &&
        itemArray[0]===itemArray[6]){
          setWinMessage(`${itemArray[0]} Won`)
        }
      else if(
        itemArray[1]!='empty' &&
        itemArray[1]===itemArray[4] &&
        itemArray[1]===itemArray[7]){
          setWinMessage(`${itemArray[1]} Won`)
        }
      else if(
        itemArray[2]!='empty' &&
        itemArray[2]===itemArray[5] &&
        itemArray[2]===itemArray[8]){
          setWinMessage(`${itemArray[2]} Won`)
        }
      else if(
        itemArray[0]!='empty' &&
        itemArray[0]===itemArray[4] &&
        itemArray[0]===itemArray[8]){
          setWinMessage(`${itemArray[0]} Won`)
        }
      else if(
        itemArray[2]!='empty' &&
        itemArray[2]===itemArray[4] &&
        itemArray[2]===itemArray[6]){
          setWinMessage(`${itemArray[2]} Won`)
        }
      else if(itemArray.indexOf('empty')==-1){
        setWinMessage('The Game is Dwaw')
      }
  }

  return (
    <Container style={{backgroundColor:'#333945', padding:5}}>

      <Header>
        <Body>
          <Title>Tic Tac Toe Game</Title>
        </Body>
      </Header>
      <Content style={{margin:10}}>
        <View style={styles.grid}>
          {itemArray.map((item,index)=>(
            <TouchableOpacity
            style={styles.box}
            key={index}
            onPress={()=>changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item}/>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {winMessage ?(
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button
            onPress={reloadGame}
            primary
            block
            rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ):(
          // console.log(5)
          <H3 style={styles.message}>
            {isCross?'Cross':'Circle'} turns
          </H3>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
  },
  box:{
    width:'28%',
    margin:8
  },
  card:{
    height:110,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:'#fff',
    backgroundColor:'#4652b3',
    marginTop:20,
    paddingVertical:10,
    marginVertical:10,
  }
});

export default App;
