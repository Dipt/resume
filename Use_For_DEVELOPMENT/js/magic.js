/*global $, jQuery, alert*/
/*! jInvertScroll 0.8.3 | Mit License */
(function($){'use strict';$.jInvertScroll=function(sel,options){var defaults={width:'auto',height:'auto',onScroll:function(percent){}};var config=$.extend(defaults,options);if(typeof sel==='Object'&&sel.length>0){return}var elements=[],longest=0,totalHeight,winHeight,winWidth;function init(){$.each(sel,function(i,val){$(val).each(function(e){elements.push($(this));var w=$(this).width();if(longest<w){longest=w}})});if(config.width=='auto'){config.width=longest}if(config.height=='auto'){config.height=longest}$('body').css('height',config.height+'px')}function calc(){totalHeight=$(document).height();winHeight=$(window).height();winWidth=$(window).width()}function onscroll(e){var currY=$(this).scrollTop();calc();var diff=totalHeight-winHeight;var scrollPercent=0;if(diff!=0){scrollPercent=(currY/diff).toFixed(4)}if(typeof config.onScroll==='function'){config.onScroll.call(this,scrollPercent)}$.each(elements,function(i,el){var deltaW=el.width()-winWidth;if(deltaW<=0){deltaW=el.width()}var pos=Math.floor(deltaW*scrollPercent)*-1;el.css('left',pos)})}function setlisteners(){$(window).on('scroll resize',onscroll);$([document,window]).on('ready resize',calc)}init();setlisteners();return{reinitialize:function(){init();setlisteners()},destroy:function(){$('body').attr('style','');$(window).off('scroll resize',onscroll);$([document,window]).off('ready resize',calc)}}}}(jQuery));

var $ken = $('#dipt');
var casualclothes = document.getElementById('casualsvg');
var gradclothes = document.getElementById('gradsvg');
var formalclothes = document.getElementById('formalsvg');
var cstart = document.getElementById('cstart');
var gstart = document.getElementById('gstart');
var fstart = document.getElementById('fstart');
cstart.beginElement();
gstart.beginElement();
fstart.beginElement();
var currentclothes = cstart;
var $initialize = $('#initialize');
var $chkpoint1 = $('#chkpoint1');
var $chkpoint2 = $('#chkpoint2');
var $chkpoint3 = $('#chkpoint3');
var $chkpoint4 = $('#chkpoint4');
var $chkpoint5 = $('#chkpoint5');
var $finale = $('#finale');
var $flagpole = $('.flagpole');
var $key = $('.key4');
var $kenPos, $fireballPos;
var $introbck = $('.name');
var $intromsg = $('.intromsg');
var $college = $('#college');
var $collegeribbon = $('#collegeribbon');
var $gradBtn = $('#gradBtn');
var $office = $('.office');
var $officeribbon = $('#officeribbon');
var $officeBtn = $('#officeBtn');
var $billboard = $('#billboard');
var $blimp = $('#blimp');
var $htmlribbon = $('#htmlribbon');
var $cssribbon = $('#cssribbon');
var $jsribbon = $('#jsribbon');
var $jqueryribbon = $('#jqueryribbon');
var $photoshopribbon = $('#photoshopribbon');
var $illustratorribbon = $('#illustratorribbon');
var $bootribbon = $('#bootribbon');
var $csharpribbon = $('#csharpribbon');
var $noderibbon = $('#noderibbon');
var $sassribbon = $('#sassribbon');
var $reactribbon = $('#reactribbon');
var $fluxribbon = $('#fluxribbon');
var $polymerribbon = $('#polymerribbon');
var $learn = $('.learn');
var $skill = $('.skill');
var $contactBtn = $('#contactBtn');
var $cannon = $('.cannon');
var $wall = $('.wall');
var $contactheading = $('.contactheading');
var $nameinput = $('#nameinput');
var $emailinput = $('#emailinput');
var $msginput = $('.msg');
var $txtmsg = $('.large');
var $submit = $('.submit');
var $socialinput = $('.socialinput');
var $txtname = $('#txtname');
var $txtemail = $('#txtemail');
var $sendBtn = $('.sendBtn');
var $socialset = $('.socialset');
var $navpoint = $('.navpoint');

