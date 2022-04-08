//@flow
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Style/globalStyle'
import Button_ from '../Components/Button_';
import { useSelector } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import diamond from '../assets/diamond.png'


export default function SecondPage(props: props): React.Node {

    const [userName, setUserName] = useState('');
    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        console.log('userData : ' + JSON.stringify(userData));
        setUserName(userData.userName);
    });
    return (
        <View style={styles.containerMain}>
            <View style={styles.horizontalView}>
                <Text style={{ color: 'white',fontFamily:'Montserrat' }}>{userName}</Text>
            </View>
            <Text style={styles.secondScreenHeader}>4 variations of button</Text>
            <Button_
                btnTextColor={'#ADD8E6'}
                text={'Press Me'} />
            <Button_
                btnTextColor={'#ADD8E6'}
                text={'Press Me'}
                bgcolor={'#9fbfdf'} />
            <Button_
                btnTextColor={'#ADD8E6'}
                text={'Press Me'}
                bgcolor={'#0096FF'} />

            <View style={{ marginLeft: 15, marginRight: 15 }}>

            </View>
            <SwipeButton
                disabled={false}
                swipeSuccessThreshold={70}
                height={48}
                width={330}
                title="Slide me to continue"
                titleColor='#FFFFFF'
                containerStyles={{borderRadius: 10}}
                onSwipeSuccess={() => { 
                    props.navigation.navigate('ThirdPage');
                }}
                railFillBackgroundColor="#0096FF" 
                railFillBorderColor="#88d0e6" 
                thumbIconBackgroundColor="#0096FF" 
                railBackgroundColor="#000000" 
                thumbIconImageSource={diamond}
                railStyles={{borderRadius: 10}}
            thumbIconStyles={{borderRadius: 5}}


            />

        </View>
    )
}
