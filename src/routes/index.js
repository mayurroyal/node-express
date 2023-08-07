import { Router } from 'express';
import { getAll } from '../controllers/index.controller.js';

const router = Router();

router.use((req, res, next) => {
   if (req.url === "/") {
      console.log("Index router interceptor")
   }
   next()
})

router.get('/', getAll);

router.post('/', function (req, res) {
   res.send('POST route on things.');
});

export default router