var messagehidden = false;
var reachedCollege = false;
var reachedOffice = false;
var reachedbillboard = false;
var reachedSkills = false;
var reachedLearn = false;
var reachedContact = false;
var firedCannon = false;
var IsForwardMoving = true;

var htmlribbon = 'images/htmlribbon.png';
var cssribbon = 'images/cssribbon.png';
var jsribbon = 'images/jsribbon.png';
var jqueryribbon = 'images/jqribbon.png';
var photoshopribbon = 'images/psribbon.png';
var illustratorribbon = 'images/illustratorribbon.png';
var bootribbon = 'images/bootribbon.png';
var csharpribbon = 'images/csharpribbon.png';
var noderibbon = 'images/noderibbon.png';
var sassribbon = 'images/sassribbon.png';
var reactribbon = 'images/reactribbon.png';
var fluxribbon = 'images/fluxribbon.png';
var polymerribbon = 'images/polymerribbon.png';

var prev = 0;

var progress = 0;
// A variable check for when the animation is mostly over
var first = false, clicked = false;

var hideall = function () {
	gradclothes.style.display = 'none';
	formalclothes.style.display = 'none';
	$introbck.hide();
	$intromsg.hide();
	$college.hide();
	$collegeribbon.hide();
	$gradBtn.hide();
	$office.hide();
	$officeribbon.hide();
	$officeBtn.hide();
	$htmlribbon.hide();
	$cssribbon.hide();
	$jsribbon.hide();
	$jqueryribbon.hide();
	$photoshopribbon.hide();
	$illustratorribbon.hide();
	$bootribbon.hide();
	$csharpribbon.hide();
	$noderibbon.hide();
	$sassribbon.hide();
	$reactribbon.hide();
	$fluxribbon.hide();
	$polymerribbon.hide();
	$contactBtn.hide();
	$contactheading.hide();
	$nameinput.hide();
	$emailinput.hide();
	$txtname.hide();
	$txtemail.hide();
	$txtmsg.hide();
	$msginput.hide();
	$submit.hide();
	$socialinput.hide();
	$sendBtn.hide();
	$socialset.hide();
};

var resettxtvalues = function () {
	$txtname.val('');
	$txtemail.val('');
	$txtmsg.val('');
};

var dropInIntroTxt = function () {
	$introbck.show().animate({
		bottom: "60px"
	}, 700);
};

var showCharacter = function () {
	if (progress === 0) {
		$ken.animate({
			marginLeft : '0px'
		}, 1800);
	}
};

var displaymsg = function () {
	$intromsg.show();
	messagehidden = false;
};

var setupStart = function () {
	resettxtvalues();
	$initialize.addClass('current');
	setTimeout(dropInIntroTxt, 1800);
	setTimeout(showCharacter, 2300);
	setTimeout(displaymsg, 3500);
};

var genClips = function () {
	var $t = $('.clipped-box'), amount = 5, width = $t.width() / amount, height = $t.height() / amount, html = $t.find('.content').html(), y = 0, z = 0;
	for (z = 0; z <= (amount * width); z = z + width) {
		$('<div class="clipped" style="clip: rect(' + y + 'px, ' + (z + width) + 'px, ' + (y + height) + 'px, ' + z + 'px)">' + html + '</div>').appendTo($t);
		if (z === (amount * width) - width) {
			y = y + height;
			z = -width;
		}
		if (y === (amount * height)) {
			z = 9999999;
		}
	}
};

//initial functions
window.onload = function () {
	hideall();
	setupStart();
	genClips();
};

//to reset character and page back to starting point
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

$(document).keydown(function (e) {
    if (e.which === 39) {
        window.scrollBy(0, 50);
    }
	if (e.which === 37) {
        window.scrollBy(0, -50);
    }
});

//using the Jinvertscroller, updating the value of progress to get which scene we are at
(function ($) {

	var elem = $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
		{
			height : 15000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
			onScroll : function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
				progress = percent;
			}
		});

	$(window).resize(function () {
		if ($(window).width() <= 768) {
			elem.destroy();
		} else {
			elem.reinitialize();
		}
	});
}(jQuery));

var hidemsg = function () {
	$intromsg.hide();
	messagehidden = true;
};

