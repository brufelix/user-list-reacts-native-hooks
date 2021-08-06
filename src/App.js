import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserList from './views/UseList';
import UsersForm from './views/UsersForm';
import { Icon, Button } from 'react-native-elements';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName="UserList"
				screenOptions={screenOptions}
			>
				<Screen
					name="UserList"
					component={UserList}
					options={({ navigation }) => ({
						title: 'Lista de Usuários',
						headerRight: () => (
							<Button
								onPress={() => navigation.navigate('UsersForm')}
								type="clear"
								icon={<Icon name="add" size={25} />}
							/>
						),
					})}
				/>
				<Screen
					name="UsersForm"
					component={UsersForm}
					options={{ title: 'Formulário de Usuários' }}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

export default App;

const screenOptions = {
	headerStyle: { backgroundColor: '#F4511E' },
	headerTintColor: '#FFF',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};
