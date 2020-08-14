export const state = () => ({
  truths: [
    {
      arent: 'racist',
      noun: false,
      cards: [
        {
          link: `https://www.independent.co.uk/news/world/americas/us-elections/the-ku-klux-klan-officially-endorses-donald-trump-for-president-a7392801.html`,
          title: `The Klu Klux Klan officially endorses Donald Trump for president`,
          image: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/02/08/crusader-kkk-trump.jpg?width=1368&height=912&fit=bounds&format=pjpg&auto=webp&quality=70`,
          blurb: `America was great not because of what our forefathers did - but because of who our forefathers were. America was founded as a White Christian Republic`,
        },
        {
          link: `https://abcnews.go.com/Politics/paul-ryan-rips-donald-trump-textbook-racist-comments/story?id=39668275`,
          title: `Paul Ryan Rips Donald Trump for 'Textbook' Racist Comments About Judge`,
          image: `https://s.abcnews.com/images/Video/GTY_RT_ryan_trump_roku_jef_160512_16x9_992.jpg`,
          blurb: `Claiming a person can't do their job because of their race is sort of like the textbook definition of a racist comment`,
        },
        {
          link: `https://www.politifact.com/factchecks/2016/sep/27/hillary-clinton/true-hillary-clinton-says-federal-government-sued-/`,
          title: `Donald Trump started his career back in 1973 being sued by the Justice Department for racial discrimination`,
          image: `https://static.politico.com/d8/99/0de437ba465bbca10481d5c2bc70/190319-donald-trump-ap-773.jpg`,
          blurb: `Black people, the government found, were often told a Trump Management complex had no availability when apartments were available for rent`,
        },
        {
          link: `https://www.theguardian.com/us-news/2018/jan/12/racism-and-donald-trump-a-common-thread-throughout-his-career-and-life`,
          title: `Racism and Donald Trump: a common thread throughout his career and life`,
          image: `https://i.guim.co.uk/img/media/673d7ea8e988456bff6b72187d0a6265ea9dd75b/0_0_2528_1517/master/2528.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=8ad85c528db95ef1a3b9db7e0ca94da9`,
          blurb: `Racism has been a steady undercurrent in the life and times of Trump`,
        },
        {
          link: `https://www.businessinsider.com/nbc-donald-trump-2015-6`,
          title: `NBC fires Donald Trump after he calls Mexicans rapists and drug runners`,
          image: `https://i.insider.com/55918a4b6da811695ab77f22?width=600&format=jpeg&auto=webp`,
          blurb: `They're bringing drugs. They're bringing crime. They're rapists`,
        },
        {
          link: `https://fortune.com/2016/06/07/donald-trump-racism-quotes/`,
          title: `Is Donald Trump Racist? Here’s What the Record Shows`,
          image: `https://content.fortune.com/wp-content/uploads/2016/04/roycohn.jpg`,
          blurb: `Again and again, Trump has provoked anxiety and played to racial divisions`,
        },
        {
          link: `https://www.usatoday.com/story/entertainment/books/2019/07/08/trump-racial-slur-rumors-resurface-new-book-method-madness/1677839001/`,
          title: `Donald Trump racial-slur allegations resurface in new book`,
          image: `https://www.gannett-cdn.com/presto/2019/07/08/USAT/e79f0757-5f2f-472a-a96f-bdb392de96a4-Method_to_the_Madness_cover_image.jpg?width=600&height=914&fit=crop&format=pjpg&auto=webp`,
          blurb: `Authors and journalists Allen Salkin and Aaron Short resurrect the allegation that President Trump openly used a racial slur on the set of his long-running reality TV show “The Apprentice"`,
        },
        {
          link: `https://www.bostonglobe.com/metro/2016/08/05/maine-sees-somalian-community-starkly-different-than-what-donald-trump-portrayed/qOh4IjKY3VYYcxNG7zkcBM/story.html`,
          title: `Mainers defend Somali neighbors against Trump`,
          image: `https://bostonglobe-prod.cdn.arcpublishing.com/resizer/oCFE45oAuuA2LjQl84wg0zP5DOA=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BORY3LS3J4I6NHFRESSKHJDV2A.jpg`,
          blurb: `Mr. Trump’s statements disparaging immigrants who have come to this country legally are particularly unhelpful`,
        },
        {
          link: `https://www.newsweek.com/donald-trump-welfare-black-white-780252`,
          title: `Trump Thinks Only Black People Are on Welfare, But Really, White Americans Receive Most Benefits`,
          image: `https://cdn.someecards.com/posts/trump-cover-newsweek-lazy-boy-Wpw.jpg`,
          blurb: `President Donald Trump was apparently unaware that not all—in fact, the vast majority—of welfare beneficiaries are not black`,
        },
        {
          link: `https://www.vox.com/2018/1/11/16880750/trump-immigrants-shithole-countries-norway`,
          title: `Trump wants fewer immigrants from “shithole countries” and more from places like Norway`,
          image: `https://cdn.vox-cdn.com/thumbor/kH-XsTjaoZK1rpB-gaSul1eT67o=/0x0:3000x2272/1820x1213/filters:focal(1300x342:1780x822):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58296131/903922140.jpg.0.jpg`,
          blurb: `This isn’t the first time Trump has reportedly made racist comments about immigrants from predominantly nonwhite countries`,
        },
        {
          link: `https://www.politico.com/story/2018/01/16/steny-hoyer-trump-racist-341232`,
          title: `Hoyer: Trump is a ‘racist’`,
          image: `https://static.politico.com/dims4/default/b0ecf8c/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F02%2F95%2F14a0da474a7a99ed697cd9ae24ec%2F180117-hoyer-and-trump-ap-1160.jpg`,
          blurb: `If you use racist rhetoric, if you pursue policies based on a racial premise, I consider that to be a definition of a racist`,
        },
        {
          link: `https://www.cnn.com/2019/07/16/politics/white-supremacists-cheer-trump-racist-tweets-soh/index.html`,
          title: `Trump said 'many people agree' with his racist tweets. These white supremacists certainly do.`,
          image: `https://cdn.cnn.com/cnnnext/dam/assets/190716143522-omar-tlaib-ocasio-cortez-pressley-speak---story-only-exlarge-169.jpg`,
          blurb: `"This is the kind of WHITE NATIONALISM we elected him for," wrote Andrew Anglin on his Daily Stormer site -- one of the most highly trafficked neo-Nazi websites`,
        },
        {
          link: `https://www.brookings.edu/blog/fixgov/2019/08/14/trump-and-racism-what-do-the-data-say/`,
          title: `Trump and racism: What do the data say?`,
          image: `https://i0.wp.com/www.brookings.edu/wp-content/uploads/2019/08/RTX71WM9.jpg`,
          blurb: `FBI data show that since Trump’s election there has been an anomalous spike in hate crimes concentrated in counties where Trump won by larger margins`,
        }
      ],
    },
    {
      arent: 'homophobic',
      noun: false,
      cards: [
        {
          link: `https://time.com/5660956/trump-administration-anti-gay-brief-title-vii/`,
          title: `Trump Administration Asks Supreme Court to Legalize Workplace Discrimination Against Gay Employees`,
          image: `https://api.time.com/wp-content/uploads/2019/08/trump-anti-gay-discrimination.jpg`,
          blurb: `With an amicus brief filed on Friday, the Trump administration is asking the Supreme Court to essentially legalize anti-gay discrimination in the workplace`,
        },
        {
          link: `https://www.thedailybeast.com/president-trumps-anti-lgbt-agenda-is-louder-than-his-pride-message`,
          title: `President Trump’s Anti-LGBT Agenda Is Louder Than His Pride Message`,
          image: `https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1559345795/190531-Signorile-trump-anti-lgbt-tease_wnes7z`,
          blurb: `Trump’s attacks on LGBTQ rights from early in his presidency have been documented, from his Twitter announcement in July of 2017 that he was banning transgender people in the military to his Justice Department’s federal court brief, filed at about that same time, defending discrimination against gay, lesbian and bisexual people in employment`,
        },
        {
          link: `https://www.buzzfeednews.com/article/dominicholden/trump-lgbt-anti-actions-administration-pride-month`,
          title: `We Made A List Of All The Anti-LGBT Stuff Trump Has Done As President`,
          image: `https://img.buzzfeed.com/buzzfeed-static/static/2018-06/29/15/asset/buzzfeed-prod-web-06/sub-buzz-6881-1530301470-7.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto`,
          blurb: `Trump and his administration have aggressively rolled back and fought against LGBT rights`,
        },
      ],
    },
    {
      arent: 'liar',
      noun: true,
      cards: [
        {
          link: `https://www.politifact.com/article/2016/jul/06/17-things-donald-trump-said-and-then-denied-saying/`,
          title: `17 times Donald Trump said one thing and then denied it`,
          image: `https://www.newscorpse.com/Pix/Campaign-2016/trump-politifact-liar-year.jpg`,
          blurb: `"I never said ____" followed by a charge of media dishonesty is a favorite refrain of the presumptive Republican nominee’s, and it’s something that he’s been doing for years`,
        },
        {
          link: `https://www.bbc.com/news/world-us-canada-34902748`,
          title: `Trump 'wrong' in claiming US Arabs cheered 9/11 attacks`,
          image: `https://ichef.bbci.co.uk/news/660/cpsprodpb/11DC1/production/_86835137_1679e347-e63e-4046-a3eb-6b5a6a882549.jpg`,
          blurb: `Trump is plain wrong, and he is shamefully politicising an emotionally charged issue`,
        },
        {
          link: `https://www.theatlantic.com/politics/archive/2020/07/trumps-lies-about-coronavirus/608647/`,
          title: `All the President’s Lies About the Coronavirus`,
          image: `https://cdn.theatlantic.com/thumbor/__9D7kY_LchAiPaAANPmFd4iOQo=/124x0:1892x994/1440x810/filters:format(png)/media/img/mt/2020/03/Atlantic_Trump_corona_2/original.png`,
          blurb: `President Donald Trump has repeatedly lied about the coronavirus pandemic and the country’s preparation for this once-in-a-generation crisis`,
        },
      ],
    },
    {
      arent: 'misogynist',
      noun: false,
      cards: [
        {
          link: `https://www.theguardian.com/us-news/2016/oct/08/trumps-misogyny-problem-how-donald-has-repeatedly-targeted-women`,
          title: `Donald's misogyny problem: How Trump has repeatedly targeted women`,
          image: `https://i.guim.co.uk/img/media/8c250e85aeefeb6c4117d95c28c4cd09f73fa961/0_79_2296_1377/master/2296.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=50747ce2d1a6c4d047673c95ece75bd6`,
          blurb: `How many times does he get away with saying something sexist before we acknowledge that he is a sexist?`,
        },
        {
          link: `https://www.foxnews.com/politics/fox-news-responds-to-trumps-attacks-on-megyn-kelly`,
          title: `Fox News responds to Trump's attacks on Megyn Kelly`,
          image: `https://www.wnd.com/wp-content/uploads/2015/08/megyn-kelly-donald-trump-600.jpg`,
          blurb: `Donald Trump’s vitriolic attacks against Megyn Kelly and his extreme, sick obsession with her is beneath the dignity of a presidential candidate who wants to occupy the highest office in the land`,
        },
        {
          link: `https://www.self.com/story/sexist-president-donald-trump-comments`,
          title: `22 Sexist Things President Donald Trump Has Said About Women`,
          image: `https://media.self.com/photos/59556f4a77c93b5742e09550/4:3/w_2560%2Cc_limit/GettyImages-692653714.jpg`,
          blurb: `His way of seeing women—and the fact that he nevertheless won the election and is now leading the United States—contributes to the stubborn perseverance of exactly the kind of sexist, patriarchal culture that is in imminent need of change`,
        },
      ],
    },
    {
      arent: 'ableist',
      noun: false,
      cards: [
        {
          link: `https://www.bbc.com/news/world-us-canada-34930042`,
          title: `Donald Trump under fire for mocking disabled reporter`,
          image: `https://i1.wp.com/www.catholics4trump.com/wp-content/uploads/2016/07/Kovaleski.jpg?fit=1920%2C1080&ssl=1`,
          blurb: `The sad part about it is, it didn't in the slightest bit jar or surprise me that Donald Trump would do something this low-rent, given his track record`,
        },
        {
          link: `https://www.theguardian.com/environment/2019/dec/12/donald-trump-greta-thunberg-time-magazine`,
          title: `Trump's latest attack on Greta Thunberg was sexist, ableist – and perhaps jealous`,
          image: `https://i.guim.co.uk/img/media/4daef462c43ae0225fe2ad748b564fce80d3c3d1/100_63_4444_2665/master/4444.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=c51aefb081783a6329fd841612d5b196`,
          blurb: `Sexism and ableism all rolled into one – and who said men couldn’t multi-task?`,
        },
        {
          link: `https://www.latimes.com/opinion/op-ed/la-oe-perry-trump-ableism-20161017-snap-story.html`,
          title: `Trump's not just racist and sexist. He's ableist `,
          image: `https://ca-times.brightspotcdn.com/dims4/default/41ea289/2147483647/strip/true/crop/1980x1113+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9d%2F82%2F648e169e44c158f6659f0cf74814%2Fla-1476491791-snap-photo`,
          blurb: `Ableists convey the message that disabled people are not full members of our society, leading to exclusion and even abuse. Trump is fully complicit in sending precisely that message`,
        },
      ],
    },
    {
      arent: 'fascist',
      noun: true,
      cards: [
        {
          link: `https://www.msn.com/en-us/news/world/trump-admits-he-is-undermining-usps-to-make-it-harder-to-vote-by-mail/ar-BB17VvwD`,
          title: `Trump admits he is undermining USPS to make it harder to vote by mail`,
          image: `https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB17VAfR.img?h=960&w=1598&m=6&q=60&o=f&l=f&x=484&y=159`,
          blurb: `Trump’s comments lend evidence for critics who say the president is deliberately trying to hamstring the USPS in advance of the November elections to help his re-election bid`,
        },
        {
          link: `https://www.usatoday.com/story/opinion/todaysdebate/2020/07/28/trump-using-federal-agents-portland-political-stage-props-editorials-debates/5497383002/`,
          title: `Donald Trump using federal agents as political stage props is anything but 'law and order'`,
          image: `https://www.gannett-cdn.com/presto/2020/07/28/USAT/bf560801-ffe3-4820-979c-8b85b2ca5320-XXX_XXX_TH__portland_protests_2020_535.JPG?width=1320&height=836&fit=crop&format=pjpg&auto=webp`,
          blurb: `But perhaps none of these is as corrosive to democracy and contemptuous of conservative principles as his deployment of Department of Homeland Security police personnel to select cities to serve as stage props for his "law and order" campaign`,
        },
        {
          link: `https://theintercept.com/2020/06/04/trump-protest-bible-photo-op/`,
          title: `Donald Trump Is an Autocrat. It’s Up to All of Us to Stop Him`,
          image: `https://theintercept.imgix.net/wp-uploads/sites/1/2020/06/edit_GettyImages-12129496421.jpg?auto=compress%2Cformat&q=90&w=1000&h=635`,
          blurb: `Each incremental step toward dictatorship can be explained away. While it is happening, no one can quite believe that they are on the road to serfdom`,
        },
        {
          link: `https://www.independent.co.uk/news/world/americas/trump-fascist-critics-twitter-police-protest-crackdown-national-guard-a9568236.html`,
          title: `Trump now undeniably a ‘fascist’ after George Floyd response, say longtime sceptics`,
          image: `https://media.salon.com/2020/05/donald-trump-0520201.jpg`,
          blurb: `The word fascism is so loaded that even some of the president’s most vociferous detractors had long been reluctant to use it`,
        },
      ],
    },
  ],
  index: -1, // So that very first click increments index to 0
  displayContent: {},
});

