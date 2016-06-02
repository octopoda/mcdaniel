angular.module("mcdaniel.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/templates/blog/article-small.html","<figure class=\"m-article\" itemprop=\"http://schema.org/Article\"><div class=\"m-article__image\" style=\"background-image:url(\'{{ vd.image }}\')\"></div><figcaption class=\"m-article__text\"><h2 itemprop=\"headline\"><a href=\"/posts/{{ vd.link }}\">{{ vd.title}}</a></h2><div class=\"button reverse\"><a href=\"/posts/{{ vd.link }}\">Read</a></div></figcaption></figure>");
$templateCache.put("/templates/blog/blog-preview.html","<div class=\"m-blog-preview\"><section class=\"m-blog-preview__main\" style=\"background-image:url(\'{{ vd.mainArticle.post_image }}\')\"><div class=\"row\"><h3><a href=\"/posts/{{ article.direct_link }}\">{{ vd.mainArticle.title }}</a></h3><h5>{{ vd.mainArticle.author }}</h5><div class=\"button reverse\"><a href=\"/posts/{{ vd.mainArticle.direct_link }}\">Read</a></div></div></section><div class=\"m-blog-preview__others\"><section data-ng-repeat=\"article in vd.otherArticles\" style=\"background-image:url(\'{{ article.post_thumbnail }}\')\"><h4><a href=\"/posts/{{ article.direct_link }}\">{{ article.title }}</a></h4><h5>{{ article.author }}</h5><div class=\"button reverse\" data-ng-switch=\"article.video\"><a href=\"/posts/{{ article.direct_link }}\" data-ng-switch-when=\"0\">Read</a> <a href=\"/posts/{{ article.direct_link }}\" data-ng-switch-when=\"1\">Watch</a></div></section></div></div>");
$templateCache.put("/templates/blog/footer-rollup.html","<footer class=\"article__footer\" id=\"articleFooter\"><div class=\"article__footer--close\"><i class=\"material-icons\">close</i></div><div class=\"row\"><h4 class=\"article__footer--title\">Get Fresh <span>Nutrition Articles</span><small>Delivered to Your Inbox</small></h4><div class=\"article__footer--mailchimp\"><form id=\"mailChimpSubscribe\" data-ng-submit=\"vd.submitMailChimp()\" data-ng-if=\"!vd.success\"><div class=\"form-group\"><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Enter Your Email Address\" data-ng-model=\"vd.formData.email\" required><div class=\"input-errors\" ng-messages=\"mailChimpSubscribe.email.$error\" ng-if=\"mailChimpSubscribe.email.$dirty\"><small class=\"error\" ng-message=\"required\">Please provide a valid email</small></div><button class=\"button__loading {! vd.loading !}\" ng-disabled=\"mailChimpSubscribe.$invalid\"><div class=\"progress-spinner\"></div><div class=\"button-text\">Subscribe</div></button></div></form><div class=\"article__footer--success\" data-ng-if=\"vd.success\"><h4>{{ vd.message }}</h4></div></div></div></footer>");
$templateCache.put("/templates/blog/search-input.html","<div class=\"m-search-input\"><div class=\"m-search-input__slider\"><i class=\"material-icons\">search</i><form action=\"/search\" method=\"GET\" id=\"searchForm\"><input type=\"text\" name=\"q\" id=\"q\" class=\"m-search-input__input\" placeholder=\"Search\"></form></div></div>");
$templateCache.put("/templates/faqs/faq-block.html","<ul class=\"collapsible faq__wrapper\" id=\"faqQuestions\"><li class=\"faq__question\" data-ng-repeat=\"faq in vd.faqs\" data-ng-click=\"vd.openAnswer($event)\" data-ng-cloak><i class=\"material-icons\">chevron_right</i> {{ faq.question }}<div class=\"faq__answer\" data-ng-bind-html=\"faq.answer\"></div></li></ul>");
$templateCache.put("/templates/global/flash.html","<div class=\"m-flash__wrapper\"><a data-ng-show=\"vd.close\" class=\"m-flash__close\" data-ng-click=\"vd.closeFlash();\">&times;</a><div class=\"m-flash__heading\"><p>{{ vd.heading }}</p></div><div data-ng-show=\"vd.actionButton\" class=\"m-flash__action\"><button data-ng-click=\"vd.actionSubmit()\">{{ vd.actionText }}</button></div></div>");
$templateCache.put("/templates/global/loading.html","<div class=\"m-loading\"><h4 class=\"text-center\"><span class=\"progress-spinner green\"></span> Loading. Please wait.</h4></div>");
$templateCache.put("/templates/shared/dynamic-service-input.html","");
$templateCache.put("/templates/shared/instafeed.html","<section><h3>Insta-gram</h3><div id=\"instafeed\"></div></section>");}]);