Todos = new Mongo.Collection('todos');

if ( Meteor.isServer ) {
    Meteor.onConnection( function (connection) {
        console.log(connection.id);
    });

    Meteor.publish("todos", function () {
        return Todos.find();
    });

    Meteor.methods({
        mymethod: function () {
            return 'mymethod';
        }
    });
}
