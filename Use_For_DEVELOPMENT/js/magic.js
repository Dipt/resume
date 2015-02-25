/*! jInvertScroll 0.8.3 | Mit License */
(function($){'use strict';$.jInvertScroll=function(sel,options){var defaults={width:'auto',height:'auto',onScroll:function(percent){}};var config=$.extend(defaults,options);if(typeof sel==='Object'&&sel.length>0){return}var elements=[],longest=0,totalHeight,winHeight,winWidth;function init(){$.each(sel,function(i,val){$(val).each(function(e){elements.push($(this));var w=$(this).width();if(longest<w){longest=w}})});if(config.width=='auto'){config.width=longest}if(config.height=='auto'){config.height=longest}$('body').css('height',config.height+'px')}function calc(){totalHeight=$(document).height();winHeight=$(window).height();winWidth=$(window).width()}function onscroll(e){var currY=$(this).scrollTop();calc();var diff=totalHeight-winHeight;var scrollPercent=0;if(diff!=0){scrollPercent=(currY/diff).toFixed(4)}if(typeof config.onScroll==='function'){config.onScroll.call(this,scrollPercent)}$.each(elements,function(i,el){var deltaW=el.width()-winWidth;if(deltaW<=0){deltaW=el.width()}var pos=Math.floor(deltaW*scrollPercent)*-1;el.css('left',pos)})}function setlisteners(){$(window).on('scroll resize',onscroll);$([document,window]).on('ready resize',calc)}init();setlisteners();return{reinitialize:function(){init();setlisteners()},destroy:function(){$('body').attr('style','');$(window).off('scroll resize',onscroll);$([document,window]).off('ready resize',calc)}}}}(jQuery));

var $ken = $('#dipt');
var $guile = $('.guile');
var $key = $('.key4');
var $kenPos, $guilePos, $fireballPos;
var $introbck = $('.name');
var $intromsg = $('.intromsg');
var $college = $('#college');
var $collegeribbon = $('#collegeribbon');
var $gradBtn = $('#gradBtn');
var $office = $('.office');
var $officeribbon = $('#officeribbon');
var $officeBtn = $('#officeBtn');
var $billboard = $('#billboard');
var $contactfrm = $('#contactfrm');
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
var $contactribbon = $('.contactribbon');

var messagehidden = false;
var reachedCollege = false;
var reachedOffice = false;
var reachedbillboard = false;
var reachedSkills = false;
var reachedLearn = false;

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

prev = 0;

progress = 0;

var IsForwardMoving = true;
var ani_data = [0, -120, -240, -360];
var frame_index = 0;
var scrollTimer = null;

window.onload = function()
{
	hideall();
	setupStart();
}

var hideall = function(){
	$introbck.hide();
	$intromsg.hide();
	$college.hide();
	$collegeribbon.hide();
	$gradBtn.hide();
	$office.hide();
	$officeribbon.hide();
	$officeBtn.hide();
	$contactfrm.hide();
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
	$contactribbon.hide();
}

//to reset character and page back to starting point
$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
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
}
	(jQuery));

window.onscroll = scroll;

//handler fnc for scroll event
function scroll() {

	if (scrollTimer) {
		clearTimeout(scrollTimer); // clear any previous pending timer
	}
	scrollTimer = setTimeout(animateWalk, 18);

	//moving character here
	$ken.css({
		marginLeft : progress * 5400 + 'px'
	});
	update(progress, function (error) {
		if (error) {
			console.log('error');
		} else {
			//console.log('updt success');
		}
	});
}

function animateWalk() {

	scrollTimer = null;

	if(IsForwardMoving){
		$ken.css('background-position', ani_data[frame_index] + 'px 0px');
	}
	else{
		$ken.css('background-position', ani_data[frame_index] + 'px -160px');
	}
	

	frame_index++;
	if (frame_index >= ani_data.length) {
		frame_index = 0;
	}
}

var update = function(percent, callback) {

	if (prev > percent) {
		IsForwardMoving = false;
	}
	else{
		IsForwardMoving = true;
	}
	if (percent <= 0.03 && prev > 0.03) {
		displaymsg();
	}
	if (percent < .99 && percent > 0.03){
		updateforwards(percent, function (error) {
			if (error) {
				console.log("position :" + percent);
				prev = percent;
				console.log(error);
				callback(error);
			} else {
				//console.log("position :"+percent);
				prev = percent;
				//console.log('update fwd had no errors');
				callback(null);
			}
		});
	}
}

