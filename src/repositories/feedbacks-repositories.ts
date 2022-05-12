export interface FeedbackCreateData{
    type: string;
    comment: string;
    screenshot?: string;
}



export interface FeedbacksRepositorie{

    create:(data: FeedbackCreateData) => Promise<void>;
}