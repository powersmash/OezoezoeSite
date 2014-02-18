$(document).ready(function() 
{	
	var panel_old = '#panel1';

	$('a[rel=panel]').click(function () 
	{
		if ($(this).attr('class') != 'selected')
		{
			panel = $(this).attr('href');
		
			if (panel_old != panel)
			{
				$('a[rel=panel]').switchClass('selected', '', 500);
				$(this).switchClass('', 'selected', 500);

				$(document.body).animate({scrollTop: $($(this).attr("href")).offset().top}, 500);

				if (!isMobile)
				{
					$(panel_old).fadeOut(250,function() 
					{							
						$(panel).fadeIn(250);
					});
				}
				else
				{
					$(panel_old).css('display', 'none');
					$(panel).css('display', 'inline');
				}
				
				panel_old = $(this).attr('href');
			}
		}
		
		return false;
	});

		$.initSettings = function() 
	{
		isMobile = /windows phone|blackberry|android|ipad|iphone|ipod|webos/i.test(navigator.userAgent.toLowerCase());
		isIE = /MSIE|rv:1/i.test(navigator.userAgent.toLowerCase());
		isFirefox = /firefox/i.test(navigator.userAgent.toLowerCase());
		isOpera = /opera|OPR/i.test(navigator.userAgent.toLowerCase());

		if (isMobile)
		{
			page_animation = 'false';
		}
		
		page_header_color = jQuery.readCookie('page_header_color');
		
		if (jQuery.readCookie('page_animation'))
		{
			page_animation = jQuery.readCookie('page_animation');
		}
		
		show_banner = jQuery.readCookie('show_banner');
		code_animation = jQuery.readCookie('code_animation');
		
		if (page_animation != "false")
		{
			$('#page_animation').prop('checked', true);
		}

		if (show_banner != "false")
		{
			$('#show_banner').prop('checked', true);
		}

		if (code_animation != "false")
		{
			$('#code_animation').prop('checked', true);
		}

		jQuery.checkBanner();
		
		if (!page_header_color)
		{
			page_header_color = 'blue';
			$('#page_header_color').val('blue');
		}
		else if (page_header_color == 'rand')
		{
			var page_header = new Array('red','green','blue','purple','grey');
			var page_header_random = Math.floor(Math.random() * 5);
			var page_header_color = page_header[page_header_random];
			$('#page_header_color').val('rand');
		}
		else
		{
			$('#page_header_color').val(page_header_color);
		}

		$('#page_header').addClass('page_header_' + page_header_color);
	}
	
	$.logoName = function(buttons) 
	{
		var logoName = Math.floor(Math.random() * 2) + 1;
									
		if (logoName == 1)
		{
			effect = 'puff';
		}
		else
		{
			effect = 'drop';
		}
		
		$('.site_logo_name').delay(1250).each(function(i) 
		{
			logodelay = (i)*250;
			
			$( this ).delay(logodelay).show(effect, {}, 250);
		});
		
		if (buttons)
		{
			jQuery.showButtons();
		}
	}

	$.showButtons = function() 
	{
		var buttons = Math.floor(Math.random() * 2) + 1;
									
		if (buttons == 1)
		{
			$('#nav_buttons li').css('top', '-10px');
			$('#nav_buttons li').css('left', '-10px');
		}
		else
		{
			$('#nav_buttons li').css('top', '10px');
			$('#nav_buttons li').css('left', '-10px');
		}
		
		$($('#nav_buttons li').delay(1400).get().reverse()).each(function(i)
		{
			buttondelay = (i)*250;

			$(this).delay(buttondelay).animate({top: '0px',	left: '0px', opacity: 1}, 250);
		});
	}
	
	$.createCookie = function(name, value) 
	{
		var date = new Date();
		date.setTime(date.getTime()+(3650*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		
		document.cookie = name+"="+value+expires+"; path=/";
	}

	$.readCookie = function(name) 
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	$.saveSettings = function() 
	{
		jQuery.createCookie("page_header_color", $("#page_header_color").val());
		jQuery.createCookie("page_animation", $("#page_animation").is(":checked"));
		jQuery.createCookie("show_banner", $("#show_banner").is(":checked"));
		jQuery.createCookie("code_animation", $("#code_animation").is(":checked"));

		$('#settings_div').fadeOut(250,function()
		{
			$('#settings_saved').fadeIn(250).delay(1500).fadeOut(250,function()
			{
				$('#nav_buttons').fadeIn(250);
			});
		});
	}
	
	$.showSettings = function() 
	{
		if ($('#settings_saved').css('display') == 'none')
		{
			window.scrollTo(0,0);
			
			$('#nav_buttons').fadeOut(250,function()
			{
				$('#settings_div').fadeIn(250);
			});
		}
	}

	$.checkBanner = function() 
	{	
		if ($("#show_banner").is(":checked") && !isOpera)
		{
			$("#code_animation").prop("disabled", false);
			$('#code_animation_text').animate({opacity:1}, 250);
		}
		else
		{
			$("#code_animation").prop("disabled", true);
			$('#code_animation_text').animate({opacity:0.5}, 250);
		}		
	}
	
	$.showLogo = function() 
	{	
		// Willekeurige site logo animatie
		var site_logo = Math.floor(Math.random() * 4) + 1;

		if (site_logo == 1) // Logo opbouw vanaf top
		{
			$('#site_logo1').css('top', '-60px');
			$('#site_logo1').css('left', '9px');
			$('#site_logo2').css('top', '-60px');
			$('#site_logo2').css('left', '9px');
			$('#site_logo1').css('transform', 'rotate(90deg)');
			$('#site_logo2').css('transform', 'rotate(90deg)');
			$('#site_logo1').css('webkit-transform', 'rotate(90deg)');
			$('#site_logo2').css('webkit-transform', 'rotate(90deg)');
			$("#site_logo").rotate({duration: 1, angle: 90,	animateTo: 45});

			$('#site_logo2').delay(250).animate({opacity:1, top: '20px'}, 100,function() 
			{							
				$('#site_logo2').animate({top: '13px'}, 100,function() 
				{	
					$('#site_logo1').animate({opacity:1, top: '0px'}, 100,function() 
					{	
						$('#site_logo2').animate({top: '17px'}, 100,function() 
						{
							$('#site_logo1').animate({top: '-5px'}, 100,function() 
							{
								$('#site_logo1').css('display', 'none');
								$('#site_logo2').css('display', 'none');
								$('#site_logo').css('display', 'block');
								
								$("#site_logo").rotate({duration: 1000,	angle: 45,	animateTo: 0});
							});
						});
					});
				});
			});
		}
		else if (site_logo == 2) // Logo opbouw vanaf links
		{
			$('#site_logo1').css('left', '-60px');
			$('#site_logo1').css('top', '5px');
			$('#site_logo2').css('left', '-60px');
			$('#site_logo2').css('top', '5px');

			$('#site_logo2').delay(250).animate({opacity:1, left: '30px'}, 100,function() 
			{							
				$('#site_logo2').animate({opacity:1, left: '20px'}, 100,function() 
				{
					$('#site_logo1').animate({opacity:1, left: '6px'}, 100,function() 
					{	
						$('#site_logo2').animate({left: '23px'}, 100,function() 
						{
							$('#site_logo1').animate({left: '0px'}, 100,function() 
							{
								$('#site_logo1').css('display', 'none');
								$('#site_logo2').css('display', 'none');
								$('#site_logo').css('display', 'block');
								
								$("#site_logo").rotate({duration: 1000,	angle: -45,	animateTo: 0});
							});
						});
					});
				});
			});
		}
		else if (site_logo == 3) // Full logo vanaf top
		{
			$('#site_logo').css('display', 'block');
			$('#site_logo').css('opacity', '0');
			$('#site_logo').css('top', '-60px');
			$("#site_logo").rotate({duration: 1, angle: 0,	animateTo: 45});

			$('#site_logo').delay(250).animate({top: '10px', opacity:1}, 150).animate({top: '0px'}, 150).animate({top: '5px'}, 150,function() 
			{
				$("#site_logo").rotate({duration: 1000,	angle: 45,	animateTo: 0});
			});
		}
		else if (site_logo == 4) // Full logo vanaf links
		{
			$('#site_logo').css('display', 'block');
			$('#site_logo').css('opacity', '0');
			$('#site_logo').css('left', '-60px');
			$("#site_logo").rotate({duration: 1, angle: 0,	animateTo: 90});

			$('#site_logo').delay(250).animate({left: '5px', opacity:1}, 250).animate({left: '-5px', opacity:1}, 150).animate({left: '0px', opacity:1}, 150,function() 
			{
				$("#site_logo").rotate({duration: 1000,	angle: 90,	animateTo: 0});
			});
		}

			jQuery.logoName('buttons');
		}

	$.banner_code_animation = function(code_animation)
	{
		if (!isOpera)
		{
			//binary code opbouw
			if (!navigator.userAgent.match(/webkit/i)) 
			{
				lines = 16;
			}
			else
			{
				lines = 17;
			}
			
			if (isIE) 
			{
				$('#code_right').css('padding-left', '5px');
				$('#code_left').css('padding-left', '5px');
			}
			else if (isFirefox) 
			{
				$('#code_right').css('padding-left', '4px');
				$('#code_left').css('padding-left', '4px');
			}
			else
			{
				$('#code_right').css('padding-left', '5px');
				$('#code_left').css('padding-left', '4px');
			}
			
			code1 = 1;
			code2 = 1;
			code_line = 0;

			for(var i=1; i <= lines; i++)
			{
				numrand1 = Math.floor(Math.random() * 10000) + 10000;
				numrand2 = Math.floor(Math.random() * 10000) + 10000;
				numid1 = Number(numrand1).toString(2);
				numid2 = Number(numrand2).toString(2);

				if (i == 8)
				{
					code2 = 2;
				}
				else if (i == 16)
				{
					code1 = 2;
				}
				else
				{
					code1 = 1;
					code2 = 1;
				}
				
				$('#code_left').prepend('<div class="code' + code1 + '">' + numid1.substr(2,10) + '</div>');
				$('#code_right').prepend('<div class="code' + code2 + '">' + numid2.substr(1,10) + '</div>');
			}

			//binary code animatie
			if (code_animation != "false")
			{
				code_run = setInterval(function()
				{
					$("#code_left div:last").remove();
					$("#code_right div:first").remove();
							
					numrand1 = Math.floor(Math.random() * 10000) + 10000;
					numrand2 = Math.floor(Math.random() * 10000) + 10000;
					numid1 = Number(numrand1).toString(2);
					numid2 = Number(numrand2).toString(2);
					
					if (code_line == 8)
					{
						code2 = 2;
					}
					else if (code_line == 16)
					{
						code1 = 2;
						code2 = 1;
						code_line = 0;
					}
					else
					{
						code1 = 1;
						code2 = 1;
					}
					
					$('#code_left').prepend('<div class="code' + code1 + '">' + numid1.substr(2,10) + '</div>');
					$('#code_right').append('<div class="code' + code2 + '">' + numid2.substr(1,10) + '</div>');
					
					code_line++;
				}, 200);
			}
		}
		else
		{
			$('#code_div').css('background', 'url(/img/banner_road_still.jpg) no-repeat 50% 0');
		}
	}

	//Page init
	
	$(window).load(function()
	{
		jQuery.initSettings();
		
		if (page_animation != "false")
		{
			$('#page_header').css('display', 'none');
			$('#page_footer').css('display', 'none');
			$('#site_logo').css('display', 'none');
			$('#site_logo_name').css('display', 'none');
			$('#nav_buttons li').css('opacity', '0');
			$('#intro_div').css('display', 'none');
			$('#intro_text').css('opacity', '0');
			$('#banner_div').css('display', 'none');
			$('#banner').css('display', 'none');
			$('#banner_text').css('opacity', '0');
			$('#banner_text').css('top', '10px');
			$('#code_div').css('display', 'none');
			$('#page_canvas').css('display', 'block');

			$('#page_header').delay(250).fadeIn(500,function()
			{
				jQuery.showLogo();
				
				$('#nav_buttons li a:first').delay(2500).switchClass('', 'selected', 500);

				$('#intro_div').delay(2000).slideToggle(500,function()
				{
					$('#intro_text').animate({opacity:1}, 500);
				});
				
				if (show_banner != "false")
				{
					$('#banner_div').delay(3000).fadeIn(500,function()
					{
						$('#banner').fadeIn(500,function()
						{
							jQuery.banner_code_animation(code_animation);

							$('#banner_text').animate({top: '-5px',	opacity: 1}, 250).animate({top: '0px'}, 250);

							$('#code_div').fadeIn(500,function()
							{
								$('#banner').css('backgroundImage', 'none');
															
								$('#banner').animate({opacity:1}, 500);

								if (!isOpera)
								{
									$('#code_div').animate({opacity:0.75}, 500);
								}
							});
						});
					});
					
					$('#panel1').delay(3750).fadeIn(500,function()
					{
						$('#settings_link').css('display', 'inline');
						$('#page_footer').fadeIn(500);
					});
				}
				else
				{
					$('#nav_buttons li a:first').delay(3000).switchClass('', 'selected', 500);

					$('#panel1').delay(3000).fadeIn(500,function()
					{
						$('#settings_link').css('display', 'inline');
						$('#page_footer').fadeIn(500);
					});				
				}
			});
		}
		else
		{
			if (!isMobile)
			{
				$('#site_logo').css('display', 'none');
				$('#settings_link').css('display', 'inline');
				$("#site_logo").delay(500).fadeIn(750);
				$("#site_logo").delay(500).rotate({duration: 1500,	angle: 359,	animateTo: 0});
				$('#site_logo_name').css('display', 'none');
				jQuery.logoName();
			}
			
			$('#panel1').css('display', 'inline');
			$('.site_logo_name').css('display', 'none');
			$('#nav_buttons li a:first').addClass('selected');
			$('#banner_div').css('display', 'none');
				
			if (show_banner != "false")
			{
				$('#banner_div').css('display', 'block');
				$('#banner').css('backgroundImage', 'none');
				$('#banner').css('opacity', '1');
				$('#code_div').css('opacity', '0.75');
				$('#banner_text').css('display', 'inline');
				
				jQuery.banner_code_animation(code_animation);
			}

			$('#page_canvas').css('display', 'block');
		}
	});
});