var popupCollege = function () {
	$college.css({marginBottom: '-400px'});
	$college.show().animate({
		marginBottom: '16px'
	}, 300);
};

var dropCollegeRibbon = function () {
	$collegeribbon.css({marginBottom: '400px'});
	$collegeribbon.show().animate({
		marginBottom: '0px'
	}, 300);
};

var checkPoint1Animate = function () {
	popupCollege();
	setTimeout(dropCollegeRibbon, 300);
};

var showgradBtn = function () {
	$gradBtn.fadeIn(500);
};

var popupOffice = function () {
	$office.css({marginBottom: '-400px'});
	$office.show().animate({
		marginBottom: '0px'
	}, 200);
};

var dropOfficeRibbon = function () {
	$officeribbon.css({marginBottom: '400px'});
	$officeribbon.show().animate({
		marginBottom: '0px'
	}, 300);
};

var checkPoint2Animate = function () {
	popupOffice();
	setTimeout(dropOfficeRibbon, 500);
};

var showofficeBtn = function () {
	$officeBtn.fadeIn(500);
};

var liftbillBoard = function () {
	$billboard.animate({
		height: '341px'
	}, 300);
};

var moveBlimp = function () {
	$blimp.animate({
		marginLeft: '0px'
	}, 5000);
};

var checkPoint3Animate = function () {
	liftbillBoard();
	moveBlimp();
};

var setBackgroundImg = function () {
	$htmlribbon.css('backgroundImage', 'url(' + htmlribbon + ')');
	$cssribbon.css('backgroundImage', 'url(' + cssribbon + ')');
	$jsribbon.css('backgroundImage', 'url(' + jsribbon + ')');
	$jqueryribbon.css('backgroundImage', 'url(' + jqueryribbon + ')');
	$photoshopribbon.css('backgroundImage', 'url(' + photoshopribbon + ')');
	$illustratorribbon.css('backgroundImage', 'url(' + illustratorribbon + ')');
	$bootribbon.css('backgroundImage', 'url(' + bootribbon + ')');
	$csharpribbon.css('backgroundImage', 'url(' + csharpribbon + ')');
	$noderibbon.css('backgroundImage', 'url(' + noderibbon + ')');
};

var setRibbonMargin = function (ribbon, margin) {
	ribbon.css('marginLeft', margin + 'px');
};

var animateMaster = function (ribbon) {
	ribbon.show().animate({
		height : "500px",
		bottom : "1px"
	}, 1500);
};

var animateExpert = function (ribbon) {
	ribbon.show().animate({
		height : "433px",
		bottom : "0px"
	}, 1500);
};

var animateProficient = function (ribbon) {
	ribbon.show().animate({
		height : "364px",
		bottom : "-1px"
	}, 1500);
};

var animateFamiliar = function (ribbon) {
	ribbon.show().animate({
		height : "293px",
		bottom : "-1px"
	}, 1500);
};

var animateBeginner = function (ribbon) {
	ribbon.show().animate({
		height : "221px",
		bottom : "-1px"
	}, 1500);
};

var animateLearn = function (ribbon) {
	ribbon.show().animate({
		height : "293px",
		bottom : "10px"
	}, 1500);
};

var animateribbon = function (ribbon) {
	if (ribbon.hasClass('master')) {
		animateMaster(ribbon);
		return;
	}
	if (ribbon.hasClass('expert')) {
		animateExpert(ribbon);
		return;
	}
	if (ribbon.hasClass('proficient')) {
		animateProficient(ribbon);
		return;
	}
	if (ribbon.hasClass('familiar')) {
		animateFamiliar(ribbon);
		return;
	}
	if (ribbon.hasClass('beginner')) {
		animateBeginner(ribbon);
		return;
	}
};

var skillRibbonsAnimation = function () {
	var Leftmargin = 0;
	$skill.each(function () {
		setRibbonMargin($(this), Leftmargin);
		animateribbon($(this));
		Leftmargin += 78;
	});
};

var checkPoint6Animate = function () {
	setBackgroundImg();
	skillRibbonsAnimation();
};

