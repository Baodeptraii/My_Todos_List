import { attach } from '../store.js';
import App from '../Components/App.js';

attach(App, document.getElementById('root'));

// Kết nối (attach) giữa App (phần thực hiện của app) với file index.html thông qua root 
// Thay vì code thuần html để build ra UI thì thực hiện thông qua JS