(function (d, origin) {
  var
    sns = {
      twitter: {
        api_path: 'https://twitter.com/intent/tweet',
        title_param: 'text',
        url_param: 'url',
        display: 'シェア'
      },
      facebook: {
        api_path: 'https://www.facebook.com/share.php',
        title_param: 'title',
        url_param: 'url',
        display: 'シェア'
      },
      google: {
        api_path: 'https://plus.google.com/share',
        url_param: 'url',
        display: '+1'
      },
      hatena: {
        api_path: 'https://b.hatena.ne.jp/add',
        title_param: 'title',
        url_param: 'url',
        display: 'ブクマ'
      },
      pocket: {
        api_path: 'https://getpocket.com/edit',
        title_param: 'title',
        url_param: 'url',
        display: 'Pocket'
      },
      line: {
        api_path: 'https://line.me/R/msg/text/?',
        display: 'Line'
      },
      slack: {
        api_path: 'http://slackbutton.herokuapp.com/post/new/',
        url_param: 'url',
        display: 'シェア'
      },
      mixi: {
        api_path: 'https://mixi.jp/recent_voice.pl',
        url_param: 'status',
        display: 'つぶやく'
      },
      chatwork: {
        api_path: 'https://www.chatwork.com/packages/share/new.php',
        title_param: 'title',
        url_param: 'url',
        display: 'シェア'
      },
      evernote: {
        api_path: 'https://www.evernote.com/noteit.action',
        title_param: 'title',
        url_param: 'url',
        display: 'clip'
      },
      feedly: {
        api_path: 'https://feedly.com/i/subscription/feed/' + origin + '/feed',
        title_param: 'title',
        url_param: 'url',
        display: 'シェア'
      }
    };

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
      href = 'https://getpocket.com/edit?title=' + title + '&url=' + encode_url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_line = function (selector, title, url) {
    var
      href = 'https://line.me/R/msg/text/?' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_slack = function (selector, title, url) {
    var
      encode_url = encodeURIComponent(url),
      href = 'http://slackbutton.herokuapp.com/post/new/?url=' + encode_url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_mixi = function (selector, title, url) {
    var
      href = 'http://mixi.jp/recent_voice.pl?status=' + title + '%20' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_chatwork = function (selector, title, url) {
    var
      encode_title = encodeURIComponent(title),
      encode_url = encodeURIComponent(url),
      href = 'https://www.chatwork.com/packages/share/new.php?title=' + encode_title + '&url=' + encode_url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_evernote = function (selector, title, url) {
    var
      href = 'https://www.evernote.com/noteit.action?title=' + title + '&url=' + url;

    selector.append(_a_tag_generator(title, href));
  };

  _set_feedly = function (selector, title, origin_url) {
    var
      href = 'https://feedly.com/i/subscription/feed/' + origin_url + '/feed';

    selector.append(_a_tag_generator(title, href));
  };

  _init = function () {
    _set_twitter(d.getElementById('sns_button_twitter'), 'ツイッター', 'https://google.com');
    _set_facebook(d.getElementById('sns_button_facebook'), '顔本', 'https://google.com');
    _set_google(d.getElementById('sns_button_google'), 'Google', 'https://himakan.net');
    _set_hatena(d.getElementById('sns_button_hatena'), 'はてブ', 'https://google.com');
    _set_pocket(d.getElementById('sns_button_pocket'), 'ポケット', 'https://google.com');
    _set_line(d.getElementById('sns_button_line'), 'Line', 'https://google.com');
    _set_slack(d.getElementById('sns_button_slack'), 'slack', 'https://google.com');
    _set_mixi(d.getElementById('sns_button_mixi'), 'mixi', 'https://google.com');
    _set_chatwork(d.getElementById('sns_button_chatwork'), 'chatwork', 'https://google.com');
    _set_evernote(d.getElementById('sns_button_evernote'), 'evernote', 'https://google.com');
    _set_feedly(d.getElementById('sns_button_feedly'), 'feedly', 'https://himakan.net');
  };

  _init();
})(document, window.location.origin);
