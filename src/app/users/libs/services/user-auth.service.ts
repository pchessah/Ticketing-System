import { Injectable, NgZone } from '@angular/core';
import auth from 'firebase/app'
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  //SAVE LOGGED IN USER DATA
  userData: any;

  constructor(
    public firestore: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning  
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem("user") || '{}')
      } else {
        localStorage.setItem("user", "")
        JSON.parse(localStorage.getItem("user") || '{}')
      }
    })
  }

  // Sign in with email/password
  SignIn(email: string, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          window.alert('Log In Successful.');
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async getAdminUser(){
    const usersRef = this.firestore.collection("users")
    const snapshot = await usersRef.ref.where("role", "==", "admin").get()
    let adminUsers: any[] = []
    snapshot.forEach(doc => {
      adminUsers = [...adminUsers, doc.data()]
    })

    return adminUsers = adminUsers.map((adminUser) => {
      return adminUser.email
    })
  }

  

  //ADMIN SIGN IN
  AdminSignIn(email: string, password: string){
    this.getAdminUser().then((adminUsers) => {
      if (adminUsers.includes(email)){
        return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            window.alert('Log In Successful.');
            this.router.navigate(['admin-dashboard']);
          });
          this.SetUserData(result.user);
        }).catch((error) => {
          window.alert(error.message)
        })
      } else {
        window.alert("Not authorzed.")
      }
    })
  }



  // Sign up with email/password
  SignUp(email: string, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        result.user?.sendEmailVerification()
        this.SetUserData(result.user);
      }).then(()=>{
        window.alert('Sign up successful, check mail to confirm account');
        this.router.navigate(['sign-in']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider())
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: { user: any }) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard'])
        })
        this.SetUserData(result.user)
      })
      .catch((error: any) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password, 
 sign up with username/password and sign in with social auth  
 provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: auth.User | null) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user?.uid}`,
    )
    const userData: any = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      emailVerified: true,
      role: "user"
    }
    return userRef.set(userData, {
      merge: true,
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}
