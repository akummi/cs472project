import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-native';

import WelcomeQuiz from '../Login/WelcomeQuiz.js'
import Rank from '../Login/Rank.js'
import Home from '../Login/Home.js'
import Budget from '../DataEntry/Budget.js'
import Educationn from '../Education/Education.js'

const screens = {
    WelcomeQuiz: {
        screen: WelcomeQuiz
    },
    Rank: {
        screen: Rank
    },
    Home: {
        screen: Home 
    },
    Budget: {
        screen: Budget
    },
    Education: {
        screen: Education
    }
}

const mainStack = createStackNavigator();

export default createaAppContainer(mainStack);