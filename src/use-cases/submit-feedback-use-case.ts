import { FeedbacksRepositorie } from "../repositories/feedbacks-repositories";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
   
    constructor(
         private feedbackRepositorie: FeedbacksRepositorie,
    ){}
    
    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        async execute(request: SubmitFeedbackUseCaseRequest) {
            const {type, comment, screenshot} = request;

            await this.feedbackRepositorie.create({
                type,
                comment,
                screenshot
            })
        }
    }
}