import axios from 'axios'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_APP_TMDB_URL
axios.defaults.params = {}
axios.defaults.params['api_key'] = import.meta.env.VITE_APP_TMDB_KEY

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
