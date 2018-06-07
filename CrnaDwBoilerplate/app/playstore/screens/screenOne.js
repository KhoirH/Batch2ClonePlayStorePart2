import React , { Component } from "react"
import { View , Text , ScrollView} from "react-native"

import { Tabs , Tab , ScrollableTab , Drawer} from 'native-base'

import Header from './templateOne/header'
import Content from './templateOne/content'
import Footer from './templateOne/footer'

import SideBar from '../components/sidebar'

import SubTab from "../components/tabs"

import { connect } from 'react-redux'
import { singleAccount , allItem} from "../actions"


class screenOne extends Component{
    state= {
        offsetTop :0
    }
    componentDidMount(){
        this.props.dispatch(singleAccount("5b1713c5270b1f1480a07618"))
        this.props.dispatch(allItem())
        
    }  
    closeDrawer() {
        this.drawer._root.close()
    };

    render(){        
        return (
            <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator} parent={this} account={this.props.account} />}
            onClose={() => this.closeDrawer()}
             
            >
                <ScrollView >
                    <Header parentApp={this}  zIndex={1000}/>
                    <Tabs renderTabBar={()=> <ScrollableTab />} locked >
                            <Tab heading="BERANDA" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                                <Content parentApp={this} { ...this.props }/>
                            </Tab>
                            <Tab heading="GAME" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                            <Tab heading="FILM" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                            <Tab heading="BUKU" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>                                                
                            </Tab>
                            <Tab heading="KIOS" tabStyle={{ backgroundColor:"#4caf50"}} activeTabStyle={{ backgroundColor:"#4caf50"}} textStyle={{ color : "white"}}>
                            </Tab>
                    </Tabs>
                    <SubTab animate={false} offsetTop= {135}   />
                    
                </ScrollView>
            </Drawer>
        )
    }

}

const mapsStateToProps = (state)=>{
    return {
        account : state.accountReducer,
        item : state.itemReducer.items
    }
}
export default connect(mapsStateToProps)(screenOne);

