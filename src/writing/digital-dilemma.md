---
title: Anthropic reasons for digital mind scepticism?
permalink: /writing/sims/
tags:
  - writing
date: 2024-04-28
shareImage: https://images.finmoorhouse.com/writing/digital-dilemma/computers.webp
---

## Summary

Here's a thought. If digital minds eventually vastly outnumber real humans, _why aren't we them_?

I think that question can be read in two ways. First, we might accept that there will be many digital minds, but doubt whether we are in fact not-digital humans poised to create them, because in that case not-simulated experiences like ours would be far outnumbered by simulations of the real-seeming predicament we appear to be in, such that we can't tell the difference. And if we are in one of those simulations, then presumably we are in a position of much less influence over digital minds.

Second, we might accept that we are the real and not-digital humans we appear to be, but use that as a reason to doubt that digital minds eventually vastly outnumber humans, on pain of finding ourselves in an inexplicably surprising — and weird — minority. This is similar to the ['doomsday argument'](https://en.wikipedia.org/wiki/Doomsday_argument) for believing that future humans will not vastly outnumber humans to date.

Either way, we might therefore doubt that we are really poised to _create_ or influence many digital minds, despite appearances. And that might be relevant for (e.g.) how much we prioritise efforts to make sure things go well for digital minds we create.

In this post I try to figure out whether those arguments work. Ultimately, I think the answer is a qualified 'no'. The main reason is that I think neither argument works, at least not decisively. But even if they worked to significantly undermine belief in our influence over digital minds, I think there remain good reasons to act as if we will have that influence.

This doesn't need to be read in full — the parts [on the simulation argument](#the-simulation-argument), and [whether it would be surprising to be outnumbered by digital minds](#is-it-surprising-to-be-outnumbered%3F), can be read separately.

## The intuitive arguments

Suppose it is soon possible to cheaply create digital minds, perhaps with experiences like our own. Then in the fullness of time, digital minds would greatly outnumber human minds. But if so, _how come you're not one of them_? And shouldn't that sense of surprise make the assumption feel less likely somehow?

This feels vague and confused, but it does raise some questions I find interesting.

First: to the extent you are concerned about the possibility of 'simulating' large numbers of humans, you might wonder about the grounds on which you can assume _you_ are not simulated. But then you might think that most simulated humans can't run their own simulations inside their simulated worlds. So either there are very few simulated humans, or otherwise worlds in which simulated humans are hard to instantiate outnumber worlds in which they are easy to instantiate, and in either case you might feel compelled in the end to think that you are not in a world that readily admits of creating simulated humans.

Or, second: even if many of the digital minds we could create wouldn't be simulated humans, and would recognise themselves as digital minds; wouldn't that still make it pretty weird that we then find ourselves in the tiny minority of non-digital minds? Aren't we supposed to assume that we're [_not_ special](https://en.wikipedia.org/wiki/Copernican_principle) like that?

Ok. Let's see if these thoughts lead anywhere.

## The simulation argument

Nick Bostrom's [simulation argument](https://simulation-argument.com/simulation/) (SA) argues that at least one of the following is true:

1. The human species is very likely to go extinct before reaching a “posthuman” stage;
2. Any posthuman civilisation is extremely unlikely to run a significant number of simulations of their evolutionary history (or variations thereof); so-called 'ancestor simulations';
3. We are almost certainly living in a computer simulation (the 'simulation hypothesis')

If (1) and (2) are false, and the argument works, then (3) must be true, viz. that we are almost certainly living in a computer simulation. Bostrom's reasoning here is based on the fraction of 'human-type experiences' that would then be simulated. Picking up the argument part way through with some embellishment, we begin with some notation:

- $f_P$: Fraction of all human-level technological civilisations that survive to reach a posthuman stage
- $\bar{N}$: Average number of ancestor-simulations run by a {% note 'posthuman civilisation' %}An 'ancestor simulation' being a simulation of the 'mental history' of humanity up to the point that it becomes 'posthuman'. 'Posthuman' essentially marks the point at which humanity could run ancestor simulations if it were interested in doing so.{% endnote %}
- $\bar{H}$: Average number of individuals that have lived in a civilisation before it reaches a posthuman stage

The fraction of all observers with human-type experiences that live in simulations ($f_{sim}$) is then:

$$f_{sim} = \frac{f_P \bar{N} \bar{H}}{f_P N \bar{H} + \bar{H}} = \frac{f_P \bar{N}}{f_P \bar{N}+ 1}$$

Now let $f_I$ stand for the fraction of posthuman civilisations interested in running ancestor simulations, and let $\bar{N}_I$ stand for the average number of such simulations run by 'interested' posthuman civilisations, s.t.

$$\bar{N}= f_I \bar{N}_I$$

Thus:

$$f_{sim} = \frac{f_P f_I \bar{N}_I}{f_P f_I \bar{N}_I + 1} $$

Now Bostrom argues that $\bar{N}_I$ is extremely large, since a posthuman civilisation interested in running ancestor simulations is likely to have at its disposal very large amounts of computing power — enough to simulate many civilisations' worth of experiences per simulating civilisation. And if $\bar{N}_I$ is extremely large, then at least one of the following options must be true, corresponding to the options above:

1. $f_P \approx 0$
2. $f_I \approx 0$
3. $f_{sim} \approx 1$

Let's rule out (1) $f_P \approx 0$ and (2) $f_I \approx 0$. That is, let's assume that (1) non-simulated civilisations at the level of technological advancement of our own do have a non-negligible shot at running ancestor simulations (among other kinds of simulation); and (2) a non-negligible fraction of such civilisations which become able to run such simulations choose to do so. It follows that almost all observers with human-type experiences are simulated.

### An indifference principle

That doesn't yet establish that _we_ are most likely simulated. For that we also need some kind of “indifference principle”. Something like this general principle:

> Given a way to divide some (finite) class of observers into one or more sub-class such that the observers have no evidence that they are more or less likely to be in a particular sub-class relative to any other observer in that initial class, then each observer's credence that they are in a particular sub-class should be equal to the number of observers in that sub-class as a fraction of all observers in the initial class.

This is probably too wordy. But hopefully the thought is clear, and Bostrom explains how it cashes out:

> [I]f we knew that a fraction $x$ of all observers with human-type experiences live in simulations, and we don’t have any information that indicate that our own particular experiences are any more or less likely than other human-type experiences to have been implemented _in vivo_ rather than _in machina_, then our credence that we are in a simulation should equal $x$.

{% note 'Thus:' %}A small note here: I think this is clearest if we get to assume that the observers know $f_{sim}$, otherwise it's a little confusing what it means to say their credence that they are simulated _should_ equal $f_{sim}$. But in the case where the observer doesn't know $f_{sim}$, perhaps we're saying that a rational observer should bring their credence into line with their best guess of $f_{sim}$. {% endnote %}
$$\text{Cr}(\text{Sim}\mid f_{sim} =x)=x$$
Note that the general indifference principle I give, and the specific claim Bostrom makes, needn't only apply to {% note 'observers with *identical* experiences' %}I also deliberately assume having a way to _count_ observers to avoid paradoxes where the measure is ambiguous, like [Bertrand's paradox](<https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)>).{% endnote %} — they can accommodate observers with different experiences, so long as those experiences don't offer evidence about being simulated or not beyond just knowing $f_{sim}$.

