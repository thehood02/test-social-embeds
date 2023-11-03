import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import IframeRenderer, {iframeModel} from '@native-html/iframe-plugin';
import RenderHtml from 'react-native-render-html';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('window');

const data = {
  post_date: '2023-01-06T14:16:30',
  post_content: `<p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales leo a diam aliquam, a interdum libero elementum. Donec id mauris elit. Integer porta ornare nisi, eget condimentum lectus sollicitudin quis. Curabitur id semper massa. Curabitur dictum diam a mauris viverra, non imperdiet ipsum efficitur. Suspendisse ornare enim at massa eleifend, a mollis sem congue. Proin at augue felis. Fusce id semper quam. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in velit vel dolor tincidunt condimentum.</p><p style="text-align: justify;">&nbsp;</p>  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2106169801518337"     crossorigin="anonymous"></script>  <!-- Clout News UK [B4 H2 & 2 Paras] -->  <ins class="adsbygoogle"     style="display:block"     data-ad-client="ca-pub-2106169801518337"     data-ad-slot="1243617725"     data-ad-format="auto"     data-full-width-responsive="true"></ins>  <script>     (adsbygoogle = window.adsbygoogle || []).push({});  </script>  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2106169801518337"     crossorigin="anonymous"></script>  <!-- Clout News UK [B4 H2 & 2 Paras] -->  <ins class="adsbygoogle"     style="display:block"     data-ad-client="ca-pub-2106169801518337"     data-ad-slot="1243617725"     data-ad-format="auto"     data-full-width-responsive="true"></ins>  <script>     (adsbygoogle = window.adsbygoogle || []).push({});  </script>  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2106169801518337"     crossorigin="anonymous"></script>  <!-- Clout News UK [B4 H2 & 2 Paras] -->  <ins class="adsbygoogle"     style="display:block"     data-ad-client="ca-pub-2106169801518337"     data-ad-slot="1243617725"     data-ad-format="auto"     data-full-width-responsive="true"></ins>  <script>     (adsbygoogle = window.adsbygoogle || []).push({});  </script>  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2106169801518337"     crossorigin="anonymous"></script>  <!-- Clout News UK [B4 H2 & 2 Paras] -->  <ins class="adsbygoogle"     style="display:block"     data-ad-client="ca-pub-2106169801518337"     data-ad-slot="1243617725"     data-ad-format="auto"     data-full-width-responsive="true"></ins>  <script>     (adsbygoogle = window.adsbygoogle || []).push({});  </script><h2>Twitter Post</h2><blockquote class="twitter-tweet" data-width="500" data-dnt="true"><p lang="en" dir="ltr" style="text-align: justify;">EXO To Return As A Full Group After Baekhyun’s Discharge With A Spring Comeback<a href="https://twitter.com/hashtag/exo?src=hash&amp;ref_src=twsrc%5Etfw">#exo</a> <a href="https://twitter.com/hashtag/exocomeback?src=hash&amp;ref_src=twsrc%5Etfw">#exocomeback</a> <a href="https://twitter.com/hashtag/kai?src=hash&amp;ref_src=twsrc%5Etfw">#kai</a> <a href="https://twitter.com/hashtag/do?src=hash&amp;ref_src=twsrc%5Etfw">#do</a> <a href="https://twitter.com/hashtag/sehun?src=hash&amp;ref_src=twsrc%5Etfw">#sehun</a> <a href="https://twitter.com/hashtag/baekhyun?src=hash&amp;ref_src=twsrc%5Etfw">#baekhyun</a> <a href="https://twitter.com/hashtag/chanyeol?src=hash&amp;ref_src=twsrc%5Etfw">#chanyeol</a> <a href="https://twitter.com/hashtag/chen?src=hash&amp;ref_src=twsrc%5Etfw">#chen</a> <a href="https://twitter.com/hashtag/suho?src=hash&amp;ref_src=twsrc%5Etfw">#suho</a> <a href="https://twitter.com/hashtag/xiumin?src=hash&amp;ref_src=twsrc%5Etfw">#xiumin</a> <a href="https://twitter.com/hashtag/lay?src=hash&amp;ref_src=twsrc%5Etfw">#lay</a> <a href="https://twitter.com/hashtag/kyungsoo?src=hash&amp;ref_src=twsrc%5Etfw">#kyungsoo</a> <a href="https://t.co/voaClI2iev">https://t.co/voaClI2iev</a></p><p style="text-align: justify;">&mdash; Clout News (@CloutNewsMedia) <a href="https://twitter.com/CloutNewsMedia/status/1610827971119706114?ref_src=twsrc%5Etfw">January 5, 2023</a></p></blockquote><p style="text-align: justify;"><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p><p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales leo a diam aliquam, a interdum libero elementum. Donec id mauris elit. Integer porta ornare nisi, eget condimentum lectus sollicitudin quis. Curabitur id semper massa. Curabitur dictum diam a mauris viverra, non imperdiet ipsum efficitur. Suspendisse ornare enim at massa eleifend, a mollis sem congue. Proin at augue felis. Fusce id semper quam. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in velit vel dolor tincidunt condimentum.</p><h2><strong>YouTube</strong></h2><p style="text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales leo a diam aliquam, a interdum libero elementum. Donec id mauris elit. Integer porta ornare nisi, eget condimentum lectus sollicitudin quis. Curabitur id semper massa. Curabitur dictum diam a mauris viverra, non imperdiet ipsum efficitur. Suspendisse ornare enim at massa eleifend, a mollis sem congue. Proin at augue felis. Fusce id semper quam. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in velit vel dolor tincidunt condimentum.</p><p style="text-align: justify;"><iframe loading="lazy" title="Exclusive Interview With Lady Victoria Hervey | Clout News" width="500" height="281" src="https://www.youtube.com/embed/GpDZAiEeBKw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p><p style="text-align: justify;">Aenean id lectus placerat, euismod dui eu, ullamcorper dolor. Nulla facilisi. In dictum orci et enim aliquam, ac posuere metus bibendum. Sed sollicitudin ultricies sem, id tempus leo fermentum sed. Duis consectetur posuere dictum. Proin dignissim odio sed nisi dictum, vel tempus nisi pellentesque. Aenean velit nibh, aliquam a eros at, eleifend vehicula quam. Vivamus ultricies mauris at nisl ultricies, at ultricies est luctus. Nullam ac lacus a est faucibus vehicula vel vel velit.</p><h2>Instagram</h2><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Cm3KKwFvvJ9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:500px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;" style="text-align: justify;"> <a href="https://www.instagram.com/p/Cm3KKwFvvJ9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> </p><div style=" display: flex; flex-direction: row; align-items: center;" style="text-align: justify;"><div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;" style="text-align: justify;"></div><div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;" style="text-align: justify;"><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;" style="text-align: justify;"></div><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;" style="text-align: justify;"></div></div></div><div style="padding: 19% 0;" style="text-align: justify;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;" style="text-align: justify;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;" style="text-align: justify;"><div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;" style="text-align: justify;">View this post on Instagram</div></div><div style="padding: 12.5% 0;" style="text-align: justify;"></div><div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;" style="text-align: justify;"><div style="text-align: justify;"><div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);" style="text-align: justify;"></div><div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;" style="text-align: justify;"></div><div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);" style="text-align: justify;"></div></div><div style="margin-left: 8px;" style="text-align: justify;"><div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;" style="text-align: justify;"></div><div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)" style="text-align: justify;"></div></div><div style="margin-left: auto;" style="text-align: justify;"><div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);" style="text-align: justify;"></div><div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);" style="text-align: justify;"></div><div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);" style="text-align: justify;"></div></div></div><div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;" style="text-align: justify;"><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;" style="text-align: justify;"></div><div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;" style="text-align: justify;"></div></div><p style="text-align: justify;"></a></p><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;" style="text-align: justify;"><a href="https://www.instagram.com/p/Cm3KKwFvvJ9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Clout News (@cloutnews)</a></p></div></blockquote><p style="text-align: justify;"><script async src="//platform.instagram.com/en_US/embeds.js"></script></p><p style="text-align: justify;">Aenean id lectus placerat, euismod dui eu, ullamcorper dolor. Nulla facilisi. In dictum orci et enim aliquam, ac posuere metus bibendum. Sed sollicitudin ultricies sem, id tempus leo fermentum sed. Duis consectetur posuere dictum. Proin dignissim odio sed nisi dictum, vel tempus nisi pellentesque. Aenean velit nibh, aliquam a eros at, eleifend vehicula quam. Vivamus ultricies mauris at nisl ultricies, at ultricies est luctus. Nullam ac lacus a est faucibus vehicula vel vel velit.</p><h2>Facebook</h2><div class="fb-post" data-href="https://www.facebook.com/cloutnews/posts/pfbid0gE9JmCiCSkq1CLwPEGRWPDMQ7xZhu7hCgaqqosQ6EzAUPZ4mB1C2tiGqyXwSPq1kl" data-width="552" style="text-align: justify;"></div><p style="text-align: justify;">Aenean id lectus placerat, euismod dui eu, ullamcorper dolor. Nulla facilisi. In dictum orci et enim aliquam, ac posuere metus bibendum. Sed sollicitudin ultricies sem, id tempus leo fermentum sed. Duis consectetur posuere dictum. Proin dignissim odio sed nisi dictum, vel tempus nisi pellentesque. Aenean velit nibh, aliquam a eros at, eleifend vehicula quam. Vivamus ultricies mauris at nisl ultricies, at ultricies est luctus. Nullam ac lacus a est faucibus vehicula vel vel velit.</p>`,
  medium_large:
    'https://cloutnews.co.uk/wp-content/uploads/2022/07/FB8DFA6D-7A60-407F-A80E-3603C2E372A6.jpeg',
  category: 'News',
  post_title: 'Test Post for Social Embeds on APP',
  author_profile_image:
    'https://cloutnews.co.uk/wp-content/uploads/2022/05/cropped-Profile-96x96.jpeg',
  post_author_username: 'Saqib Malik',
};

