
import { Navigation } from 'react-native-navigation';

import { registerComponents } from './component';


const bottomTabs = {
  bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                id: 'launch',
                name: 'LaunchComponent',
                options: {
                  bottomTab: {
                    text: 'Home'
                  }
                }
              }
            }
          ],
          options: {
            topBar: {
              visible: true,
              title: {
                text: 'React Native Navigation!'
              }
            },
            bottomTab: {
              title: 'Discover' 
            }
          }
        }
      },
      {
        component: {
          name: 'LaunchComponent',
          options: {
            bottomTab: {
              text: 'Setting'
            }
          }
        }
      }
    ],
    options: {
      bottomTabs: {
        fontSize: 14    // this works
      }
    }

  }
}

const launchScreen = {
  stack: {
    children: [{
      component: {
        name: 'LaunchComponent'
      }
    }]
  }
}

Navigation.events().registerAppLaunchedListener(async () => {

  // defaut options
  await setDefautOptions()
  await registerComponents();

  // Root
  Navigation.setRoot({
    root: bottomTabs
  });

  // Navigation.setRoot({
  //   root: launchScreen
  // });
});

function setDefautOptions() {
  Navigation.setDefaultOptions({
    bottomTabs: {
      visible: true,
      animate: false, // Controls wether BottomTabs visibility changes should be animated
      currentTabIndex: 0,
      currentTabId: 'currentTabId',
      // testID: 'bottomTabsTestID',
      drawBehind: true,
      backgroundColor: 'green'
    },
    bottomTab: {
      // badge: '2',
      // testID: 'bottomTabTestID',
      // icon: require('tab.png'),
      iconColor: 'red',
      selectedIconColor: 'blue',
      textColor: 'red',
      selectedTextColor: 'blue',
      fontFamily: 'Helvetica',
      fontSize: 10
    },
    _animations: {
      startApp: {
        y: {
          from: 1000,
          to: 0,
          duration: 500,
          interpolation: 'accelerate',
        },
        alpha: {
          from: 0,
          to: 1,
          duration: 500,
          interpolation: 'accelerate'
        }
      },
      push: {
        topBar: {
          id: 'TEST',
          alpha: {
            from: 0,
            to: 1,
            duration: 500,
            interpolation: 'accelerate'
          }
        },
        bottomTabs: {
          y: {
            from: 1000,
            to: 0,
            duration: 500,
            interpolation: 'decelerate',
          },
          alpha: {
            from: 0,
            to: 1,
            duration: 500,
            interpolation: 'decelerate'
          }
        },
        content: {
          y: {
            from: 1000,
            to: 0,
            duration: 500,
            interpolation: 'accelerate',
          },
          alpha: {
            from: 0,
            to: 1,
            duration: 500,
            interpolation: 'accelerate'
          }
        }
      },
      pop: {
        topBar: {
          id: 'TEST',
          alpha: {
            from: 1,
            to: 0,
            duration: 500,
            interpolation: 'accelerate'
          }
        },
        bottomTabs: {
          y: {
            from: 0,
            to: 100,
            duration: 500,
            interpolation: 'accelerate',
          },
          alpha: {
            from: 1,
            to: 0,
            duration: 500,
            interpolation: 'accelerate'
          }
        },
        bottomTabs: {
          y: {
            from: 0,
            to: 100,
            duration: 500,
            interpolation: 'decelerate',
          },
          alpha: {
            from: 1,
            to: 0,
            duration: 500,
            interpolation: 'decelerate'
          }
        },
        content: {
          y: {
            from: 0,
            to: 1000,
            duration: 500,
            interpolation: 'decelerate',
          },
          alpha: {
            from: 1,
            to: 0,
            duration: 500,
            interpolation: 'decelerate'
          }
        }
      }
    }
  });
}
