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


// Interface for Image Data
export interface ImageData {
  type: string;
  data: {
    file: {
      url: string;
    };
    caption?: string;
    withBackground?: boolean;
    withBorder?: boolean;
    stretched?: boolean;
  };
}

// Interface for Block Data
export interface Block {
  id: string;
  type: string;
  data: {
    text?: string;
    level?: number;
    items?: string[];
    file?: {
      url: string;
    };
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
    code:string
  };
}

// Interface for Author
export interface Author {
  name: string;
}

// Interface for Image
export interface Image {
  caption: string;
  url: string;
  alt?: string;
}

// Interface for Blog
export interface Blogs {
  _id: string;
  title: string;
  content: string;
  blocks: Block[];
  readingTime: string;
  publishedDate: string;
  author: Author;
  image: Image;
  createdAt: string;
  updatedAt: string;
  __v: number;
}




export interface postIdType{
  postId:string
}
