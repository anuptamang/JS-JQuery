jQuery(function() {
	initdotDotScript();
});

//open-close init
function initdotDotScript() {
	jQuery('.block').dotScript({
        limit: 250
    });

    // jQuery('.text-block1').dotScript({
    //     limit: 250
    // });
    
    // jQuery('.text-block2').dotScript({
    //     limit: 343,
    //     hasBtn: true
	// });
}

jQuery.fn.dotScript = function(opt) {
    var options = jQuery.extend({
        limit: 250,
        dots: "...",
        hasBtn: false
    }, opt);

    return this.each(function() {
        var textBlock = jQuery(this),
            textHtml = textBlock.find('p');
            allText = textBlock.text(),
            n = allText.length,
            more= $('<a class="more" href="#">more</a>'),
            less= $('<a class="less" href="#">less</a>'),

            textBlock.data('limit') ? options.limit = textBlock.data('limit') : options.limit = options.limit;

            // if(textBlock.data('limit')) {
            //     options.limit = textBlock.data('limit');
            // } else {
            //     options.limit = options.limit;
            // }

            strCut = allText.substring(0, options.limit),
            dottedText = strCut.concat('', options.dots)

        if(n > options.limit) {
            textBlock.html(dottedText);
        }

        if(textBlock.data('btn') === true && n > options.limit) {
            textBlock.append(more);
        }

        textBlock.on('click','.more', function(e) {
            e.preventDefault();
            showAll();
        });

        textBlock.on('click','.less', function(e) {
            e.preventDefault();
            showShort();
        });

        showAll = function () {
            textBlock.html(textHtml);
            textBlock.append(less);
        }

        showShort = function () {
            textBlock.html(dottedText);
            textBlock.append(more);
        }
    });
};