var setupStart = function(){
	setTimeout(dropInIntroTxt,1800);
	setTimeout(showCharacter,2300);	
	setTimeout(displaymsg,3500);
}

var dropInIntroTxt = function(){
	$introbck.show().animate({
		bottom:"60px"
	},700);
}

var showCharacter = function(){
	if(progress==0){
		$ken.animate({
			marginLeft : '0px'
		},1800);	
	}
}

var displaymsg = function(){
	$intromsg.show();
	messagehidden = false;
}

var hidemsg = function(){	
	$intromsg.hide();
	messagehidden = true;
}

var updateforwards = function(percent, callback) {
	//depending on scene/percent appropriate fnc will be called
	if(percent < .3){
		if(messagehidden==false){
			hidemsg();
		}
		if(reachedCollege==false && percent > 0.12){
			checkPoint1Animate();
			reachedCollege=true;
		}
		if(reachedCollege==true && percent > 0.2){
			showgradBtn();
		}
	}
	
	if(percent > .31 && percent < .45){
		if(reachedOffice==false){
			checkPoint2Animate();
			reachedOffice=true;
		}
		if(reachedOffice==true && percent > .36){
			showofficeBtn();
		}		
	}
	
	if(percent > .46 && percent < .57){
		if(reachedbillboard==false){
			checkPoint3Animate();
			reachedbillboard=true;
		}
	}
	
	if(percent > .7 && percent < .8){
	    if(reachedSkills==false){
			checkPoint6Animate();
		    reachedSkills=true;
		}	
	}
	
	if(percent > .85 && percent < .92){
		if(reachedLearn==false){
			checkPoint8Animate();
			reachedLearn=true;
		}
	}
	
	console.log(percent);
	callback(null);
}

var updatebackwards = function(percent, callback) {
	//depending on scene appropriate fnc will be called
	callback(null);
}

var setupFinale = function(callback) {
	callback(null);
}

var checkPoint1Animate = function(){
	popupCollege();
	setTimeout(dropCollegeRibbon,500);
}

var checkPoint2Animate = function(){
	popupOffice();
	setTimeout(dropOfficeRibbon,500);
}

var checkPoint3Animate = function(){
	liftbillBoard();
}

var checkPoint6Animate = function(){
	setBackgroundImg();
	SkillRibbonsAnimation();	
}

var checkPoint8Animate = function(){
	setBackgroundImgLearn();
	LearnRibbonsAnimation();
}

var popupCollege = function(){
	$college.css({marginBottom:'-400px'});
	$college.show().animate({
		marginBottom:'16px'
	},400);
}

var popupOffice = function(){
	$office.css({marginBottom:'-400px'});
	$office.show().animate({
		marginBottom:'0px'
	},400);
}

var dropCollegeRibbon = function(){
	$collegeribbon.css({marginBottom:'400px'});
	$collegeribbon.show().animate({
		marginBottom:'0px'
	},500);
	
}

var dropOfficeRibbon = function(){
	$officeribbon.css({marginBottom:'400px'});
	$officeribbon.show().animate({
		marginBottom:'0px'
	},500)
}

var showgradBtn = function(){
	$gradBtn.show();
}

var showofficeBtn = function(){
	$officeBtn.show();
}

var liftbillBoard = function(){
	$billboard.animate({
		height:'341px'
	},400);
}

var setBackgroundImg = function(){
	$htmlribbon.css('backgroundImage', 'url('+htmlribbon+')');
	$cssribbon.css('backgroundImage', 'url('+cssribbon+')');
	$jsribbon.css('backgroundImage', 'url('+jsribbon+')');
	$jqueryribbon.css('backgroundImage', 'url('+jqueryribbon+')');
	$photoshopribbon.css('backgroundImage', 'url('+photoshopribbon+')');
	$illustratorribbon.css('backgroundImage', 'url('+illustratorribbon+')');	
	$bootribbon.css('backgroundImage', 'url('+bootribbon+')');
	$csharpribbon.css('backgroundImage', 'url('+csharpribbon+')');
	$noderibbon.css('backgroundImage', 'url('+noderibbon+')');
}

