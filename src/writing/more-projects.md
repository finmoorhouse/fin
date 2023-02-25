---
title:  More projects I’d like to see
description: Another list of projects I think could be impactful.
tags: [writing]
date: 2023-02-25
permalink: /writing/more-projects/
shareImage: https://images.finmoorhouse.com/writing/more-ideas/construction.jpg
---

I recently wrote about some [EA projects I'd like to see](https://www.finmoorhouse.com/writing/ea-projects) (also on the[ EA Forum](https://forum.effectivealtruism.org/posts/8ic7KcxyfchhmGP3x/ea-projects-i-d-like-to-see)). This went well!

I suggested I’d write out a few more half-baked ideas sometime. As with the previous post, I make no claim to originating these ideas, and I’ll try to attribute them where possible. I also make no claim to being confident that all the ideas are any good; just that they seem potentially good without much due diligence. Since many of these are based on shallow dives, I’ve likely missed relevant ongoing projects.

If you’re considering writing a similar list, at the end of this post I reflect on the value of writing about speculative project ideas in public.

The order of these ideas is arbitrary and you can read any number of them (i.e. there’s no thread running through them).

## Summary

- [Fermi games](#fermi-games)
- [BOTEC tools](#botec-tools)
- [Billionaire impact list](#billionaire-impact-list)
- [Forecasting guide](#forecasting-guide)
- [Short stories about AI futures](#short-stories-about-ai-futures)
- [Technical assistance with AI safety verification](#technical-assistance-with-ai-safety-verification)
- [Infosec consultancy for AI labs](#infosec-consultancy-for-ai-labs)
- [Achievements ledger](#achievements-ledger)
- [World health dashboard](#world-health-dashboard)
- [The Humanity Times](#the-humanity-times)

## Fermi games

Many people are interested in getting good at making forecasts, and spreading good forecasting practice. Becoming better (more accurate and better calibrated) at forecasting important outcomes — and being willing to make numerical, testable predictions in the first place — often translates into better decisions that bear on those outcomes.

A close (and similarly underappreciated) neighbor of forecasting is the *Fermi estimate*, or *BOTEC*. This is the skill of considering some figure you’re uncertain about, coming up with some sensible model or decomposition into other figures you can begin guessing at, and reaching a guess. It is also the skill of knowing how confident you should be in that guess; or how wide your uncertainty should be. If you have interviewed for some kind of consulting-adjacent job you have likely been asked to (for example) {% note 'size a market for whiteboard markers' %}I remember hearing an anecdote about a family friend who was asked to guess the “number of tennis balls aloft right now” and heard “how many tennis balls are in my loft right now” and I find it really funny to imagine his utter stupefaction.{% endnote %}; that is an example.

As well as looking ahead in time, you can answer questions about how the past turned out (‘retrocasting’). It’s hard to make retrocasting seriously competitive, because Google exists, but it is presumably a way to teach forecasting: you tell people about the events that led up to some decision in a niche of history few people are familiar with, and ask: did X happen next? How long did Y persist for? And so on. You can also make estimates without dates involved. Douglas Hofstadter [lists some examples](https://www.gwern.net/docs/math/1982-hofstadter.pdf) in [Metamagical Themas](https://en.wikipedia.org/wiki/Metamagical_Themas):

- How many people die per day on the earth?
- How many passenger-miles are flown each day in the U.S.?
- How many square miles are there in the U.S.? How many of them have you been in?
- How many syllables have been uttered by humans since 1400 A.D.?
- How many moving parts are in the Columbia space shuttle?
- What volume of oil is removed from the earth each year?
- How many barrels of oil are left in the world?
- How many meaningful, grammatical, ten-word sentences are there in English?
- How many insects [...] are now alive? [...] Tigers? Ostriches? Horseshoe crabs?
- How many tons of garbage does New York City put out each week?
- How fast does your hair grow (in miles per hour)?
- What is the weight of the Empire State Building? Of the Hoover Dam? Of a fully loaded jumbo jet?

Again, most forecasts have a nice feature for evaluation and scoring, which is that before the time where a forecast resolves nobody knows the answer for sure, and after it resolves everyone does, and so there is no way to cheat other than through prophecy.

This doesn’t typically apply for other kinds of Fermi estimation questions. In particular, things get really interesting where nobody *really* knows the correct answer, though a correct answer clearly exists. This pays when ‘ground truth’ answers are a rarity.

Nonetheless I think that doing Fermi estimates well *is* a teachable and testable skill! Here are some general reasons:

- Even if you’re estimating a number where there is no agreed answer, you will likely appeal to numbers which we do know. You can know more or fewer of those important numbers. This kind of knowledge is straightforwardly memorisable and testable.
- Where memorisation isn’t practical, you can learn to quickly estimate certain kinds of number by some process of finding the right comparisons and getting a feeling for what counts as a sensible prior. {% note 'These guesses again are testable.' %}A silly example: before clicking on the profile of someone new on Twitter, I’ll guess their follower count. I’ve found that I’ve gone from very bad to only mediocre!{% endnote %}
- Independent of accuracy, good BOTECs are *instructive*, such as by telling you which parameters the outcome is most sensitive to; or what the parameters *would have to be* in order for the overall guess to meet some condition. BOTECs can be evaluated by experts on the grounds of how informative they are, independent of the accuracy of the bottom line estimates.

- Some people are better at estimating known quantities, and those people are often going to be the same people who have strong track records at forecasting, which is harder to game. We should expect these people to do better at estimating unknown quantities also, so we can use these people’s estimates as a noisy benchmark for other people’s estimates.
- [As with forecasts](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4001628) that won’t resolve soon enough, you can use [‘reciprocal scoring’](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3954498) methods where players are incentivised to predict the estimates of other players and get rewarded accordingly. Where there are no obvious reasons to expect bias, I expect that aggregated BOTEC-style estimates do {% note 'better than individual estimates for ‘[wisdom of the crowd](https://www.investopedia.com/terms/w/wisdom-crowds.asp)’ reasons.' %}This incentive can sometimes be perverse, such as when there are *obvious* answers that are not necessarily the true answers.{% endnote %}

So how could we encourage and evaluate the skill of “making sensible estimates of important but nonobvious numbers”?

One suggestion could be to outsource the work to specialists, which could look like a consultancy-style organisation which can take in even somewhat vague requests for crucial-but-unclear numbers, and give back a model and an estimate. This feels like a minor extension to what some existing forecasting/research-as-a-service orgs do and indeed I expect some of them already do something like this. Example use case: a major org is considering funding a speculative project, but the expected value of doing so depends on some key variables that they’re unsure how to estimate. They use a BOTEC-on-demand service to corroborate their best guess, and check for wishful thinking.

But a class of suggestions I’m especially interested in involves web-based games or tests designed to cultivate aptitude and interest in making good Fermi estimates.

Here’s one concrete idea: a website that gives everyone the same number to estimate every day, Wordle-style. At one extreme of simplicity, these numbers could just be tests of a kind of world-literacy. Examples:

- How many farm animals are alive right now?
- Roughly how many humans have ever been born?
- In percentage points, what fraction of US GDP is spent on foreign aid?

For examples of exactly what I have in mind, see [Linch](https://forum.effectivealtruism.org/users/linch)’s post: [What are some key numbers that (almost) every EA should know?](https://forum.effectivealtruism.org/posts/ekWRyJr9JneoWe5eH/what-are-some-key-numbers-that-almost-every-ea-should-know), and the associated [Anki deck](https://forum.effectivealtruism.org/posts/o9SLSkPJ6A2MWb9Bf/anki-deck-for-some-key-numbers-that-almost-every-ea-should) from [Pablo](https://forum.effectivealtruism.org/users/pablo_stafforini) and [jablevine](https://forum.effectivealtruism.org/users/jablevine).

Of course you could also be asked questions which can’t so easily be answered by recall (but where a ground truth still exists). For instance: how many kilotons of [TNT equivalent](https://en.wikipedia.org/wiki/TNT_equivalent) exists per living person for all the functional nuclear weaponry in the world?

In either case, you’d be asked to give an order of magnitude estimate (maybe it’s [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)), so you write in the power of ten and the coefficient each as an integer. Then, like Geoguessr, you get scored on accuracy (on a log scale).

Perhaps there are ways to automate question generation; e.g. by scraping [Our World in Data](https://ourworldindata.org/) or Wikipedia, and/or by combining a database of known numbers (e.g. world population, [chickens slaughtered per year](https://ourworldindata.org/grapher/animals-slaughtered-for-meat)) and combining them to give new questions (e.g. chickens slaughtered per year per living person). Or more creative questions could be curated by volunteers.

You could try the new question each day, and get a running accuracy score, which you could compare with friends. Each question could link to a resource to learn more about the key number and how it was worked out.

Alternatively, it could be framed more like a test than a game — more similar to the [excellent web tool](https://www.guidedtrack.com/programs/icg4cze/users/sign_in?return_to=%2Fprograms%2Ficg4cze%2Fembed%2FExgSMgg2UBaSyw5OMr6d1VZc0xrgf3SvMGhJr6PjEHc%2Fcomplete) developed by Spencer Greenberg and others for testing your calibration (here’s [an announcement post](https://www.openphilanthropy.org/research/new-web-app-for-calibration-training/)). Indeed, even building on that idea to make it much more accessible to a wider audience seems great. If you’re interested in doing that, [here are some reflections](https://docs.google.com/document/d/1hLqTomwYkxd0Mt5ZpWxUE_TiULn22cL1n9KhEZtEyGo/edit#) that Spencer wrote up. It could even be multiplayer: questions are generated from a number bank, and players have some set time to guess the right order of magnitude.

In fact, an alternative and maximally simple version would just be a test of your knowledge of a large number of these key figures. Perhaps it’s an exam of 100 questions, where you get a score on your accuracy at the end. Similar to the excellent [Gapminder quiz](https://upgrader.gapminder.org/). I’d also be interested to know which key numbers people get most directionally wrong.

Or maybe it could work like a (series of) guided course(s), where you only pass through each stage by scoring highly on a test of recall, after learning about the key numbers in context.

There is clearly a tradeoff here, where the numbers with the least disputable and easiest to google answers are often the ones that rely the least on the BOTEC skills, while the numbers that are most similar to *crucial numbers that rely on good sense for making difficult BOTECs* are often those without indisputable answers, and so are harder to test. But I hope there’s at least some skill transfer between “questions with easily evaluable answers” and “actually important questions without ground-truth answers”.

While I’m throwing half-formed ideas out, here’s another one: {% note 'a site for crowdsourcing BOTECs' %}Such a platform could replace the occasional Twitter polls I see which try to capture the crowd’s guesses about important numbers — I’m glad these polls happen but they’re not indexed in a central place, which is a shame. Ozzie Gooen has some illustrative examples: such as [here](https://twitter.com/ozziegooen/status/1490313388970364935), [here](https://twitter.com/ozziegooen/status/1490313714570047491), and [here](https://twitter.com/ozziegooen/status/1483273265753694208).{% endnote %}. Imagine a site like [Metaculus](https://www.metaculus.com/) or [Manifold Markets](https://manifold.markets/), where people list questions they’d love to get help with estimating. So you post a question, and others post their models and their bottom-line guesses (maybe most these models end up being links to [Guesstimate](http://getguesstimate.com/) sheets). Different people’s guesses get combined into an aggregate guess.

Of course, weighting, ranking, and scoring these guesses is trickier than for prediction markets and their outgrowths: for instance, the price a binary option trades at essentially depends on the fact that the question will eventually resolve, and the option will expire at e.g. either $0 or $1. But all is not lost: other users could upvote other people’s models in good faith, and those people’s models going forward could then get weighted higher in aggregate guesses. I also wonder if viewing the aggregate guess should preclude you from contributing your own guess, so you could introduce some incentives to guess the aggregate answer before you make your own (and then your own guesses can get weighted with how good you are at guessing aggregate guesses). The same idea could work for voting between discrete categories as well as estimating continuous variables.

I should re-emphasise that the skills that are instrumental for making sensible BOTEC-style estimates of important numbers are *really* valuable. They also seem learnable through practice, which is why tools to practice them seem promising to me.

**Edit:** shortly after writing this, this was posted to the EA Forum: ['The Estimation Game: a monthly Fermi estimation web app'](https://forum.effectivealtruism.org/posts/XDwnGK7x4EjkaHbje/the-estimation-game-a-monthly-fermi-estimation-web-app). It is amazing and very very close to what I had in mind. Kudos!

## BOTEC tools

Earlier I asked: how could we encourage and evaluate the skill of “making sensible estimates of important but nonobvious numbers”? Another suggestion is to build more infrastructure to facilitate building models and representing uncertainties.

Ozzie Gooen’s [Guesstimate](https://getguesstimate.com/) is an awesome example of this: it’s a web app for estimating uncertain quantities by plumbing together other uncertain quantities. One thing that makes it different from a standard spreadsheet is the ability to express how you expect different quantities to be distributed. Guesstimate then samples from all the distributions in the model a bunch of times, Monte Carlo style, to show how your uncertainty should be distributed over outcomes.

Ozzie’s next project, as part of the [Quantified Uncertainty Research Institute](https://quantifieduncertainty.org/), is to build a programming language for making uncertain estimates, called [Squiggle](https://www.squiggle-language.com/). Making probabilistic estimates involves different kinds of distributions over variables, then sometimes combining those distributions, doing sensitivity analysis, visualising your new distribution, and so on. The thought is that it’s very clumsy to do this with e.g. Python plus a bunch of data viz libraries. I’m excited about Squiggle, and I think it could be useful to explore related ideas in the space of what it is trying to achieve (because I think this is a large and relatively underexplored space).

Here is one idea from Tom Adamczewski, copying from (and minorly redacting) an email exchange with his permission:

> I have a specific idea for a tool in this space: combining the best of[ Workflowy](https://workflowy.com/) (collapsible and zoomable tree views),[ Guesstimate](https://www.getguesstimate.com/) (intuitive Monte Carlo), and[ Palisade](https://www.palisade.com/) (handle complex models without slowing to a crawl [...]), and[ Squiggle](https://www.squiggle-language.com/) (programming language / domain-specific language). Also, tailoring the tool based on requests from specific organisations [...] could give an edge in altruistic terms.
>
> My vision is for a tool for quantitative estimates that combines the best of the following:
>
> - [Workflowy](https://workflowy.com/) (collapsible and zoomable tree views)
> - [Guesstimate](https://www.getguesstimate.com/) (intuitive Monte Carlo)
> - [Palisade](https://www.palisade.com/) (handle complex models without slowing to a crawl [...])
> - [Squiggle](https://squiggle-language.com/) (programming language / domain-specific language)
>
> So in the Workflowy-like view the root node would be the thing you're trying to estimate, and children of any node would be the parameters it depends on, so that the entire model is represented as a tree. You would be able to manipulate the model in this tree-like view.
>
> [Can give lots more detail, I have a pretty specific vision and this is a massively compressed version of that]
>
> I think this could be a great product for any sophisticated user of quantitative estimates, but tailoring the tool based on requests from specific organisations (e.g. OpenPhil) could give an edge in altruistic terms.
>
> One nice thing is you could pretty easily create the ability to import/export Excel spreadsheets, where they would be represented as trees/graphs (nodes would be cells and edges would be cell references). So people wouldn't have to re-create their models from scratch. I think the Excel interoperability (even if imperfect) would be a huge win for adoption. Lots of orgs run on spreadsheets.
>
> What would be the dream interface for [funders], to talk about their forecasts and models? e.g. chat about specific parameters, locate the node(s) that account for the greatest fraction of disagreement, disagree on a subtree and be able to build two competing subtrees in a smooth way, defer to different people for different nodes or subtrees.

Let me or Tom know if you'd be excited about helping build this.

I will add: the core idea that stands out to me here is the idea of combining the ‘nested node’ structure of Roam, Workflowy etc. with a quantitative focus. It stands out because, in my experience, this is how BOTECs tend to work: you begin with a bottom-line number, and you recursively break the number down into smaller components. In fact, machinery for expressing and combining probability distributions don’t seem central to me and probably wouldn’t need to feature in an initial version.

I’ll also add that I’m excited about the possibility of a composable, social aspect to any of these new tools. When you’re making BOTECs, you might want to reference community predictions, such as from Metaculus or Manifold ([both](https://www.metaculus.com/api2/) [have](https://docs.manifold.markets/api) APIs), or indeed other sources of information from the internet (like stock prices). That way, you get to build a model which doesn’t require constant manual input, or otherwise quickly go out of date.

In turn, you could share your own model for other people to {% note 'plug in to their own' %}From a [recent interview with Ed Mathieu](https://hearthisidea.com/episodes/mathieu#can-ea-organisations-learn-from-open-source-models) from Our World in Data: "I think some kind of software that would try to bridge that gap and  provide both a spreadsheet view of things with the underlying code behind it, for people who want to read the code, I think that would be extremely good [...] If everything was code, that means that EA organisations could publish  those analyses, and then other people externally could read them, and  create what we call ‘pull requests’, which are requests to change the  code. And they could say, ‘Okay, on line 18, you've made the assumption  that you should multiply this by 4.5. But I think it's close to 5.2.’  And they could justify why."{% endnote %}.

People also talk about ‘belief-mapping’ software as if it’s a well-established micro-genre. I’m still not exactly sure what this is, but here’s something that sounds to me like ‘belief-mapping’: I’d love a way to log my credences in different things, as well as richer kinds of beliefs like confidence intervals and distributional forecasts. A combination of a spreadsheet plus [Foretold.io](https://www.foretold.io/) can do all of this so far. But it could also be neat to express how beliefs must relate. For instance, if I update my credence in (A), and I’ve already expressed my credence in (B|A), then the software can tell me what my new credence in (B) should be, and update it if it seems reasonable. I could also say things like: “my credence in the disjunction *A or B or C* is 80% — so when I change one of A or B or C, please adjust the other two to add back up to 80%”. Or suppose I give some probability distribution over time for a “when will…” question, and then time passes and the event doesn’t happen. Then I need to redistribute the probability mass that I put on times where the probability is now definitely zero. It could be cool to instruct some piece of software to do this automatically, especially if I’m trying to keep track of many forecasts.

Basically, I have some impression that forecasting involves many automatable ‘consistency-checking’-type tasks, and it could be very useful to offload them to a piece of software which helps track and ‘supervise’ your beliefs.

The [‘vision’ page](https://quantifieduncertainty.org/2cb83aa3c1f54066b7f0e21446ec96ef) on the website for the Quantified Uncertainty Research Institute is another source of optimism on this front.

## Billionaire impact list

**The idea:** a research effort to understand and evaluate the giving behaviours of the wealthiest people in the world, and an online resource celebrating the most impactful donors (and pointing out opportunities for some donors to do better).

With certain high-profile exceptions, the giving behaviours of very wealthy people are not widely known. I feel good about a culture where the wealthiest people in the world are strongly expected to give at least 10% of their wealth to making the world better, and for centimillionaires and billionaires more like 90% or 99%.

It’s not just about the fraction of wealth committed as donations. Often donations are moved into foundations who disburse their endowment slowly and inscrutably. And (of course) charitable projects [vary very widely](https://80000hours.org/2023/02/how-much-do-solutions-differ-in-effectiveness/) in their (predicted and measured) effectiveness. It’s a shame this isn’t all better known. I also feel good about a culture which celebrates large donations thoughtfully and transparently targeted at making as large a positive difference as possible; and calls out its opposite (including giving which is nakedly status-seeking, or herd-following).

In order to bite, norms like this require certain kinds of (common) knowledge about the giving behaviours of very wealthy people: who isn’t giving? Who is? What are they giving to? What has this achieved?

The central idea here is just a list of the wealthiest people in the world, with known details about their giving. There should be ways to highlight the best examples — people who have clearly thought hard about how to do good with their wealth, and are giving away most of it. My guess is that there is enough data to take a stab at roughly ordering the world’s wealthiest people by absolute and percentage amounts committed to charitable giving. Evaluations of the effectiveness of that giving are crucial, but I’d guess they would have to be more editorial.

Forbes actually has a [‘Philanthropy score’](https://www.forbes.com/sites/rachelsandler/2022/09/27/the-forbes-philanthropy-score-2022-how-charitable-are-the-richest-americans/?sh=79395e5ca098) which is cute, but as far as I can tell it neglects to really discuss what the biggest givers have achieved or plan to achieve. It also doesn’t seem to count pledged / committed spending that hasn't already been spent down.

Kelsey Piper [suggested basically this idea](https://twitter.com/KelseyTuoc/status/1446559549754789891) in 2021: “I should have a live ranking of billionaires by how cool they are, based on how much good I think their giving is doing. Then the billionaires will all be pressured to give more impactfully by their desire to be at the top of my list of who is the coolest.” I’m not sure if anything came of it.

I’d also be interested in more research into the world of private charitable foundations, and generally what happens to large amounts of philanthropic money after it is committed. Again, my impression is that these foundations are often somewhat opaque, and often fail to disburse their endowments before the client donor dies.

After thinking about this and discussing it with others, here’s a more concrete version I can most imagine working:

- Everything lives on a website with the simple pitch of trying to become the definitive source on how much positive impact billionaires are having through their giving

- You can view a list of the (say) top 100 wealthiest people in the world, ranked by percentage donated or pledged; and absolute amount donated or pledged. Based on available data.

- Then there is an editorial side to the website, with:

- - Stories of targeted giving having an outsized impact;
  - Spotlights on donors, including outside of the top 100 list, who are leading the way on effective giving;
  - Spotlights on donors whose donation track record seems small, opaque, or non-existent

- There’s a clear call to action: the wealthiest people in the world should be taking the [Giving Pledge](https://givingpledge.org/), they should ultimately be giving 90%+ of their wealth, and they should try to do the most good that they can through that giving.

## Forecasting guide

I am not aware of a go-to guide for the skills of forecasting. Instead, my impression is that excellent forecasters learn piecemeal — by example, from others, and sometimes through half-related books. I like the idea of a well-produced guide, c. 5 hours long or so — at a similar level of rigour to one of [BlueDot’s “fundamentals” courses](https://bluedotimpact.org/).

For instance, the main content could be screen-recorded videos, plus the course could contain some exercises. Ideally, having worked through this course would count as a decent signal of halfway-competence at forecasting.

I’d be interested in learning about:

- Motivations for getting forecasting skills: why care?
- Basic maths-y concepts underlying different kinds of forecasts. How does scoring work? What’s a distribution?
- Basic skills for not being reliably terrible: adjusting from base rates, paying attention to your calibration, etc.
- Tricks and advice which seems to help from experienced forecasters.

[Alex Lawsen’s video series](https://www.youtube.com/watch?v=e6Q7Ez3PkOw) is great but it’s a bit scrappily produced, so {% note 'it would be sad' %}Sorry Alex!{% endnote %} if it remained the absolute best resource which beginners are pointed towards. There is also *Superforecasting*, there are [tutorials on Metaculus](https://www.metaculus.com/tutorials/), and many blog posts.

## Short stories about AI futures

**The idea:** A book of short stories depicting details about how transformative AI could play out (at different stages, and different kinds of catastrophe or (even) success).

**Why?** When I try telling people about arguments for AI risk, I often speak in abstractions: AI systems might be generally more powerful than humans such that they could [defeat all of us combined](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/); and they might end up dangerously misaligned by default.That invites the response: “ok, but what will AI actually do to us? How does it gain power? How do we lose power? Are you talking about the slow erosion of influence through subtle means like currency manipulation and mass disinformation, or are you talking about death robots?”

Writing about AI risk gestures at concrete examples (such as [here](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/#how-this-could-work-if-humans-create-a-huge-population-of-ais), [here](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like), and [here](https://80000hours.org/articles/what-could-an-ai-caused-existential-catastrophe-actually-look-like/)). But when you’re advancing general arguments for AI risk, it’s fair not to dwell on detailed and concrete stories: since most people are very uncertain about what something like AI takeover looks like in its details, any particular story is going to occupy a small slice of probability mass. If an argument for AI risk dwelt entirely on a story where AI exploits a major undiscovered zero day in a popular operating system to gain leverage through holding computer systems ransom, then they might invite suspicions that we could duck an AI-related catastrophe by making sure everyone does security updates and takes backups.

But I do also think that some people should be thinking up implausibly detailed stories of how AI plays out. Daniel Kokotajlo gives a list of reasons for writing detailed vignettes in his [‘What 2026 looks like’](https://www.alignmentforum.org/posts/6Xgy6CAf2jqHhynHL/what-2026-looks-like) post, including:

- “Sometimes attempting to write down a concrete example causes you to learn things, e.g. that a possibility is more or less plausible than you thought.”
- “Most stories are written backwards. The author begins with some idea of how it will end, and arranges the story to achieve that ending. Reality, by contrast, proceeds from past to future. It isn’t trying to entertain anyone or prove a point in an argument.”

AI Impacts ran a [Vignettes Workshop](https://aiimpacts.org/vignettes-workshop/), and their ongoing [AI Vignettes Project](https://aiimpacts.org/ai-vignettes-project/) has produced [a dozen vignettes](https://airtable.com/shr4mHlTIiKtFRDuR/tblMVjRvMKVNkoZVg?backgroundColor=cyan&viewControls=on) so far. They are very good, and partly I just want to signal boost this kind of work, and encourage other people to try it. The best examples I can think of are Daniel K’s ‘[What 2026 looks like](https://www.alignmentforum.org/posts/6Xgy6CAf2jqHhynHL/what-2026-looks-like)’, Marius Hobbhahn’s [‘The next decades might be wild](https://www.lesswrong.com/posts/qRtD4WqKRYEtT5pi3/the-next-decades-might-be-wild)’, and also Paul Christiano’s ‘[What failure looks like](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like)’ (though it’s relatively lighter on specifics).

However, I understand ‘vignettes’ to be different from most people’s conception of ‘short stories’ insofar as (i) you should only be aiming at plausibility when writing vignettes, and not also at other marks of literary quality that might require experience writing fiction; and relatedly (ii) vignettes don’t need to fit a neat story structure, with narrative tension and identifiable characters (they can look more like a series of snapshots). These really are differences rather than weaknesses, but *in addition* to vignettes, I would especially love to see people work on compelling, well-written *stories* about AI futures. The process for generating these might involve fiction writers working with AI experts to flesh out / animate existing vignettes.

With a bit of effort, this kind of writing could make up a book: a collection of imaginative writing about AI futures. Maybe one story depicts a pre-AGI, [*Her*](https://letterboxd.com/film/her/)-like regime of advanced conversational assistants. Another considers a hard sci-fi slice of post-singularity success. Many consider various (mutually exclusive) tales of failure. Given the level of AI hype, and given that this hype just might never significantly die down until things get truly transformative, I expect a book advertised as a collaboration between AI experts and writers could catch on.

**Comparisons:** Gwern’s ‘[It looks like you’re trying to take over the world](https://gwern.net/fiction/clippy)’ is exemplary (and weird and terrifying). [Ted Chiang’s writing](https://en.wikipedia.org/wiki/Ted_Chiang) seems like the bar to aspire towards on the “compelling, humane, and memorable” dimension. His writing is culturally influential, also: most notably his story “[Story Of Your Life](https://en.wikipedia.org/wiki/Story_of_Your_Life)” was [adapted to a film](https://letterboxd.com/film/arrival-2016/). Perhaps many plausible AI futures are simply too weird to count as “humane” and instead look more like [Greg Egan’s short stories](https://www.gregegan.net/BIBLIOGRAPHY/Online.html). The book [*Superintelligence*](https://en.wikipedia.org/wiki/Superintelligence_(film)) sold unexpectedly well, which was a positive update about people’s appetite for weird and difficult writing about AI, and that was before the hype. 

Finally, consider nukes. Movies like [When the Wind Blows](https://en.wikipedia.org/wiki/When_the_Wind_Blows_(1986_film)), [Threads](https://letterboxd.com/film/threads/), and [The Day After](https://en.wikipedia.org/wiki/The_Day_After) meant that generations of people grew up with visceral images of the effects of nuclear war. Reagan watched The Day After, and [wrote in his diary](https://www.reaganfoundation.org/ronald-reagan/white-house-diaries/diary-entry-10101983/): “I ran the tape of the movie ABC is running on the air Nov. 20 [...] It’s very effective & left me greatly depressed [...] My own reaction was one of our having to do all we can to have a deterrent & to see there is never a nuclear war. Back to W.H.”. Could stories about AI (or indeed engineered pandemics) have a similar cultural effect?

Let me know if you’re interested in contributing to this, I can put you in touch with others.

**Caveat:** The next couple ideas are shallow descriptions of ambitious and likely very complicated. Their epistemic status is something like “as an outsider to the relevant bits of AI strategy/governance, and after shallow reflection, these things sound promising to me”. Others with actual expertise surely have more useful things to say.

## Technical assistance with AI safety verification

The [IAEA](https://www.iaea.org/) is an international agency responsible for verifying nuclear security agreements, like agreements not to build new nuclear weapons, not to test them, and even to destroy them. They also set, promote, and verify standards for nuclear safety, such as making sure hair-triggers aren’t vulnerable to false alarms.

I would feel good about a world where this exists for security against existential risk from AI (obviously it wouldn’t be sufficient for security, like how the IAEA’s existence is not sufficient for nuclear security, but I think it would help).

One version would be an intergovernmental agency. But in an ideas list which features “some websites to do with estimation” and “picture books”, a “major new international agency” might sound “too ambitious”. Happily I think that a similar idea could work as a private entity. Take [this quote from Akash Wasil](https://www.lesswrong.com/posts/SNdijuEn6erTJam3z/how-evals-might-or-might-not-prevent-catastrophic-risks-from#Scenario__Victory) as the target:

> - A model is subject to a test of some kind.
> - If we observe X evidence (perhaps scary capabilities, misalignment, high potential for misuse), then the team developing the model is *not* allowed to [continue training, scale, deploy] the model *until* they can show that their model is safe.
> - To show that a model is (likely to be) safe, the team must show Y counterevidence.

How could a private entity help move towards the target?

1. It could devise and administer the tests for safety
2. It could provide technical assistance in running the tests
3. It could enable governments to impose restrictions based on the results of the evaluations
4. It could impose soft pressures on firms to comply with the evaluations, such as through issuing certification

The first two stand out as natural first steps.

Akash points out that this is similar to Information Sharing and Analysis Centers ([ISACs](https://www.enisa.europa.eu/topics/national-cyber-security-strategies/information-sharing)) in the context of cybersecurity.

**Why not?** I guess the obvious worry is that the closer AI systems are to posing existential risk, the less we should hope for a simple tests to work, unless somehow the tests scale in sophistication with the systems being tested. The fact that humans can fairly easily deceive other humans about their trustworthiness is pessimistic evidence.

See:

- [There’s No Fire Alarm for Artificial General Intelligence](https://intelligence.org/2017/10/13/fire-alarm/)
- [Racing through a minefield: the AI deployment problem](https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/#global-monitoring)

## Infosec consultancy for AI labs

It seems robustly bad for big AI labs to be vulnerable to various kinds of hacking and espionage.

One thing that could mean is to get really good at information security in this context, and then go and work at a major AI org.

But I don’t think you need to wait for these orgs to start hiring — you could start a consultancy and offer information security as a service to various orgs. Cybersecurity consultancies are big business, but I expect the AI lab context is niche enough to warrant a specialised shop.

I don’t have much else to add!

See:

- Holden Karnosky [on careers in information security](https://www.cold-takes.com/jobs-that-can-help-with-the-most-important-century/#information-security)
- [Nova DasSarma on why information security may be critical to the safe development of AI systems](https://80000hours.org/podcast/episodes/nova-dassarma-information-security-and-ai-systems/)

## Achievements ledger

**The idea:** to spend some time collecting and showcasing exciting projects aimed at positive impact, especially for reducing existential risk and improving the long-term future. Past and present. This could be a website, where you can filter by cause, and learn about:

- **Concrete successes.** What kind of progress have these projects made?
- **Promising new projects.** Which projects are walking the walk right now? Who’s got a plan to bring about a specific improvement in the world, or to fix a specific problem?

It could be more editorial, similar to Vox’s [‘Future Perfect 50’](https://www.vox.com/future-perfect/23399287/future-perfect-50-change-agents). Or it could be more functional — minimally it could just be an open and collaborative Airtable database.

**Why?** One reason is that deliberately focusing on object-level projects can help anchor conversations which otherwise tend to float upwards towards the meta level. In particular, I think a project like this could benefit the effective altruism community. When people talk about communities and ideas associated with effective altruism, conversations very often take place at the meta-level or otherwise at high levels of abstraction. To add a meta-level comment of my own: I’m concerned that too little room (within and beyond effective altruism) is left for picking apart concrete ideas; for reasons partly expressed [here](https://forum.effectivealtruism.org/s/KeipizrSxYFuyuyow/p/J3gZxFqsCFmzNosNa). In other words, boosting concrete achievements and ongoing projects with specific and object-level aims might help to avoid EA ‘discourse’ becoming the exclusive subject of EA discourse.

I am aware that this project idea is essentially a ‘meta’ idea.

Another reason is motivational: I worry that many people associated with effective altruism are reflexively self-critical, such that when the outside world doesn’t give positive feedback, they’re left with no source of positive feedback. This is just a downer. On the other hand, projects which took root from outside the community can teach and inspire.

A variation on this idea is to make it more reflexively about EA's track record so far: a kind of stock take. Taking stock of achievements within a field or paradigm seems like a good way to guide beliefs about which sub-areas are most tractable, and whether the field has struck a good balance of things like community building on one hand, and producing legible results on the other. I suspect it is sometimes easy to overestimate the number of people in a field who have a plan and are actually giving it an earnest shot. And for what it’s worth, I mostly have different kinds of longtermist work in mind here.

**Why not?** One obvious consideration is that it is often appropriate to be discreet about some achievements and ongoing projects for many reasons, such as if the work is attention hazardous. This might apply to a large fraction of all the work in a field, especially in the longtermist context.

**Two relevant posts:**

- Owen Cotton-Barratt writes: [Longtermist EA needs more Phase 2 work](https://forum.effectivealtruism.org/posts/TruJuwtdfszFJgzwB/longtermist-ea-needs-more-phase-2-work)
- [Ben Snodin](https://forum.effectivealtruism.org/users/ben_snodin) asks: [What are the best examples of object-level work that was done by (or at least inspired by) the longtermist EA community that concretely and legibly reduced existential risk?](https://forum.effectivealtruism.org/posts/2n77pe6oiYZZTZAzL/what-are-the-best-examples-of-object-level-work-that-was)

## World health dashboard

**The idea:** a website which aggregates and displays various key indicators of the state of the world.

To begin with, it could take a list of key indicators of development, such as the [number of people living in extreme poverty](https://ourworldindata.org/extreme-poverty-in-brief), the [number of people living under democracy](https://ourworldindata.org/grapher/people-living-in-democracies-autocracies?country=~OWID_WRL), or [deaths from conflict](https://ourworldindata.org/grapher/deaths-in-conflicts-and-one-sided-violence?country=~OWID_WRL). Then it could show how the numbers are changing as frequently as new data comes in. You could then compare numbers to the previous year, in absolute and percentage terms. You could also see visual indicators of progress towards (e.g.) the [Sustainable Development Goals](https://sdgs.un.org/goals).

This sounds too similar to [Our World in Data](https://ourworldindata.org/) to really count as a novel idea. But I think it could be made more distinctive and useful.

One addition could be to create and show new aggregate indicators and indices, taking inspiration from the [Democracy Index](https://en.wikipedia.org/wiki/Democracy_Index) produced by The Economist’s [Intelligence Unit](https://en.wikipedia.org/wiki/Economist_Intelligence_Unit). There is something brazen and necessarily reductive about deciding to capture everything that matters about democracy in a single number, but in this example I think it was highly worthwhile: the Democracy Index is cited widely and with credulity. Since the index strikes me (as an outsider) as relatively unbiased and informative, I’d guess it really has helped people understand how democracy is distributed in the world, and so I’d guess the index has done more good than harm. In particular, I’d be excited about similar indices for progress in AI (such as a composite of various benchmarks).

Another addition, which I’m more excited about, involves adding a bunch of indicators based on public forecasts, such as from [Metaculus](https://www.metaculus.com/). Imagine the homepage of this website, showing (say) a dozen headline indicators. One might be the risk of [World War 3 before 2050](https://www.metaculus.com/questions/2534/world-war-three-before-2050/), another the [expected date](https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/) of [arrival](https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known/) of [AGI](https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/) (suitably operationalised). Indicators could be shown as needles on gauge, whose change over time should be shown (large movements could be especially highlighted, like Nikos Bosse’s [@MetaculusAlert](https://twitter.com/MetaculusAlert) Twitter bot).

This could amount to something like a {% note 'more quantitative version of the [Doomsday Clock](https://thebulletin.org/doomsday-clock/)' %}Here’s a graph of the position of the minute hand over time: ![](https://upload.wikimedia.org/wikipedia/commons/4/4b/Doomsday_Clock_graph.svg){% endnote %} managed by the Bulletin of the Atomic Scientists.

A small discursion: I worry that some people misunderstand the Doomsday Clock, because they assume that it is supposed to be (nothing but) a measure of some crisply operationalised spin on “risk of doomsday in the next X years”, and then sniff at how erratic and alarmist it seems on one hand; and how unhelpfully qualitative it is on the other: how does the position of the minute hand correspond to probabilities?

I think some of these worries are misplaced. The Bulletin is [explicit](https://en.wikipedia.org/wiki/Doomsday_Clock) that the position of the minute hand represents the “likelihood of a human-made global catastrophe”, but as far as I can tell, they’ve left the precise interpretation flexible. And this just seems fine to me: I think there is more to be said for the Doomsday Clock viewed as a long-running and [influential](https://theelders.org/news/elders-warn-urgent-action-climate-pandemics-nuclear-weapons-needed-turn-back-hands-doomsday) art project than as an attempt to produce an aggregate quantitative forecast.

[Some have suggested ditching the Doomsday Clock](https://www.wired.co.uk/article/doomsday-clock-climate-change) because in a regime of complex and overlapping risks, trying to condense every catastrophic risk and risk factor into a single number is hopelessly reductive. Instead, why not try showing the crisp, quantitative version of the Doomsday Clock? For instance, this site could show the status of and movement on the following Metaculus questions, dressed up in a visually appealing way:

- [Date of AI-Driven Human Extinction](https://www.metaculus.com/questions/10721/when-will-ai-driven-human-extinction-happen/)
- [Human Extinction by 2100](https://www.metaculus.com/questions/578/human-extinction-by-2100/)
- [Global Population Decline >10% by 2100](https://www.metaculus.com/questions/1493/global-population-decline-10-by-2100/)
- Other questions in the [Ragnarok series](https://www.metaculus.com/questions/2568/ragnar%C3%B6k-seriesresults-so-far/)

Of course this site would have a responsibility to be clear about the process used to come up with aggregate forecasts, especially if they’re appearing alongside objective measures.

**Why?** If I’m just watching the news, I’m going to find it very difficult to get an all-things-considered sense of how humanity is doing. I’d love to be able to visit a single site which shows me — in as close as possible to a single glance — some key overall indicators of how the world’s holding up.

Sites like [Our World in Data](https://ourworldindata.org/) and [Metaculus](https://www.metaculus.com/) serve this information very well, but I suspect there is potential in aggregating their information, and showing it in a visual, simple, and shareable way.

Here is Edouard Mathieu from Our World in Data [speaking on the podcast I do](https://hearthisidea.com/episodes/mathieu#key-indicators-for-the-trajectory-of-the-world):

> I would want to have that on the dashboard. And I think then what I would want, and I don't think it exists, would be something like the doomsday clock, but in a way that would be they would feel more rigorous. If we had an aggregate metric, even if it's questionable, even if people could criticise it and think that it should be improved in some way, I think even some kind of attempt to have an index of, ‘Is the world through 30 different metrics, becoming safer or more dangerous in the last six months?’ I think that would be extremely useful. 

**Why not?** It’s reductive to try condensing the question of “how is the world doing” into a few numbers, and it’s presumptive to choose which numbers make the cut. Maybe the usefulness of such a dashboard fails to outweigh this.

Note: this idea is a cousin of the excellent [‘Possible Worlds Tree’](https://possibleworldstree.com/).

## The Humanity Times

**The idea:** an earnestly scope-sensitive newspaper.

It turns out, even among highbrow newspapers with international circulation, that journalism does not tend to cover topics in proportion with their all-things-considered significance for the world. Unfortunately demand for news is not demand for line graphs.

Journalistic outlets are appearing which are making an earnest effort to *be about the most important things*. [Asterisk magazine](https://asteriskmag.com), for instance, "is a quarterly journal of writing and clear thinking about things that matter."

I'd love to see a newspaper along these lines which is just deliberately, *aggresively*, scope-sensitive. It reports on big slow trends, many years in the making. It proffers updates on the approval process for a vaccine against neglected tropical diseases. A new piece of US tech legislation that could be significant for AI, which seemed too dull for other outlets to find an angle. And it's quantitative wherever possible, even when the data tell a more complicated story, or run against prevailing moods.

It's also **representative** of all the world: it might feature profiles on the lives of an unbiased sample of people from everyone alive. What do most people worry about? What are they hopeful for?

And it's **optimistic**. It avoids the tempting cynicism or doomsterism of much journalism, and looks to describe solutions.

**Why not?** I haven't said anything about how to get anyone to read this, or how to make it good. The reason journalism sometimes feels myopic, or skewed towards pessimism, is because they are tracking demand. And you can't really change what people want to read. On the other hand, maybe there  is a special kind of appeal to slow, relatively character and gossip-free journalism. Like the shipping forecast.

## On writing lists of ideas

I’ll stop there and leave further ideas for a possible third post.

I figured I might finally reflect on the activity of writing lists of ideas. Here are some thoughts:

1. **Writing** [**my first list of ideas**](https://finmoorhouse.com/writing/ea-projects/) **went better than expected.** In some cases, the ideas mostly didn’t exist before I wrote it, and mostly do exist now — though I expect this is mostly fortunate timing rather than causal influence.
2. In writing up half-baked ideas, you can **become the de-facto coordinating node**. Some people reached out to me about ideas which I had close to no expertise in, beyond what I’d written. I was still able to connect these people with one another. Writing the ideas up was the bat signal.
3. One major concern I have is that there is a reason people don’t write about embryonic project ideas, and to do so is to succumb to the **unilateralist’s curse**. For instance, it might be reputationally bad or misleading to throw around ideas which are sensitive to the details and easily misinterpreted.
4. A related concern is that, despite caveats, lists like these can **project more confidence than intended**. They could seed a citation trail which leads to people moving ahead without anyone in the chain actually doing sufficient due diligence: person A decides to launch an ill-considered project because they heard people B, C, and D all separately mention the idea; but the common source of the idea was someone offhandedly writing about it.
5. The final downside is that many of the ideas here and in the previous list **have nothing to do with one another**, so it’s unclear why they should be collected together. A lot of things have to go right for even very focused lists to stand a chance of making things happen. I think scattered public lists like this are too unfocused to be justifiable on expected impact grounds. But I enjoy writing them.

Therefore, I think ideas lists are useful when:

1. You want to get quick feedback from **a wide (and ∴ low context) audience** on a long list of ideas
2. You don't mind these ideas being **public**
3. Ideally, you can **promise various kinds of support** (including financial, networking, and mentorship) for the ideas if people express interest

I think these circumstances are rare. More likely:

4. You enjoy writing lists.

Curious for people’s thoughts.
