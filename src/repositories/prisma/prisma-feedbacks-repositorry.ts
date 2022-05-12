import { FeedbackCreateData, FeedbacksRepositorie } from "../feedbacks-repositories";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepositories implements FeedbacksRepositorie {
   async create({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
     
    }
}