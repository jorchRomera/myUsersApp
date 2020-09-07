import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PresenterFactory } from './PresenterFactory';
import { createStackNavigator } from '@react-navigation/stack';
import { screenConfig } from '../lib/screenConfig';
import { UsersScreen } from './users/UsersScreen';
import { Header } from '../sharedComponents/headers/Header';
import { UserDetailsScreen } from './userDetail/UserDetailsScreen';
import { HeaderWithBack } from '../sharedComponents/headers/HeaderWithBack';
import { NavigationContainer } from '@react-navigation/native';
import { AboutScreen } from './about/AboutScreen';

export const Navigator = () => {
    const Drawer = createDrawerNavigator();
    const presenters = new PresenterFactory();
    const Stack = createStackNavigator();

    const Users = () => {
        return (
            <Stack.Navigator initialRouteName="UsersMaster">
                <Stack.Screen
                    name="UsersMaster"
                    component={screenConfig(UsersScreen, presenters.users)}
                    options={{ header() { return <Header title="User List"/>; } }}
                />
                <Stack.Screen
                    name="UserDetails"
                    component={UserDetailsScreen}
                    options={({ navigation }) => ({
                        header() {
                            return <HeaderWithBack title="UserDetails" goBackText="UserList" onPress={() => navigation.goBack()}/>;
                        },
                    })}
                />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Users">
                <Drawer.Screen name="Users" component={Users} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
