import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController{

    //http://localhost:3333/answers/1?u=00e4e248-4181-4df5-b452-219c35532e19
    /* 
    --Route Params => Parametros que compõe a rota
        routes.get("/answers/:value")
    --Query Params => Busca,Paginação, não obrigatoros
        ?
        chave= valor
    */
    async execute(request: Request, response: Response){
        const {value} = request.params;
        const {u} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });
        if(!surveyUser){
            throw new AppError("Survey User does not exists")
         
        }
        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);
        return response.json(surveyUser);
    }
}

export {AnswerController}