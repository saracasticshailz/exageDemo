//@flow
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Style/globalStyle'
import Button_ from '../Components/Button_';
import { useSelector } from 'react-redux';
import SwipeButton from 'rn-swipe-button';


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
                <Text style={{ color: 'white' }}>{userName}</Text>
            </View>
            <Text style={{ color: '#00A36C', justifyContent: 'center', alignSelf: 'center' }}>4 variations of button</Text>
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
                height={45}
                width={330}
                title="Slide me to continue"
                titleColor='#FFFFFF'
                style={{ borderRadius: 10 }}
                // thumbIconImageSource={thumbIcon}
                onSwipeSuccess={() => {
                    props.navigation.navigate('ThirdPage');

                }}
                railFillBackgroundColor="#0096FF" 
                railFillBorderColor="#88d0e6" 
                thumbIconBackgroundColor="#88d0e6" 
                railBackgroundColor="#000000" 

            />

        </View>
    )
}
