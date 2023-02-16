export interface InitialState {
  mode: string;
  user: User | null;
  token: string | null;
  posts: Post[];
  error: string | undefined;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  viewProfile: Number;
  impressions: Number;
}

export interface Post {
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  comments: string[];
  likes: any;
  occupation: string;
  viewProfile: Number;
}
