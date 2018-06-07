import React , {Component } from "react"
import { View ,  StyleSheet} from "react-native"
import {List ,Header,  ListItem , Text , Icon , Left , Body ,H3 ,Button , Title, Right , Content ,Drawer} from "native-base"

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import SideBar from '../components/sidebar'

const Styles = StyleSheet.create({
    icons : {
        width:40,
        color:"white",
        borderRadius: 100, 
        height:40 ,
        fontSize:17, 
        lineHeight:40,
        textAlign:"center"
    }
})
class screenThree extends Component{
      
    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };
    render(){
        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} parent={this} account={this.props.account} />}
                onClose={() => this.closeDrawer()} 
                >
                <View >
                    <Header style={{backgroundColor:"#666" ,  paddingTop:45 ,  paddingBottom:30}}>    
                        <Left>
                            <Button transparent onPress={()=>this.openDrawer()}>
                            <Icon name='md-menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Akun</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='md-search' />
                            </Button>
                        </Right>
                    </Header>    
                    <View style={{marginTop:10}}>
                        <List>
                            
                            <ListItem icon style={{alignItems:"center" ,  height:"auto"}}  onPress={()=>this.props.navigation.navigate("PlayStoreFour")}>
                                <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                    <Icon name="md-card" style={[{backgroundColor:"#7cb342" } , Styles.icons]} small/>
                                </Left>
                                <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                    <H3>Tambahan pembayaran baru</H3>
                                    <Text style={{fontSize: 12 ,color:"teal"}}>Tambahkan metode pembayaran baru</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon style={{alignItems:"center" ,  height:"auto"}}>
                                <Left  style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                    <Icon name="md-refresh" style={[{backgroundColor:"#fb8c00" } , Styles.icons]} small/>
                                </Left>
                                <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                    <H3 >Langganan</H3>
                                </Body>
                            </ListItem>
                            <ListItem icon style={{alignItems:"center" ,  height:"auto"}}>
                                <Left  style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                    <Icon name="md-ribbon"  style={[{backgroundColor:"#5e35b1" } , Styles.icons]} small/>
                                </Left>
                                <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                    <H3 >Bonus</H3>
                                </Body>

                            </ListItem>
                            <ListItem icon style={{alignItems:"center" ,  height:"auto"}}>
                                <Left  style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                    <Icon name="md-mail" style={[{backgroundColor:"#42a5f5" } , Styles.icons]} small/>
                                </Left>
                                <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                    <H3 >Preferensi email</H3>
                                </Body>
                            </ListItem>
                            <ListItem icon style={{alignItems:"center" ,  height:"auto"}}>
                                <Left style={{height:"auto" , width:"auto" , justifyContent:"center"}}>
                                    <Icon name="md-timer" style={[{backgroundColor:"#546e7a" } , Styles.icons]} small/>
                                </Left>
                                <Body style={{paddingTop:30 , paddingBottom:30 , marginLeft:0}}>
                                    <H3 >History Pemesanan</H3>
                                </Body>
                            </ListItem>
                        </List> 
                    </View>
                
                </View>
            </Drawer>
        )
    }
}

const mapsStateToProps = (state)=>{
    return {
        account : state.accountReducer,
    }
}
export default connect(mapsStateToProps)(screenThree);
