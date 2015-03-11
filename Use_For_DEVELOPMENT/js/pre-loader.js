;(function(){
	'use strict';

	// can we support addEventListener
	var hasNative = 'addEventListener' in (new Image());

	/**
	 * @constructor
	 * @param {Array} images - string of images to load
	 * @param {Object=} options - overrides to defaults
	 */
	var preLoader = function(images, options){
		this.options = {
			pipeline: false,
			auto: true,
			prefetch: false,
			/* onProgress: function(){}, */
			/* onError: function(){}, */
			onComplete: function(){}
		};

		options && typeof options == 'object' && this.setOptions(options);

		this.addQueue(images);
		this.queue.length && this.options.auto && this.processQueue();
	};

	/**
	 * naive shallow copy/reference from options into proto options
	 * @param {Object} options
	 * @returns {preLoader}
	 */
	preLoader.prototype.setOptions = function(options){
		// shallow copy
		var o = this.options,
			key;

		for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

		return this;
	};

	/**
	 * stores a local array, dereferenced from original
	 * @param images
	 * @returns {preLoader}
	 */
	preLoader.prototype.addQueue = function(images){
		this.queue = images.slice();

		return this;
	};

	/**
	 * reset the arrays
	 * @returns {preLoader}
	 */
	preLoader.prototype.reset = function(){
		this.completed = [];
		this.errors = [];

		return this;
	};

	/**
	 * Subscribe to events for an imag object and a source
	 * @param {Object} image
	 * @param {String} src
	 * @param {Number} index
	 * @returns {preLoader}
	 * @private
	 */
	preLoader.prototype._addEvents = function(image, src, index){
		var self = this,
			o = this.options,
			cleanup = function(){
				if (hasNative){
					this.removeEventListener('error', abort);
					this.removeEventListener('abort', abort);
					this.removeEventListener('load', load);
				}
				else {
					this.onerror = this.onabort = this.onload = null;
				}
			},
			abort = function(){
				cleanup.call(this);

				self.errors.push(src);
				o.onError && o.onError.call(self, src);
				_checkProgress.call(self, src);
				o.pipeline && self._loadNext(index);
			},
			load = function(){
				cleanup.call(this);

				// store progress. this === image
				self.completed.push(src); // this.src may differ
				_checkProgress.call(self, src, this);
				o.pipeline && self._loadNext(index);
			};

		if (hasNative){
			image.addEventListener('error', abort, false);
			image.addEventListener('abort', abort, false);
			image.addEventListener('load', load, false);
		}
		else {
			image.onerror = image.onabort = abort;
			image.onload = load;
		}

		return this;
	};

	/**
	 * Private API to load an image
	 * @param {String} src
	 * @param {Number} index
	 * @returns {preLoader}
	 * @private
	 */
	preLoader.prototype._load = function(src, index){
		/*jshint -W058 */
		var image = new Image;

		this._addEvents(image, src, index);

		// actually load
		image.src = src;

		return this;
	};

	/**
	 * Move up the queue index
	 * @param {Number} index
	 * @returns {preLoader}
	 * @private
	 */
	preLoader.prototype._loadNext = function(index){
		// when pipeline loading is enabled, calls next item
		index++;
		this.queue[index] && this._load(this.queue[index], index);

		return this;
	};

	/**
	 * Iterates through the queue of images to load
	 * @returns {preLoader}
	 */
	preLoader.prototype.processQueue = function(){
		// runs through all queued items.
		var i = 0,
			queue = this.queue,
			len = queue.length;

		// process all queue items
		this.reset();

		if (!this.options.pipeline) for (; i < len; ++i) this._load(queue[i], i);
		else this._load(queue[0], 0);

		return this;
	};

	/*jshint validthis:true */
	/**
	 * Internal checker on the queue progress
	 * @param {String} src
	 * @param {Object} image
	 * @returns {preLoader}
	 * @private
	 */
	function _checkProgress(src, image){
		// intermediate checker for queue remaining. not exported.
		// called on preLoader instance as scope
		var args = [],
			o = this.options;

		// call onProgress
		o.onProgress && src && o.onProgress.call(this, src, image, this.completed.length);

		if (this.completed.length + this.errors.length === this.queue.length){
			args.push(this.completed);
			this.errors.length && args.push(this.errors);
			o.onComplete.apply(this, args);
		}

		return this;
	}
	/*jshint validthis:false */

	if (typeof define === 'function' && define.amd){
		// we have an AMD loader.
		define(function(){
			return preLoader;
		});
	}
	else {
		this.preLoader = preLoader;
	}
}).call(this);

	// assign 50 non-cache-able images via an image generator
			var imagesArray = 
			[
			"officeback.png"
			,"office.png"
			,"name.png"
			,"trees.svg"
			,"billboard.png"
			,"cannonball.svg"
			,"fort.png"
			,"skillback.png"
			,"clouds.svg"
			,"skillsign.png"
			,"college.svg"
			,"graduation ribbon.png"
			,"office ribbon.png"
			,"blimp.png"
			,"psribbon.png"
			,"bootribbon.png"
			,"jsribbon.png"
			,"learnback.png"
			,"htmlribbon.png"
			,"illustratorribbon.png"
			,"contactribbon.png"
			,"jqribbon.png"
			,"csharpribbon.png"
			,"polymerribbon.png"
			,"fluxribbon.png"
			,"reactribbon.png"
			,"cssribbon.png"
			,"noderibbon.png"
			,"sassribbon.png"
			,"ground.png"
			,"cannon.svg"
			,"msgribbon.png"
			,"socialribbon.png"
			,"emailribbon.png"
			,"inputribbon.png"
			,"nameribbon.png"
			,"grass.png"			
			,"contactbtn.svg"
			,"github.svg"
			,"quora.svg"
			,"fb.svg"
			,"flagpole.svg"
			,"gradbtn.svg"
			,"officebtn.svg"
			]

			for (i=0;i<imagesArray.length;i++){
				imagesArray[i] = "images/" + imagesArray[i];
			}
					
			var load = document.getElementById("progressbar");
			load.setAttribute('max', imagesArray.length);
			load.setAttribute('value', 0);

			// instantiate the pre-loader with an onProgress and onComplete handler
			new preLoader(imagesArray, {
				// pipeline: true,
				cacheBurst: true,
				onProgress: function(img, imageEl, index){
					// fires every time an image is done or errors.
					// imageEl will be falsy if error
					console.log('just ' +  (!imageEl ? 'failed: ' : 'loaded: ') + img);

					var percent = Math.floor((100 / this.queue.length) * this.completed.length);

					// update the progress element
					load.value = index;

					// can access any propery of this
					console.log(this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
				},
				onComplete: function(loaded, errors){
					// fires when whole list is done. cache is primed.
					console.log('done', loaded);
					document.getElementsByTagName('body')[0].className+='loaded';
					if (errors){
						console.log('the following failed', errors);
					}
				},
				onError: function(bombed){
					console.log('error', bombed);
				}
			});
