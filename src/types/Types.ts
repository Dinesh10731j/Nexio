export interface contactType {
    name:string;
    email:string;
    message:string;
};



export interface signupType{
    name:string;
    email:string;
    password:string;
};


export interface loginType{
    email:string;
    password:string;
}


export interface BlogsResponse {
    blogs: Blogs[];
  }
  
  export interface Blogs {
    image: Image;
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Image {
    url: string;
    caption: string;
  }
  


