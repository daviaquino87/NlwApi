import { MailAdapter } from "../adapters/maill-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
   
    constructor(
         private feedbackRepositorie: FeedbacksRepository,
         private mailAdapter: MailAdapter 
    ){}

    
    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error ('Type is required')
        }

        if(!comment){
            throw new Error ('Comment is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('invalid screenshot format.')
        }


    await this,this.feedbackRepositorie.create({
        type,
        comment,
        screenshot
    })

    await this.mailAdapter.sendMail({
        subject: 'Novo feedback',
        body: [
            `<div style="font-familly: sans-serif; font-size: 16px; color:#111" >`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentario do feedback: ${comment}</p>`,
            `</div>`
          ].join(`\n`)
    })

    }    
}