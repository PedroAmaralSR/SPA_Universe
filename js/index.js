import {Router} from './routes.js'
const router = new Router()
router.add('/','./pages/home.html')
router.add('/universo','./pages/universo.html')
router.add('/exploracao','./pages/exploracao.html')

// const routes = {
//   "/": "./pages/home.html",
//   "/universo": "./pages/universo.html",
//   "/exploracao": "./pages/exploracao.html"
// }



router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()