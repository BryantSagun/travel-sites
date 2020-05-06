exports.handler = function(event, context, callback){
     let body
     const secretContent = `
     <h3>Welcome to The Secret Area</h3>
     <p>Here, I can tell you that 2+2 = 4</p>
     `

     if(event.body){
          body = JSON.parse(event.body)
     } else{
          body = {}
     }

     if(body.password == "stormsnitch589"){
          callback(null, {
               statusCode: 200,
               body: secretContent
          })
     }else{
          callback(null, {
               statusCode: 401
          })
     }
}