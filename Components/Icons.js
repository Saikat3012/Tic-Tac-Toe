import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons=({name})=>{
    switch(name){
        case 'circle':
            return <Icon name="circle-thin" size={45} color="#f4c724"/>
        case 'cross':
            return <Icon name="times" size={45} color="#10a881"/>
        default:
            return <Icon name="pencil" size={45} color="#303030"/>
    }
}

export default Icons;