var setBackgroundImgLearn = function () {
	$sassribbon.css('backgroundImage', 'url(' + sassribbon + ')');
	$reactribbon.css('backgroundImage', 'url(' + reactribbon + ')');
	$fluxribbon.css('backgroundImage', 'url(' + fluxribbon + ')');
	$polymerribbon.css('backgroundImage', 'url(' + polymerribbon + ')');
};

var learnRibbonsAnimation = function () {
	var Leftmargin = 0;
	$learn.each(function () {
		setRibbonMargin($(this), Leftmargin);
		animateLearn($(this));
		Leftmargin += 82;
	});
};

var checkPoint8Animate = function () {
	setBackgroundImgLearn();
	learnRibbonsAnimation();
};

var showContactBtn = function () {
	$contactBtn.fadeIn(500);
};

var updateforwards = function (percent, callback) {
	//depending on scene/percent appropriate fnc will be called
	if (percent < 0.3) {
		if (messagehidden === false) {
			hidemsg();
		}
		if (reachedCollege === false && percent > 0.12) {
			checkPoint1Animate();
			reachedCollege = true;
		}
		if (reachedCollege === true && percent > 0.2) {
			showgradBtn();
		}
	}
	if (percent > 0.31 && percent < 0.45) {
		if (reachedOffice === false) {
			checkPoint2Animate();
			reachedOffice = true;
		}
		if (reachedOffice === true && percent > 0.36) {
			showofficeBtn();
		}
	}
	if (percent > 0.46 && percent < 0.57) {
		if (reachedbillboard === false) {
			checkPoint3Animate();
			reachedbillboard = true;
		}
	}
	if (percent > 0.7 && percent < 0.8) {
	    if (reachedSkills === false) {
			checkPoint6Animate();
		    reachedSkills = true;
		}
	}
	if (percent > 0.85 && percent < 0.92) {
		if (reachedLearn === false) {
			checkPoint8Animate();
			reachedLearn = true;
		}
	}
	if (percent > 0.94) {
		if (reachedContact === false) {
			showContactBtn();
			reachedContact = true;
		}
	}
	//console.log(percent);
	callback(null);
};

var update = function (percent, callback) {
	//get moving direction
	if (prev > percent) {
		IsForwardMoving = false;
		$ken.addClass('reverse');
	} else {
		IsForwardMoving = true;
		$ken.removeClass('reverse');
	}
	if (percent <= 0.03 && prev > 0.03) {
		displaymsg();
	}
	if (percent > 0.03) {
		updateforwards(percent, function (error) {
			if (error) {
				console.log("position :" + percent);
				prev = percent;
				console.log(error);
				callback(error);
			} else {
				prev = percent;
				callback(null);
			}
		});
	}
};

//fnc called to reset nav
var resetCurrent = function (callback) {
	$navpoint.each(function () {
		$(this).removeClass('current');
	});
	callback();
};

var updateNav = function (percent) {
	if (percent < 0.17) {
		resetCurrent(function () {
			$initialize.addClass('current');
		});
	}
	if (percent > 0.17 && percent < 0.35) {
		resetCurrent(function () {
			$chkpoint1.addClass('current');
		});
	}
	if (percent > 0.35 && percent < 0.46) {
		resetCurrent(function () {
			$chkpoint2.addClass('current');
		});
	}
	if (percent > 0.46 && percent < 0.7) {
		resetCurrent(function () {
			$chkpoint3.addClass('current');
		});
	}
	if (percent > 0.7 && percent < 0.85) {
		resetCurrent(function () {
			$chkpoint4.addClass('current');
		});
	}
	if (percent > 0.85 && percent < 0.98) {
		resetCurrent(function () {
			$chkpoint5.addClass('current');
		});
	}
	if (percent > 0.98) {
		resetCurrent(function () {
			$finale.addClass('current');
		});
	}
};

function scroll() {
	//animates svg to walk
	currentclothes.beginElement();
	//moving character
	$ken.css({
		marginLeft : progress * 5400 + 'px'
	});

	update(progress, function (error) {
		if (error) {
			console.log('error');
		}
	});
	updateNav(progress);
}

var presscontactBtn = function () {
	$contactBtn.addClass('key3press');
	setTimeout(function () {
		$contactBtn.removeClass('key3press');
	}, 100);
};

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hidewall = function () {
	$('.clipped-box').hide();
};

