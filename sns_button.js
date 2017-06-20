( function ( d, location ) {

  "use strict";

  var
    origin = location.origin,

    pure_location = location.href.replace( /\?.*$/, '' ),

    site_title = d.title,

    sns_all = {
      twitter: {
        api_path:     'https://twitter.com/intent/tweet',
        title_param:  'text',
        url_param:    'url',
        title_encode: false,
        url_encode:   false,
        display:      'シェア'
      },
      facebook: {
        api_path:     'https://www.facebook.com/share.php',
        title_param:  'title',
        url_param:    'u',
        title_encode: false,
        url_encode:   true,
        display:      'シェア'
      },
      google: {
        api_path:     'https://plus.google.com/share',
        url_param:    'url',
        title_encode: false,
        url_encode:   false,
        display:      '+1'
      },
      hatena: {
        api_path:     'https://b.hatena.ne.jp/add',
        title_param:  'title',
        url_param:    'url',
        title_encode: true,
        url_encode:   false,
        display:      'ブクマ'
      },
      pocket: {
        api_path:     'https://getpocket.com/edit',
        title_param:  'title',
        url_param:    'url',
        title_encode: false,
        url_encode:   true,
        display:      'Pocket'
      },
      line: {
        api_path:     'https://line.me/R/msg/text/?',
        title_encode: false,
        url_encode:   false,
        url_param:    '',
        display:      'Line'
      },
      slack: {
        api_path:     'http://slackbutton.herokuapp.com/post/new/',
        url_param:    'url',
        title_encode: false,
        url_encode:   true,
        display:      'シェア'
      },
      mixi: {
        api_path:     'https://mixi.jp/recent_voice.pl',
        url_param:    'status',
        title_encode: false,
        url_encode:   false,
        display:      'つぶやく'
      },
      chatwork: {
        api_path:     'https://www.chatwork.com/packages/share/new.php',
        title_param:  'title',
        url_param:    'url',
        title_encode: true,
        url_encode:   true,
        display:      'シェア'
      },
      evernote: {
        api_path:     'https://www.evernote.com/noteit.action',
        title_param:  'title',
        url_param:    'url',
        title_encode: false,
        url_encode:   false,
        display:      'clip'
      },
      feedly: {
        api_path:     'https://feedly.com/i/subscription/feed/' + origin + '/feed',
        title_encode: false,
        url_encode:   false,
        display:      'シェア'
      }
    };

  _a_tag_generator = function ( title, href ) {
    var
      a = d.createElement( 'a' );

    a.setAttribute( 'href', href );
    a.setAttribute( 'target', '_blank' );
    a.innerHTML = title;

    return a;
  };

  _set_a_tag = function ( selector, sns ) {
    var
      title = sns.title_encode ? encodeURIComponent( site_title )    : site_title,
      url   = sns.url_encode   ? encodeURIComponent( pure_location ) : pure_location,
      href  = sns.api_path + '?' + sns.title_param + '=' + title + '&' + sns.url_param + '=' + url;

    selector.append(_a_tag_generator(sns.display, href));
  };

  _init = function () {
    var
      sns_prefix = 'sns_button_';

    for ( s in sns_all ) {
      selector = d.getElementById( sns_prefix + s );
      if ( selector ) {
        _set_a_tag( selector, sns_all[ s ] )
      }
    }
  };

  _init();
})( document, window.location );
