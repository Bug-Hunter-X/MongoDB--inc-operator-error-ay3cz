```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":1},{$inc:{x:1}});
// Correct use of $inc operator
db.collection.updateOne({"_id":1},{$inc:{x:1,y:1}});
```