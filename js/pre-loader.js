(function(){"use strict";function c(a,b){var c=[],d=this.options;return d.onProgress&&a&&d.onProgress.call(this,a,b,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(c.push(this.completed),this.errors.length&&c.push(this.errors),d.onComplete.apply(this,c)),this}var a="addEventListener"in new Image,b=function(a,b){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},b&&"object"==typeof b&&this.setOptions(b),this.addQueue(a),this.queue.length&&this.options.auto&&this.processQueue()};b.prototype.setOptions=function(a){var c,b=this.options;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return this},b.prototype.addQueue=function(a){return this.queue=a.slice(),this},b.prototype.reset=function(){return this.completed=[],this.errors=[],this},b.prototype._addEvents=function(b,d,e){var f=this,g=this.options,h=function(){a?(this.removeEventListener("error",i),this.removeEventListener("abort",i),this.removeEventListener("load",j)):this.onerror=this.onabort=this.onload=null},i=function(){h.call(this),f.errors.push(d),g.onError&&g.onError.call(f,d),c.call(f,d),g.pipeline&&f._loadNext(e)},j=function(){h.call(this),f.completed.push(d),c.call(f,d,this),g.pipeline&&f._loadNext(e)};return a?(b.addEventListener("error",i,!1),b.addEventListener("abort",i,!1),b.addEventListener("load",j,!1)):(b.onerror=b.onabort=i,b.onload=j),this},b.prototype._load=function(a,b){var c=new Image;return this._addEvents(c,a,b),c.src=a,this},b.prototype._loadNext=function(a){return a++,this.queue[a]&&this._load(this.queue[a],a),this},b.prototype.processQueue=function(){var a=0,b=this.queue,c=b.length;if(this.reset(),this.options.pipeline)this._load(b[0],0);else for(;a<c;++a)this._load(b[a],a);return this},"function"===typeof define&&define.amd?define(function(){return b}):this.preLoader=b}).call(this);var imagesArray=["officeback.png","office.png","name.png","trees.svg","billboard.png","cannonball.svg","fort.png","skillback.png","clouds.svg","skillsign.png","college.svg","graduation ribbon.png","office ribbon.png","blimp.png","psribbon.png","bootribbon.png","jsribbon.png","learnback.png","htmlribbon.png","illustratorribbon.png","contactribbon.png","jqribbon.png","csharpribbon.png","polymerribbon.png","fluxribbon.png","reactribbon.png","cssribbon.png","noderibbon.png","sassribbon.png","ground.png","cannon.svg","msgribbon.png","socialribbon.png","emailribbon.png","inputribbon.png","nameribbon.png","grass.png","contactbtn.svg","github.svg","quora.svg","fb.svg","flagpole.svg","gradbtn.svg","officebtn.svg"];for(i=0;i<imagesArray.length;i++)imagesArray[i]="images/"+imagesArray[i];var load=document.getElementById("progressbar");load.setAttribute("max",imagesArray.length),load.setAttribute("value",0),new preLoader(imagesArray,{cacheBurst:!0,onProgress:function(a,b,c){console.log("just "+(b?"loaded: ":"failed: ")+a);Math.floor(100/this.queue.length*this.completed.length);load.value=c,console.log(this.completed.length+this.errors.length+" / "+this.queue.length+" done")},onComplete:function(a,b){console.log("done",a),document.getElementsByTagName("body")[0].className+="loaded",b&&console.log("the following failed",b)},onError:function(a){console.log("error",a)}});