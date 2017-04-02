import ListPage from '../Scenes/ListPage.js';
import JournalEntryEdit1 from '../EditPages/JournalEntryEdit1.js';
import AppDrawer from '../Drawer/AppDrawer.js';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import AuthoringPage1 from '../Scenes/AuthoringPage1.js';
import CON_ListPage from '../../containers/CON_ListPage.js';
import CON_AppDrawer from '../../containers/CON_AppDrawer.js';

const AppNavigator = DrawerNavigator({
  Journals: {
    screen: StackNavigator({
      Home      : { screen: CON_ListPage },
      Authoring : { screen: AuthoringPage1 },
      Edit1: { screen: JournalEntryEdit1 }
    }, { headerMode: 'none' })
  }
}, {
  contentComponent: CON_AppDrawer,
});

const renderErrorPage = () => {
  return(
    <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text>Something went wrong!</Text>
    </View>
  )
}

export default AppNavigator;
