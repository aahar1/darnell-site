import { initializeApp} from 'firebase/app';
import { getDatabase} from 'firebase/data';

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyC2pf27CPsbCfk19FdOqO0nieOf3fFOuwg",
        authDomain: "darnell-site.firebaseapp.com",
        databaseURL: "https://darnell-site-default-rtdb.firebaseio.com",
        projectId: "darnell-site",
        storageBucket: "darnell-site.appspot.com",
        messagingSenderId: "197439946677",
        appId: "1:197439946677:web:41156fc276aa0ff61de3fc",
        measurementId: "G-WCCMBP2ZCN"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return getDatabase(app);
}

export default StartFirebase;