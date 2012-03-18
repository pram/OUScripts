// ==UserScript==
// @name           OU Forums Expand All Posts
// @namespace      OU
// @description    OU Forums Expand All Posts originally written by Pram Attale
// @include        http://learn.open.ac.uk/mod/forumng/*
// @include        http://learn2.open.ac.uk/mod/forumng/*
// @include        http://learn3.open.ac.uk/mod/forumng/*
// ==/UserScript==

var links = document.getElementsByTagName("a"); //array
var regex = /(\b(https?):\/\/(learn)\d?(.open.ac.uk\/mod\/forumng\/discuss.php\?d=)\d{1,})/ig;
for (var i=0,imax=links.length; i<imax; i++) {
   if (links[i].href.indexOf("&expand=1")==-1)
   {
      links[i].href = links[i].href.replace(regex,"$1&expand=1");
   }
}
