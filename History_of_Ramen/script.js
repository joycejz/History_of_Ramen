var MAX = 10;
var currPage = 0;
var currInfo = 0;
var lastInfo = 0;
var pagesVisited = 0;
pageButtons = $('.pageButton');
menuHighlight = $('.buttonHov');
pageLinks = $('.goto');
pages = $('.page');
images = [$('.img1'), $('.img2'), $('.img3')];
hov = [$('.hov1'), $('.hov2'), $('.hov3')];
info = [$('.info1'), $('.info2'), $('.info3')];
exit = [$('.info1 img'), $('.info2 img'), $('.info3 img'), $('#credits img'), $('#instructions img')]
back = $('#back');
next = $('#next');

$(pageButtons[0]).show();
$(pageLinks[0]).show();
$(pages[currPage]).show();

$.each(pageLinks, function(i) {
	$(this).hover(function()  {
		if (i < pagesVisited || i == 0) {
			$(menuHighlight[i]).show();
		}
	}, function() {
		$(menuHighlight[i]).hide();
	});
});

$.each(pageLinks, function(i) {
	$(this).click(function() {
		$(pages[currPage]).fadeOut(300, "swing", function() {
			currPage = i + 1;
			$('#top').show();
			$(back).show();
			if (pagesVisited == 0) {
				pagesVisited++;
				currInfo = 0;
			} else if (currPage < pagesVisited) {
				console.log('setting to 3');
				currInfo = 3;
			} else {
				console.log('setting to 0');
				currInfo = lastInfo;
			}
			if (currInfo == 3) {
				$(next).show();
			}
			$(pages[currPage]).fadeIn(400, "swing");
			console.log(currPage + '/' + pagesVisited);
		});
	});
});

$("#top").click(function() {
	closeInfo(currPage-1);
	lastInfo = currInfo;
	$(pages[currPage]).fadeOut(300, "swing", function() {
		currPage = 0;
		$(back).hide();
		$(next).hide();
		$('#top').hide();
		$(pages[currPage]).fadeIn(400, "swing");
		console.log(currPage + "/" + pagesVisited);
	});
});

$.each(hov[0], function() {
	$(this).hover(function() {
		$(images[0][currPage-1]).show();
	}, function() {
		$(images[0][currPage-1]).hide();
	})
});

$.each(hov[0], function() {
	$(this).click(function() {
		$(info[0][currPage-1]).fadeIn(100);
		if (currInfo == 0) {
			$(hov[1][currPage-1]).show();
			currInfo++;
		}
	});
});

$.each(hov[1], function() {
	$(this).hover(function() {
		if (currInfo >= 1) {
			$(images[1][currPage-1]).show();
		}
	}, function() {
		$(images[1][currPage-1]).hide();
	})
});

$.each(hov[1], function() {
	$(this).click(function() {
		if (currInfo >= 1) {
			$(info[1][currPage-1]).fadeIn(100);
			if (currInfo == 1) {
				$(hov[2][currPage-1]).show();
				currInfo++;
			}
		}
	});
});

$.each(hov[2], function() {
	$(this).hover(function() {
		if (currInfo >= 2) {
			$(images[2][currPage-1]).show();
		}
	}, function() {
		$(images[2][currPage-1]).hide();
	})
});

$.each(hov[2], function() {
	$(this).click(function() {
		if (currInfo >= 2) {
			$(info[2][currPage-1]).fadeIn(100);
			if (currInfo == 2) {
				$(next).show();
				currInfo++;
				console.log(currInfo);
			}
		}
	});
});
$.each(exit, function(i) {
	$.each(exit[i], function(j) {
		$(this).click(function() {
			if (i <= 2) {
				$(info[i][j]).fadeOut(50);
			} else if (i == 3) {
				$('#credits').hide();
			} else {
				$('#instructions').hide();
			}
		});
	});
});
$("#credlink").hover(function() {
	$("#last").show();
}, function() {
	$("#last").hide();
});
$("#credlink").click(function() {
	$("#credits").fadeIn(100);
});
$('#help').click(function() {
	console.log('click');
	$('#instructions').fadeIn(100);
});

$(back).click(function() {
	closeInfo(currPage-1);
	if (currPage == pagesVisited) {
		lastInfo = currInfo;
	}
	$(pages[currPage]).fadeOut(300, "swing", function() {
		currPage--;
		if(currPage == 0) {
			$(back).hide();
			$(next).hide();
			$('#top').hide();
			currInfo = 0;
		} else {
			$(next).show();
			currInfo = 3;
		}
		$(pages[currPage]).fadeIn(400, "swing");
		console.log(currPage + "/" + pagesVisited);
	});
});

$(next).click(function() {
	closeInfo(currPage-1);
	$(pages[currPage]).fadeOut(300, "swing", function() {
		if (pagesVisited == currPage) {
			pagesVisited++;
			$(pageButtons[currPage]).show();
			$(pageLinks[currPage]).show();
			currInfo = 0;
		} else if (currPage < pagesVisited - 1) {
			currInfo = 3;
		} else {
			currInfo = lastInfo;
		}
		if (currInfo == 3) {
			$(next).show();
		} else {
			$(next).hide();
		}
		currPage++;
		$(pages[currPage]).fadeIn(400, "swing");
		console.log(currPage + "/" + pagesVisited);
	});
});

function closeInfo(pageNum) {
	$(info[0][pageNum]).hide();
	$(info[1][pageNum]).hide();
	$(info[2][pageNum]).hide();
}