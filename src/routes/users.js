import { Router } from 'express';

const router = Router();

router.use((req, res, next)=>{
   if (req.url.indexOf("/users") > -1) {
      console.log("User router interceptor")
   }
   next()
})

router.get('/users', function(req, res){
   res.send('GET route on users.');
})

router.get('/users/:userId', function(req, res){
   res.send(`Get route on User ${req.params.userId}`);
})

router.post('/users', function(req, res){
   res.send(`POST route on User ${req.params}`);
})

router.delete('/users/:userId', function(req, res){
   res.send(`delete route on User ${req.params.userId}`);
})

router.put('/users/:userId', function(req, res){
   res.send(`put route on User ${req.params.userId}`);
})


export default router