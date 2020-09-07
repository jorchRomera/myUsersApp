import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Screen } from '../../sharedComponents/Screen';
import { UsersPresenter, UsersView } from './UsersPresenter';
import { UserVM } from './UserVM';
import { SearchBar } from '../../sharedComponents/SearchBar/SearchBar';
import { UserItem } from './UserItem';
import { PaginationFooter } from '../../sharedComponents/footers/PaginationFooter/PaginationFooter';

export class UsersScreen extends Screen<UsersPresenter, State> implements UsersView {
    state: State = {
        search: '',
        isLoading: true,
        users: [],
        currentPage: 1,
        totalUsers: 0,
        limit: 15,
    };

    async componentDidMount() {
        await this.presenter.start();
    }

    showLoading() {
        this.setState({ isLoading: true });
    }

    initializePagination(totalUsers: number, limit: number): void {
        this.setState({ totalUsers, limit });
    }

    showUsers(users: UserVM[]): void {
        this.setState({ users });
    }

    changePage(page: number): void {
        this.setState({ currentPage: page });
    }

    hideLoading() {
        this.setState({ isLoading: false });
    }

    updateSearch(search: string): void {
        this.setState({ search });
    }

    navigateToUserDetail(user: UserVM): void {
        this.props.navigation.navigate('UserDetails', { user });
    }

    render() {
        if (this.state.isLoading) {
            return (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#F44548"/></View>);
        }

        const renderUser = ({ index, item }: { index: number; item: UserVM}) => {
            return <UserItem key={index} user={item} onPress={() => this.presenter.selectUser(item)} />;
        };

        const pagination = () => {
            return <PaginationFooter
                currentPage={this.state.currentPage}
                lastPage={Math.ceil(this.state.totalUsers / this.state.limit)}
                onChangePage={(page) => this.presenter.changePage(page)}
            />;
        };

        return (
            <View style={{ backgroundColor: '#ffffff', flexGrow: 1 }}>
                <SafeAreaView style={{ flexGrow: 1 }}>
                    <SearchBar
                        search={this.state.search}
                        onChangeText={(text) => this.presenter.searchUser(text)}
                        onCloseSearchBar={() => this.presenter.searchUser('')}
                    />
                    <FlatList style={styles.list} data={this.state.users} renderItem={renderUser} ListFooterComponent={pagination}/>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
});

interface State {
    search: string;
    isLoading: boolean;
    users: UserVM[];
    currentPage: number;
    totalUsers: number;
    limit: number;
}
