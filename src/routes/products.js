import { Router } from 'express';

const router = Router();

router.use((req, res, next) => {
   if (req.url.indexOf("/products") > -1) {
      console.log("Product router interceptor")
   }
   next()
})

router.get('/products', function (req, res) {
   res.send('GET route on products.');
})

router.get('/products/:productId', function (req, res) {
   res.send(`Get route on product ${req.params.productId}`);
})

router.post('/products', function (req, res) {
   res.send(`POST route on product ${req.params}`);
})

router.delete('/products/:productId', function (req, res) {
   res.send(`delete route on product ${req.params.productId}`);
})

router.put('/products/:productId', function (req, res) {
   res.send(`put route on product ${req.params.productId}`);
})


export default router