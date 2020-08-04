import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseconfig =
{
  apiKey: "AIzaSyC9s-2TcTy07jhLSJ-wJsW7IIJemSBfWqI",
    authDomain: "getmate-feb4e.firebaseapp.com",
    databaseURL: "https://getmate-feb4e.firebaseio.com",
    projectId: "getmate-feb4e",
    storageBucket: "getmate-feb4e.appspot.com",
    messagingSenderId: "127968499551",
    appId: "1:127968499551:web:cd14a129320f08493b88ea",
    measurementId: "G-0X2F36VHN3"
};
if(!firebase.apps.lenght){
firebase.initializeApp(firebaseconfig);
firebase.analytics();
}

export default firebase

  //"type": "service_account",
  //"project_id": "getmate-feb4e",
  //"private_key_id": "7b48d7ed902710bdbe30acb32e8389bcaefa2092",
  //"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDE0YauvBaZxbkp\nIosfnIt/Mz56mbUoNobQmKzZl/J4OTHu04CilJ7S9c3aGfoRoFMGxh+1T0hDBeXK\naKcOakHPdSEYbHtp4moGmmdWJX7UlN+aflNcST6XmioqdF3//T3aXtX3QwaWzYU+\nUxqt/xsAk/7swSgralKxH/fH38FNUPqht45xsYyVr3/MEmV1cu9K2sStM42LIJlJ\nXyz7jF2LmxQrfBICi6Z24nyb0pRxwy6mceTaCCzFvM7+b/4yggxJjc2ZYtzjOtKG\nLWoyNtN1hPZWH+qa0+5eNVvvbAn9Nrh231bRRRxE2pSfY5HOyZMqeX81d1te2Yhu\nanf1I41ZAgMBAAECggEAHmJPmHS7ncxDDsahE6WRziFAaUzcBUk6/BjrFkG5fOCC\nL4xsigIc7Wm6TbaU6a5bzZU9xTpoEsYQ+MkPK8/bjltWsJ6Ortn1OZpnOYqwTxZs\ng+fclp1NZw9gUw2D4Buy4MijNM4exkkUDiW7iKuepN2JYqNZwC9kdKkAEiseJwEu\nUhRV79I/ysVriwPrzx44XP0xJnYn+07EkHllK58Gh16prOyUwbab5HGRo3DJsae9\nTs0JyXqxBtsJYkhNTpVM/3DJ4z287W4Tl3CAYR75n5KkgtLBZVoSCNQpXdMlDTmz\noIP+dSFGePY99BDKJYMH/saF3cx+pPWTW47qHy9SwQKBgQD5umVAVSX0y0lI6uZI\neKiqHfgIYTmd4JCexFEKdLQsGhC5sntkDT8A7W204Q2KGCsoLANvgXaP4QAOL1/+\n8s12Of6dvhwT3oonWosfMXRvM1leCYL/gj4uWMgs20WUxA0hssHqfjFYErZwInsq\nOvoHZGVpAxUvWYGS3qj61iWxIwKBgQDJwvPoQQtmeW6w/4yzHB1YUxImaPDMitA3\nzmJ4f3N3UhnHWp2VcMLJ1CXQx4dOTYwKfwcjq9rCgWD7LM9dzznkwGZUuxm1KwHh\n9JsT5wAP0Qqy4Yx7jqVaMhK2P46zj4/cAbqqcMXgaUishsp9r0bnoQE2EhIaCSZ9\n95wZTmPVUwKBgQCEiVZ/ZDF20AUe+/wn7lGlp64h1Gfd0HcwrAROxk1xMow54e32\n1cjgVyJoYyDqb5VIBsP0BAPGrKV44c/S4U4GNxVY5rLEING1vSok7fxboCcH74hk\nztztgBUNKXquT7agcdzU9RB/K79DmClB6ncUQUZJC2fM73YDWsTYC5uJfQKBgDgq\ncUPCd637N/lF6qEhvnmMBo1ywTXvnq8qYPcyY65fyJVagGvNjCwrRqusH9qIc+eo\nHRCtEqT650iE3OU8ft1TQilsPGfWpRuFwHX15GqCwvuxFi5/M0C8l8DsSIlr+ZxB\nTvmLk0o5hOWiUFRUquRoSbIHrcpZqcF/YJEa5WfJAoGBAPH+tuLo3gyYwqqCFqJu\n/m2k7NpDbqIZyR/iWnaOsfQF7dgspppXXwG09SHiMZ9oa4fpqYlSD09ciwVQ6a3q\nQzhbHoYtQi0ZZxc4iNmmeBjB0jG5jaZGImbDmCto+e9ZCXYIHio2kP2Vdb4dq0pg\ngpgX2oc57dD5X6CV/eTrIRRG\n-----END PRIVATE KEY-----\n",
  //"client_email": "firebase-adminsdk-f4tep@getmate-feb4e.iam.gserviceaccount.com",
  //"client_id": "105863940289218962387",
  //"auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //"token_uri": "https://oauth2.googleapis.com/token",
  //"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-f4tep%40getmate-feb4e.iam.gserviceaccount.com"