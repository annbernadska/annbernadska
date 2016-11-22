(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = '091EAF7FDC0B461A8F80024CBA744A4B';
	s.islocal = true;
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	s.menu = {
		verticalScroll: false,
		orientation: 'horizontal'
	};
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			desktopVerticalScroll: false,
			mobileVerticalScroll: true,
			showLogoOnScroll: false,
			orientation: 'horizontal',
			menuHeight: 26,
			menuWidth: 110,
			submenuHeight: 22,
			submenuWidth: 160,
			opacity: 0.8,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/hor_main.png',p + 'menu/hor_main_h.png',p + 'menu/hor_main_c.png',p + 'menu/hor_main_f.png',p + 'menu/hor_main_f_h.png',p + 'menu/hor_main_f_c.png',p + 'menu/hor_main_m.png',p + 'menu/hor_main_m_h.png',p + 'menu/hor_main_m_c.png',p + 'menu/hor_main_l.png',p + 'menu/hor_main_l_h.png',p + 'menu/hor_main_l_c.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 1,
			'left': 1
		},
		buttonRight: {
			url: p + 'res/b04_r.png',
			position: {
				x: -30,
				y: 0
			}
		},
		buttonLeft: {
			url: p + 'res/b04_l.png',
			position: {
				x: -30,
				y: 0
			}
		},
		'borderRadius' : '5px 5px 5px 5px',
		'borderColor' : '#000000 #000000 #000000 #000000',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.7
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'none',
		'showTail' : true
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"offlineCodes": {
				"0": { letter: '4', path: 'captcha/imcpa_fwr.gif'},
				"1": { letter: 'N', path: 'captcha/imcpa_yt5.gif'},
				"2": { letter: 'N', path: 'captcha/imcpa_vr4.gif'},
				"3": { letter: 'W', path: 'captcha/imcpa_kwx.gif'},
				"4": { letter: 'U', path: 'captcha/imcpa_ael.gif'},
				"5": { letter: 'Y', path: 'captcha/imcpa_2ks.gif'},
				"6": { letter: 'Z', path: 'captcha/imcpa_fy3.gif'},
				"7": { letter: '4', path: 'captcha/imcpa_xkx.gif'},
				"8": { letter: 'D', path: 'captcha/imcpa_h6c.gif'},
				"9": { letter: 'R', path: 'captcha/imcpa_cce.gif'}
			}
		});
	}, false, 'first');

	// BreakPoints
	s.breakPoints.push({ "hash": "13d0c61c90acded683dc962d322788ff", "name": "Desktop", "start": "max", "end": 0, "fluid": false });

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