### If you can run simulations then maybe you're in one?

Suppose you're quite concerned that we may soon build (or we have already built) AI systems which count as 'digital minds'. In the language of the simulation argument, I think you'd agree that (1) non-simulated civilisations at the level of technological advancement of our own do have a non-negligible shot {% note 'at running ancestor simulations' %}Maybe ‘ancestor simulations’ may be unnecessarily restrictive: there might be other kinds of simulated observers with experiences _such that those experiences do not offer evidence that they are more or less likely to be non-simulated among simulated and non-simulated minds including our own_ (in other words, digital minds that don't know how to specifically tell they're not human, and we don't know how to specifically tell we're not them).{% endnote %} (among other kinds of simulation); and (2) a non-negligible fraction of such civilisations which become able to run such simulations choose to do so. In other words, it seems fair to move between “it seems pretty damn likely that _this_ kind of civilisation will end up doing things like ancestor simulations” to “a non-negligible fraction of _similar_ civilisations will”. Let's call people inside ancestor simulations **simulated humans**.

{% image 'writing/digital-dilemma/computers.webp' 'Computers' %}

But notice that we've reached a point where if we (i) buy SA, (ii) take the prospect of digital minds ‘seriously’, and (iii) agree that taking digital minds seriously implies thinking civilisations like ours run many ancestor simulations, then (by the structure of SA, above) it looks like we're moved to accept that _we_ are likely to be simulated ourselves.

In fewer words:

1. Assume $f_P > 0$, $f_P \not\approx 0$
2. Asume $f_I > 0$, $f_I \not\approx 0$
3. Hence $f_{sim} \approx 1$

