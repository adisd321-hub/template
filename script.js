<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
    <meta charset='UTF-8'/>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' name='viewport'/>
    
    <!-- SEO & Metadata Dinamis via CSV/JS -->
    <title id="meta-title"><data:blog.pageTitle/></title>
    <meta id="meta-desc" name="description" content="Esmpeh PWINK - Kumpulan video viral terbaru."/>
    
    <!-- Open Graph -->
    <meta id="og-title" property="og:title" content=""/>
    <meta id="og-desc" property="og:description" content=""/>
    <meta id="og-image" property="og:image" content=""/>
    <meta property="og:type" content="video.other"/>
    
    <!-- Twitter Card -->
    <meta id="twitter-title" name="twitter:title" content=""/>
    <meta id="twitter-desc" name="twitter:description" content=""/>
    <meta id="twitter-image" name="twitter:image" content=""/>
    <meta name="twitter:card" content="summary_large_image"/>
    
    <!-- Canonical -->
    <link id="canonical-url" rel="canonical" href=""/>

    <!-- Schema.org Structured Data untuk Video -->
    <script id="schema-video" type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Esmpeh PWINK",
      "description": "Kumpulan video viral terbaru.",
      "thumbnailUrl": "",
      "uploadDate": "2026-01-01T00:00:00+07:00",
      "contentUrl": ""
    }
    </script>
    
    <!-- Tag b:skin wajib ada agar Blogger tidak error -->
    <b:skin><![CDATA[
        /* CSS Utama dimuat dari file eksternal GitHub */
    ]]></b:skin>

    <!-- FontAwesome -->
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' rel='stylesheet'/>

    <!-- Memanggil CSS dari GitHub (jsDelivr) -->
    <link href='https://cdn.jsdelivr.net/gh/adisd321-hub/template@main/style.css' rel='stylesheet' type='text/css'/>
</head>
<body>

    <div id='video-page-container'>
        <div id='status-message'>Memuat video...</div>
    </div>

    <!-- Memanggil JavaScript dari GitHub (jsDelivr) -->
    <script src='https://cdn.jsdelivr.net/gh/adisd321-hub/template@main/script.js'></script>

    <!-- Widget bawaan Blogger (Wajib ada agar XML tidak error) -->
    <div style='display:none;'>
        <b:section class='main' id='main-section' showaddelement='no'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1'>
            <b:widget-settings>
              <b:widget-setting name='showDateHeader'>true</b:widget-setting>
              <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showShareButtons'>true</b:widget-setting>
              <b:widget-setting name='authorLabel'>By</b:widget-setting>
              <b:widget-setting name='showCommentLink'>true</b:widget-setting>
              <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showAuthor'>false</b:widget-setting>
              <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='reactionsLabel'/>
              <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
              <b:widget-setting name='style.layout'>1x1</b:widget-setting>
              <b:widget-setting name='showLabels'>true</b:widget-setting>
              <b:widget-setting name='showLocation'>true</b:widget-setting>
              <b:widget-setting name='showTimestamp'>true</b:widget-setting>
              <b:widget-setting name='postsPerAd'>3</b:widget-setting>
              <b:widget-setting name='showBacklinks'>false</b:widget-setting>
              <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showInlineAds'>true</b:widget-setting>
              <b:widget-setting name='showReactions'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='top'>
              <b:if cond='!data:mobile'>
                <div class='blog-posts hfeed'>
                  <b:include data='top' name='status-message'/>
                  <b:loop values='data:posts' var='post'>
                    <div class='post-outer'>
                      <b:include data='post' name='post'/>
                    </div>
                  </b:loop>
                </div>
              <b:else/>
                <b:include name='mobile-main'/>
              </b:if>
            </b:includable>
            <b:includable id='backlinkDeleteIcon' var='backlink'/>
            <b:includable id='backlinks' var='post'/>
            <b:includable id='comment-form' var='post'/>
            <b:includable id='commentDeleteIcon' var='comment'/>
            <b:includable id='comment_count_picker' var='post'/>
            <b:includable id='comment_picker' var='post'/>
            <b:includable id='comments' var='post'/>
            <b:includable id='feedLinks'/>
            <b:includable id='feedLinksBody' var='links'/>
            <b:includable id='iframe_comments' var='post'/>
            <b:includable id='mobile-index-post' var='post'/>
            <b:includable id='mobile-main' var='top'/>
            <b:includable id='mobile-nextprev'/>
            <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title' itemprop='name'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                <a expr:href='data:post.url'><data:post.title/></a>
              <b:else/>
                <data:post.title/>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <data:post.body/>
            <div style='clear: both;'/>
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.url.canonical' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;} and data:post.allowComments' data='post' name='comment_count_picker'/>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
            </div>

          </div>
        </div>

        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
      </div>
    </div>
  </div>