var setBackgroundImgLearn = function(){
	$sassribbon.css('backgroundImage', 'url('+sassribbon+')');
	$reactribbon.css('backgroundImage', 'url('+reactribbon+')');
	$fluxribbon.css('backgroundImage', 'url('+fluxribbon+')');
	$polymerribbon.css('backgroundImage', 'url('+polymerribbon+')');
}

var SkillRibbonsAnimation = function(){
	var Leftmargin = 0;
	$skill.each(function(i, ribbon) {
		setRibbonMargin($(this),Leftmargin);
		Animateribbon($(this));
		Leftmargin += 78;
	});
}

var LearnRibbonsAnimation = function(){
	var Leftmargin = 0;
	$learn.each(function(i,ribbon){
		setRibbonMargin($(this),Leftmargin);
		AnimateLearn($(this));
		Leftmargin += 82;
	});
}

var setRibbonMargin = function(ribbon,margin){
	ribbon.css('marginLeft',margin + 'px');
}

var Animateribbon = function(ribbon){
	if(ribbon.hasClass('master')){
		AnimateMaster(ribbon);
		return;
	}
	if(ribbon.hasClass('expert')){
		AnimateExpert(ribbon);
		return;
	}
	if(ribbon.hasClass('proficient')){
		AnimateProficient(ribbon);
		return;
	}
	if(ribbon.hasClass('familiar')){
		AnimateFamiliar(ribbon);
		return;
	}
	if(ribbon.hasClass('beginner')){
		AnimateBeginner(ribbon);
		return;
	}	
}

var AnimateMaster = function(ribbon){
	ribbon.show().animate({
			height : "500px",
			bottom : "1px"
	}, 1500);
}

var AnimateExpert = function(ribbon){
	ribbon.show().animate({
			height : "433px",
			bottom : "0px"
	}, 1500);
}

var AnimateProficient = function(ribbon){
	ribbon.show().animate({
			height : "364px",
			bottom : "-1px"
	}, 1500);
}

var AnimateFamiliar = function(ribbon){
	ribbon.show().animate({
			height : "293px",
			bottom : "-1px"
	}, 1500);
}

var AnimateBeginner = function(ribbon){
	ribbon.show().animate({
			height : "221px",
			bottom : "-1px"
	}, 1500);
}

var AnimateLearn = function(ribbon){
	ribbon.show().animate({
			height : "293px",
			bottom : "10px"
	},1500)
}

var hadoken = function(){
	
	setTimeout(function () {
		var $fireball = $('<div/>', {
				class : 'fireball'
			});
		$fireball.appendTo($cannon);

		var isFireballColision = function () {
			return ($guile.offset().left - $fireballPos.left <= 75 && $guile.offset().left - $fireballPos.left >= -75);
		};

		var explodeIfColision = setInterval(function () {
				$fireballPos = $fireball.offset();
				if (isFireballColision()) {
					$fireball.addClass('explode').removeClass('moving').css('marginLeft', '+=22px');
					clearInterval(explodeIfColision);
					setTimeout(function () {
						$fireball.remove();
					}, 500);
					AnimateFinale();
				}
		}, 50);

		setTimeout(function () {
			$fireball.addClass('moving');
		}, 20);

		setTimeout(function () {
			$fireball.remove();
			clearInterval(explodeIfColision);
		}, 3020);

	}, (250));
};

var AnimateFinale = function(){
	$guile.addClass('falldown');
	$contactBtn.css("display", "none");
	setTimeout(dropContactribbon,200);
	setTimeout(popContactFrm,500);	
}

var popContactFrm = function(){
	$('#contactfrm').show(function () {
		$('#contactfrm').addClass('contactopen');
	});
}

var dropContactribbon = function(){
	$contactribbon.css({marginBottom:'400px'});
	$contactribbon.show().animate({
		marginBottom:'0px'
	},600);
}

var graduate = function(){
	if($ken.hasClass('grad')){
			casuals();
	}
	else{
			$ken.removeClass();
			$ken.addClass('grad');	
	}	
}

var formals = function(){
	if($ken.hasClass('formal')){
			casuals();
	}
	else{
			$ken.removeClass();
			$ken.addClass('formal');
	}
}

var casuals = function(){
	$ken.removeClass();
	$ken.addClass('casual');
}

$contactBtn.click(hadoken);
$gradBtn.click(graduate);
$officeBtn.click(formals);