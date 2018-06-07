import React , { Component } from 'react'
import {View , Text ,TouchableOpacity , ScrollView} from 'react-native'
import {Container ,Content , H4} from 'native-base'

import Advertisement from "../../components/advertisement"
import Choose from "../../components/choose"
import Card from "../../components/card"

export default class content extends Component{
    state = {
        isLoading : true
    }
    execute(){
        items = this.props.item ;
        this.advertisement = [];
        this.latest = [];
        this.game =[];
        this.aplication =[];
        this.favourite = [];
        this.rating = [];
        this.gameLatest = []
        // console.log(items)
        items.map((data , i) => {
            if(data.advertisement){
                this.advertisement.push(items[i])   
            }
            if(i < 5 ){
                this.latest.push(items[i])
            }
            if(data.categories == "game"){
                this.game.push(items[i])
            }
            if(data.categories == "game" && i < 5){
                this.gameLatest.push(items[i])
            }
            if(data.categories == "aplikasi"){
                this.aplication.push(items[i])
            }
            if(data.download > 100000){
                this.favourite.push(items[i])
           }
            if(data.rating > 4.4){
                this.rating.push(items[i])
            }
        });

        
        
    }
    parsingProps(props)
    {
        // console.log(this.props.parentApp , props);
        return this.props.parentApp.props.navigation.navigate("PlayStoreTwo" , props) ;
    } 
   
    render(){
        this.execute()
        return (
            <View style={{marginLeft:10 , marginRight: 10 , marginTop: 50   }}>
                <Advertisement />
                <Choose 
                    properties={this.gameLatest}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text >Game Baru + Diperbarui</Text>
                            </View>
                            <View >
                                <Text style={{fontSize:10,color:"#888"}}>Selalu ada yang baru lho!</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                        <TouchableOpacity  onPress={()=>this.parsingProps({title:"Game Baru + Diperbarui" , properties:this.gameLatest}) }>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.game}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:-10 }}>
                        <View style={{flex:5 }}>
                            <Text>Direkomendasikan untuk Anda</Text>
                        </View>
                        <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.parsingProps({title:"Direkomendasikan untuk Anda" , properties:this.game})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.advertisement}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start"  , marginBottom:5}}>
                        
                        <View style={{flex:6 , paddingTop:5 }}>
                            <Text>Disarankan untuk Anda</Text>
                        </View>
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.rating}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text>Aplikasi terpopuler saat ini</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Game Pra Daftar" , properties:this.rating})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                
                <Choose 
                    bgColorCard="black"
                    parseImage="http://images.all-free-download.com/images/graphiclarge/background_ramadan_mubarak_vector_design_set_584345.jpg"
                    dark= {true}
                    properties={this.gameLatest}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text style={{color:"white"}}>Diskon Untuk Game Premium</Text>
                            </View>
                            <View >
                                <Text style={{fontSize:10,color:"white"}}>Segera di Google Play</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Diskon Untuk Game Premium" , properties:this.gameLatest})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
                <Card/>
                
                <Choose 
                    properties={this.favourite}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start"  }}>
                        <View style={{flex:5  }}>
                            <Text>Aplikasi Disarankan untuk Anda</Text>
                        </View>
                        <View style={{flex:1 }}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Aplikasi Disarankan untuk Anda" , properties:this.favourite})}>
                                <Text style={{color:"#4caf50" }}>
                                    Lainnya
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                
                </Choose>
                <Choose 
                    properties={this.aplication}>
                    <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:5 }}>
                        <View style={{flex:5 , flexDirection:"column"}}>
                            <View>
                                <Text>Terpopuler saat ini</Text>
                            </View>
                            
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>this.parsingProps({title:"Terpopuler saat ini" , properties:this.aplication})}>
                                <Text style={{color:"#4caf50" , fontWeight:"bold"}}>
                                    Lainnya
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                </Choose>
            </View>
                
        )
    }
}
