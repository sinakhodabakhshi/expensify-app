import { firebase , googleAuthProvider} from "../firebase/firebase";

//add uid to store
export const login = (uid) => ({
    type: "LOGIN",
    uid
})


//login
export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({
    type:"LOGOUT"
})

//logout
export const startLogout = () =>{
    return () => {
        firebase.auth().signOut();
    }
}