const PostScreen = props => {
  const scrollRef = useRef(null);

  const [fontSize, setfontSize] = useState(16);

  const [processedContent, setProcessedContent] = useState([]);

    const customHTMLElementModels = {
        iframe: iframeModel,
    };

  const renderers = {
    iframe: IframeRenderer,
  };

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true,
    },
    iframe: {
      webViewProps: {allowsFullscreenVideo: true, scalesPageToFit: true},
    },
  };

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'black',
      marginBottom: 15,
    },
    a: {
      color: 'green',
    },
    p: {
      textAlign: 'justify',
      fontFamily: 'Poppins_400Regular',
      fontSize: `${fontSize}px`,
      color: '#000000',
      margin: 0,
    },
    h1: {
      fontSize: `${fontSize + 2}px`,
    },
    h2: {
      fontSize: `${fontSize + 2}px`,
    },
    h3: {
      fontSize: `${fontSize + 2}px`,
    },
    h4: {
      fontSize: `${fontSize + 2}px`,
    },
    h5: {
      fontSize: `${fontSize + 2}px`,
    },
    h6: {
      fontSize: `${fontSize + 2}px`,
    },
    ul: {
      marginTop: 0,
    },
    li: {
      textAlign: 'justify',
      fontFamily: 'Poppins_400Regular',
      fontSize: `${fontSize}px`,
      color: '#000000',
      margin: 0,
    },
  };

  let passage = data.post_content;
  let words = passage.split(' ');
  let wordCount = words.length;
  const readTime = wordCount / 250;

  useEffect(() => {
    const processed = processContent(data.post_content);
    setProcessedContent(processed);
  }, []);

  const processContent = content => {
    const embedScript = `<script async src="https://www.instagram.com/embed.js"></script>
     <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0"></script>
     <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <script>window.setInterval(()=>{ window['twttr'].widgets.load();
              window['instgrm'].Embeds.process();
              window['FB'].XFBML.parse();},500);</script>
     `;

    const modifiedLink = 'cloutnews:/';

    let newString = [];
    const isEmbed = s => {
      const isTwitter = /<blockquote\s+class=\\?\"?\'?twitter-tweet/.test(s);
      const isInstagram =
        /(<blockquote\s+.+data\-instgrm)/.test(s) ||
        /(<blockquote\s+class=\\?\"?\'?instagram-media)/.test(s);
      const isFacebook = /(<div\s+class\=\\?\"?\'?fb\-post)/.test(s);

      return isTwitter || isInstagram || isFacebook;
    };

    const splitString = isEmbed(content)
      ? content.split('</blockquote>')
      : content.split('</p>');

    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] == '') {
        continue;
      }
      if (
        /<a\s+href="https:\/\/cloutnews\.com[^"]*\/newsletter/.test(
          splitString[i],
        )
      ) {
        // Skip links with "/newsletter" in the href attribute
        newString.push(splitString[i]);
      } else {
        let tempString = splitString[i];

        // Replace the href attribute within anchor tags for links with the domain "cloutnews.com"
        tempString = tempString.replace(
          /<a\s+href="https:\/\/cloutnews\.com([^"]+)"/g,
          `<a href="${modifiedLink}$1"`,
        );
        newString.push(tempString);
      }

      if ((i + 1) % 3 === 0) {
        newString.push(`<div><p>an ad</p></div>`);
      }
    }

    return newString;
  };

  const RenderString = () => {
    return processedContent.map((string, index) => (
      <View style={{flex: 1}} key={index}>
        <RenderHtml
          renderers={renderers}
          WebView={WebView}
          customHTMLElementModels={customHTMLElementModels}
          contentWidth={width}
          source={{html: string}}
          renderersProps={renderersProps}
          tagsStyles={tagsStyles}
          onHTMLLoaded={html => {}}
        />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollRef} style={styles.postDetails}>
        <View style={styles.postPic}>
          <View style={styles.postPicBottom}></View>
          <View
            style={[
              styles.newsItemPic,
              {width: '100%', height: 275, position: 'relative'},
            ]}
          />
          <Image
            style={{
              width: '100%',
              height: 275,
              position: 'absolute',
              resizeMode: 'cover',
            }}
            source={{uri: data.medium_large}}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 15,
            paddingBottom: 14,
          }}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              {data.category}
            </Text>
          </View>
          <Text style={styles.postTitle1}>{data.post_title}</Text>

          <View style={styles.userBox}>
            <TouchableOpacity
              >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  marginRight: 8,
                  position: 'relative',
                }}
              />
              <Image
                style={{
                  width: 44,
                  height: 44,
                  marginRight: 8,
                  borderRadius: 22,
                  resizeMode: 'cover',
                  position: 'absolute',
                }}
                source={{uri: data.author_profile_image}}
              />
            </TouchableOpacity>

            <View style={{flex: 1, flexDirection: 'column'}}>
              <TouchableOpacity>
                <Text style={styles.postAuthor}>
                  {data.post_author_username}
                </Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <>
                  <Text style={styles.postTime}>
                    {data.post_date} | {Math.ceil(readTime)} mins
                    read
                  </Text>
                </>
              </View>
            </View>
          </View>

          {/* <View>
            <RenderHtml
              renderers={renderers}
              WebView={WebView}
              // customHTMLElementModels={customHTMLElementModels}
              contentWidth={width}
              source={source}
              renderersProps={renderersProps}
              tagsStyles={tagsStyles}
              onHTMLLoaded={html => {}}
            />
          </View> */}

          {/* <View style={{height: 1000}}>
            <WebView
              style={{flex: 1}}
              source={source}
              injectedJavaScript={`
              window.setInterval(()=>{ window['twttr'].widgets.load();
              window['instgrm'].Embeds.process();
              window['FB'].XFBML.parse();},500)`}
              javaScriptEnabled={true}
              scalesPageToFit={true}
              automaticallyAdjustContentInsets={false}
              viewportContent={'width=device-width, user-scalable=no'}
            />
          </View> */}

          <View>
            {/* <RenderString /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    margin: 15,
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ffffff',
    // height: 80,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  topHeader: {
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 35,
    paddingRight: 26,
    paddingBottom: 5,
    paddingLeft: 32,
  },
  searchSection: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginLeft: 58,
    height: 38,
    // width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  headerSearch: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 19.5,
    color: '#010101',
    // backgroundColor: '#ffffff',
    width: '100%',
    height: 38,

    // position: 'absolute',
    // zIndex: 0,
  },
  postDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  postPic: {
    width: '100%',
    height: 275,
    position: 'relative',
  },
  postPicBottom: {
    position: 'absolute',
    // top: 'auto',
    right: 0,
    bottom: 0,
    left: 0,
    height: 25,
    backgroundColor: '#fff',
    zIndex: 130,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  category: {
    alignSelf: 'flex-start',
    height: 30,
    borderRadius: 8,
    backgroundColor: '#000000',
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#ffffff',
    marginLeft: 10,
  },
  postTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 14,
  },
  postTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 8,
  },
  detailsText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#000000',
    marginBottom: 20,
  },
  userBox: {
    marginTop: 15,
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTime: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    color: '#525252',
  },
  postAuthor: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  postTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  postTitleText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 34,
    color: '#000000',
  },
  commentPost: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  userPic: {
    width: 44,
    height: 44,
    borderRadius: 22,
    resizeMode: 'cover',
  },
  postBox: {
    height: 48,
    backgroundColor: '#f0f2f5',
    borderRadius: 24,
    borderColor: '#000000',
    borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 24,
    marginLeft: 18,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  postBoxInput: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#010101',
    height: 48,
    flex: 1,
    marginRight: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  post: {
    flex: 1,
    position: 'relative',
    marginLeft: 18,
  },
  commentMessage: {
    backgroundColor: '#f0f2f5',
    borderRadius: 24,
    borderColor: '#000000',
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
  commentMessageTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
  commentMessageText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#000000',
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  stickyAdvParentViewStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    // height: height * 0.07,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    bottom: 0,
  },

  advParentViewStyle: {
    backgroundColor: 'white',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsItemPic: {
    width: height * 0.14,
    // height: height * 0.14,
    resizeMode: 'cover',
    borderTopLeftRadius: 8.5,
    borderBottomLeftRadius: 8.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  p: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'justify',

    //margin:0,
  },
  modalTransparentBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: 275,
    width: 316,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 18,
  },
  modalTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  modalText: {color: '#000', textAlign: 'center'},
  modalBtn: {
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 9,
  },
  modalBtnText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
  summaryContainer: {
    backgroundColor: '#2c2c2e',
    borderRadius: 15,
    padding: 16,
    marginTop: 12,
    marginBottom: 24,
  },
  summaryHeading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  summaryContent: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
});

export default PostScreen;
