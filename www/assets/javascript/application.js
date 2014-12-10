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
	model : AngryDog
});
