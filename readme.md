
MongoDB Install instructions:
https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-red-hat/

After yum install

su -c 'service mongod start'
su -c 'service mongod stop/restart'
see logs here: /var/log/mongodb/mongod.log

Interactive mongo shell
/bin/mongo

* show dbs
* db
* show collections
* use myNewDatabase
* db.myCollection.insert( { x: 1 } );
* db.myCollection.find()
* db.myCollection.remove({})
* https://docs.mongodb.com/manual/crud/
