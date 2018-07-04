import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class LaunchComponent extends Component {

    // static get options() {
    //     return {
    //       topBar: {
    //         title: {
    //           text: 'My Screen'
    //         },
    //         drawBehind: true,
    //         visible: true,
    //         animate: false
    //       },
    //       bottomTab: {
    //           text: 'aa',
    //           badge: '12'
    //       }
    //     };
    //   }

    componentDidAppear() {
        console.log('componentId : ' + this.props.componentId)
    }

    resetTabbar() {

        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            name: 'LaunchComponent'
                                        }
                                    }
                                ],
                                options: {
                                    bottomTab: {
                                        title: 'Tab 1'
                                    }
                                }
                            }
                        },
                        {
                            stack: {
                                children: [
                                    {
                                        component: {
                                            name: 'LaunchComponent'
                                        }
                                    }
                                ],
                                options: {
                                    bottomTab: {
                                        title: 'Tab 2',
                                        // icon: require('../images/two.png'),
                                        testID: 'SECOND_TAB_BAR_BUTTON'
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.welcome}
                >
                    Launch
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={() =>

                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'LaunchComponent',
                                passProps: {
                                    text: 'Pushed screen'
                                }
                            }
                        })
                    }
                >
                    Push
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={() =>
                        Navigation.showModal({
                            stack: {
                                children: [{
                                    component: {
                                        name: 'LaunchComponent',
                                        passProps: {
                                            text: 'stack with one child'
                                        },
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Modal'
                                                }
                                            }
                                        }
                                    }
                                }]
                            }
                        })
                    }
                >
                    Modal
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={() =>
                        Navigation.dismissModal(this.props.componentId)
                    }
                >
                    Dimiss
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={() =>
                        Navigation.pop(this.props.componentId)
                    }
                >
                    Pop
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={this.resetTabbar.bind(this)}
                >
                    Logout
                </Text>
                <Text
                    style={styles.welcome}
                    onPress={this.resetTabbar.bind(this)}
                >
                    Tabbar
                </Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default LaunchComponent;