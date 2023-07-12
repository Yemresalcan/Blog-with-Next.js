export interface Post {
    title: string;
    overview: string;
    content:any;
    __id: string;
    slug:{
        current: string;
    };
    _createdAt: string;
}