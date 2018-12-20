jQuery(function() {
	initdotDotScript();
});

//open-close init
function initdotDotScript() {
	//cut text after word 'passion' and add '...' at the end
	jQuery('.text-block1').each(function(){
		var text = jQuery(this);
		var p = text.find('p');
		var str = p[0].innerHTML;
        var n = str.length;
        var limit = 121;
        var dots = "...";
        var strCut = str.substring(0,limit);
        var dottedText = strCut.concat('',dots);
        var activeClass = "dots-active";

        textReplace();

        function textReplace() {
            if (n > limit){
                p[0].innerText = dottedText;
                text.toggleClass(activeClass);
			}
		}
        
	});

    //cut text after 100 symbol and add show/less btn
    jQuery('.text-block2').each(function(){
        var text = jQuery(this);
		var p = text.find('p');
		var str = p[0].innerHTML;
        var n = str.length;
        var limit = 100;
        var dots = "...";
        var strCut = str.substring(0,limit);
        var dottedText = strCut.concat('',dots);
        var activeClass = "dots-active";
        var more = $('<a class="more" href="#">more</a>');
        var less = $('<a class="less" href="#">less</a>');

        textReplace(); 

        function textReplace() {
            if (n > limit){
                text.toggleClass(activeClass);
                p[0].innerText = dottedText;
                text.append(more);
			}
        }   

        more.on('click', function(e){
			e.preventDefault();
            text.toggleClass(activeClass);
            p[0].innerText = str;
            p.append(less);
            more.detach();
        });
        
        less.on('click', function(e){
			e.preventDefault();
            text.toggleClass(activeClass);
            p[0].innerText = dottedText;
            p.append(more);
            less.detach();
		});
    });
}