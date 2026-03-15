import { ArticlePostMeta } from './events.name';

// Generic Base Event
export interface BaseEvent<TMeta> {
    action: "CREATE" | "UPDATE" | "DELETE";
    meta: TMeta;
}

// Notification Base
export interface Notification {
    type: string;
    title: string;
    message: string;
    createdAt: Date;
    meta: Record<string, any>;
}
export interface ArticlePostEvent extends BaseEvent<ArticlePostMeta> {
 info:{
  title: string;
  description:string;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED' | 'DELETED';
  image: string;
  createdAt: Date;
  meta: Record<string, any>;
  recipients: {id:string,email:string}[]
 }
}

export interface communityMeta {
 info:{
  title: string;
  description:string;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED' | 'DELETED';
  image: string;
  createdAt: Date;
  meta: Record<string, any>;
  recipients: {id:string,email:string}[]
 }
  
}