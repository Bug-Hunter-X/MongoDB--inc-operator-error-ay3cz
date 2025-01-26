```javascript
// Correct use of $inc operator
db.collection.updateOne({"_id":1},{$inc:{x:1, y:1}});

// Alternative using $set operator
db.collection.updateOne({"_id":1},{$set:{x:2}});
```