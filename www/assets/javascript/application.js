/**
 * Author - Nishant Mendiratta
 * Follow @Twitter - MrMendiratta
 * Reference - https://github.com/davidsulc/backbone.marionette-collection-example
 */


//include our application within a javascript file
MyApp = new Backbone.Marionette.Application();

//Region to display elements, it can include header,content,footer,etc..
MyApp.addRegions({
	mainRegion: "#content"
});

//Creating a model (all we need to do is extend a Backbone class)
AngryDog = Backbone.Model.extend({});

//Creating a collection to store our Dogs
AngryDogs = Backbone.Collection.extend({
	model : AngryDog,
});


//Creating an ItemView that will display a single dog
AngryDogView = Backbone.Marionette.ItemView.extend({
//Which template we’re going to use (This is a mandatory requirement)
template: '#angry_dog-template',
//we can specify some (optional) properties to control the HTML that gets rendered
tagName: 'tr',
//className is simply an HTML class that gets added to the element Backbone creates, so our item will have “class=’angry_dog’”
className: 'angry_dog'
});

//Creating CompositeView will be rendering a collection, we are telling it which ItemView to use to render each model within the collection
AngryDogsView = Backbone.Marionette.CompositeView.extend({
tagName: 'table',
id: 'angry_dogs',
className: 'table table-bordered',
template: '#angry_dogs-template',
itemView: AngryDogView,

//we have to specify how HTML should be instered into our template with the appendHtml function
appendHtml: function(collectionView, itemView){
	//we just want it dumped within the “tbody”
	collectionView.$("tbody").append(itemView.el);
}
});

//Right after we start our app, we’ll want to have our list of dogs displayed. For this purpose, we’ll add a simple initializer
//This initializer will receive any options we send to our application when we call its “start” method (which we haven’t done yet). What our initializer does is straightforward: create a new view with our cats, and display it.
MyApp.addInitializer(function(options){
	var angryDogsView = new AngryDogsView({
		collection: options.dogs
	});
	MyApp.mainRegion.show(angryDogsView);
});

//Once the DOM is ready, we create a collection of dogs populated by dog models we create simultaneously. Then, we simply start our application by passing in the dogs collection, and voilà!
$(document).ready(function(){
	var dogs = new AngryDogs([
		//Adding images 
		{name : 'Wet Dog'},
		{name : 'Bitey Dog'},
		{name : 'Surprised Dog'}
	]);
	MyApp.start({dogs: dogs});
});