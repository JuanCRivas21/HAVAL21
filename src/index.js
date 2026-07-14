import './styles/index.scss';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAN0y3i3yA3Hhzi65C0VnCCDeezVPz7QwI",
    authDomain: "eisen-havale.firebaseapp.com",
    databaseURL: "https://eisen-havale-default-rtdb.firebaseio.com",
    projectId: "eisen-havale",
    storageBucket: "eisen-havale.firebasestorage.app",
    messagingSenderId: "451672458392",
    appId: "1:451672458392:web:376dbded6b835fccf93ced",
    measurementId: "G-G9S0SKRZEF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if(nombre == "" || apellido == "" || correo == "" || password == ""){
        alert("Complete todos los campos");
        return;
    }

    createUserWithEmailAndPassword(auth, correo, password)
        .then((userCredential) => {
            const uid = userCredential.user.uid;
            return set(ref(database, `users/${uid}`), { nombre, apellido, correo });
        })
        .then(() => {
            alert("Registro realizado correctamente");
            formulario.reset();
        })
        .catch((error) => {
            if(error.code === "auth/email-already-in-use"){
                alert("El correo ya está registrado");
            }else if(error.code === "auth/invalid-email"){
                alert("El correo no es válido");
            }else if(error.code === "auth/weak-password"){
                alert("La contraseña debe tener al menos 6 caracteres");
            }else{
                console.error(error);
                alert("Ocurrió un error al registrar el usuario");
            }
        });

});