Of course, one response for the person who is {% note 'concerned about digital minds' %}For instance, someone who sees the prospect of digital sentience as a reason to care a lot and maybe work to [improve how the development of artificial sentience goes](https://80000hours.org/problem-profiles/artificial-sentience/), or prevent certain kinds of artificial minds from being developed at all.{% endnote %} here is to reject SA. But another response might be to bite the bullet, and accept that we're likely in a simulation if digital minds are easy to make, but not to change your mind about it being really important to make sure the minds _we_ simulate are looked after.

### Emulate or be emulated?

But maybe that bullet-biting thought is missing something; roughly that (according to SA) not only are you likely in a simulation if you assume a non-negligible fraction of not-simulated worlds like the one you observe run ancestor simulations, but _also_ that you should expect running the same kind of simulations in _your_ world to be very difficult or impossible. That is, _not only_ should most human-like observers expect to be simulated, but also most should not expect to be able to simulate many _more_ human-like experiences.

Here's a simple model where what I just said is true. Suppose that you just can't run simulations of human-like experiences inside of simulations. Then all observers are either not simulated, in which case they can run simulations, or they are simulated, in which case they cannot run simulations. SA effectively says that either (i) simulations of human-like experiences are very rare, or (ii) the large majority of observers are simulated (and cannot themselves run sims). In either case, you — finding yourself with human-like experiences — should think it is very unlikely that running simulations of human-like experiences in _your_ world is impossible.

We could say:

- $\bar{S}$ — Average number of human-like observers eventually simulated by a non-simulated human-level civilisation
- $\bar{H}$ — Average number of non-simulated human-like observers per human-level civilisation

Now call simulating human-like observers 'difficult' for _you_ just in case either (i) you're not simulated, but **fewer** human-like observers will be ever be eventually simulated than non-simulated people, or (ii) simulation is impossible because you're already simulated. Call the chance simulating human-like observers will be difficult for you is just $S_\text{diff}$.

Assuming you are randomly drawn from all human-like observers, then:

$$
S_{\text{diff}}=\begin{cases}
  1  & \text{if }\bar{H}>\bar{S} \\
  \frac{\bar{S}}{\bar{S}+\bar{H}} & \text{if }\bar{S}>\bar{H}
\end{cases}
$$

Notice $S_{\text{diff}}>\frac{1}{2}$ _always_, no matter $\bar{H}$ and $\bar{S}$. Also notice $S_{\text{diff}}\approx 1$ whenever $\frac{\bar{H}}{\bar{S}} \gg 1$ or $\frac{\bar{S}}{\bar{H}} \gg 1$, in other words when simulated human-like observers are either very rare or very common.

### Levels to it

Clear enough; except I'm not sure why we should assume that human-simulations-inside-simulations are strictly impossible. In particular, if you think (digital, computer) simulations of human experiences are possible at all, then you're probably sympathetic to a [computational view of mind](https://plato.stanford.edu/entries/computational-mind/), roughly that for any conscious experience, there is some computational process (being agnostic about how it's implemented) sufficient to give rise to that experience, or which just is equivalent to it. And you probably think that that [every effective computation can be implemented by a Turing machine](https://plato.stanford.edu/entries/church-turing/), and surely any simulated environment home to observers with full-blown conscious experiences is Turing complete, in the sense that if its inhabitants can interact with their simulated world at all then they can build computers in it.

But presumably there _are_ limitations to how many simulated minds within simulated worlds within simulated worlds with simulated minds — and so on — you can nest. These are resource limitations. Of course, if you begin with finite memory or a finite number of operations you can do, then there's a limit to the amount of anything you can simulate. If each simulated world itself contains on average more than one simulated world, then geometric growth in the number of simulated 'worlds' with levels of simulation is going to eat up that budget. More pointedly, we also tend to think that _simulating_ some computation within a simulated world is more computationally expensive than just running the computation more 'directly'.

Think about those people who [build](https://www.minecraft.net/en-us/article/deep-thought) programmable [computers inside of Minecraft](https://www.youtube.com/watch?v=IOoy_eG8efI). Those simulated computers have enough memory to add two single digit numbers in just the same way real computers can. Except, of course, the computer running Minecraft could add those same numbers far quicker by adding them 'directly'. With enough time and memory, a [computer within Minecraft could indeed run Minecraft](https://www.youtube.com/watch?v=-BP7DhHTU-I), and within that Minecraft-within-Minecraft game a computer could be built to find the prime factors of 12. But, modulo some complications, we might imagine that the slowdown factor between base and simulated Minecraft should be similar to the slowdown factor between the base computer and base Minecraft.

And of course we can keep going with that. [This incredible website](https://oimo.io/works/life/) shows how the Game of Life can be [emulated, recursively](https://twitter.com/finmoorhouse/status/1634945047811751938), within the Game of Life.

<video controls width="100%" src="https://images.finmoorhouse.com/writing/digital-dilemma/gol.mp4"></video>

Notice in the above video how each level up you rise, each time many cells zoom out to reveal they are part of a larger cell and a larger Game, the slower the new game relative to the clock speeds of the 'base layer' (if there is one).

Now, I read Bostrom's original SA argument as just talking about the number of non-simulated compared to simulated human-type experiences, and not talking about what fraction are {% note 'simulation-within-simulation and so on' %}If the human species is decently likely to run ancestor simulations, then _whether or not_ those simulations in turn run simulations (and so on...) you can always conclude you are likely in a simulation.{% endnote %}.

But we could finesse the original argument to see what it might say about where in this stack of sims-within-sims you should expect to find yourself.

To begin with, we might guess that the original argument applies at every 'level' of simulation — a kind of 'relative' variant on the simulation argument. The first level encompasses just those observers in 'base' reality but not simulated by it; the second encompasses just those observers simulated by base reality but not simulated within any simulations, and so on.

A simple model:

- $H$ — Number of non-simulated human-like experiences
- $S_N$ — Number of human-like experiences eventually simulated at level $N$ but not $N+1$ or above (where $N=0$ is non-simulated reality)
- $f_N$ — Ratio of human-like experiences eventually simulated at level $N$ to at level $N-1$

Then the number of simulated human-like experiences would be:

$$\sum_{N=1}^{\infty} H \prod_{i=1}^N f_i = H(f_1 + f_1f_2 + f_1f_2f_3 + \cdots)$$

Assuming $f_N$ is a constant $f$:
$$\sum_{N=1}^{\infty} H \prod_{i=1}^N f = H(f + f^2 + f^3 + \cdots)$$

The sum to infinity of a geometric series is just:

$$S_{\infty} = \frac{a}{1-r}$$

So the number of simulated human-like experiences is:
$$\sum_{N=1}^{\infty} H \prod_{i=1}^N f = \frac{Hf}{1-f}$$

Now in the original argument, Bostrom is essentially arguing that $f_1$ is either (1) very large ($f_1\gg1$) or (2) very small ($f_1\approx 0$). But what if, as assumed, $f$ is constant for every layer? Then the 'relative' variant on the simulation argument might go something like: _for any layer of simulation including base reality, one is true:_

1. Civilisations in _that layer_ are extremely unlikely to themselves eventually run a significant number of simulations of human-like experiences ($f\approx 0$);
2. Almost all observers live in simulations _relative to the layer being considered_ (such that _you_ are almost certainly simulated relative to this layer) ($f\gg1$)

Option (1) {% note 'would still work' %}Although needn't be true for the reason Bostrom argues it would be true, namely that either almost no (in this case simulated) human-level civilisations would survive to post-humanity, or almost none would _choose_ to simulate. Perhaps instead, on this 'constant slowdown factor' model, a simulated post-human civilisation might simply find it technologically difficult somehow.{% endnote %} on this extended version of the argument. But, of course, option (2) can't be right. $f$ can't be a constant $> 1$ at pain of _always_ expecting to be 'more simulated' than any layer you're considering, and proliferating experiences and observers without bound.

$f$ _could_ also hover in the $0.5 < f < 1$ range, in which case most human-like experiences _would_ be simulated despite the total number of experiences being finite. Though I do think, given the many orders of magnitude that $f$ could span over, $0.5 < f < 1$ _would_ feel surprising. Note also, whenever $f < 1$, the ratio of simulated experiences to 'same level' experiences with respect to _some_ level of simulation (call it $f_{\geq n}$) would equal the ratio of all simulated to all non-simulated experiences ($f_{\geq 0}$):

$$f_{\geq n} = f_{\geq 0} = \frac{f}{1-f}$$

And this is a somewhat cute result, that on this model, when $0.5 < f < 1$ _any_ observer can expect more simulated experiences relative to their 'level', and that ratio doesn't depend on whether they are themselves simulated.

But It's worth pausing here. On my model, I'm assuming it's about as hard to simulate minds _within_ simulations (including 'ancestor simulations') as it is to do them in the real world. So if simulations are cheap to run in the real world, then they are cheap to run _within_ those simulations. Furthermore, we have good reasons to think that simulations plausibly _will_ be cheap to run in the real world. But that implies they will be cheap at every level, and the number of simulated levels grows without bound. Something is clearly confused here. What gives?

I see two options. The first is to think that simulations are very cheap in the real world, {% note 'but expensive in simulated worlds' %}Imagine some future version of Minecraft where the non-playable characters or animals in the Minecraft world are complex enough and appropriately designed to count as 'observers' with 'experiences'. For roughly the reason Bostrom gives in his original paper (roughly, silicon-based computation is cheaper and easier to scale than brains) I think it's fair to say that we could bring more Minecraft chicken experiences into the Minecraft world than real chicken experiences into the real world. But, within the Minecraft world(s), we should not expect to be able to build computers within the game able to simulate more Minecraft chickens than base-Minecraft chickens — after all, computers in Minecraft are necessarily just vastly bigger than the chickens.
{% image 'writing/digital-dilemma/chicken.png' 'Minecraft chicken' %}
{% endnote %}. This would be a fundamental difference between the real world and a simulated world: where there is an efficient way to simulate certain experiences in the real world, but not in the simulated world. In the model above, this would be like setting $f_0\gg1$, but $0 < f_n \ll 1$.

But examples like that violate an assumption from the original simulation argument, namely that simulated human-like experiences are — _by stipulation_ — indistinguishable from the perspective of those experiences from non-simulated human experiences (or indeed real non-human experiences). For instance, a character in a Minecraft-like simulation _would_ have a way to test whether they are being simulated, viz. to _try to build a computer running Minecraft faster than realtime_.

What gives? Well, there is a second option, which is just to drop the assumption of a constant slowdown factor (which $f$ proxies for). In particular, we _could_ imagine it being the case that people-within-simulations notice they seem close to creating simulated people cheaply, which could come to outnumber them. And indeed this _is_ what I think you should picture when you picture an 'ancestor simulation': simulated humans in a simulated world, some of whom are beginning to notice that digital minds could soon proliferate. But also perhaps those simulated humans could _succeed_ in creating digital minds within simulated worlds. And perhaps those sim-within-sim minds _do_ eventually come to outnumber the simulated humans. There is no paradox here as long as things either stop or reach a limit eventually — once the (assumed) finite computational resources of the base-level simulation are exhausted. But before that point, more base-level resources could be spent on upholding the simulations-within-simulation than the simulated humans: a 'top-heavy' world that grows until it can't grow any longer.

I think this second option is the better reply to the apparent tension between "ancestor simulations should always seem cheap to run from the perspective of a simulated human-like observer" and "computational resources are finite".

Unfortunately, that means that we can't rely on cute models like the constant-$f$ model I suggested above.

### Do stakes and likelihood cancel out?

For simplicity, let's loop back to an extremely simple two-level model. Let's say there are $N_{\neg S}$ non-simulated human-like observers (viz. real humans) and $N_S$ simulated observers, which cannot run simulations. Let's assume, finding yourself with human-like experiences, your credence in being in either group given the relative fraction of that group among all observers is just that fraction:

$$
\text{Cr}\Big(\text{Sim}\Bigg|\frac{N_S}{N_{\neg S}+N_S}=x\Big)=x
$$

$$
\text{Cr}\Big(\neg \text{Sim}\Bigg|\frac{N_{\neg S}}{N_{\neg S}+N_S}=x\Big)=x
$$

Now let's use $\text{Inf}$ to stand for the number of simulated human-like experiences as a fraction of _the number of observers in your layer_, such that if you are already simulated, then $\text{Inf}=0$, else $\text{Inf}=(N_S)/(N_{\neg S})$. I'm calling it $\text{Inf}$ because you could reasonably think of this ration as a proxy for how much _influence_ you have over simulated human-like experiences. Assume all non-simulated observers have influence over all simulated observers in proportion to the ratio of simulated to non-simulated observers. So: if you are not simulated, but there are or will be a large number of simulated observers, then you have a lot of influence. You can think of $\text{Inf}$ as the number of simulated observers per person from your perspective.

Using $\neg S$ to stand for "I am not simulated" and $S$ for "I am simulated". So:

$$
\text{Inf}=\begin{cases}
  0  & \text{if }S \\
  \frac{N_S}{N_{\neg_S}} & \text{if }\neg S
\end{cases}
$$

Of course, by stipulation, you don't know whether you're simulated or not. But let's imagine you do know $N_S$ and $N_{\neg S}$. Then your credence in being not simulated $\text{Cr}(\neg S)$ is just:

$$
\text{Cr}\big(\neg S\big)=\frac{N_{\neg S}}{N_S+N_{\neg S}}
$$

Finally, we can represent your _expected influence_ with respect to simulated minds, $\mathbb{E}(\text{Inf})$:

$$
\mathbb{E}(\text{Inf}) = \text{Cr}(\neg S)\frac{N_S}{N_{\neg_S}}
$$

$$
=\frac{N_{\neg S}}{N_S+N_{\neg S}}\frac{N_S}{N_{\neg_S}}=\frac{N_S}{N_S+N_{\neg_S}}=\text{Cr}(S)
$$

So, on this model, the _expected number of simulated observers per person from your perspective_ is equal to the fraction of all observers who are simulated, which is also (given some kind of indifference principle) your credence that you are simulated.

Therefore, $\mathbb{E}(\text{Inf})<1$ no matter how many simulated and non-simulated people there are, and $\mathbb{E}(\text{Inf})$ is highest when it is _least_ likely that you are non-simulated.

In this sense, the less likely it is that you are not simulated, the more influence you _would_ have if you weren't, and here these two factors _more or less_ cancel out. Of course this is a {% note 'stupidly simple model' %}In particular, I'd be interested to see it extended to multi-level models.{% endnote %}, but I think {% note 'the intuition is sound' %}Something like: _yes, credence in the prospect of digital minds might make it less likely you are not already a simulation of a human, but that can't push down the expected value of trying to influence human simulations below some threshold._{% endnote %}.

### Taking stock

Here's what I see as the back-and-forth so far:

- Bostrom's simulation argument invites a framing on which there are two kinds of 'human-like' observer: actual humans in a human-level civilisation, and simulated humans in an 'ancestor simulation'. Simplifying some, the argument says you either need a good reason to think human-level civilisations basically never run ancestor simulations, or you should conclude that you are a simulated human (the _simulation hypothesis_).
- If you think it's plausible that a human-level civilisation like ours could soon create many more simulated minds than flesh-and-blood human minds, then that seems like a reason to accept the simulation hypothesis.
- Yet, if you're in a simulation, then presumably you have less influence over how simulations are set up, and possibly no influence. In this sense, it feels like credence in the plausibility of digital minds somehow undermines the prospect of being able to influence them.
- But even if the simulation argument is correct, it doesn't say whether simulated human-like observers themselves are in a position to create digital (simulated) minds. That invites a question about what fraction of observers that are simulated at all are in a position to create their own simulations.
- And in fact we _can_ come up with setups where most human-like observers can expect, in the fullness of time, to be {% note 'outnumbered by simulated human-like observers' %}And therefore by simulated minds in general, since simulated human-like observers are just a kind of simulated mind.{% endnote %} from the perspective of their 'level' or 'world' of simulation. But the assumptions seem a bit fragile.
- Finally, we can notice that, in terms of guiding action, the 'raised stakes' of having more influence over simulated minds might compensate for the diminished likelihood of have influence over simulated minds, such that the two factors sort-of cancel out.

Finally, I'll note that I now think the simulation argument is a little confused, at least on Bostrom's original framing. The core of the confusion is in the choice of 'reference class' from which we assume we've been sampled. We can't just say "these exact experiences" because probably you are the only person with your exact experiences, so there's no statistical argument about how most of your experiences are simulated. But then can't I just say, “Sure, sims will have 'human-like' experiences, whatever that means. But they won't be exactly _these_ experiences. So why is it relevant that most 'human-like' experiences are simulated? Why am I supposed to feel forced into being uncertain whether I'm a sim or not?”. It is surprisingly unclear how to resolve this wrinkle, although ultimately much of the core intuition survives. If you're interested, there's a very good discussion in [Joe Carlsmith's article on simulation arguments](https://joecarlsmith.com/2022/02/18/simulation-arguments#v-will-our-descendants-ever-simulate-my-bookshelf).

## Is it surprising to be outnumbered?

I hope these are valid points, but remember that the original motivation for all this discussion was a vague perplexity along the lines of “if digital minds will soon outnumber human ones, _why aren't we them_?”. That is, “wouldn't it be somehow surprising, or unlikely-feeling, if we were humans in a position to create and influence digital minds which outnumber our own?”.

Remember that all these points came from inside a particular framing suggested by Bostrom where we only consider _specific_ kinds of sims; namely ‘ancestor simulations’. That specific focus makes it easier — possible, even — to talk about ‘indifference principles’ between different populations with relevantly similar observations. In particular, imagining that the sims in questions cannot tell whether they are in a simulation makes it meaningful to ask whether _we_ are sims.

But for reasons I'll explain I think that might be too narrow a framing for the question we're looking at. So unfortunately I don't think they're close to the whole story.

Two points here. First, just note how this narrow focus on ancestor sims sometimes gives the false impression that that _most_ sims (as in something like ‘coherent conscious digital experiences’) are ancestor sims. But Bostrom's simulation argument doesn't rely on that assumption or argue for it, and I can't see why it would be true. In fact, when I imagine a world in which digital minds outnumber biological human minds, I sometimes think of [emulated human brains](https://ageofem.com/) interacting with the real world (not a simulated world), and I sometimes think of a much wider variety of minds — vast and small, discrete and tightly networked, familiar and grossly alien, interacting with one another, with humans, with the physical world, with their own various simulations. “Simulated humans in a simulated human world” is surely a small slice of that space of feasible digital minds.

Second, recall that motivating question: “if digital minds will soon outnumber human ones, _why aren't we them_?”. That question is ambiguous. You could read it as (i) “How do we actually _know_ we aren't {% note 'sims' %}That is, _specific_ kinds of digital minds.{% endnote %}, despite appearances to the contrary?”. That's the question which I think the simulation argument framing gets at. But you could also read the question as (ii) “Let's say we're _not_ digital minds. Still, _if_ we do eventually create digital minds which vastly outnumber us, wouldn't it be kind of surprising or weird that we _do in fact_ find ourselves as non-digital minds? And does that tell us anything about the likelihood that we do eventually create many digital minds?”. That's the question I want to think about now.

What we have to work with here is just a vague feeling of weirdness, not a precise argument. In my head it is the same kind of weirdness that Elon Musk might feel upon waking up and looking in the mirror. Wouldn't it simply feel kind of _weird_, or _fishy_, or _surprising_ to look in the mirror and see Elon Musk look back? _Maybe_ there is some upshot to this realisation for his beliefs, in particular maybe he should feel some degree less confident that things are as they seem. But let's think about that initial sense of weirdness.

### What counts as weird?

One difficulty here is figuring out exactly whether and why it is legitimate for Elon Musk to feel more surprised at his predicament than most other people. After all, you might think the chance that any living person finds themself _as that_ person, given that they are some living person, is always roughly one in eight billion. Similarly, if you shuffled a pack of cards and found them perfectly sorted in order from aces through kings, that would feel more surprising, or weird, than some more “random-looking” deal, though no particular “random-looking” deal is more likely than the perfectly sorted deal after a fair shuffle. Every particular deal is one of $52!$ equally likely deals, after all. Yet I think it certainly _would_ feel ‘weirder’ to deal a perfectly ordered deck, or to wake up as Elon Musk; like more of a cosmic coincidence.

If this _weirdness_ thing sounds vague, then I agree! Maybe it can be made more precise, maybe not. But I'll point out that if this feeling of weirdness confronts you, you have a few options:

1. _Surprised acceptance_. One living person in roughly eight billion just has to accept that they are Elon Musk. Presumably some people will shuffle playing cards into some kind of rare, bizarre, coincidental order. Similarly, most people don't win the lottery, but some do, and those people don't require much evidence to end up believing that they just got lucky — a triple-check of their winning numbers should do it. Lottery winners and Elon are kind of just _forced to be surprised_ in this sense.
2. _Indifferent acceptance_. I see this as a variant of acceptance. You accept that things are as they seem. But you also deny that you are ‘forced to be surprised’, or that this outcome is somehow ‘weird’ in any deep sense.
3. _Denial_. You deny that things are as they seem, on the grounds that things would be too weird (somehow) if they were.

Often one of these options does feel more appropriate to me than another:

- You get a royal flush in the first game of high-stakes poker you ever play. You react with _surprised acceptance_.
- A magician writes a prediction in an envelope. She asks you to select a card, and it looks like a free selection. Then she reveals that the prediction matches the card you appeared to freely select. You react with _denial_ — you no longer believe that was a free selection.
- You shuffle a deck of cards, and deal them one by one to a friend. As you deal them, your friend looks increasingly incredulous, jaw hanging open. “How is that possible?”, he says, “don't you know the chances were one in 52 factorial?!” You react with _indifferent acceptance_.
- In a deep stargazing conversation, your friend ponders “of all the possible people we could have been, isn't it crazy that we're _us_? Isn't it crazy we were among the few possible people selected to have been born _at all_?”. You are feeling less deep, and react with _indifferent acceptance_. After all, even if it is true that we could have been another of many other possible people, that doesn't seem like a reason to doubt that we appear to find ourselves as these particular people. Something feels confused here.

Notice how the first and second examples aren't all that philosophically interesting. In both cases, you got a feeling of "huh, that's surprising", and then figured out what that feeling was tracking. In the magic case, you already had a strong prior that the magician was going to trick you. Once you conditioned on seeing her prediction matched the card you ‘chose’, you correctly infer the most likely explanation; that she did not predict your free selection. In the poker case, on seeing your royal flush, you might upweight the possibility that the card dealing is somehow unfair, but not enough to change your mind that you got a fair royal flush. In both cases, you broadly know what's going on in terms of how to update your beliefs in light of the evidence in front of you.

In the card shuffling example, your friend is correct that the chance of your particular deal was 1 in $52!$, but his reaction of incredulity seems inappropriate. In particular, you see no special reason to update any of your broad beliefs about what's going on, and [no reason to doubt](https://www.lesswrong.com/posts/JD7fwtRQ27yc8NoqS/strong-evidence-is-common) that you got the deal you appear to have dealt. Similarly in the stargazing example, your friend's attitude seems less comically inappropriate — he's gesturing at _something_ — but you don't see why or how you should update any of your beliefs based on his observation, and it's unclear he's even suggesting you should.

My question is how we should react to our apparent predicament with respect to digital minds, namely that it looks like we might eventually create very many of them. Should we think that it is somehow ‘weird’ or ‘surprising’ at all that we appear not to number among those digital minds? And if so, should we update our beliefs about that initial appearance?

Now the question is almost exactly the same, structurally speaking, as the notorious ['doomsday argument'](https://en.wikipedia.org/wiki/Doomsday_argument), roughly that if humanity survives a long time then we'd number among the very earliest people, and _wouldn't that be kind of weird?_ Again, here we have an intuitive “kind of weird” notion. If we ordered all human lives from the past to the future and assume you are randomly selected from the order, it would be just as unlikely that {% note 'you find yourself in, say, the 63.8 to 63.9% bucket than in the 0 to 0.1% bucket' %}Imagine humans living roughly in the _middle_ of all human lives with no knowledge of human history beyond the last few preceding generations. They might wonder, “Some claim humanity has both a vast past behind it, and a vast future ahead of it. But if we are just as likely to have found ourselves as a human in the past or in the future, isn't it weird that we find ourselves in this narrow slice of living humans? Isn't that unlikely enough to reject the claim?”{% endnote %}, but the latter would seem especially weird. Similarly, it might seem weird that we're not digital minds if we soon make many of them, but it's not at all clear what that is supposed to mean for _whether we should believe_ that we will in fact make very many of them.

### Rooms with buttons

Here's another way of seeing the difference between the simulation argument framing, and the present framing:

> **Rooms with buttons:** There are one hundred cubicles, each with a person inside, and a button on the wall. For every button, pressing the button creates one hundred identical rooms with a person and a button, but the buttons are ineffective. Otherwise the cubicles are identical, and you know that most people will press the button. You find yourself in a room facing a button. Will pressing it create one hundred people?

Of course this is supposed to mirror the original, simulation argument-derived line of thought. Here I suggest the answer is "probably not". There are plenty of variants of this kind of thought experiment in the small literature on ‘anthropic’ principles, but this seems to me like one of the easy cases. {% note 'In particular, it mirrors a case [given by Bostrom](https://anthropic-principle.com/q=anthropic_principle/doomsday_argument/) in the sidenote attached to this sentence.' %}Imagine a universe that consists of one hundred cubicles. In each cubicle, there is one person. Ninety of the cubicles are painted blue on the outside and the other ten are painted red. Each person is asked to guess whether she is in a blue or a red cubicle. (And everybody knows all this.)Now, suppose you find yourself in one of these cubicles. What color should you think it has? Since 90% of all people are in blue cubicles, and since you don’t have any other relevant information, it seems you should think that with 90% probability you are in a blue cubicle.{% endnote %}

But then comes the obvious point that most digital minds _will probably be able to identify themselves as such_. That suggests something like:

> **Rooms with painted walls:** The Creator flips a fair coin. If it comes up heads, she creates ten cubicles, each with the inner walls painted visibly blue. In each cubicle, there is one person. If the coin comes up tails, she creates one thousand cubicles. The walls of ten are painted visibly blue, and the remaining 990 are painted visibly red. You wake up in a cubicle and see its blue walls. What's the chance the coin came up heads?

{% image 'writing/digital-dilemma/rooms.webp' 'Cubicles'  %}

Or, making the example feel more relevant:

> **Rooms with buttons and painted walls:** The Creator flips a fair coin. She creates one hundred cubicles painted visibly blue on the inside, each with a button on the wall. If the coin comes up heads, she rigs the buttons so that when pressed, one thousand cubicles are created, each painted visibly red. If it comes up tails, the buttons do nothing. You know that basically everyone presses the button, whether or not it works. You wake up in a cubicle and see its blue walls and the button. What's the chance the button works?

In this example, there are more 'observers' in the case where the buttons work, but the observers can totally tell if they are in a room created by a button or not. This is like the more-general-but-more-hand-wavey second framing I discuss, in which you're confident you're not simulated, but still worry it would be somehow fishy if you were in the vanishing minority of non-simulated observers (and less fishy if there just aren't ever many digital minds). It is also an analogue of the Doomsday argument.

This case is less straightforward. There is an intuitive case for an answer of 50% heads vs tails (there are the same number of observers in rooms with buttons on either heads or tails, and heads and tails are equally likely), and an intuitive case “very likely heads, i.e. very likely the buttons don't do anything” (it is far more likely I'd find myself in a room with a button compared to no button if the coin came up heads). I won't go into details here, but I think [Joe Carlsmith's essay on the different assumptions](https://jc.gatspress.com/pdf/SIA_vs_SSA_revised.pdf) which give different answers ('SSA' vs 'SIA') is great.

Also note that these questions can be decision-relevant: there are cases where your answer matters for what you should decide to do. Consider:

> **Saving the cubicles:** The Creator flips a fair coin. If it comes up heads, she creates ten cubicles, each with the walls painted visibly blue, each with one person inside. If the coin comes up tails, she creates 1,000 cubicles. The walls of ten are painted visibly blue, and the remaining 990 are painted visibly red, again a person in each. You wake up in a cubicle and see its blue walls. Then you hear an announcement, which you know would have been played in either outcome: _all the cubicles except yours will soon be destroyed. You can choose to save either all the blue-painted cubicles, or half of all the red-painted cubicles, if there are any._ Red and blue cubicles count the same for you — all you care about is saving the most expected cubicles. Which colour cubicle do you save?

The so-called ‘self-sampling assumption’ (SSA) asks that you reason “as if you were a random sample from the set of all [actual] observers”. That puts a 99.01% probability of the coin having landed heads, and so 0.99% on tails (by Bayes' rule). The expected number of red cubicles saved is therefore $0.0099 \cdot 990 \cdot 0.5 \approx 5 < 10$, so SSA recommends saving the blue rooms.

The so-called ‘self-indication assumption’ (SIA), roughly speaking, asks that you reason as if you were a random sample from among all possible observers. There are equally many blue rooms on either outcome from the coin flip, so conditioning on seeing blue gives 50% on heads and tails. The expected number of red cubicles saved is therefore $0.5 \cdot 990 \cdot 0.5 \approx 250 \gg 10$, so SIA recommends saving the red rooms.

{% image 'https://static.wikia.nocookie.net/twinpeaks/images/1/1e/Red_room.jpg/revision/latest?cb=20190902220937' 'The red room' 'Get it?' %}

Again, there is already a rich discussion on which anthropic principle to use in cases like this (and some discussion about how similar questions may be ambiguous or confused somehow). So I won't argue for a particular view at any length.

But think about how these thought experiment are relevant for digital minds. What would these two different perspectives have to say? Assuming there are roughly as many non-digital humans in worlds where we eventually make many digital minds versus worlds where we don't, then on finding that you appear to be a not-digital human, SIA just doesn't take that as evidence that you are more or less likely to be in a world which eventually gets filled with non-human observers. So all SIA cares about is the relative number of observers or 'observer moments' just like your own in either outcome.

SSA, by contrast, says you should reason as if you are a random sample from a set — a 'reference class' — of observers in whichever world materialised. In other words, it updates your prior on what world you're in in proportion to the _fraction_ of observers like you in some reference class in a given world; rather than the _number_ of observers like you. So if the reference class contained digital minds as well as humans, then observing you are human would count as a major update against being in a world where we eventually create many digital minds. But notice SSA needs to answer a question which SIA doesn't, which is _what is this reference class and how am I supposed to know what it contains?_ In particular, why should it include many kinds of digital minds, which might be very different from our own? If you want to avoid the awkwardness of answering that question, [that's one reason](https://forum.effectivealtruism.org/posts/pRBDPFuDoyEPz7hes/sia-greater-than-ssa-part-1-learning-from-the-fact-that-you#III__Can_t_we_just_use_the_minimal_reference_class_) to go in for SIA, which doesn't take the observation that we are human as evidence either way.

Again, there is much more to this discussion, and I just see myself as mapping the question about whether we should be surprised that we're not digital minds to these existing questions about anthropics, rather than trying to answer those existing questions. But if you're interested for my take, then I lean towards SIA, the view that observing we are human shouldn't count as a major update against the possibility of being in a position to create very many digital minds.

Assume we _are_ in such a position — and SIA allows us to think it's likely, unlike SSA — should we view our position with _surprised acceptance_ or _indifferent acceptance_? I think _surprised acceptance_. Although we might assume there are roughly as many human-like observers whether or not we eventually create very many digital minds, it is still a remarkable, potentially very influential, and — yes — _weird_ predicament to find ourselves in. But I think it is less like being temporarily misled by a magic trick, and more like winning the lottery.

That's my best guess, but I'm unsure. That feeling of _weirdness_ lingers, and I still feel a pull to modify my actual beliefs until my predicament feels less vaguely weird, though possible sources of that weirdness feeling pushes me back towards _surprised acceptance_ and away from _denial_.

## Summing up

In the first discussion based on the simulation argument, we were asking a question that remains even if we're confident that ‘real’ humans do create many digital minds. The possibility raised by the simulation _hypothesis_ (i.e. the conclusion of the argument assuming that sims are created) is _where to locate ourselves_ in such a world, and in particular whether we should expect to find ourselves in a simulated world. Then I'm asking what that means for our prospects of being able to ourselves influence other simulated humans, and suggesting that it's complicated, but this line of thinking _should_ probably limit suspicions that we are non-simulated humans vastly outnumbered by simulated humans with observations relevantly similar to our own. And that's relevant to the extent we might (eventually) worry about preventing such 'ancestor' simulations, or improving how they are handled. But I also think this whole argument is shakier than it seems, because it's [unclear what counts as 'relevantly similar observations'](https://joecarlsmith.com/2022/02/18/simulation-arguments#iv-squid-people).

But we don't need to be actually unsure whether we ourselves are simulated to think that, being confident that we're not digital minds, the suggestion that we eventually create vastly many digital minds would need to explain what now seems like a kind of cosmic coincidence that we're not one of them. In other words: “isn't it a fishy that we're _not_ digital minds, assuming we'll make them?”. And that could be another distinct reason to doubt that we'll eventually create many digital minds.

That second thought is structurally similar to the Doomsday argument, which is largely a question about which view to take on questions involving ‘anthropic’ selection effects. Those are deep and murky waters, but the view I find most elegant and least problematic — the ‘self-indicating assumption’ — suggests we are back where we started, relying on our prior guess before we decided to use our ‘appearing to not be digital minds’ as evidence.

In fact, feeling “back where I started” is how I feel overall, having written this. I do think that philosophical considerations like those above can often point in surprising and action-guiding directions, and I don't as a rule think that philosophising always means taking a round trip, or “adds up to normality”. But while some of the arguments here are interesting and fun, and not at all conclusive, my takeaway is to pay most attention to more concrete arguments for (in this case) the possibility of digital minds. And, although I didn't discuss them here, I think those arguments are very compelling.

{% toggle 'Further reading' %}

- Hanson (1998), ['Critiquing the Doomsday Argument'](http://mason.gmu.edu/~rhanson/Nodoom.html)
- [Ajeya Cotra on worldview diversification and how big the future could be](https://80000hours.org/podcast/episodes/ajeya-cotra-worldview-diversification/) (2021)
- Carlsmith (2023), ['Learning from the fact that you exist'](https://joecarlsmith.com/2021/09/30/sia-ssa-part-1-learning-from-the-fact-that-you-exist)
- Bostrom (2002), ['A Primer on the Doomsday Argument'](https://anthropic-principle.com/q=anthropic_principle/doomsday_argument/)
- Bostrom (1996), ['Investigations into the Doomsday Argument'](https://anthropic-principle.com/preprints/inv/investigations)
  {% endtoggle %}
