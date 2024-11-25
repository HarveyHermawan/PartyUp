
import './Profile.css';

function Profile() {
  return (
    <div>
    <title>PartyUp Profile Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />
    <style data-tag="reset-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}\n    " }} />
    <style data-tag="default-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {\n        font-family: Inter;\n        font-size: 16px;\n      }\n\n      body {\n        width:  100%;\n        height: 100%;\n        font-weight: 400;\n        font-style:normal;\n        text-decoration: none;\n        text-transform: none;\n        letter-spacing: normal;\n        line-height: 1.15;\n        color: var(--dl-color-theme-neutral-dark);\n        background: var(--dl-color-theme-neutral-light);\n        fill: var(--dl-color-theme-neutral-dark);\n      }\n    " }} />
    <div>
      <link href="./profile.css" rel="stylesheet" />
      <div className="profile-container">
        <div className="profile-profile">
          <div className="profile-banner">
            
            <img src={('./assets/banner.jpg')} alt="image23" className="profile-image23" />
          </div>
          <div className="profile-profile-picture1">
            <img src={('./assets/Ellipse 1.png')} alt="Ellipse11" className="profile-ellipse11" />
          </div>
          <div className="profile-group6">
            <img src={('./assets/ellipse27951-1unp.svg')} alt="Ellipse21" className="profile-ellipse21" />
            <img src={('./assets/edit7951-6o0c-200h.png')} alt="Edit1" className="profile-edit1" />
          </div>

          <div className="profile-aboutme">
            <span className="profile-text10">About Me</span>
            <span className="profile-text11">
              Hey, I’m Stephen Curry! I’m a passionate gamer who loves 
              connecting with others who share the same enthusiasm for immersive
              worlds, strategic challenges, and fun gameplay.
            </span>
            <div className="profile-group7">
              
              <img src={('./assets/ellipse27951-1unp.svg')} alt="Ellipse22" className="profile-ellipse22" />
              <img src={('./assets/edit7951-6o0c-200h.png')} alt="Edit2" className="profile-edit2" />
            </div>
             <img src={('./assets/Rectangle 16.png')} alt="rectangle16" className="profile-rectangle16" />
          </div>

          <img src={('./assets/Rectangle 23.png')} alt="Rectangle23" className="profile-rectangle23" />

          <div className="profile-stats">
            <img src={('./assets/Rectangle 20.png')} alt="Rectangle20" className="profile-rectangle20" />
            <span className="profile-text12">Followers</span>
            <span className="profile-text13">668</span>
            <img src={('./assets/Rectangle 20.png')} alt="Rectangle21" className="profile-rectangle21" />
            <span className="profile-text14">Reviews</span>
            <span className="profile-text15">5.0/5.0⭐</span>
            <img src={('./assets/Rectangle 20.png')} alt="Rectangle22" className="profile-rectangle22" />
            <span className="profile-text16">Games Played</span>
            <span className="profile-text17">1209</span>
          </div>

          <div className="profile-games">
            <span className="profile-text18">Games</span>
            <div className="profile-group9">
              <img src={('./assets/ellipse27951-1unp.svg')} alt="Ellipse23" className="profile-ellipse23" />
              <img src={('./assets/edit7951-958k-200h.png')} alt="Edit3" className="profile-edit3" />
            </div>
            
            <span className="profile-text19">Apex Legends</span>
            <img src={('./assets/image 20.png')} alt="image20" className="profile-image20" />
            <span className="profile-text20">Counter Strike 2</span>
            <img src={('./assets/image 26.png')} alt="image26" className="profile-image26" />
            <span className="profile-text21">PUBG</span>
            <img src={('./assets/image 30.png')} alt="image30" className="profile-image30" />
            <img src={('./assets/Rectangle 15.png')} alt="rectangle15" className="profile-rectangle15" />
          </div>

          <div className="profile-socials">
            <span className="profile-text22">Socials</span>
            <span className="profile-text23">stcurry</span>
            <span className="profile-text24">stephencurry30</span>
            <span className="profile-text25">StephenCurry30</span>
            <div className="profile-group8">
              <img src={('./assets/ellipse27951-1unp.svg')} alt="Ellipse24" className="profile-ellipse24" />
              <img src={('./assets/edit7951-6o0c-200h.png')} alt="Edit4" className="profile-edit4" />
            </div>
            <img src={('./assets/Discord.png')} alt="Discord" className="profile-discord" />
            <img src={('./assets/TwitterX.png')} alt="TwitterX" className="profile-twitter-x" />
            <img src={('./assets/Instagram.png')} alt="Instagram" className="profile-instagram" />
            <img src={('./assets/Rectangle 17.png')} alt="Rectangle17" className="profile-rectangle17" />
          </div>

          <img src={('./assets/Rectangle 25.png')} alt="Rectangle24" className="profile-rectangle24" />
          <img src={('./assets/Rectangle 25.png')} alt="Rectangle25" className="profile-rectangle25" />
          
          <span className="profile-text26">5.0/5.0⭐ ·&nbsp;109 Reviews</span>
          <span className="profile-text27">Reviews</span>

          <div className="profile-medals">
            <img src={('./assets/rectangle401036-kzy-200h.png')} alt="Rectangle32" className="profile-rectangle32" />
            <img src={('./assets/Medal.png')} alt="Medal1036" className="profile-medal" />
            <span className="profile-text28">Member</span>
            <img src={('./assets/rectangle401036-kzy-200h.png')} alt="Rectangle33" className="profile-rectangle33" />
            <span className="profile-text29">Top Gamer</span>
            <img src={('./assets/trophy1036-mjd-200h.png')} alt="Trophy" className="profile-trophy" />
          </div>

          <div className="profile-name-language">
            <span className="profile-text30">Stephen Curry</span>
            <span className="profile-text31">United States</span>
            <img src={('./assets/usa1037-t70g-200h.png')} alt="USA" className="profile-usa" />
          </div>

          <div className="profile-review-stats">
            <span className="profile-text32">Responsive</span>
            <span className="profile-text33">5.0</span>
            <span className="profile-text34">5.0</span>
            <span className="profile-text35">5.0</span>
            <span className="profile-text36">5.0</span>
            <img src={('./assets/rectangle401036-kzy-200h.png')} alt="Rectangle40" className="profile-rectangle40" />
            <span className="profile-text37">Friendly ·&nbsp;70</span>
            <img src={('./assets/rectangle451036-g82-200h.png')} alt="Rectangle45" className="profile-rectangle45" />
            <span className="profile-text38">Fast Response ·&nbsp;43</span>
            <span className="profile-text39">See More</span>
            <img src={('./assets/rectangle431036-pdjvs-200h.png')} alt="Rectangle43" className="profile-rectangle43" />
            <span className="profile-text40">Interactive ·&nbsp;52</span>
            <img src={('./assets/rectangle441036-e2yi-200h.png')} alt="Rectangle44" className="profile-rectangle44" />
            <span className="profile-text41">Humorous · 45</span>
            <img src={('./assets/rectangle421036-xm0n-200h.png')} alt="Rectangle42" className="profile-rectangle42" />
            <span className="profile-text42">Talkative ·&nbsp;57</span>
            <img src={('./assets/rectangle411036-27k-200h.png')} alt="Rectangle41" className="profile-rectangle41" />
            <span className="profile-text43">Pleasant ·&nbsp;62</span>
            <img src={('./assets/rectangle471037-mv2-200h.png')} alt="Rectangle47" className="profile-rectangle47" />
            <span className="profile-text44">Friendliness</span>
            <img src={('./assets/rectangle481037-lmbr-200h.png')} alt="Rectangle48" className="profile-rectangle48" />
            <span className="profile-text45">Performance</span>
            <img src={('./assets/rectangle491037-i47h-200h.png')} alt="Rectangle49" className="profile-rectangle49" />
            <span className="profile-text46">Enjoyment</span>
            <img src={('./assets/rectangle501037-l78c-200h.png')} alt="Rectangle50" className="profile-rectangle50" />
          </div>

          <div className="profile-reviews">
            <img src={('./assets/rectangle551037-dh8j-200h.png')} alt="Rectangle55" className="profile-rectangle55" />
            <img src={('./assets/rectangle561037-icw-200h.png')} alt="Rectangle56" className="profile-rectangle56" />
            <span className="profile-text47">5.0/5.0⭐</span>
            <span className="profile-text48">
              Very sweet and quick with the order. 11/10, would order again. ^-^
            </span>
            <span className="profile-text49">Anonymous</span>
            <span className="profile-text50">3 weeks ago</span>
            <img src={('./assets/rectangle511037-isa-200h.png')} alt="Rectangle51" className="profile-rectangle51" />
            <img src={('./assets/rectangle521037-awgx-200h.png')} alt="Rectangle52" className="profile-rectangle52" />
            <span className="profile-text51">All</span>
            <img src={('./assets/rectangle531037-hz6-200h.png')} alt="Rectangle53" className="profile-rectangle53" />
            <span className="profile-text52">Positive</span>
            <img src={('./assets/rectangle541037-4q9-200h.png')} alt="Rectangle54" className="profile-rectangle54" />
            <span className="profile-text53">Negative</span>
            <img src={('./assets/ellipse31037-71ek-200w.png')} alt="Ellipse3" className="profile-ellipse3" />
            <img src={('./assets/rectangle571037-4vr-200h.png')} alt="Rectangle57" className="profile-rectangle57" />
            <span className="profile-text54">5.0/5.0⭐</span>
            <span className="profile-text55">
              Quick response and fast service✨
            </span>
            <span className="profile-text56">Anonymous</span>
            <span className="profile-text57">1 month ago</span>
            <img src={('./assets/ellipse41037-glri-200w.png')} alt="Ellipse4" className="profile-ellipse4" />
            <img src={('./assets/rectangle581037-d5b-200h.png')} alt="Rectangle58" className="profile-rectangle58" />
            <span className="profile-text58">5.0/5.0⭐</span>
            <span className="profile-text59">
              Best service, he is so kind 🫶🏻🫶🏻🫶🏻
            </span>
            <span className="profile-text60">Anonymous</span>
            <span className="profile-text61">1 month ago</span>
            <img src={('./assets/ellipse51037-6h8-200w.png')} alt="Ellipse5" className="profile-ellipse5" />
            <img src={('./assets/rectangle401037-4a27m-200h.png')} alt="Rectangle40" className="profile-rectangle402" />
            <span className="profile-text62">Friendly</span>
            <img src={('./assets/rectangle591037-m9qb-200h.png')} alt="Rectangle59" className="profile-rectangle59" />
            <span className="profile-text63">Fast Response</span>
            <img src={('./assets/rectangle601037-anol-200h.png')} alt="Rectangle60" className="profile-rectangle60" />
            <span className="profile-text64">Pleasant</span>
            <img src={('./assets/rectangle611037-fzoe-200h.png')} alt="Rectangle61" className="profile-rectangle61" />
            <span className="profile-text65">Friendly</span>
            <img src={('./assets/rectangle621037-fm7-200h.png')} alt="Rectangle62" className="profile-rectangle62" />
            <span className="profile-text66">Fast Response</span>
            <img src={('./assets/rectangle631038-rj1-200h.png')} alt="Rectangle63" className="profile-rectangle63" />
            <span className="profile-text67">Interactive</span>
            <img src={('./assets/rectangle641038-q9q-200h.png')} alt="Rectangle64" className="profile-rectangle64" />
            <span className="profile-text68">Friendly</span>
            <img src={('./assets/rectangle651038-2sd-200h.png')} alt="Rectangle65" className="profile-rectangle65" />
            <span className="profile-text69">Talkative</span>
            <img src={('./assets/rectangle661038-7a4l-200h.png')} alt="Rectangle66" className="profile-rectangle66" />
            <span className="profile-text70">Humorous</span>
            <img src={('./assets/rectangle671038-iplc-200h.png')} alt="Rectangle67" className="profile-rectangle67" />
            <span className="profile-text71">See More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default Profile;
