const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=0cdddc66ff8111088947ca4c33e7656b&query='+ latitude + ',' + longitude + '&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect weather device",undefined)
        }else if(body.error){
            callback("unable to find location",undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently ' +body.current.temperature+ ' degrees out. There is a '+body.current.precip+'% chance of rain.')
        }
    })
}

module.exports=forecast