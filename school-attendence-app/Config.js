import firebase from "firebase";

var firebaseConfig = {
  apiKey: 'AIzaSyBY-wTVGixnHb80TpDEk30ndVTGoUvd_Wg',
  authDomain: 'school-attendance-app-aa0ab.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-aa0ab-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-aa0ab',
  storageBucket: 'school-attendance-app-aa0ab.appspot.com',
  messagingSenderId: '833049101034',
  appId: '1:833049101034:web:a5e67c1137e741cdb7cd93',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