var explodewall = function () {
	if (clicked === false) {
		clicked = true;
		setTimeout(hidewall, 4000);
		$('.clipped-box .content').css({'display' : 'none'});
		// Apply to each clipped-box div.
		$('.clipped-box div:not(.content)').each(function () {
			var v = rand(120, 90),
				angle = rand(80, 89), // The angle (the angle of projection) is a random number between 80 and 89 degrees.
				theta = (angle * Math.PI) / 180, // Theta is the angle in radians
				g = -9.8,
				self = $(this),
				t = 0,
				z,
				nx,
				ny,
				totalt = 15,
				negate = [1, -1, 0],
				direction = negate[Math.floor(Math.random() * negate.length)],
				randDeg = rand(-5, 10),
				randScale = rand(0.9, 1.1),
				randDeg2 = rand(30, 5),
				color = $(this).css('backgroundColor').split('rgb(')[1].split(')')[0].split(', '),
				colorR = rand(-20, 20),  // You might want to alter these manually if you change the color
				colorGB = rand(-20, 20),  // To get the right consistency.
				newColor = 'rgb(' + (parseFloat(color[0]) + colorR) + ', ' + (parseFloat(color[1]) + colorGB) + ', ' + (parseFloat(color[2]) + colorGB) + ')';
				// And apply those
			$(this).css({
				'transform' : 'scale(' + randScale + ') skew(' + randDeg + 'deg) rotateZ(' + randDeg2 + 'deg)',
				'background' : newColor
			});
			// Set an interval
			z = setInterval(function () {
				var ux, uy;
				// Horizontal speed is constant (no wind resistance on the internet)
				ux = (Math.cos(theta) * v) * direction;
				// Vertical speed decreases as time increases before reaching 0 at its peak
				uy = (Math.sin(theta) * v) - ((-g) * t);
				// The horizontal position
				nx = (ux * t);
				// s = ut + 0.5at^2
				ny = (uy * t) + (0.5 * (g) * Math.pow(t, 2));
				// Apply the positions	
				$(self).css({'bottom' : (ny) + 'px', 'left' : (nx) + 'px'});
				// Increase the time by 0.10
				t = t + 0.10;
				// If the time is greater than the total time clear the interval
				if (t > totalt) {
					clicked = false;
					first = true;
					$('.clipped-box').css({'top' : '-1000px', 'transition' : 'none'});
					$(self).css({'left' : '0', 'bottom' : '0', 'opacity' : '1', 'transition' : 'none', 'transform' : 'none'});
					// Finally clear the interval
					clearInterval(z);
				}
			}, 10); // Run this interval every 10ms. Changing this will change the pace of the animation
		});
	}
};

var showribbons = function () {
	$nameinput.show();
	$emailinput.show();
	$msginput.removeClass('msg');
	$msginput.show();
	$submit.show();
	$socialinput.show();
};

var openheadingribbon = function () {
	$contactheading.removeClass('closed');
	$contactheading.addClass('open');
};

var hoistheadingribbon = function () {
	$contactheading.show().animate({
		bottom: "0px"
	}, 500);
	setTimeout(showribbons, 500);
	setTimeout(openheadingribbon, 500);
};

var opennameribbon = function () {
	$nameinput.removeClass('txtinputclose');
	$nameinput.addClass('txtinputopen');
	setTimeout(function () {
		$txtname.show();
	}, 400);
};

var openemailribbon = function () {
	$emailinput.removeClass('txtemailclose');
	$emailinput.addClass('txtinputopen');
	setTimeout(function () {
		$txtemail.show();
	}, 400);
};

var openmsgribbon = function () {
	$msginput.removeClass('txtmsgclose');
	$msginput.addClass('msg');
	$msginput.addClass('txtinputopen');
	setTimeout(function () {
		$txtmsg.show();
	}, 400);
};

var opensendribbon = function () {
	$submit.removeClass('buttonclose');
	setTimeout(function () {
		$sendBtn.show();
	}, 400);
};

var opensocialribbon = function () {
	$socialinput.animate({
		width: "240px"
	}, 300);
	setTimeout(function () {
		$socialset.show();
	}, 1000);
};

