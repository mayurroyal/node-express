import { Router } from "express"
import IndexRouter from './index.js'
import ProductsRouter from './products.js'
import UsersRouter from './users.js'

const router = Router();

router.use((req, res, next)=>{
    console.log("Main router interceptor")
    next()
})

router.use(IndexRouter)
router.use(ProductsRouter)
router.use(UsersRouter)

export default router