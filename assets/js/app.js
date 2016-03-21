$(document).ready(function () {
	$('ul li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
	});

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});

	$('.slogan').typed({
		strings:["Quỹ chống hàng giả"],
		loop: true,
		backDelay: 2000,
		showCursor: false
	});

	$('.featured-carousel').owlCarousel({
		items: 1,
		margin: 0
	});
	$('.images-carousel').owlCarousel({
		items: 1,
		margin: 0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});
	document.getElementById('copyright').innerHTML = "&copy; " + new Date().getFullYear() + " Quỹ Chống hàng giả";
});

function myGetElementsByClassName(selector) {
    if ( document.getElementsByClassName ) {
        return document.getElementsByClassName(selector);
    }
    var returnList = new Array();
    var nodes = document.getElementsByTagName('div');
    var max = nodes.length;
    for ( var i = 0; i < max; i++ ) {
        if ( nodes[i].className == selector ) {
            returnList[returnList.length] = nodes[i];
        }
    }
    return returnList;
}

var rssReader = {
    containers : null,
    // initialization function
    init : function(selector) {
        containers = myGetElementsByClassName(selector);
        for(i=0;i<containers.length;i++){
            // getting necessary variables
            var rssUrl = containers[i].getAttribute('rss_url');
            var num = containers[i].getAttribute('rss_num');
            var id = containers[i].getAttribute('id');

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            var url = encodeURIComponent(rssUrl);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssReader.parse&context='+id;

            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            containers[i].appendChild(script);
        }
    },            
    // parsing of results by google
    parse : function(context, data) {
        var container = document.getElementById(context);
        container.innerHTML = '';
        // creating list of elements
        var mainList = document.createElement('ul');
        // also creating its childs (subitems)
        var entries = data.feed.entries;
        for (var i=0; i<entries.length; i++) {
            var listItem = document.createElement('li');
            //var title = entries[i].title;
            var contentSnippet = entries[i].contentSnippet;
            var contentSnippetText = document.createTextNode(contentSnippet);
            var link = document.createElement('a');
            link.setAttribute('href', entries[i].link);
            link.setAttribute('target','_blank');
            //var text = document.createTextNode(title);
            link.appendChild(contentSnippetText);
            // add link to list item
            listItem.appendChild(link);
            // var desc = document.createElement('p');
            // desc.appendChild(contentSnippetText);
            // add description to list item
            //listItem.appendChild(desc);
            // adding list item to main list
            mainList.appendChild(listItem);
        }
        container.appendChild(mainList);
    }
};