// Helper function to randomize order of items in array.
const shuffle = (ar) => {
  for (let i = ar.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ar[i], ar[j]] = [ar[j], ar[i]];
  }
  // Modifies array in place, so  no need for a return
}

export const mutations = {
  incrementTruth(state) {
    const maxIndex = state.truths.length - 1;
    state.index = state.index >= maxIndex ? 0 : state.index + 1;
  },
  setTruth(state) {
    // Make a copy of the active truth, so we can do some modifications without losing the original data
    const displayContent = JSON.parse(JSON.stringify(state.truths[state.index]));
    // Shuffle the order of the articles
    shuffle(displayContent.cards);
    // If there are more than 9 articles, cut some off!
    if (displayContent.cards.length > 9) {
      displayContent.cards = displayContent.cards.slice(0,9);
    }
    // Set the new truth to display using the indicated index in state
    state.displayContent = displayContent;
  },
  shuffleTruths(state) {
    // Randomly reorder truths and put them in state
    shuffle(state.truths);
  },
}

export const actions = {
  // Fires on button click to load new content
  getNextTruth(context) {
    // Move to the next index, or back to the beginning
    context.commit('incrementTruth');
    // If we're (back) at the beginning, shuffle!
    if (context.state.index === 0) {
      context.commit('shuffleTruths');
    }
    // Set the display content per the new index in state
    context.commit('setTruth');
  },
}
