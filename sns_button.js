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
      encode_url = encodeURIComponent(url),
      href = 'https://www.facebook.com/share.php?title=' + title + '&u=' + encode_url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_google = function (selector, title, url) {
    var
      href = 'https://plus.google.com/share?url=' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_hatena = function (selector, title, url) {
    var
      encode_title = encodeURIComponent(title),
      href = 'https://b.hatena.ne.jp/add?title=' + encode_title + '&url=' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_pocket = function (selector, title, url) {
    var
      encode_url = encodeURIComponent(url),
      href = 'http://getpocket.com/edit?title=' + title + '&url=' + encode_url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_twitter(d.getElementById('sns_button_twitter'), 'ツイッター', 'https://google.com');
  _set_facebook(d.getElementById('sns_button_facebook'), '顔本', 'https://google.com');
  _set_google(d.getElementById('sns_button_google'), 'Google', 'https://himakan.net');
  _set_hatena(d.getElementById('sns_button_hatena'), 'はてブ', 'https://google.com');
  _set_pocket(d.getElementById('sns_button_pocket'), 'ポケット', 'https://google.com');
})(document);
