export interface ArticlePostMeta {
    articleId: string;
    userId: string;
    status: 'APPROVED' | 'Declined' | 'PENDING';
    date: string;
}

// event types
export const EVENT_TYPE={
    LIVE_EVENT_CREATED:'live.crate',
    LIVE_EVENT_UPDATED:'live.updated',
    LIVE_EVENT_DELETED:'live.deleted',
   

    //-----  post event---

    ARTICLE_CREATED:'post.created',
    ARTICLE_UPDATED:'post.updated',
    ARTICLE_DELETED:'post.deleted',

} as const;

export type EventType = keyof typeof EVENT_TYPE;
export type EventPayloadMap = {
    [EVENT_TYPE.ARTICLE_CREATED]: ArticlePostMeta;
    [EVENT_TYPE.ARTICLE_UPDATED]: ArticlePostMeta;
    [EVENT_TYPE.ARTICLE_DELETED]: ArticlePostMeta;
}