var popContactRibbons = function () {
	//pop each contact ribbon after some time intervals
	hoistheadingribbon();
	setTimeout(opennameribbon, 800);
	setTimeout(openemailribbon, 1200);
	setTimeout(openmsgribbon, 1600);
	setTimeout(opensendribbon, 2000);
	setTimeout(opensocialribbon, 2200);
};

var animateFinale = function () {
	explodewall();
	setTimeout(popContactRibbons, 1200);
};

var hadoken = function () {
	//button press effect
	presscontactBtn();
	setTimeout(function () {
		//create cannonball
		var $fireball = $('<div/>'), isFireballColision, explodeIfColision;
		isFireballColision = function () {
			return ($wall.offset().left - $fireballPos.left <= 45 && $wall.offset().left - $fireballPos.left >= -45);
		};
		$fireball.addClass('fireball');
		$fireball.appendTo($cannon);
		//only executed on first instance
		if (firedCannon === false) {
			explodeIfColision = setInterval(function () {
				$fireballPos = $fireball.offset();
				if (isFireballColision()) {
					firedCannon = true;
					$fireball.addClass('explode').removeClass('moving').css('marginLeft', '+=22px');
					clearInterval(explodeIfColision);
					setTimeout(function () {
						$fireball.remove();
					}, 500);
					//when first cannonball collides start animating finale
					animateFinale();
				}
			}, 50);
		}

		//move cannonball
		setTimeout(function () {
			$fireball.addClass('moving');
		}, 20);

		//remove cannonball after 2 sec
		setTimeout(function () {
			$fireball.remove();
			clearInterval(explodeIfColision);
		}, 2000);

	}, (250));
};

var pressgradBtn = function () {
	$gradBtn.addClass('key1press');
	setTimeout(function () {
		$gradBtn.removeClass('key1press');
	}, 100);
};

var casuals = function () {
	currentclothes = cstart;
	casualclothes.style.display = 'block';
	formalclothes.style.display = 'none';
	gradclothes.style.display = 'none';
};

var graduate = function () {
	//animate button press
	pressgradBtn();
	if (currentclothes === gstart) {
		//reset clothes to casual
		casuals();
	} else {
		currentclothes = gstart;
		casualclothes.style.display = 'none';
		gradclothes.style.display = 'block';
		formalclothes.style.display = 'none';
	}
};

var pressofficeBtn = function () {
	$officeBtn.addClass('key2press');
	setTimeout(function () {
		$officeBtn.removeClass('key2press');
	}, 100);
};

var formals = function () {
	pressofficeBtn();
	if (currentclothes === fstart) {
		casuals();
	} else {
		currentclothes = fstart;
		casualclothes.style.display = 'none';
		gradclothes.style.display = 'none';
		formalclothes.style.display = 'block';
	}
};

var scrolltostart = function () {
	$('html,body').animate({ scrollTop: 0 }, { duration: 1500, easing: 'swing'});
};

var scrolltocollege = function () {
	$('html,body').animate({ scrollTop: 3000 }, { duration: 1500, easing: 'swing'});
};

var scrolltooffice = function () {
	$('html,body').animate({ scrollTop: 5800 }, { duration: 1500, easing: 'swing'});
};

var scrolltobillboard = function () {
	$('html,body').animate({ scrollTop: 8000 }, { duration: 1500, easing: 'swing'});
};

var scrolltoskills = function () {
	$('html,body').animate({ scrollTop: 11000 }, { duration: 1500, easing: 'swing'});
};

var scrolltolearn = function () {
	$('html,body').animate({ scrollTop: 13000 }, { duration: 1500, easing: 'swing'});
};

var scrolltofinale = function () {
	$('html,body').animate({ scrollTop: 14300 }, { duration: 1500, easing: 'swing'});
};

//bind click events
$contactBtn.click(hadoken);
$gradBtn.click(graduate);
$officeBtn.click(formals);
$initialize.click(scrolltostart);
$chkpoint1.click(scrolltocollege);
$chkpoint2.click(scrolltooffice);
$chkpoint3.click(scrolltobillboard);
$chkpoint4.click(scrolltoskills);
$chkpoint5.click(scrolltolearn);
$finale.click(scrolltofinale);

//bind scroll event
window.onscroll = scroll;