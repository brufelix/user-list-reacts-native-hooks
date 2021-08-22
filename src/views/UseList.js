import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';

import usersData from '../data/users';

function UserList(props) {
	const [users, setUsers] = useState(usersData);

	const rightContent = user => (
		<Button
			title="Deletar"
			icon={{ name: 'delete', color: 'white' }}
			buttonStyle={style.buttonStyleDelete}
			onPress={() => deleteUser(user.id)}
		/>
	);

	const leftContent = user => (
		<Button
			title="Editar"
			icon={{ name: 'edit', color: 'white' }}
			buttonStyle={style.buttonStyleDelete}
			onPress={() => console.warn(user.id)}
		/>
	);

	function deleteUser(userId) {
		const remaningUsers = users
			.filter(({ id }) => id !== userId)
			.map(user => user);
		setUsers(remaningUsers);
	}

	function getUserItem({ item: user }) {
		return (
			<ListItem.Swipeable
				bottomDivider
				onPress={() => props.navigation.navigate('UsersForm')}
				rightContent={rightContent(user)}
				leftContent={leftContent(user)}
			>
				<Avatar source={{ uri: user.avatarUrl }} />
				<ListItem.Content>
					<ListItem.Title>{user.name}</ListItem.Title>
					<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem.Swipeable>
		);
	}

	return (
		<View>
			<FlatList
				keyExtractor={user => user.id.toString()}
				data={users}
				renderItem={getUserItem}
			/>
		</View>
	);
}

export default UserList;

const style = {
	buttonStyleDelete: { minHeight: '100%', backgroundColor: 'red' },
	buttonStyleEdit: { minHeight: '100%', backgroundColor: 'green' },
};
