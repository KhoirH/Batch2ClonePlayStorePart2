import React , { Component } from "react"
import {  View, Text , StyleSheet ,  ScrollView} from 'react-native';
import { Thumbnail , Icon ,Container , Button , Header, Body , Left , Right , Title } from 'native-base'

import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux"

const Styles = StyleSheet.create({
    Card :{
        width:100,
        height : 150,
        marginBottom:10,
        flexDirection: 'column',
        justifyContent:"flex-start"

    },
    Text : {
        fontSize: 10,
    },
})
class screenTwo extends Component{
    // navigation = this.props.parent.props.navigation.state;
    componentWillMount(){
        this.title = this.props.navigation.getParam("title" , "hilmi");
        this.properties = this.props.navigation.getParam("properties" , "hilmi");
        
    }
    render(){
                    
        return (
            <View>
                <Header style={{paddingTop:50 , paddingBottom:30,backgroundColor:"#4caf50" , position : "absolute" , top:0}}>
                    <Left>
                        <Text onPress={()=>{this.props.navigation.navigate("PlayStoreOne")}}>
                            <Icon name="md-arrow-back"  style={{color :"white"}} />
                        </Text>
                    </Left>
                    <Body>
                        <Title>
                            {this.title}
                        </Title>
                    </Body>
                    <Right>
                        <Text>
                            <Icon name="md-search"    style={{color :"white"}} />
                        </Text>
                    </Right>
                </Header>
                <ScrollView>
                    <View style= {{  flexDirection: "row" , flexWrap : "wrap" , justifyContent : "flex-start" ,  marginTop:90 , marginLeft:3  }}>
                        
                    { this.properties.map((data, i)=>{
                        return(
                            <Button key={i} transparent style={[Styles.Card , {justifyContent:"flex-start" ,  marginHorizontal:10}]} onPress={()=> this.props.navigation.navigate("PlayStoreFive" , data)} >
                                <Thumbnail large source={{"uri":data.thumbnail}} square style={{width:100, height:100}}  />   
                                <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                                    <View style={{flex:20 }}>
                                        <Text style={[Styles.Text , {height:27 , overflow:"hidden" , color:"#444" }]}>	
                                            {data.name}
                                        </Text>
                                    </View>
                                    <Icon name="md-more" style={[Styles.Text , { fontSize: 20 , flex:1 ,color : "#888" , textAlign:"right" , marginRight:0 }]} />
                                </View>
                                <View style={{flexDirection:"row" , justifyContent:"flex-start"  }}>
                                    <Text style={[Styles.Text , {color: "#444" ,  width:"100%"} ]}>{data.size}</Text>
                                </View>
                            </Button>                
                        )    
                        })
                    }
                    
                    </View> 
                    
                </ScrollView>
            </View>
                               
        )
    }

}




export default connect()(screenTwo);

