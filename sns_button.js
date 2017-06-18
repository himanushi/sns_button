(function (d) {
  _a_tag_generator = function (title, href) {
    var
      a = d.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    a.innerHTML = title;
    return a;
  };

  _set_twitter = function (selector, title, url) {
    var
      href = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_facebook = function (selector, title, url) {
    var
      u = encodeURIComponent(url),
      href = 'http://www.facebook.com/share.php?title=' + title + '&u=' + u;

    selector.append(_a_tag_generator(title, href));
  };

  _set_twitter(d.getElementById('sns_button_twitter'), 'タイトル', 'http://sssss');
  _set_facebook(d.getElementById('sns_button_facebook'), 'タイトル', 'https://google.com');
})(document);
