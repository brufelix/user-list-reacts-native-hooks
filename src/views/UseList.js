import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import users from '../data/users';

function UserList(props) {
	function getUserItem({ item: user }) {
		return (
			<ListItem
				bottomDivider
				onPress={() => props.navigation.navigate('UsersForm')}
			>
				<Avatar source={{ uri: user.avatarUrl }} />
				<ListItem.Content>
					<ListItem.Title>{user.name}</ListItem.Title>
					<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
				</ListItem.Content>
			</ListItem>
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