</b:includable>
            <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
            <b:includable id='post' var='post'>
  <div class='post hentry uncustomized-post-template' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
    </b:if>
    <meta expr:content='data:blog.blogId' itemprop='blogId'/>
    <meta expr:content='data:post.id' itemprop='postId'/>

    <a expr:name='data:post.id'/>
    <b:if cond='data:post.title'>
      <h3 class='post-title entry-title' itemprop='name'>
      <b:if cond='data:post.link or (data:post.url and data:blog.url != data:post.url)'>
        <a expr:href='data:post.link ? data:post.link : data:post.url'><data:post.title/></a>
      <b:else/>
        <data:post.title/>
      </b:if>
      </h3>
    </b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
      <data:post.body/>
      <div style='clear: both;'/>
    </div>

    <b:if cond='data:post.hasJumpLink'>
      <div class='jump-link'>
        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><data:post.jumpText/></a>
      </div>
    </b:if>

    <div class='post-footer'>
    <div class='post-footer-line post-footer-line-1'>
      <span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <data:top.authorLabel/>
            <b:if cond='data:post.authorProfileUrl'>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                  <span itemprop='name'><data:post.author/></span>
                </a>
              </span>
            <b:else/>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <span itemprop='name'><data:post.author/></span>
              </span>
            </b:if>
        </b:if>
      </span>

      <span class='post-timestamp'>
        <b:if cond='data:top.showTimestamp'>
          <data:top.timestampLabel/>
          <b:if cond='data:post.url'>
            <meta expr:content='data:post.url.canonical' itemprop='url'/>
            <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
          </b:if>
        </b:if>
      </span>

      <span class='post-comment-link'>
        <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;} and data:post.allowComments' data='post' name='comment_count_picker'/>
      </span>

      <span class='post-icons'>
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
            <img alt='' class='icon-action' height='13' src='https://resources.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>
        <b:include data='post' name='postQuickEdit'/>
      </span>

      <div class='post-share-buttons goog-inline-block'>
        <b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/>
      </div>

      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:top.showPostLabels and data:post.labels'>
          <data:postLabelsLabel/>
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='not data:label.isLast'>,</b:if>
          </b:loop>
        </b:if>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-3'>
      <span class='post-location'>
        <b:if cond='data:top.showLocation and data:post.location'>
          <data:postLocationLabel/>
          <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
        </b:if>
      </span>
      </div>
      <b:if cond='data:post.authorAboutMe'>
        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
          <b:if cond='data:post.authorPhoto.url'>
            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
          </b:if>
          <div>
            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
              <span itemprop='name'><data:post.author/></span>
            </a>
          </div>
          <span itemprop='description'><data:post.authorAboutMe/></span>
        </div>
      </b:if>
    </div>
  </div>
</b:includable>
            <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
            <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if>
</b:includable>
            <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
            <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
            <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        var text = (entry &&
                    ((entry.content && entry.content.$t) ||
                     (entry.summary && entry.summary.$t))) ||
            '';
        if (entry && entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + text + '</span>';
            }
          }
        }
        return text;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/comment/delete/'
               + config.blogId + '/' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          replybox.src = '';
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
            <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
    </div>
    </div>
  </div>
</b:includable>
          </b:widget>
        </b:section>
    </div>

</body>
</html>
