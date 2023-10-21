/*
* 
=================> MongoDB connection
---------------------------------
1.  create an account
2.  create an user with password.
3.  whitelist IP address
4.  database > connect > driver > Node.js > show all code
5.  set password (change password in the uri)
-------------------------------->

=====================> Server
--------------------------------->
1.  use express.json middleware
2.  create a user (post operator)
3.  app.post('/users', async(req, res) => {})
4.  make function async to use await inside it.
5.  access data from the body : const user = req.body;
6.  const result = await userCollection.insertOne(user)
7.  res.send(result)
----------------------------------->

============================> Client
------------------Post---------------->
1.  create fetch()
2.  added second parameter as an object
3.  provide method: 'POST'
4.  add headers: {'content-type' : 'application/json'}
5.  add body: JSON.stringify(user)


--------------------Read---------------->
1.  create a cursor = userCollectioo.find()
2.  const result = await cursor.toArray()

--------------------Delete--------------->
1.  create app.delete('/users/:id', async(req, res) => {})
2.  specify unique ObjectId to delete the right user
3.  const query = { _id: new ObjectId(id)}
4.  const result = qwait userCollection.deleteOne(query)
---------------Delete Client-------------->
1.  create dynamic url with id
2.  mention the DELETE method
*/