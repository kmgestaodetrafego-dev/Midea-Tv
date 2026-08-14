// Configurações do seu projeto no Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhPiF9cHSnDIEx0POwAFzMJZUlCACjQww",
  authDomain: "painel-de-midia-f6172.firebaseapp.com",
  databaseURL: "https://painel-de-midia-f6172-default-rtdb.firebaseio.com",
  projectId: "painel-de-midia-f6172",
  storageBucket: "painel-de-midia-f6172.firebasestorage.app",
  messagingSenderId: "402409411643",
  appId: "1:402409411643:web:5cba4bb7dc08aa4e7ab81e"
};

// Inicializa o Firebase no app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exporta a referência do Realtime Database
const database = firebase.database();
