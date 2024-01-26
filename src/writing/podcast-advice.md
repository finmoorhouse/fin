---
title: Advice for Starting a Podcast
permalink: /writing/podcast-advice/
tags: [writing]
date: 2022-11-05
updated: 2023-12-01
featuredImage: './podcast-advice-share-image.png'
---
People sometimes ask me for advice about starting their own podcast.

In this page, I discuss the process behind [the podcast I co-host](https://hearthisidea.com/). I'll give some general advice, offer some technical details, and talk about a few of our mistakes.

This is a living guide — I sometimes update it.

## Our process, in brief

In total, I estimate that an average episode currently takes about 20 combined hours to make, including editing, from prep to publishing. Here’s how that breaks down for us.

### Arranging the interview

We begin with a spreadsheet of potential guests, about 200 names long. Every few months, we'll check which names from the list we should send invites to. The criteria we use aren’t especially well-defined. In rough order of importance, they're something like: are we excited about speaking to this person? Has this person (recently) appeared on a similar podcast (in our case [80,000 Hours](https://80000hours.org/podcast/))? Are we going to cross paths soon, so we could do an in-person interview? And does their work fit with a ‘mini-series’ that we're planning?

Then we send an invitation email. Emails are roughly structured like this:

- Introducing ourselves and the podcast
- A sentence or two showing that we've engaged with (and appreciate) the person's work
- The main ask
- Some specific example topics
- More details about the podcast (likely duration, audience demographics, prep required)

If the person gets back with a yes, we’ll arrange a date and begin preparing questions. We’ll send the guest a calendar invite, with a link to the video call if the interview is remote. See the "technical details" section for some ideas about automating this process.

For each guest, one of us typically takes a lead on questions and editing. That person will spend roughly an hour or two reading more of the guest’s work, and drafting questions in a google doc. The other person will check over the questions and add any of their own.

So, by the time we have an interview arranged and questions prepared, we’ve spent about **2–3 hours**. Unless we need to engage with the guest's work for the first time, in which case it's ≈ however many hours it takes you to read a book or two.

### Conducting the interview

Just about the majority of our interviews are remote. 20 minutes before the interview, we’ll find a room and set up our mics and laptops.

We use [Zencastr](https://www.zencastr.com/), a video call platform which captures the guest’s audio locally (so it doesn’t get compressed before it’s recorded). When the guest arrives on the call, we’ll give a brief (2-3 minute) overview of what to expect. This means saying:

- Who is a likely typical listener of this interview
- That we edit these interviews, so feel free to repeat answers and take your time to think. Just make sure you leave a small pause so it’s easier to slice up in the edit
- That you are welcome to listen back to the whole thing before we publish and suggest things to cut
- That we expect to take X minutes (and checking the guest is on the same page with that)

Then we hit record and begin the interview.

We almost always skip questions we'd planned, and go on tangents we hadn't. We also move the question order around, if what the guest is saying naturally leads on to a question that we had planned to talk about later on.

At the end of the interview, we’ll thank the guest, and remind them that we can send them the recording (and an [automated](https://otter.ai/home) transcript) as a courtesy in case they want to listen through and suggest changes or omissions.

Pointing out in advance of the interview that retakes are ok, and that the guest has control over what ultimately to cut, makes for a far more relaxed and exploratory vibe. But be careful the guest doesn’t constantly use retakes, as a crutch. This will again begin to sound less spontaneous and natural.

From beginning to set up, to being packed and finished, an interview will take us about **3 hours** on average.

I've written some tips for conducting good interviews in the 'general advice' section.

### Post-production

We work with a part-time editor ([Jason Cotrebil](https://www.jasoncotrebil.com/en), who is a legend). After we finish recording, we'll upload the audio and notify him. Our editor completes a first pass, which includes removing obvious mistakes and gaps, but leaves open tricky editorial decisions (e.g. do we cut this question?).

At the same time, one of us will record and intro (introducing the guest and topic) and outro for the episode. This often requires multiple takes — it’s surprising how tricky it is to sound natural when what you’re doing is so contrived!

Then, we listen through the first pass and leave any editorial comments for our editor (e.g. cut this question). Our editor will add the intro and outro, music, and audio post-processing — like normalisation, EQ, and compression.

Our editor will also note when we ask questions which set a new topic, and we'll suggest names for chapters. He will then add them as chapter markers into the final audio. We might then send the 'ready to release' audio to the other person to do a final 'sanity check' listen through (at double speed).

If you're editing our particular parts of speech, I'd say the edit takes about 2–4 times the length of the interview itself. If you're just throwing on an intro and doing some post-processing, it could just take a fixed time of half an hour or so.

Here's what I wrote in the previous version of this post, when we were still editing episodes ourselves:

> We currently use [Reaper](https://www.reaper.fm/) for our editing, and in the past we’ve used [Audition](https://www.adobe.com/uk/products/audition.html) and [Audacity](https://www.audacityteam.org/). An easy edit — where the interview flowed smoothly — will mostly just involve removing incidental chatter, especially long pauses, coughs, stutters, etc. Sometimes, interviews get tangled: we’ll ask a question about an earlier section or the guest will remember a point they meant to make. This requires some rearrangement, which can be quite tricky. We also cut entire questions or sections we felt didn’t go as well as the rest of the interview, or which seemed to just repeat previous answers (almost always our fault for asking the wrong question). On average, we probably cut about 25% of an interview for this reason. In addition to editing the episode, we also apply post-production: EQ and compression in particular. When everything’s finished, we render to a mono mp3 file, normally in 96kbps. We sometimes add chapter markers, when we think they’re likely to come in useful.

More details about editing in the 'technical details' section.

### Write-up

Once the edit is done, we’ll put together the write-up. Initially, our write-ups were very long essays, effectively, about the guest. Nowadays they’re simpler: a collection of useful links, images, and resources mentioned in the interview; plus a transcript. We made the change because fewer people read the entire write-up compared to listened to the episode, the bespoke write-ups took so much time, and I think ≥ 75% of the value of a long write-up can be condensed to a shorter list of links and quotes, plus a transcript.

To make the transcript, we'll make a first pass using software. This gives text that is passable and something like 80% correct, but also very obviously the product of a machine (especially where context-dependent proper nouns or technical language is concerned). We then pass this to a contractor, who will go through the machine-generated first pass to clear up mistakes, add links, and add headers (based on the chapter markers of the episode). This costs us roughly £1.30 per minute, or roughly £80 per hour of audio.

At the same time, we send the audio file (and [automated transcript](https://otter.ai/home)) to the guest, to check if they want to listen or read through and suggest changes. Normally, they’ll be happy for it to be published without checking. When the guest indicates they’re happy, we’ll upload the episode to our podcast host.

### Sharing

When the write-up is finished, we’ll upload it to the website. We include an image in the page that Twitter and other websites use as the preview image when the link gets shared, which includes our logo and the guest’s name. For example:

{% image "https://images.finmoorhouse.com/writing/podcast-advice/share-image.png", "Share image" %}

Luca and I will then draft and send a Twitter post. We used to post to Facebook, but Twitter does far better. We'll also email the guest to say thank you.

### Summary

Let's summarise how the process breaks down:

- Episodes currently take about **5–7** hours per host per episode (**10–14** combined hours because there's two of us)
- An additional **~4–8** hours of editing; so **14–24** combined hours including editing
- An additional **~6–12** hours for transcripts, so **20–32** combined hours if you include transcripts *and* editing!

## General advice

In this section, I’ll try to give some generally applicable advice about each step of this process.

### Why start a podcast?

Why should your podcast exist? What sets it apart? Will it actually be worth your time, in expectation? Answer these questions first!

Once you're set on doing a podcast, I'd suggest spending time thinking about what it is actually about, and planning out its [theory of change](https://en.wikipedia.org/wiki/Theory_of_change) if you care about having an impact. I think getting this right is more important than the details about producing a podcast which make up most of this post.

You'll need a rough **theory of change** if you care about having some kind of impact with your podcast (i.e. you're not *just* doing it for fun or personal gain). A theory of change is just a model of how your project — in this case a podcast — is going to bring about outcomes you care about. Two simple models I'd suggest are (i) **advocacy**, and (ii) **information**. 

**Advocacy** means sharing ideas that you think matter to many people, with a view to those people acting on the ideas. It does not need to look like marketing or advertising. If you think the ideas you're talking about do matter, then presumably they are intrinsically compelling, and you just need to think about how to let that fact shine through. Often this involves just getting very nerdy about whatever you're talking about. Indeed, most of the time it makes sense to find a very specific niche, rather than trying to be maximally accessible. Kevin Kelly's essay ['1,000 True Fans'](https://kk.org/thetechnium/1000-true-fans/) expresses this point better than I could.

**Information** means creating a resource that is useful for some people. This could be a podcast aimed at a specialist audience not aimed at convincing the audience of something, but at efficiently sharing useful ideas with them. One example could be [AXRP - the AI X-risk Research Podcast](https://axrp.net/), hosted by Daniel Filan. Filan interviews researchers who work on reducing existential risk from advanced artificial intelligence. The interviews are typically quite technical, and therefore aimed mostly at an audience that is already invested in this kind of research. A major value of the podcast is to help these people quickly get up to speed with what work is being done in this fast-moving field, and so (hopefully) improve their own work.

Another example of a primarily information-focused podcast could be a potted series on a particular topic, aimed at being a go-to introduction for that topic. One example could be the various series from Dan Carlin's [Hardcore History podcast](https://www.dancarlin.com/hardcore-history-series/). One advantage of making a potted introductory series is that it involves less repetitional commitment. If you start an open-ended podcast on a topic, but stop after 5 episodes, that might feel awkward. And certainly you'd be missing out on the returns from and efficiencies of scale once you start making dozens of episodes. But if you set out to make (say) a 6-part series on (say) the EU regulatory environment around AI, then by the end of the series you've created a resource that stands on its own. You can choose to make more series if it went really well, but there would be nothing wrong with calling it quits there.

Unless you're doing it very casually, making a podcast can take a surprising amount of time. Very often is will not be worth your time. To this end it is worth considering why podcasts *do* sometimes make sense over something like writing blog posts. I can think of a few answers:

- Podcasts provide an easier and/or more efficient way to consume the same information, compared to the written word. Easier because the conversational tone requires less focused attention to digest (compared to e.g. audiobooks), and more efficient because you can do other things while listening to a podcast, like cleaning your house or whatever.
- Podcasts give busy people doing important work a more efficient means to broadcast information about what they're working on. Suppose someone has just completed a big research report on (say) an important technology for preventing pandemics. It might be the case that a more accessible, summarised version of the report would be highly valuable, but that this person just doesn't have time to write it. Podcasts can help here. In general, conveying the same ideas verbally takes a fraction of the time it takes to write them down neatly. I did [a Twitter thread about this](https://twitter.com/finmoorhouse/status/1518194838717538307).

Another point about finding your 'niche': you can do this by zooming into a particular *topic*, or a particular *audience*. Don't underrate specialisation by audience. In particular, I think audiences that don't speak English as a first language are underserved, and could be a good focus especially if you're making an impact-driven podcast.

In terms of audience size, a default trajectory for a podcast that releases fortnightly might look like getting ~500 listens per episode in the first week of release for the first 6 months to a year of releasing episodes, increasing to ~1000 after the first year and ~2000 after a year and a half or so. Of course, the error bars are very wide on these numbers. And by 'default' I mean 'not spending much time or thought on marketing'.

The rest of this post assumes you've figured out whether it actually makes sense to do a podcast, and what it should be about.

### Arranging interviews

[Here’s an example email](https://docs.google.com/document/d/1O93_MDVsfDX4HO_j9d3kZFAFN7jslYqWBIJ0XY3NtmQ/edit?usp=sharing), which Luca sent to Gillian Hadfield.

Here are some things we look out for when drafting emails, especially when approaching guests with a high bar for accepting invites:

- I think the best way to differentiate yourself from most journalists/podcasters etc is to demonstrate that you’ve actually read or engaged with the invitee's work. Therefore, read the guest’s work if you haven’t already. In expectation I think this is worth it, because (i) I really do think it makes an appreciable difference to the likelihood the potential guest will say yes; and (ii) if you're not excited to spend ≥ an hour reading this person's work, that might be a weak indication that the interview might not be worthwhile (for either party, and the audience) in the first place.
- Don’t unnecessarily fawn or kowtow to the guest unless it’s genuine. This doesn’t increase the chance they’ll say yes, and probably only serves to signal that you don’t expect the guest to say yes on the merits of the interview itself. If you are a genuine mega-fan, be specific about why, as above.
- Don’t over-elaborate. You can send details if the person responds.

One thing we learned is that prospective guests are surprisingly likely to say yes, even when you’re a small podcast. Especially people who are a ''big deal' in some way, but not a way which means they often do interviews. This is also especially the case with academics who don’t often write or speak for a general audience: it’s easy to overlook how few opportunities some people get to explain the work they’re passionate about, and it can be flattering to invite them to do so.

If you're starting a podcast, one nice feature of the medium (for you) Is that t’s hard to gauge the listenership of a podcast, and it's a bit uncomfortable to ask directly. Therefore, if you have (i) a decent (10+) archive of episodes with cool people, and (ii) a professional-looking online presence (i.e. a thoughtfully designed website), and (iii) 10 listeners per episode, you’re going to be hard to tell apart from a podcast with 10,000 listeners per episode. The challenge is finding those 10 cool people — but surely you have at least 10 cool friends who would be happy to be a guinea pig for your podcast!

If you’re doing your podcast to precipitate some kind of change — i.e. you care about people acting on some of the ideas you share — then note that the composition of your audience is crucially important for the expected impact of your show. Think in terms of orders of magnitude rather than precise numbers: suppose you care about informing people’s choice of career. Then one motivated and interest-aligned recent graduate might be worth 1,000 ‘general audience’ listeners in terms of expected impact (I think). Who’s in your audience can therefore be a factor for whether an EA-inclined guest says yes to being on your show. You can learn about who listens to your show using the built-in analytics for your podcast host, by seeing who follows you on social media, and by running surveys.

If you ask **politely and succinctly**, you might as well sometimes be really optimistic with who you choose to email. The costs are the time costs of getting familiar with the guest’s work in order to write a well-informed email, and the time costs on the guest's part of reading the email. However, read on —

Especially if you are just starting out, and you're emailing high-profile guests, a major reason a guest will turn down an invitation is just because they don't think going on your podcast is the best use of their time (in expectation). As the person sending an invitation, I think it's basically never reasonable to feel spurned or offended if the guest (implicitly) declines for this reason. A person's time is their own and you don't have a claim to it just because you do a podcast! If someone declines an invitation for roughly these reasons, they're obviously going to say something indirect, e.g. something vague about having a busy schedule. If you get this in reply, I'd strongly recommend against trying to persuade the person to change their mind, or asking again in the space of a month or two, unless the potential guests explicitly suggests that you do so.

Not replying is another polite way to reject a request for an interview. We tend to send one follow-up if you hear nothing back after a fortnight or so, and no more. The follow-up should just briefly ask whether the guest saw the previous email — you don’t need to restate or reinforce the case for appearing on your show. More controversially: *don’t* ‘split the difference’ and say something to the effect that you’d be happy to do half an hour if 90 minutes is too long (etc.). If that really is a deciding factor, the guest will probably ask.

### Conducting interviews

[Here’s a link](https://docs.google.com/document/d/1Mu5Y_3k642p1AASAPVkp_JjI3tD8ZovQx49C9g3bKsc/edit?usp=sharing) to an example question sheet (the one we wrote for Gillian Hadfield). When we did the interview, we crossed off questions we’d asked, and left comments on the doc about what to skip, what we’re especially keen to ask, etc. The blue bullets are notes for our own use — we delete them from the copy we send to the guest.

When we’re doing remote interviews, we use a ‘finger system’ to delegate questions. If I raise a finger, it means I’d like to make a point about what the guest is currently saying. If I raise a hand, it means I’m keen to ask the next question. The other person can respond with a finger or hand of his own to ‘override’ my request, if he thinks he has something better or more urgent to say.

Listening back to recordings of your voice is not comfortable. Excepting experienced speakers, you will probably notice that your speech is filled with tics, filler or crutch words, stutters, ‘um’s, and other disfluencies — more than you expected. One strategy is simply to **slow down**. Deliberately drawing out your sentences mitigates against filling space with ‘like’s and ‘um’s while you work to turn your next thought into words. [Embrace pauses](https://hbr.org/2018/08/how-to-stop-saying-um-ah-and-you-know), too. You can easily cut these out in post, but often they’re actually best kept in. Another strategy is replacement: I know someone who used to say ‘like’ very often. For a few weeks, he made a protracted effort at turning his ‘like’s into ‘now’s. Now he sounds like he knows where he’s heading, even when he’s stumbling over words.

On the other hand, you don't need to try entirely eliminating filler words. The main reason is that fully eliminating filler words is really effortful and that effort would distract from the content of what you’re saying. Filler words are not randomly distributed in speech: 60%–70% of the pauses fall at the break between clauses, and that actually gives clues about syntactic structure. [Brennan & Schober (2001)](https://psycnet.apa.org/record/2001-00042-007) demonstrated that listeners can exploit this informational value of disfluencies to comprehend speech with disfluencies *faster* and more accurately than speech without them. Filler words can be used to [signal politeness](https://www.independent.co.uk/life-style/um-filler-words-discourse-markers-why-use-er-you-know-a7665721.html), and some amount of disfluency [aids recall](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3134332/).

You should also gesture with your hands if you do so in normal conversation. [Rauscher et al. (1996)](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.211.7479&rep=rep1&type=pdf) found an increase in disfluencies when gesturing was prevented. As well as that, [Rob Wiblin points out](https://docs.google.com/document/d/1GKu_eHf7xr-iHqpI29l7dfekiuBLlCG7v240dQiBnS0/edit?usp=sharing) that exaggerated gestures and facial expressions can make you sound more animated.

Speech and writing [are different](https://www.mtholyoke.edu/acad/intrel/speech/differences.htm): verbal conversation involves short, often incomplete sentences. Reading aloud a well-constructed passage of nonfiction writing will sound turgid and unnatural. This might be why some people find it harder to engage with audiobooks compared to podcasts. The upshot is that you should almost **never write out a question (or monologue) and read it verbatim**. It just won’t sound right.

Since we started podcasting, we've been gradually trying to move from writing out specific questions, to writing out *themes*. This feels like taking the stabilisers of your bike — you need to reply on your own momentum, but it's much less constrained when it works.

If a guest of ours wants to prepare for the interview, we invite them on our questions (in a Google doc), and suggest that they write out bullet points for things to remember to talk about. That's worked well for us.

You should also avoid what I’ll call ‘sandwich questions’. These are where the core of the question is flanked by useless speech, there to fill space or sound verbose for the sake of it. Consider:

> Mm, yeah. That’s really interesting. I like that framing. I guess one other thing you might be interested in is whether there are examples from recent history which could be useful to build on here. So I was wondering, **what precedents do we have for regulatory markets?** Maybe an example could be EU’s “right to be forgotten”, or medical device standards. But I’d be really curious to hear if there are any that stand out for you.

Without loss of meaning, this can become:

> What precedents do we have for regulatory markets?

A major crime here is partly answering your question yourself straight after you ask them. It’s very natural to guess at the answer to a question immediately after you ask it. This relegates the interviewee to the role of agreeing with you rather than explaining something new to you. Don’t feel a pressure to show you know the answers in advance: asking the right kind of questions is just as good an indication that you know your stuff.

The heavyweight champion of concise, meaning-dense interviewing is [Tyler Cowen](https://conversationswithtyler.com/).

If you’ve prepared the direction of a conversation with the interviewee in advance, you could even get away with questions as brief as “what about X”? Spencer Greenberg does this well on his [Clearer Thinking podcast](https://www.clearerthinking.org/podcast).

Sometimes, you might want to hear the guest talk about something but a pointed question would either sound unnatural or would yield a too-specific answer. Here, there are ways to (politely) just open-endedly tell your guest to speak about something: you can use imperatives as well as questions. Tim Ferriss does a good job at these “say something about X” half-questions [on his podcast](https://tim.blog/podcast/).

Finally, remember that normal conversations contain fewer literal questions than interviews. Often, one person just says something, and then the other person says something that relates to it. To sound more conversational, then, experiment with lifting the contrivance of only asking questions.

Here are my favourite tips from [Tyler Cowen’s advice](https://marginalrevolution.com/marginalrevolution/2021/06/how-do-you-ask-good-questions.html) for asking good questions:

- Highly specific questions are better on average.
- It is often better to preface a question with a confession of some sort, or with information from yourself. That sets a standard for the respondent. Set that standard high!
- With any possible question, ask yourself in advance: can the person being asked the question respond too easily in a vague and not very useful way? “Why did you write a book about Napoleon? Well, let me tell you, French history always fascinated me.” etc. If that is the kind of slop you might get back in response, try making the question more pointed or more specific.

Rob Wiblin (of the 80K podcast) has written some [excellent interview advice](https://docs.google.com/document/d/1GKu_eHf7xr-iHqpI29l7dfekiuBLlCG7v240dQiBnS0/edit?usp=sharing) also. Here are my favourite tips:

- Explain in the first minute why anyone would care about this interview.
- It's OK for the guest to know the questions ahead of time, but they shouldn't script answers. Guests can refer to notes from time to time, but definitely not all the time.
- [It] is important to be willing to pushback on specific arguments. It’s easy to feel obliged to politely nod your head to things you completely disagree with, but the episode will be far richer if you can get past that awkwardness. Sincere and informed disagreement is among the most engaging things to listen to.
- A common mistake is to put down lots of questions you'd love to know the answer to, but which they don't have a practical chance of knowing the answer to (e.g. maybe nobody knows the answer). This leaves them no really good options (i.e. refuse to answer, or answer a different question, or pretend to know the answer).
- If you’re worried that the episode will resemble a talk they’ve given a million times, consider reaching out to people who have hosted that talk, and asking for permission to use the audio. If you put a 10-15 minute talk at the start of your episode, you can dive straight into the new questions/topics that you want to cover.
- Listeners love [...] specific data / numbers.

Here's a list of advice I wrote for podcast guests, on the theme of "what seems to make for especially great interviews":

- **Being relaxed and conversational.** If this is your  first time doing a podcast interview, it’s not always easy to sound  perfectly natural. That’s totally fine — one easy fix is just to chat  for 10–20 minutes before the recording to get into the zone. We’re happy to do this. Remember it’s a conversation, rather than a performance.

- **Being technical and detailed where necessary.** Most of our audience have some kind of academic or technical  background, and they’ve signed up to listen to a fairly wonkish podcast, where we get into the weeds more than some big name podcasts. Do feel  free to really take your time to explain a complicated or nuanced idea.  Do also please introduce especially arcane jargon before you use it!

- **Having food and drink nearby.** Without some kind of drink, it gets a bit harder to speak clearly.  Herbal tea with honey is especially good. Food also matters for energy  reasons. Bananas and other energy-dense foods are great. Avoid acidic  foods like apples.

- **Using notes as reminders, not scripts.** It's usually *not* a good idea to memorize what you want to say, but if you do want to  spend some time preparing, it is often useful to have a few bullet  points of the things you want to try to remember to say about each topic (in front of you during the taping). The best way to use notes is to  glance at them to remember key points to cover, *not* to read off them directly.

- **Veering off on fun tangents.** Some of the best moments in previous episodes have come from guests 

- **Concrete examples.** Especially when explaining abstract or technical ideas, give multiple examples. Especially numbers and stories with named people. I can't think of a particular interview where this is done exceptionally well, so you'll have to guess why this is useful.

[This post](https://stanpinsent.wordpress.com/2022/12/05/how-to-be-a-more-effective-podcast-guest/) gives even more advice on how to do a great podcast interview as a guest.

### Building a website and social media presence

A solid online presence is very useful, maybe necessary, for getting traction early on (without relying on luck). You might aim to be meaningfully active on social media, spin up an attractive website, design a simple and recognisable logo, and put enough relevant text and info on your website to feed the SEO spirit animals. Getting the basics right doesn’t need to take a lot of time or demand technical know-how.

Pick a name that is short and memorable. If you’re unsure, call it ‘The [Your (Organisation) Name] Podcast’. Buy a domain that is the shortest version of that name. Ideally the name itself, but maybe something like [name-podcast.com] if [name.com] isn’t available. You can use [Google domains](https://domains.google.com/registrar) or [Netlify](https://www.netlify.com/) for this.

Then get a website up and running. Something simple is not only easiest but positively desirable. Julia Galef’s podcast, [Rationally Speaking](http://rationallyspeakingpodcast.org), is one of the most popular (and best) shows in the ‘rationalism/effective altruism’ podcast world. The website isn’t trying to sell the show to you, it’s giving you just the right amount of information to know what to expect, and just the right amount of detail to [find an episode](http://rationallyspeakingpodcast.org/past-episodes/), subscribe to the show, or contact Julia.

Specifically, here’s a decent default structure for your site:

- Homepage
  - Title, logo, and tagline
  - A 1–2 paragraph description of what the show is about, and what the listener can expect
  - Links to find the show on major podcast platforms (Apple Podcasts, Spotify, Google Podcasts, etc.)
  - Social media links
- Episodes page
  - A list of episodes, generally ordered from newest to oldest
- Contact page
  - Either an email address or a form

I’ll say some technical things later, but there isn’t a clearly best or easiest way to set up a site like this. Drag-and-drop-style website builders are very good these days and likely more than enough for starting out.

I mentioned that our website has write-ups for each episode, but I don't think this is necessary. However, write-ups are good for [SEO](https://developers.google.com/search/docs/beginner/seo-starter-guide), because they add a lot of relevant text for search engines to read. 

You’ll want to take some time to design a logo. No paid software required — something like [Figma](https://www.figma.com/) should be fine. The key here is that you’re designing for a 2cm×2cm square: keep it simple and recognisable while squinting. Just text is fine.

The most useful social media account to have is Twitter. Pick up the shortest and most memorable username associated with your podcast name as soon as possible.

Primarily, you want to use social media as a vehicle for sharing episodes. But the lessons from Austin Kleon’s book [Show Your Work](https://austinkleon.com/show-your-work/) apply also: your social media accounts can be a place for sharing snippets from interviews that you in fact found the most curious or shareworthy, or even things you come across while preparing for an interview. Do also freely promote other podcasts and particular episodes which you enjoyed. This is a positive-sum game. I think this is something I'm still majorly falling behind on — it does seem like getting authentic followers on Twitter and beyond is a case of just sharing a consistent firehose of useful content. If you have the time or help, consider slicing finished episodes up into audio clips, and posting dozens of them.

You might also consider getting a YouTube channel up and running, and setting up a pipeline for painlessly uploading your interviews as videos. Most likely, this’ll mean making a template, with some of your podcast branding and maybe a guest photo, onto which you can drag and drop your interview audio. If you do plan this route, consider filming yourself — actual video is treated much more favourably by the YouTube algorithm than just audio plus text. I tried [uploading some of our audio](https://www.youtube.com/channel/UC4PUKlWKfBOojMBnb9P5thw), and it never really took off.

### Gathering feedback and growing

We are still slowly learning the importance of gathering and acting on feedback.

At minimum, you want to set up an obvious means by which people can give constructive feedback if and when they want to. So at least list an email address on your website. The option of anonymity makes critical feedback easier to solicit. [Google forms](https://www.google.co.uk/forms/about/) work fine, but I really love and recommend [Tally Forms](https://tally.so/dashboard).

In general, it’s hard to perfectly predict the demographics of the audience that you eventually get. And if your show ends up being useful or enjoyable for people, sometimes this is for reasons that you didn’t perfectly anticipate. Just because you didn’t invent those reasons doesn’t mean you shouldn’t lean into them once you learn about them through feedback.

You may find that what you’re doing should instead be a blog, or a YouTube channel, or something entirely different. A good book about iterating on feedback is Eric Ries’ [The Lean Startup](http://theleanstartup.com/). 

A note about the podcast landscape: it is far more saturated than [10, 5, even 3 years ago](https://www.statista.com/chart/10713/podcast-listeners-in-the-united-states/). Because of the relatively low barrier to entry, competition for listens is fierce. Subscribers by podcast follow a power-law distribution: about half of all listens are to the top 1% of most-listened-to podcasts, and very few listens (< 10%) are to podcasts which aren’t in the top 10%. However, as far as I can tell it's surprisingly easy to reach the top ~3% (even 1%) of all podcasts with a little effort. [This page](https://a16z.com/2019/05/23/podcast-ecosystem-investing-2019/) has some interesting details.

One more thing: don’t get into podcasting because you want to make [money](https://www.axios.com/podcast-business-booming-few-making-money-d560010b-538f-472f-bf9d-3ea8deb97488.html) from it. You won’t; at least not directly!

I don't think I have a lot to say about how to market and grow your podcast, although I think it is crucially important. One good strategy is to ask your friends to (authentically) shoutout your podcast, or specific episodes, on social media. People talking about a podcast episode is a stronger signal for me to listen to it than the creator sharing it.

You might also check out the ['creatorpreneur' series](https://www.youtube.com/watch?v=sV5eDJib4HE&list=PL7BImOT2srcFWw6kWhGCK9vMJVdJ0igoy) on Ali Abdaal's YouTube channel, which gives a ton of advice on growing any kind of creative project on the internet. I've also heard very good things about his [Part-Time Youtuber Academy](https://academy.aliabdaal.com/).

## Technical details

In this section, I'll give some more particular details, like what specific equipment and software I recommend.

### Organisation and invites

For arranging interviews, we now use [Savvycal](https://savvycal.com). Savvycal is a scheduling app, similar to Calendly. In my experience, it's much nicer — I recommend it over Calendly for personal use, because (i) it shows a calendar view which lets the scheduler overlay their own calendar; and (ii) the UX is really nice and well thought-out. For the purposes of podcasting, Savvycal lets us set up a link for scheduling a time to speak, which we can send to a guest. It has some nice features, like:

- The page is branded with our podcast logo
- The available times can work as an intersection of Luca's and my available times
- We can set up automations after the guest books a time, such as sending reminder emails with custom wording

Here's what the guest sees:

{% image "https://images.finmoorhouse.com/writing/podcast-advice/savvycal.png", "Savvycal" %}

Once the guest books a time, we all get invited on a Google Calendar event. This setup saves a bit of back-and-forth with coordinating on a time by email. In my experience, many potential podcast recordings fall through because a hundred minor inconveniences pile up for the guest and they just decide to pull out. It's nice to remove those inconveniences where possible.

We used to use [Notion](https://www.notion.so) for other organisational things. Here was our sidebar:

{% image "https://images.finmoorhouse.com/writing/podcast-advice/notion.png", "Notion sidebar" %}


For organisational stuff, we now mostly use Slack. We make a channel for each episode, plus a bunch of topics. We invite people we work with on the podcast (e.g. our editor) as single channel guests. We use a single Google Sheet for tracking guests: past guests, arranged guests, and ideas for future guests. We also use the task-tracking app [Todoist](https://todoist.com/) to track invites as well as one-off tasks, like improvements to the website and buying equipment.

Finally, consider writing up an all-purpose guide for guests which you can share in invitation emails. This could be on your website, or just in a google doc. The guide could give context on your show, and basically just preempt a bunch of potential questions the guest might have. Here's a screenshot of the first half or so of ours:

{% image "https://images.finmoorhouse.com/writing/podcast-advice/guest-guide.png", "Guest guide" %}

### Audio tips — environment

Thanks to [Jason Cotrebil](https://www.jasoncotrebil.com/en) for many of the following points about getting good sound.

When it comes to getting good sound, your **environment** matters most; then **mic technique**, then **hardware**.

If you are recording video and audio, good sound + mediocre image will be nicer to watch than bad sound + good image. Get the sound right first.

For obvious reasons, try to find a quiet room to record in. It's often close to impossible to remove background noise, especially when it's complex (like other people talking). Unchanging hums (like from air conditioning, fans, or electronics) can sometimes be removed more easily, but should still be avoided. Sometimes these monotonous sounds don't automatically register — take a moment to check the room is as quiet as possible, and you're not ignoring such a sound.

There's a Goldilocks principle for picking the right size of room. Small rooms tend to reverberate sounds back-and-forth and sound claustrophobic, whereas very large rooms with flat surfaces can sound cavernous.

Go for rooms with few hard surfaces (like windows and whiteboards) and many soft and ∴ sound-absorbent surfaces (like curtains). Even hanging a couple blankets on the walls will help absorb some unwanted reverb. Similarly, look for irregular surfaces over flat ones. Bookshelves, beanbags, random furniture, all work well.

Rooms tend to have 'sweet spots' with minimal reverberations. This is for arcane reasons to do with the way sound reflects. These sweet spots are typically found away from walls, but also away from the very centre of a room. The trick here is just to experiment by speaking out loud at different locations, and listening for how your voice sounds.

[This post explains](https://castos.com/acoustic-treatment-for-podcasting/) ‘acoustic treatment’ — modifying your space to sound better.

### Audio tips — mic technique

**Mic placement:** this will vary slightly by which mic you use, but in general you want your mouth to be close to the mic — about 6 inches (15cm) or one hand’s width away. That way your voice is isolated: the volume of your voice is much louder than anything in the background. [Here is a useful guide](https://www.buzzsprout.com/blog/mic-technique-podcasting) to mic technique. And [here is a video](https://www.youtube.com/watch?v=XsBgTPfTw3I&t=67s) about adjusting your mic's gain. When you're setting up your mic for the first time, experiment by recording 20–30 seconds of talking, listening back, and making adjustments.

Try to keep the mic in front of your mouth (and to brief your interviewees to do the same). You want to avoid the very natural mistake of turning to face someone, and accidentally speaking off-mic.

The ['proximity effect'](https://en.wikipedia.org/wiki/Proximity_effect_(audio)) means that the closer your mouth is to the microphone, the more bass is picked up, and the more you sound like a late-night DJ. I don't think there's a correct amount of bass, just be aware of the effect and experiment with what sounds best.

In general, wear headphones. The main advantage is that you can monitor your own voice on the fly, and make positional adjustments. This is especially useful if you’re conducting remote interviews, since you want to be able to isolate the guest’s audio from your own when editing. For this reason, ask the guest to wear headphones if possible also.

Other things to consider:

You obviously don’t want to be sleepy when you’re interviewing someone, so don’t eat a large meal immediately beforehand. It helps to rest your voice also — a handy and valid excuse for escaping small talk!

Sugary snacks, before or during, will make sure you’re energised but not full. Apparently [acidic](https://www.voiceoverxtra.com/article.htm?id=hs8jgh22) foods should be avoided because they dry up your mouth (so no green apples etc). This helps cut down on vocal 'smacks'. Dairy should also be avoided because it builds up phlegm. Bananas are good. Bring water obviously, and something caffeinated if you need. But drinking too much coffee is bad — you’ll get frantic and more likely to ramble and speak too fast. If you need coffee, consider also taking [l-theanine](https://www.amazon.co.uk/s?k=l-theanine) to get rid of some of the jitters. Tea is better — apparently opera singers drink (e.g. lemon and ginger) tea with honey nonstop for this reason. Interestingly, as far as I can tell honey is often a major [active ingredient](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7807510/) in cough remedies, because it has some kind of anti-inflammatory effect. 

Bring a notebook and a pen. You can use this to jot down points you want to pick up on later, or to draft the structure of your next question while the guest is speaking. Pen and paper is quieter and less obtrusive than a keyboard. It is also less rude if you are conducting an interview in-person.

### Audio tips — hardware

There are roughly three kinds of mic you can buy: **condenser** (or 'electrostatic') mics, **dynamic** mics, and **headset** or 'lav' mics.

- Headset mics are what you find in headphones with built-in mics. They're probably better than your laptop's built-in mic, but they're rarely very good, and more vulnerable to noise from rubbing on clothes. To be avoided where possible.
- Condenser mics are the most sensitive. This can make for extremely detailed sound, but it also means that they tend to pick up background noise and other imperfections more easily. They're also often quite fragile. [Here's an example](https://us.amazon.com/Audio-Technica-AT2020USB-Cardioid-Condenser-Microphone/dp/B00B5ZX9FM/).
- Dynamic mics are less sensitive but much more forgiving — they isolate your voice better than condenser mics. They also tend to naturally generate a deeper, radio-style tone.

Here was our setup for the [episode with Dewi Erwan](https://www.hearthisidea.com/episodes/erwan). (Note the (blue) whiteboard — not acoustically ideal.)

{% image "https://images.finmoorhouse.com/writing/podcast-advice/studio.jpg", "Studio" %}

We primarily use two {% note '[Shure MV7s](https://www.shure.com/en-GB/products/microphones/mv7)' %}Note that I mean the MV7, not the MV7X, which is a cheaper model without a USB output. The MV7X only has an XLR output, which you'll likely need special equipment for if you're starting out.{% endnote %}, which plug directly into a laptop via USB-C, and sound great. We also use a [Shure SM7B](https://www.shure.com/en-GB/products/microphones/sm7b), which is something of an industry standard among podcasters. It is indeed an exceptional mic, but it requires more faff to use, because the (analogue) signal needs to be processed through a pre-amplifier and an audio interface, and you need to buy those separately. We use a [Cloudlifter CL-1](https://www.amazon.co.uk/gp/product/B004MQSV04/) as a preamp, and the [Focusrite Scarlett](https://www.amazon.co.uk/Focusrite-Scarlett-Solo-Audio-Interface/dp/B07QR6Z1JBhttps://www.amazon.co.uk/Focusrite-Scarlett-Solo-Audio-Interface/dp/B07QR6Z1JB) as the audio interface. Both are dynamic mics. Previously Luca used a [Rode Procaster](http://www.rode.com/microphones/procaster), which also required a preamp and audio interface and costs around £140.

Approximate prices for the setup pictured above:

- Shure MV7 mics: 2 x £200 = £400
- Shure SM7B mic: £360
- Cloudlifter preamp: £140
- Scarlett audio interface: £140
- USB and XLR cables: £30
- Podcast boom arms: 2 x £100 = £200
- Total: **£1270**

This is pricey, of course, but I'm mostly writing it up in the interests of transparency rather than as a recommendation. Like other kinds of tech, you get diminishing returns with extra spending on audio equipment. If you’re starting out and want to spend less than this, you might consider a cheaper, direct-to-USB mic:

- [Blue Yeti](https://www.bluemic.com/products/yeti/) (£110)
- [Audio-Technica AT2020USB+](https://www.amazon.co.uk/dp/B00B5ZX9FM/) (£124)
- [Rode NT-USB](https://www.amazon.co.uk/dp/B00KQPGRRE) (£140)
- [Rode Podcaster](http://www.rode.com/microphones/podcaster) (£180)
- [Blue Yeti Nano](https://www.bluemic.com/products/yeti-nano/) (£100 ish) — the Yeti’s little brother
- [Blue Snowball](https://www.bluemic.com/en-gb/products/snowball/) (£50)

You might also find [this Reddit post](https://www.reddit.com/r/letsplay/comments/1brvu4/a_few_microphone_options_for_those_in_need_low/) useful.

If you don’t want to use a laptop in your interviews, you’ll need a dedicated sound recorder. A Zoom recorder fits the bill — best is probably the [Podtrak P4](https://zoomcorp.com/en/gb/podcast-recorders/podcast-recorders/podtrak-p4/), but the [H5](https://zoomcorp.com/en/gb/handheld-recorders/handheld-recorders/h5/) is good also. You can plug any XLR mic into this, including the SM7B and Procaster. We used to use the [Tascam DR-60DMKII](https://www.tascam.eu/en/dr-60dmkii), which worked great, but isn't centrally designed for podcasting.

If you also care about portability and price, consider going for the kind of ‘dynamic’ microphone that is used for stage performances. There’s a ‘go-to’ option here, which is the [Shure SM58](https://www.shure.com/en-GB/products/microphones/sm58). It sounds great, it’s £100, and by all accounts it’s practically unbreakable. Someone recently told us:

> *People joke about using them in lieu of hammers. When I did sound for a live show once, I saw someone drop a SM58 from a 50-foot high scaffolding, and it* ***literally\*** *wasn’t even scratched.*

In terms of something to hold the mics: we started with stands (like the photo above), and have since switched to boom arms which clamp to a desk. Unless you need to travel to an interview and you need to pack light, I recommend buying a boom arm. Two reasons: (i) stands pick up the noise of the desk being knocked, which is very easy to accidentally do; and (ii) you need to sit upright to speak directly into a mic on a small desk stand, whereas you can adjust position with a boom arm, which makes things more relaxed and/or natural. We use the [RØDE PSA1+](https://rode.com/en/accessories/stands-bars/psa1-plus), which is really solidly built and fancy-looking, but costs slightly more than £100. However I also recently bought [this boom arm on Amazon](https://www.amazon.co.uk/gp/product/B07JN2CJF9), and it's almost exactly as good, at £45. So that's my current recommendation.

You might also consider buying a pop filter for your mic(s), which helps eliminate plosives (**b**s and **p**s).

I’m fairly confident the [80,000 Hours podcast](https://80000hours.org/podcast/) currently uses the SM7B and at least to use SM58s.

A $100 setup with good mic technique will sound better than a $1,000 setup with bad technique.

If you can or must set the sample rate for your editing program, 44.1kHz is good.

If you’re recording with a laptop, make sure the input is actually set to the mic you have plugged in. This might not happen by default, and you could end up recording through your laptop's built-in mic accidentally!

### Recording

For remote interviews, we use [Zencastr](https://zencastr.com/). It lets you video call one or multiple guests, and then records their audio. Unlike if you were to just record your screen on a Zoom call or something, Zencastr records the guest’s audio *locally*, so it doesn’t get compressed as it’s streamed across the internet. We are very happy with the generous [free plan](https://zencastr.com/pricing) and that will likely be enough for you too. Other similar remote podcast tools are available: [Squadcast](https://squadcast.fm/) and [Riverside](https://riverside.fm/) stand out. I've good things about Riverside in particular, especially for video recording.

One note about Zencastr: after you finish a recording, the website will prompt your guest’s browser to begin uploading their audio to the Zencastr servers. This will take something like 2-10 seconds. If your guest closes their browser immediately after you finish the recording (e.g. if you only finish the recording after saying goodbye), the upload may get interrupted and you won't get their audio. This has led to a couple of very close calls, where the guest’s browser fails to finish uploading before they quit the tab. Luckily, this is recoverable. When this happened to us (twice…) we urgently contacted the guest and asked them to re-open the link they were on, and click a button to retry the upload. The solution is just to say your thank yous and goodbyes after finishing the recording (this doesn’t hang up the call), or at least ask the guest to keep the tab open for 30 seconds after saying goodbye. You have been warned!

### Editing

In some cases, editing may be extremely minimal or unnecessary. For instance, some podcasts are just a case of screen recording a meeting and posting it to YouTube ([example 1](https://www.youtube.com/playlist?list=PLAA8NhPG-VO_PnBm3EkxGYObLIMs4r2wZ), [example 2](https://www.youtube.com/watch?v=GANvcj019S0&list=PLvIJf3Q2FZDwsG8pfysYkErpHbxgzjMpI)). This is great and perhaps underrated as an option.

However, most podcast are edited to some meaningful degree, for instance to remove pauses, mistakes, and boring segments; or to add intros and outros and music.

The headline piece of advice here is: if you can afford it, find an editor. Unless you think you'll enjoy editing audio, this will save you hours per episode and maybe make the difference to whether producing a high-quality podcast is feasible at all, if you're busy. We (Luca and I) put out a hiring call on social media and the [80k job board](https://jobs.80000hours.org/). It took us ≈6 hours to find our [current editor](https://audiolift.co/), and this was time very well spent. You could also look on sites like [Upwork](https://www.upwork.com). I find that much of the value we get from our editor comes from being able to accumulate shared context over months, so place a premium on editors who seem open to working together over many episodes.

But of course you can also edit your episodes yourself. When we did our own editing, we used a program called [Reaper](https://www.reaper.fm/). It’s extraordinarily fully-featured and [not too expensive](https://www.reaper.fm/purchase.php). They also have a generous and indefinitely extendable free trial. If you are editing your episodes yourself, and you want to do it properly, you should spend some time (about an hour) setting up various plugins and keyboard shortcuts. It’s a faff, but it’ll probably speed up your workflow by something like 25%. We both used [this excellent guide](https://podigy.co/the-complete-guide-to-podcast-editing/). If you don’t want to work through all of it, just focus on the section explaining how to set up keyboard shortcuts. Here’s a [400-page ‘up and running’ guide](https://dlz.reaper.fm/userguide/ReaperUserGuide622c.pdf) to Reaper if you need some bedtime reading. [Hindenburg](https://hindenburg.com/) also comes recommended, and could be better than Reaper for all I know. It's designed with the spoken word in mind. I recommend *against* Adobe Audition, for what it's worth.

If you want something really quick and intuitive, but with less fine control, you should also consider using [Descript](https://www.descript.com/). I talk about it in the 'transcripts' section. In general, I expect more AI tools for editing audio to arrive soon, so editing will become easier in general. Maybe some already exist, I haven't looked hard.

Some software-agnostic editing advice: first, [normalise](https://en.wikipedia.org/wiki/Audio_normalization) your tracks before you begin to cut them up. This means boosting the volume by a fixed amount. The peak gain for each speaker should be roughly the same; around -1dB (decibels are measured on a log scale so can be negative). Cut the speaker who isn’t speaking, so any shuffling or background noise doesn’t intrude. At some point, you might want to add (i) a compressor and (ii) an equaliser. Compression is volume control that’s dynamic over time; damping the loud sounds and boosting the quiet sounds (e.g. when the guest moves away from the mic). This makes the whole thing sound more level and ‘listenable’. Equalisers can boost or dampen specific frequency bands. This can be useful for masking annoying background noises or room resonances, as well as for making voices sound ‘warmer’ — more like an old-school radio announcer. [This article](https://medium.com/@drew.arigadas/eq-and-compression-for-podcasters-who-have-never-used-them-before-206500b1562c) gives more detail. It’s easy to overdo compression and EQ, but done well they can make the difference between sounding amateurish and professional. And [this article](https://bettermarketing.pub/so-you-want-to-edit-and-mix-your-own-podcast-but-dont-know-where-to-start-9b7a99ac9fa3) gives a good general overview to editing podcasts.

That all said, if you can afford it, you should look to hire an editor. [Upwork](https://www.upwork.com/) is one place to look, with prices starting at $20 per hour of raw audio (this is very cheap). We found our editor by running a job ad. Googling for relevant keywords plus "podcast editor" could also work. In searching for an editor to work with, I'd put a premium on signs that you could form a longish-term relationship — in our own case, we've been able to accumulate a ton of small efficiencies through trust and experience.

However, you will still need some software to record your mic. Audacity is very simple and free — here's a [tutorial for getting started](https://www.youtube.com/watch?v=xl-WDjWrTtk).

For adding chapter markers: some audio software lets you do this as part of the edit (they might just be called 'markers'). Otherwise you'll need some specialist software. [Forecast](https://overcast.fm/forecast) (for MacOS) is free and functional, if minimalist. [This app](https://chaptersapp.com/) (also MacOS only) looks good, possibly better, but it's $20.

### Transcripts

Machine-generated transcripts have just about reached the point where they produce passable results with little to no human checking. But the landscape of actual usable tools is still a Wild West. I've spent many hours exploring it so far, here's what I found.

Note: the next few paragraphs are technical and likely not relevant for most people. I flagged where the relevant stuff begins with "**End of technical rant**".

The best model for AI transcription is [OpenAI's Whisper v3](https://github.com/openai/whisper) (large). OpenAI itself offers [API access](https://openai.com/blog/introducing-chatgpt-and-whisper-apis), though at the time of writing (*2023-12-01*) it's only on v2. This is *extremely* cheap, at [$0.015 / 1K characters](https://openai.com/pricing) (about $0.30 per hour of transcribed audio). But to directly access the API you need to write some code and/or know how to run code someone else wrote, which rules this option out for most use cases. In addition there are limits to the length of each audio file you upload (≈ 30 minutes), meaning you need to split the audio in short increments and stitch the result back together. Not currently recommended.

Then there are other API offerings, some of which use up-to-date deep learning models like Whisper, but which improve the overall experience somehow. One example is [Gladia](https://www.gladia.io/), which I had a better experience with than speaking with OpenAI's API directly. It is similarly affordable, and they just [introduced an update](https://www.gladia.io/whisper-zero) which promises to reduce hallucinations. Still, I had to wrangle with this service for a while to get anything useful out of it. For example I needed to install a bunch of Python libraries to split the audio to manageable chunks, then (since I'm running everything locally) you need some ingress solution such as with [ngrok](https://ngrok.com/). [Here's a gist with my Flask app](https://gist.github.com/finmoorhouse/3d51bb891867e8ff92f5877717eca975), but note it doesn't include the template HTML files. Anyway: the result is that I can fire up a local web app, upload my audio file, and the app will split and upload the audio, wait for the API to respond with the transcript, then place the result in a folder on my computer, formatted in markdown. If I get time I might turn this into a public web app, since the result is quite good, I think better than the existing web services like Fireflies or Descript; and you can include a prompt to specify proper names and technical terms. However I obviously don't recommend spending multiple hours rolling your own code to process transcriptions with an API, unless you have very specific use cases and/or are processing large amounts of audio.

End of technical rant.

So far the best web app I've found for generating transcripts is [Fireflies.ai](https://fireflies.ai/). The UI is a little clunky, and it mostly seems to be built around using it to transcript video calls. But there's an option to just upload audio from your computer, and it returns a transcript which you can download in different formats, including plain text. The quality is good, I think better than the other options I'll mention. It starts at [$10 per user per month](https://fireflies.ai/pricing).

Another solid option here is [Otter.ai](https://otter.ai/). You can upload recordings, and it'll produce a nice editable transcript, and automatically tag different speakers. I think you can also get a mobile app for transcribing meetings. The UI is better than Fireflies but last I checked I judged the quality to be slightly worse.

Another option is called [Descript](https://www.descript.com/). Descript does what Otter does in producing decent speech-to-text transcriptions which you can upload to your website. But it also lets you edit conversations *using* that transcript: by editing the text, Descript edits the audio accordingly, if that makes sense. I haven't personally used it much yet, but it's a great idea and I've only heard good things about it from people who use it as their main editing software. Another feature of Descript is *text-to-speech*: you can edit words in the transcript, and Descript will *make the speaker say that word instead*. Use responsibly!

If your podcast is short, and/or you place a high premium on getting an accurate transcript, you might still want to pay for a human to generate a transcript. There are sites which specialise in human-generated transcripts, such as [Rev](https://www.rev.com/services/audio-transcription), which charges around $1.50 per minute, or $90 per hour, of audio. I tried using a service like this (it might have been Rev, or a competitor, I can't remember) and the result was fairly good. I had trouble asking for specific formatting, and of course they will not know obscure proper nouns unless you specify them.

A hybrid approach is to use an AI service to generate a transcript, and then do a human read-through, to check for obvious errors. Ideally this gets you the same level of accuracy of a human transcription but saves time. In my experience this takes about 1.5 hours of human time to read the transcript per hour of transcribed audio. You could do this yourself if you like, or find someone on e.g. [Upwork](https://www.upwork.com/en-gb/).

Summary: currently Fireflies is best for ≈90% of people reading this, or Fireflies plus some amount of human checking. Things are moving so fast on the AI front that (i) AI will continue to improve, likely even beyond human performance; and (ii) new services will pop up and my recommendations will quickly become out of date.

### Hosting

You’ll also need to find a podcast host. In essence, a podcast is an RSS feed which lists metadata (title, description) and points to the audio file for each episode. Episodes are served and listed automatically by podcast hosts, and podcast players will just listen to the RSS feed for new episodes. You *could* do this all manually by self-hosting your episodes or paying for an AWS bucket or something, but nobody does because that would be insane. There are plenty of really excellent options here: [Podbean](https://www.podbean.com/), [Transistor](https://transistor.fm/), [Buzzsprout](https://www.buzzsprout.com/), [Simplecast](https://simplecast.com/). [Here is an article](https://www.podcastinsights.com/best-podcast-hosting/) comparing them. We use a site called [Pinecast](https://pinecast.com/), which we’re really happy with, although the pricing has gone up a little since we joined. When you’re starting out, and likely for some time afterwards, you probably won’t need to pay more than $10 per month. One thing to check for is whether your host (+ the pricing tier you’re on) enforces some promotional line in your show notes. Note that you can normally switch hosts fairly easily.

To get social media sites to recognise ‘share preview’ images, you need to include some meta tags in the html. Twitter has some [specific ones](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image), and Facebook uses the [Open Graph protocol](https://ogp.me/). To make these images, we first find a fitting image with a [Creative Commons](https://creativecommons.org/) license. The best site I know of for this is [Unsplash](https://unsplash.com/). The [Public Domain Review](https://publicdomainreview.org/) is also very fun. We prepare these images in [Figma](https://www.figma.com/).

Our write-ups are stored as markdown files, for which we use [Typora](https://typora.io/).

One last general-purpose piece of technical advice: [back everything up](https://www.google.com/search?q=amazon+2tb+hard+drive). This is not podcast-specific advice. Imagine having the opportunity to make a carbon copy of your house for the event of a fire — choosing not to take it would be inexplicably reckless!

### Website

You have lots of options for making a website.

Since writing this post, I have a new top recommendation: [Substack](https://substack.com). Substack has an in-built growth mechanism, because it's (i) a place to build a web presence plus (ii) a built-in social network. And a mostly healthy, supportive network, not the end-of-days wrath of X-formerly-Twitter. You can also hook up your Substack site to a custom domain. There are many places to buy domains — they cost around $12 / year and the process is quite straightforward. [Porkbun domains](https://porkbun.com/) seems good. Also, Substack has a specific interface to add a new podcast episode, which natively hosts the audio or video. At the time of writing my sense is that Substack should be your **strong default** unless you have a specific reason it won't work.

There are alternatives, of course:

If you’re not a technical person, some website builders will hold your hand throughout the process. [Squarespace](https://www.squarespace.com/) is good if slightly pricey. I have less experience with [Wix](https://www.wix.com/) but I believe it’s fine.

One notch up on the technical-sophistication-required ladder is [WordPress](https://en-gb.wordpress.org/download/), which should probably be the default for most people. But make sure you use WordPress dot org, the open-source software, not WordPress dot com, the for-profit host. You’ll separately need to find a host for your WP site (WP is just the software). There’s an insane number of [options](https://www.wpbeginner.com/wordpress-hosting/).

You might instead consider making a ‘static site’ — meaning a site that doesn’t need to be generated by a server whenever a new user visits. Static sites are fast to load, and inexpensive to host. In fact, [Netlify](https://www.netlify.com/) will host static sites for free up to a certain amount of traffic (which we’re not close to surpassing). [GitHub Pages](https://pages.github.com/) is another excellent free option. But normally this requires some amount of technical hand-muddying, so it’s a trade-off.

For what it’s worth, [Hear This Idea](https://hearthisidea.com/) was originally built using a static site generator called [GatsbyJS](https://www.gatsbyjs.com/), but I found it too complex and switched to [EleventyJS](https://www.11ty.dev/). It’s open-source and [available to view on GitHub](https://github.com/finmoorhouse/hti). You can fork it, or make a pull request if you spot an issue. I don't especially recommend GatsbyJS in most cases (it's a bit complicated for just a podcast website). I recommend Eleventy more but still would guess it's not worth leanrning for most people reading this.

For analytics, we used to use [Google Analytics](https://analytics.google.com/analytics/web/) (though we required about 5% of its feature set), and [GoatCounter](https://www.goatcounter.com/), which is a very simple privacy-aware alternative to Google Analytics. Now we use [Plausible.io](https://plausible.io/), which is a paid product, but it's just really delightful to use. Simpler, more lightweight, and more privacy-conscious than Google Analytics. To track which links people click on our site, we used to use [Google Tag Manager](https://tagmanager.google.com/), which needs to be set up separately from Google Analytics. But I didn't get much milage from it, and I generally feely icky about tracking things where there's a presumption they're not being tracked. There’s also a way to find out (i) what people search to find you on Google; and (ii) which pages elsewhere on the web link to your website: [Google Search Console](https://search.google.com/search-console/about). It’s tremendously useful.

## Summary of good defaults

- Mics: 2 or 3× [Shure MV7](https://www.shure.com/en-GB/products/microphones/mv7?variant=MV7-K), plugged into your laptop
- Editing: [Descript](https://www.descript.com/) or find an editor
- Hosting: [Podbean](https://www.podbean.com/)
- Transcripts: [Fireflies AI](https://app.fireflies.ai)
- Website: [Substack](https://substack.com) with a custom domain

## Some of our mistakes so far

Hopefully this will help others avoid equivalent mistakes — 

- For our in-person interview with [Matt Ives](https://hearthisidea.com/episodes/matt), we set up the mic and plugged it into the laptop but failed to set the correct input, meaning the laptop only picked up its internal audio. Sorry Matt!
- On two occasions, we nearly lost all the guest’s audio from a remote interview. We salvaged the audio both times, but we got lucky.
- On one occasion, our guest was tired, and had an unexpectedly tight schedule. The interview wasn’t as good as it could have been for these reasons, and we decided not to release it. This was fully our fault and we should have just rearranged the interview.
- On another occasion, I (Fin) got too caffeinated and started rambling and interjecting over Luca and the guest a bit too much. On the bright side, this is when the hand raising system was born.



## More useful links

- Lukas Berglund — [Lukas's Guide to starting a narration podcast](https://docs.google.com/document/d/1NGRYQDQTJtYbF_tTHE-ldbty5avjswkgOoQHoqMxr1A/edit#) (contains some specific advice for narration)
- David Perell — [How I Produce a Podcast](https://perell.com/essay/how-i-produce-a-podcast/)
- Michael Seibel (Y Combinator) — [Product Development Cycle Fundamentals](https://www.ycombinator.com/library/4e-product-development-cycle-fundamentals)
- Kevin Kelly — [1,000 True Fans](https://kk.org/thetechnium/1000-true-fans/)
- Buzzsprout — [How to promote your podcast on social media](https://www.youtube.com/watch?v=Ln168wR1YiM)
- Tim Ferriss — [Podcast Gear](https://tim.blog/podcast-gear/)
- [Some data about the podcast ecosystem](https://a16z.com/2019/05/23/podcast-ecosystem-investing-2019/) from a16z
- Tyler Cowen: [How do you ask good questions?](https://marginalrevolution.com/marginalrevolution/2021/06/how-do-you-ask-good-questions.html)
- Advice from Rob Wiblin
  - [Thoughts on why more people should make long-form interview podcasts](https://docs.google.com/document/d/1w213jquEXKBmfNnGqHGtBwRq98pLFTkbIXEBYuJVpgs/edit?usp=sharing)
  - [Our data suggest people keep listening to podcasts even if they’re very long](https://medium.com/@robertwiblin/our-data-suggests-people-keep-listening-to-podcasts-even-if-theyre-very-long-483dcfc77c02)
  - [What we've learned about doing interviews and podcasts](https://docs.google.com/document/d/1GKu_eHf7xr-iHqpI29l7dfekiuBLlCG7v240dQiBnS0/edit?usp=sharing)

