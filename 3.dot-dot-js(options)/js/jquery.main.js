jQuery(function() {
	initdotDotScript();
});

//open-close init
function initdotDotScript() {
	jQuery('.block').dotScript({
        limit: 250
    });
}

jQuery.fn.dotScript = function(opt) {
    var options = jQuery.extend({
        limit: 250,
        dots: "...",
        hasBtn: false
    }, opt);

    return this.each(function() {
        var textBlock = jQuery(this),
            textHtml = textBlock.html();
            allText = textBlock.text(),
            n = allText.length,
            more= jQuery('<a class="more" href="#">more</a>'),
            less= jQuery('<a class="less" href="#">less</a>'),

            strCut = allText.substring(0, options.limit),
            dottedText = strCut.concat('', options.dots);

        textBlock.data('limit') ? options.limit = textBlock.data('limit') : options.limit = options.limit;

        if(n > options.limit) {
            textBlock.html(dottedText);
        }

        if(textBlock.data('btn') === true && n > options.limit) {
            textBlock.append(more);
        }

        textBlock.on('click','a.more', function(e) {
            e.preventDefault();
            showAll();
        });

        textBlock.on('click','a.less', function(e) {
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