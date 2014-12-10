//include our application within a javascript file
MyApp = new Backbone.Marionette.Application();

//Region to display elements, it can include header,content,footer,etc..
MyApp.addRegions({
	mainRegion: "#content"
});

//reference - https://github.com/davidsulc/backbone.marionette-collection-example