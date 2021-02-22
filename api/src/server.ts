import express from 'express';

const app = express();

 // http://localhos:3333/users
app.get("/", (request, response) =>{
    return response.json({message: "Hello World"})
})
// 1 param => rota (Recurso API)
// 2 param => request, response

app.post("/", (request, response)=>{
    // Recebeu os dados para salvar
    return response.json({message: "Dados salvos com sucesso"})
})
app.listen(3333, ()=> console.log("Server is Running"));