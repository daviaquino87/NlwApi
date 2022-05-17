import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeeadbackSpy = jest.fn(); 
const sendMailSpy = jest.fn(); 

const submitFeedback = new SubmitFeedbackUseCase(
    {
        create: createFeeadbackSpy
    },{
        sendMail: sendMailSpy
    }
) 
describe('Submit feedback', () => {
    it('shold be able to submit a feedback', async () => {


    await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,'
    })).resolves.not.toThrow();

    expect(createFeeadbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
    });

    it('shold not be able to submit feedback without type', async () => {
 
    await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,'
    })).resolves.not.toThrow();
    });

    it('shold not be able to submit feedback without comment', async () => {
 
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,'
        })).resolves.not.toThrow();
        });

        it('shold not be able to submit feedback with an invalid feedback', async () => {
 
            await expect(submitFeedback.execute({
                type: 'BUG',
                comment: 'Ta tudo',
                screenshot: 'teste.jpg'
            })).resolves.not.toThrow();
            });
});