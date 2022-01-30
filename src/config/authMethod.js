import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import firebase from './firebase-config'

export const facebookProvider =new FacebookAuthProvider();
export const githubProvider =new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();
