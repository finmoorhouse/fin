---
title: 10 Bits of Philosophy
permalink: /writing/10-philosophy/
tags: [writing]
date: 2020-07-09
featuredImage: './bookshelf.jpg'
---

I can say, without irony, that I loved learning about philosophy during my undergrad degree. But among those only peering into the world of academic philosophy from a safe distance, I imagine the whole thing might look downright inscrutable. A friend recently asked me what philosophers do all day. It went something like: “I think I have a fairly good mental model of what a day in the life looks like for, say, an astronomer, or a historian, or a biologist. But what do they get up to in the philosophy faculty? Just sit around and *think*?”. There’s a related confusion — which some [extremely](https://www.telegraph.co.uk/technology/google/8520033/Stephen-Hawking-tells-Google-philosophy-is-dead.html) [bright](https://qz.com/960303/bill-nye-on-philosophy-the-science-guy-says-he-has-changed-his-mind/) [people](https://www.huffpost.com/entry/neil-degrasse-tyson-and-the-value-of-philosophy_b_5330216) have apparently succumbed to — about philosophy’s subject matter. Specifically, there seems to be a widely-held (if vague) impression that philosophy is the business of saying grand, deep-sounding things about the universe while refusing to engage with something as effortful as *actual science*. Credit where it’s due — some philosophy is, let’s say, *onanistic*. On the other hand, some of it is actually good.

The currency of contemporary analytic philosophy is the *article*: twentyish pages of title $\rarr$ scene-setting $\rarr$ argument $\rarr$ conclusion. In this post, I wanted to briefly introduce 10 such articles which I really enjoyed from the last few years. Hopefully they’ll give a slightly better impression of (i) what philosophers think about all day; and (ii) why some of that stuff is potentially interesting and worth thinking about.

This turned out to be a long one. I suggest skimming through headers to find a title that captures your attention. Read the introduction, and follow the link to the original article if it didn’t put you off.

## On Denoting — Bertrand Russell

Read it [here](https://www.uvm.edu/~lderosse/courses/lang/Russell(1905).pdf).

The polymath [Frank Ramsey](https://en.wikipedia.org/wiki/Frank_Ramsey_(mathematician)), as on the mark about this as he was about everything else in his too-brief and glittering life, called it a “paradigm of philosophy”.  For philosopher [Peter Ludlow](https://en.wikipedia.org/wiki/Peter_Ludlow), it is “*the* paradigm of philosophy”. Some context — the early 20th century greeted an [optimistic vision](https://en.wikipedia.org/wiki/Linguistic_turn) for doing philosophy: it was out with incomprehensible deepisms and multi-syllable German words, and in with precise analysis of [*language*](https://en.wikipedia.org/wiki/Linguistic_turn). The idea was that most of us use words sloppily and sometimes inconsistently, in large part because we don’t learn language by memorising rules (nor do we need to). That sloppiness leads to confusions and ambiguities; and they in turn generated philosophical ‘problems’. The solution? For each contentious word, grammatical construction, or concept; spell out in perfect clarity what it means and how it works: like a mechanic taking apart an engine to discover what’s causing trouble. The hope was, in piecemeal fashion, to re-construct natural language in unambiguous terms. This was the mission statement of what (roughly speaking) is nowadays called ‘analytic philosophy’ – and *On Denoting* was an early and paradigmatic landmark.

There are many ways of approaching the problem Russell was trying to answer. Here’s one. Consider sentences containing definite descriptions: “the $\phi$…”. Suppose you’re building some kind of machine to understand and evaluate natural language sentences. What should it do when it encounters the word “the”? It might be useful to actually think of an answer here. Here’s what I might say: “whenever you see the word ‘the’, the phrase it is attached to refers to a unique thing. So the word “the” tells you there’s only one of that thing in the domain (context) of the sentence. Therefore, the definite description (‘the’ + noun phrase) *points* to a unique thing in the domain. “The $\phi$ is $\psi$” is true if and only if the thing $\phi$ points to is $\psi$”. Suppose you fed the computer the sentence, “the spotty dog likes to bark.” It should know that there’s only one spotty dog in the context we’re interested in – and the phrase “the spotty dog” has pointed to it. As it reads the rest of the sentence, the computer is expecting to find out about the spotty dog that this phrase has pointed to. It has a representation of a spotty dog; and it’s ready to add something to it. Next, it reads “likes to bark”, and the representation is added to. The crucial feature of this ‘intuitive’ picture of denoting is the idea of denotation as ‘pointing’ – the phrase ‘the spotty dog’ serves to point at a thing in the world. The sentence is then evaluated based on whether it says something true about the thing it’s pointing to.

As it stands, this is vague. What would it say about this sentence – “the present king of France is bald”? Do non-existent monarchs tend to have hair? Who can say? If the phrase “the present king of France” really does ‘point’ to something inexistent, such a sentence would come out as either nonsensical or indeterminate “Hegelians, who love a synthesis, will probably conclude that he wears a wig”). Yet, the sentence, “the present king of France is bald” is clearly just false. It’s not just that this ‘pointing’ account is vague on such questions – it’s inadequate. If the phrase “present king of France” points to anything at all, then that thing doesn’t exist. This was the view of Alexius Meinong: that inexistent things like square circles don’t exist in a full-blooded sense, but they do ‘subsist’ in a shadowy realm of not-real-but-not-quite-unreal entities. In our case, the present king of France has to exist just enough to point at him and say of him, “he doesn’t exist”. That is spooky and  unsatisfying, so Russell rejects it.

If, on the other hand,  the phrase “the present king of France” points nowhere, then how come we can say meaningful things using it? The pointing view seems inadequate to make sense of cases where inexistent things are being denoted. But here’s the kicker: Russell points out that “a phrase is denoting solely in virtue of its form”. Without knowledge of the world, you clearly  cannot read off the grammar of a sentence to find out whether it’s talking about something real. A computer being fed sentences would need to tell how to analyse the sentence just by looking at the sentence. It couldn’t first understand the sentence in order to figure out how to go about understanding it.

Here’s another problem: consider the sentence “I wondered whether the morning star is the evening star.” As it happens, ‘the morning star’ and ‘the evening star’ refer to the same thing: Venus. But if the significance of a definite description is just the thing it points towards, then this sentence might be interpreted as a cry for help — nobody in their right mind wonders whether Venus is identical to *itself*.

Russell’s proposes an alternative to the ‘pointing’ view of definite descriptions. Take a sentence of the form “the F is G”. We want to break this down into simpler statements, which a computer might find easier to understand and evaluate. Here’s an initial step:

1. There’s exactly one F;

2. That F is G.

This is better, but (2) is still ‘pointing’ to something; and pointing is vague and problematic. Here’s an improvement:

1. There’s exactly one F;

2. All Fs are G.

This would be a weird thing to actually say, but notice that if there really is just one F, then “all Fs are G” is true exactly when “the F is G” is true. And no more pointing — progress!

We might break the first sentence down further:

1. There’s at least one F;
2. There’s at most one F;
3. All Fs are G.

This step is useful for translating sentences containing definite descriptions into the sparse language of first-order logic, containing ‘quantifiers’ $\exists$ (there exists…) and $\forall$ (for all…) as basic elements, but no numbers. Quick logic primer: $A\rarr B$ means ‘if A then B’ (B is true whenever A is true). Lowercase letters $x,y,z…$ are variables, like in algebra. For instance, $\forall x(Fx)$ just means everything (in the domain / context) is $F$. The symbol $\wedge$ stands for the logical ‘and’ connective, and $=$ indicates identity. Now we can translate the sentence “the F is G” into first-order logic:
$$
\exists x(Fx \wedge \forall y(Fy \rarr x=y) \wedge Gx)
$$
Reading from right to left, this means: there exists a thing $x$ in the domain such that this thing is $F$, and everything else that is $F$ is also $x$ (there is exactly one thing which is $F$). Oh, and that thing is also $G$ (there is exactly one thing which is $F$, and it’s $G$). In other words: the $F$ is $G$! So “the spotty dog likes to bark” is to be understood as “there’s exactly one spotty dog in this context, and all the spotty dogs in this context like to bark”.

I probably explained that poorly, but I hope it gave some taste for the ambitions of analytic philosophy: to bring confusing questions and vague answers into clearer focus.

[This](https://www.lesswrong.com/posts/np3tP49caG4uFLRbS/the-quotation-is-not-the-referent) by Eliezer Yudkowsky offers a nice sideways take on the above.

## The Unreliability of Naïve Introspection — Eric Schwitzgebel

Read it [here](http://www.faculty.ucr.edu/~eschwitz/SchwitzPapers/Naive1.pdf).

What can you know for certain? If you’ve spent any time learning about philosophy, you’ll at least know that this is *bread and butter* for intro philosophy classes. If you’ve read Descartes and / or watched the Matrix, you’ll know the answer goes something like: I can’t know for certain that the world is really like how it appears to me (could be dreaming), but I can know for certain that certain things at least do *appear* some way to me. To investigate what I am thinking or experiencing right now and report on it is the process of *introspection*. A popular view says that introspection is basically infallible. One argument goes: I can’t be wrong in judging that I *seem* to be e.g. feeling angry / experiencing pain / seeing stars — because seeming to feel angry / experience pain / see stars is just the same as feeling angry / experiencing pain / seeing stars! So Schwitzgebel introduces his piece saying, “Current conscious experience is generally the last refuge of the skeptic against uncertainty.”

The rest of the article re-introduces that uncertainty. For various kinds of introspection, Schwitzgebel patiently dismantles the impression that we should trust it to deliver guaranteed knowledge.

Start with knowledge of your own personality: is there a reason that your impression of how introverted / funny / clever / kind you are is guaranteed to be correct? Clearly not! For instance: people’s estimations of their own intelligence correlates around .2 and .3 with their actual performance on intelligence tests, while their beliefs about their ability to detect lying correlates .04 with their actual performance on tests of this ability. Most people believe they are above average in various aptitudes; while only 2% of high school seniors in one study rated their leadership skills as ‘below average’ ([source](https://journals.sagepub.com/doi/full/10.1111/j.1529-1006.2004.00018.x)). For some of these traits, your guess may even be predictably *less* accurate than the guess of a close peer, since we’re hostage to any number of self-serving biases in assessing our own personality but not in assessing the personality of others. So it goes when we introspect on our skills, aptitudes, motivations, and other dispositions.

What about when we introspect on our own judgements — when we report on the reason we made some (very recent) decision? Same story. In one [famous experiment](http://people.virginia.edu/~tdw/nisbett&wilson.pdf), participants were asked to judge which of four nylon stockings was the best quality. Of the four pairs presented in a row, 40% of the participants chose the rightmost pair. 12% chose the first, 17% the second, and 31% the third. When asked to explain why they made their decision, all the participants referred to the workmanship, elasticity, etc. None mentioned the recency of viewing the pair they chose, or its position relative to the others. Yet (you guessed it) all the pairs were identical. Therefore, all of the reasons given by the participants were false if interpreted literally.

Does introspection on our own emotions fare any better? Here is Schwitzgebel:

> Is it completely obvious to you what the character of that experience is? Does introspection reveal it to you as clearly as visual observation reveals the presence of the text before your eyes? Can you discern its gross and fine features through introspection as easily and confidently as you can, through vision, discern the gross and fine features of nearby external objects?

Consider this example:

> Or consider this: My wife mentions that I seem to be angry about being stuck with the dishes again (despite the fact that doing the dishes makes me happy?). I deny it. I reflect; I sincerely attempt to discover whether I'm angry - I don't just reflexively defend myself but try to be the good self-psychologist my wife would like me to be - and still I don't see it. I don't think I'm angry. But I'm wrong, of course, as I usually am in such situations: My wife reads my face better than I introspect.

Again, our introspective reports on our emotional states can be false: not just when we set out to deceive others — but also when we deceive ourselves. When you watch a really good sad film, did you *enjoy* it? Do you actually like Christmas? Do you feel the same emotions in dreams as in waking life? Conclusion:

>  Infallible judges of our emotional experience? I'm baffled. How could anyone believe that? Do *you* believe that? What am I missing?

This leads to the kind of introspection with the best shot at the status of ‘infallible’: introspection on perceptual experience. Vision, in particular. Suppose I think I am seeing a red tomato. Sure, I can be mistaken that I am in fact seeing a tomato: it could be a plastic fake; or I could be wearing VR goggles. But how could I possibly mistaken that I am seeing *red*, or *the image of a tomato*?

Here is one way to undermine the impression that you are able to accurately report on all the facts of your visual experience. Stare at this line of text. Don’t avert your gaze. Now ask yourself: how broad is your field of vision? *Where are the edges*? What is beyond the edges? Blackness? Nothing?

> Does it seem to have a center and a periphery, differing somehow in clarity, precision of shape and color, richness of detail? Yes? It seems that way to me, too. Now consider this: How broad is that field of clarity? Thirty degrees? More? Maybe you're looking at your desk, as I am. Does it seem that a fairly wide swath of the desk - a square foot? - presents itself to you clearly in experience at any one moment, with the shapes, colors, textures all sharply defined? Most people endorse something like this view when I ask them. They are, I think, mistaken.

Here’s one reason to think you are mistaken: hold out your thumb and stare at it. You basically have no colour vision beyond the area of the thumbnail. That sounds totally unbelievable, but you can test this claim:

> Draw a card from a normal deck without looking at it. Keeping your eyes fixed on some point in front of you, hold the card at arm's length just beyond your field of view. Without moving your eyes, slowly rotate the card toward the center of your visual field. How close to the center must you bring it before you can determine the color of the card, its suit, and its value? Most people are quite surprised at the result of this little experiment.

Naïve introspection tells people that they know most of the facts about their visual experience. Some of those supposed facts — that they have decent colour vision beyond a small central area, for instance, are false. This is not an isolated example! Think back to the ‘dress illusion’ that did the rounds a few years ago. Some people were convinced they were seeing blue and black. Others were convinced they were seeing white and gold. They were seeing the same thing. Therefore, some of those people were wrong.

{% image "writing/10-bits-of-philosophy/dress.jpg", "The dress illusion", "100vw" %}

A final example: introspecting on thought itself. Here’s one question: does thinking involve something beyond imagery (visual or auditory ‘inner talk’) and feelings? Is there a ‘distinctive phenomenology’ of thought? As Schwitzgebel notes, there is zero convergence on any kind of answer to this question:

> Unless people diverge so enormously that some have a phenomenology of thought and others do not, then someone is quite profoundly mistaken about her own stream of experience. Disagreement here is no matter of fine nuance. If there is such a thing as a conscious thought, then presumably we have them all the time. How could you go looking for them and simply not find them? Conversely, if there's no distinctive phenomenology of thought, how could you introspect and come to believe that there is - that is, invent a whole category of conscious experiences that simply don't exist?

The best explanation is that introspection on thought itself is also prone to gross error — even when we’re allowed all the time in the world to do it.

The conclusion is that introspection is far, far less reliable than almost everybody thinks it is. Can you think of a case where this is wrong? When are your introspective reports guaranteed to be accurate?

Incidentally, I strongly recommend [Schwitzgebel’s blog](http://schwitzsplinters.blogspot.com/) for more like this (and much more besides).

## Filling in Space — Simon Blackburn

This is a delightfully simple article. No word is wasted in five short pages. The effect is one of puzzlement: the impression you’ve stumbled on a plot hole in the universe.

A disposition is a kind of ‘if-then’ property of an object. A pane of glass is fragile because *if* you hit it, it will shatter. Poison is poisonous because if you ingest it, you will die. A property is categorical if it isn’t dispositional: if it just *is*. Categorical properties are brute, intrinsic facts.

A natural thought says that dispositions must be made true by some arrangement of categorical things: glass is fragile because of the structure of its constituent parts. Equally, “the clock tells the time because there is such-and-such an arrangement of little bits inside it; Sandy barks because her vocal chords vibrate; the light glows because electrons whizz around”.

But there’s a problem: what makes small bits of matter any less dispositional in nature than the dispositions they underlie? Blackburn points out:

> …the categorical credentials of any item in this list are poor. Resistance is par excellence dispositional; extension is only of use, as Leibniz insisted, if there is some other property whose instancing defines the boundaries; hardness goes with resistance, and mass is knowable only by its dynamical effects. Turn up the magnification and we find things like an electrical charge at a point, or rather varying over a region, but the magnitude of a field at a region is known only through its effect on other things in spatial relations to that region. A region with charge is very different from a region without… It differs precisely in its dispositions or powers. **But science finds only dispositional properties, all the way down**.

Can you think of an example of a property in physics (or any other science) that is not ultimately dispositional? If there were ultimately categorical properties, how would we know about them? If we learn about them by using experimental apparatus, then we can only do so because these properties causally influence the apparatus. But this kind of causal influence must be a kind of disposition!

If it doesn’t make sense to say that science finds any ultimately categorical properties, the idea of a world of entirely dispositional properties is just as bewildering. A disposition says: if this thing happens, some other thing happens. But ‘this thing’ refers to something counterfactual: contrary to what is actually happening (a glass pane is hardly fragile once it’s being shattered). In other words, ‘this thing’ refers to some ‘neighbouring world’ — a world like ours except where this thing occurs. That may shed light on the next quote:

>  To conceive of all the truths about a world as dispositional, is to suppose that a world is entirely described by what is true at neighbouring worlds. And since our argument was a priori, these truths in turn vanish into truths about yet other neighbouring worlds, and the result is that there is no truth anywhere.

What to do?

(For more, see Richard Holton’s ‘[Dispositions all the way round](https://www.jstor.org/stable/3328310?seq=1#metadata_info_tab_contents)’ and Rae Langton and David Lewis’ ‘[Defining intrinsic](https://philpapers.org/rec/LANDI)’).

## What is it Like to Be Boring and Myopic? — Kathleen Akins

Read it [here](http://www.sfu.ca/~kathleea/docs/Boring&Myopic.pdf).

You might have heard the title of Thomas Nagel’s paper ‘[What is it Like to Be a Bat](https://warwick.ac.uk/fac/cross_fac/iatl/study/ugmodules/humananimalstudies/lectures/32/nagel_bat.pdf)’. Nagel says many things in that paper — it’s probably more widely namedropped and offhandedly cited than it is understood. One broad conclusion (spoiler) is that we *can’t* know what it is like to be a bat. One reason, we are told, is because we are not bats. How can anything without sonar, for instance, really *know* what it’s like to have sonar?

Humbug, says Akins. What Nagel forgot to do was to get his hands dirty with the empirical facts about bat behaviour and neuroanatomy. If he had done so, he might have learned something. Akins makes no pretence that all questions about conscious experience can (currently) be decisively settled just by looking at neuroscience — neither the relevant science nor our conceptual understanding of consciousness has reached that stage. However, it is easier to rule *out* what bats could experience. I know, for instance, that there is nothing it is like to be my wrist watch because my watch has no capacity for representing itself or its environment; and no ability for anything describable as cognition. As with my watch, it is possible to ask what kind of representational capacities a bat brain needs to have as a necessary condition for attributing a ‘point of view’ to it at all. And this is a fine opportunity for science to have some say. Quoting from the conclusion:

> By taking a concrete case and attempting to piece together a coherent picture of a subject’s experience, the representational nature of these notions was brought into sharp relief. The bat, we found, may fail to have a point of view, but this is to say that the bat lacks certain representational capacities, a conception of the world of objective particulars… it would seem that to understand a creature with a genuine point of view would require asking further representational questions: what would it be to represent objects *qua* objects, to distinguish oneself from the rest of the world, to re-identify a particular? And exactly how would these capacities be instantiated: what kind of functional or computational capacities [are required]?… both the concept of a “subjective world” and that of a “point of view” are (at least in part) representational notions. And if we have made progress on the former – if we now know a little something about what it is like to be a bat – there is good reason to think that progress on the latter could be made as well.

Also: what a title.

## Two Dogmas of Empiricism — Willard Van Orman Quine

Read it [here](https://www.theologie.uzh.ch/dam/jcr:ffffffff-fbd6-1538-0000-000070cf64bc/Quine51.pdf).

 *Metaphysics* receives more than its share of scorn from those who doubt philosophy’s relevance. Maybe this is because metaphysics is closest to the popular image of philosophy as ‘sitting in armchairs and pondering how the universe hangs together’. This famous paper was written by an arch-naturalist: a ferocious defender of science and opponent of the hand-wavey speculation that refuses to engage with it. It is surprising, then, that here Quine makes a convincing case for rehabilitating (some) metaphysics as continuous with, rather than antithetical to, empirical science. Some metaphysics is indeed pure bullshit, some is dubious, but some is meaningful — and Quine wants to understand why. First I’ll explain the argument for rejecting metaphysics based on ‘logical empiricism’, then the supposed ‘analytic/synthetic’ distinction, and finally I’ll briefly mention Quine’s idea.

Generally speaking, empiricism is roughly the thought that all legitimate and substantial knowledge is ultimately derived from experience: from contact with the world. But Quine thought it had taken on a corrupted form:

> Modern empiricism has been conditioned in large part by two dogmas. One is a belief in some fundamental cleavage between truths which are analytic, or grounded in meanings independently of matters of fact and truths which are synthetic, or grounded in fact. The other dogma is reductionism: the belief that each meaningful statement is equivalent to some logical construct upon terms which refer to immediate experience. Both dogmas, I shall argue, are ill founded.

Let’s take these ‘dogmas’ in reverse order. In the first half of the 20th century, it was fashionable to think that every *meaningful* statement could ultimately either be translated into a statement about things you can directly sense, or is a tautology. The claim that “there’s a man on dark side of the moon” is meaningful because it can be translated into a claim to the effect, “if you go to the dark side of the moon, you will see a man”. The *meaning* of a statement is in this way the method somebody might (in theory) use to confirm it. In the limiting case, we have statements like “2+2=4” which require no looking out into the world whatsoever to confirm. These statements are still meaningful because they are tautologies: “2+2” and “4” are saying the same thing twice. But tautologies are not, by their nature, going to tell us anything substantial about the world! This provides a neat way of filtering meaning from bullshit: if it isn’t a tautology and can’t be translated into a claim about direct experience, it’s not meaningful at all. With this simple rule, metaphysics gets thrown out entirely — since it is practically characterised by its making claims that are substantive, not tautological, and unverifiable by experience.

The *first* dogma says that there is a profound or intrinsic difference between these two kinds of meaningful statement: some can be confirmed without looking at the world at all, others spell out their conditions for truth or falsity directly in terms of experience. Every meaningful statement is one or the other. The first kind of statement is called *analytic*: “2+2=4”, “all bachelors are unmarried men”, “ice is frozen water”. The second kind is called *synthetic*: “all swans are white”, “Dakar is the capital of Senegal”, “the rest mass of an electron is about $9.1 \times 10^{-31}kg$”. We can reframe the previous paragraph in these terms: if it isn’t analytic and it isn’t synthetic, it’s bullshit ([paraphrasing Hume](https://www.goodreads.com/quotes/7327-if-we-take-in-our-hand-any-volume-of-divinity)). As such, Quine thinks that these two ideas — the analytic/synthetic distinction, and the idea of empirical reductionism — actually express the same idea in different ways.

The bulk of the paper explores how these dogmas might be understood. In particular, what makes a statement analytically true? What makes “all bachelors are unmarried men” analytic? Every option Quine considers fails. Could it be because “bachelor” is defined as “unmarried man”? That won’t do, because most often “a definition still owes its explicative function, as seen, to pre-existing synonymies”. What about the idea that “bachelor” and “unmarried man” can be swapped around in sentences while always preserving truth? First of all, this isn’t true when words are *mentioned*: the sentence “the phrase ‘bachelor’ has 8 letters” becomes false when “bachelor” is swapped for “unmarried man”. But the idea of ‘swappability’ also makes some synthetic statements analytic. Suppose it just happens to be the case that all species of animals with kidneys also have a heart and vice-versa. Now (excluded cases where words are mentioned) the phrases “animals with kidneys” and “animals with a heart” can be swapped out for one another while preserving truth. But the sentence “all animals with kidneys also have a heart and vice-versa” is decidedly *not* analytic.

What about this idea of a synthetic statement being translateable into statements about immediate experience? Consider the claim “water boils at 100 degrees centigrade”. Suppose I believe this, and you take me mountain climbing. As we’re boiling water at the summit, I place a thermometer into the water and notice that it sets off boiling at 75 degrees centigrade. Has my statement been disconfirmed? Well, I could be stubborn: maybe the thermometer is wrong, or the water is bubbling but not actually boiling, or some other substance has dissolved into the water. Sometimes analogous explanations turn out [to be true](https://www.sciencemag.org/news/2012/06/once-again-physicists-debunk-faster-light-neutrinos), sometimes they don’t. What matters is that we can almost always adjust *other beliefs* in order to make immediate experience accord with some claim. Therefore, claims about the world are rarely directly translateable into claims about immediate experience (surprised?). In the end, Quine finds it impossible to draw *any* clear distinction between analytic and synthetic sentences.  

We started with a picture of synthetic beliefs (beliefs about the world) each as a bunch of autonomous and distinctive bundles of if-then claims about sensory experience. Example: “water boils at 100 degrees centigrade” $\rarr$ “if I look at the temperature reading when I see the water bubble, it will read 100, etc.”. Quine suggests a better picture of how our beliefs work:

> The totality of our so-called knowledge or beliefs, from the most casual matters of geography and history to the profoundest laws of atomic physics or even of pure mathematics and logic, is a man-made fabric which impinges on experience only along the edges… total science is like a field of force whose boundary conditions are experience.

Beliefs form a kind of web. Some interface with experience directly, others are lodged deeper:

> A conflict with experience at the periphery occasions readjustments in the interior of the field. Truth values have to be redistributed over some of our statements. Re-evaluation of some statements entails re-evaluation of others, because of their logical interconnections -- the logical laws being in turn simply certain further statements of the system, certain further elements of the field. Having re-evaluated one statement we must re-evaluate some others, whether they be statements logically connected with the first or whether they be the statements of logical connections themselves. But the total field is so undetermined by its boundary conditions, experience, that there is much latitude of choice as to what statements to re-evaluate in the light of any single contrary experience. No particular experiences are linked with any particular statements in the interior of the field, except indirectly through considerations of equilibrium affecting the field as a whole… As an empiricist I continue to think of the conceptual scheme of science as a tool, ultimately, for predicting future experience in the light of past experience. Physical objects are conceptually imported into the situation as convenient intermediaries -- not by definition in terms of experience, but simply as irreducible posits comparable, epistemologically, to the gods of Homer… [they] differ only in degree and not in kind.

The upshot is that there is no longer a way of clearly distinguishing between science and metaphysics, and science is best understood as a “continuation of common sense”. I think a good illustration of this ‘pragmatic’ picture is the ongoing [debate](https://www.goodreads.com/book/show/35604796-what-is-real) about the right interpretation of quantum physics. Some scientists dismiss all such talk as [useless speculation](https://en.wikiquote.org/wiki/Shut_up_and_calculate), others that their favoured interpretation as plainly meaningful and [scientific](https://arxiv.org/ftp/quant-ph/papers/0104/0104033.pdf). If Quine were alive, he would dismiss this kind of squabble: go for what is useful, what explains things well, and what is predictively successful. Ignore the kvetching about what does and doesn’t count as metaphysics.

## The Meta-Problem of Consciousness — David Chalmers

Read it [here](file:///C:/Users/finmo/Google%20Drive/Uni/Favourite%20papers/metaproblem.pdf).

Consciousness is *the* mystery of philosophy of mind. Why / how is there anything it is like to be me? What explains how ‘raw feels’ (seeing a bright blue sky, smelling coffee, the sting of being slapped in the face) emerges from chemical signals shuffling around a grapefruit-sized lump of grey matter? The ‘hard problem’ has its warring factions — the physicalists, dualists, mysterians, illusionists — who for decades have been desperately talking past [one another](http://consc.net/pics/greenland.html).

David Chalmers is the man responsible for this mess, having coined the term ‘hard problem’ and devised [ingenious arguments](https://plato.stanford.edu/entries/zombies/) for dualism. Recently, he decided to introduce the so-called ‘meta-problem’ of consciousness. The meta-problem is, to a first approximation, “the problem of explaining why we think that there is a problem of consciousness”. You would be forgiven for wondering whether Chalmers is getting ahead of himself, given that the first problem has hardly been resolved. As it happens, the meta-problem shines considerable light on the original problem.

Unlike the hard problem, the meta-problem is a question straightforwardly about physical and functional things: why we make noises to the effect,“there is a hard problem of consciousness”; why some philosophers are so disposed to write certain sentences about the “mystery of consciousness” on blackboards, and so on. One way of answering this first approximation of the meta-problem might be to say that consciousness does actually amount to some mysterious entity or property, not included in our current best physics, which sometimes causes physical things to happen. But the meta-problem poses a further constraint: that it should be answered in ‘topic-neutral’ terms (terms that don’t just assume that consciousness is a mysterious non-physical thing causing physical things to happen).

The meta-problem can almost certainly be answered in topic-neutral terms. Chalmers admits as much. If this were false, something extra-physical (consciousness) would be needed to explain certain physical phenomena. This latter assumption makes easily falsifiable (and falsified) claims about physical processes — it’s sheer pseudoscience. Such so-called ‘interactionist dualism’ would entail, for instance, widespread violation of mass-energy conservation.

Suppose some future cognitive science delivers a convincing explanation for why we think there is a hard problem of consciousness in topic-neutral terms. What would this mean for the hard problem? Chalmers considers two convincing answers.

The first answer (which he still mostly endorses) is that the hard problem would remain. It’s just obvious, he says, that there is something left to be explained. When I see a red tomato, the redness of the tomato is obviously not reducible to some brain process, because that brain process could obviously occur without giving rise to an experience of redness. Granted, there’s a good physical explanation of why I write, say, and think as much that doesn’t involve any such irreducibly non-physical properties. But we all just *know*, deep down, that there are such properties. Don’t kid yourself! This view is called [epiphenomenalism](https://plato.stanford.edu/entries/epiphenomenalism/). It may already be clear, but there is something deeply weird about it. Epiphenomenalists say that consciousness is real and non-physical, but that it doesn’t have any physical causes (it doesn’t ‘push things around’). That means that there is always a physical explanation for how they form beliefs and say the things they believe. This raises the question: if consciousness doesn’t have any physical effects, how do you know it’s real and non-physical? The answer, naturally, is that everyone *just knows*. But knowledge-formation has entirely physical causes too, comes the reply. And so on down an infuriating rabbit hole…

The other response which Chalmers considers is that an answer to the meta-problem would just eliminate the hard problem altogether. Once we’ve answered the former, there’s absolutely no need to answer the latter. The philosopher [Keith Frankish](https://philpapers.org/rec/FRATMI-3) has a very nice illustration. He notes that if we can fully explain the claims UFO hunters make without invoking the existence of UFOs, then the existence of UFOs is causally irrelevant in explaining why UFO buffs claim that UFOs exist. Thus, such claims do not support the existence of UFOs. If you’re into Bayesian reasoning, think about how you might update on your credence over “UFOs exist” when a UFO hunter tells you as much, given that you are certain such a claim was not caused by UFOs. Although such a topic-neutral explanation does not rule it out, if the prior credence about the existence of UFOs is low, it effectively ‘debunks’ such claims. This can be extended to a general principle:

> If a claim that x exists can be fully explained in terms independent of x (i.e. not assuming x’s existence), then such claims do not support the existence of x.

Thus, if epiphenomenalists about consciousness want to avoid the Frankish’s analogy with UFO-hunters, they must explain how beliefs that consciousness is non-physical (or special, mysterious, etc.) were caused by, and continue to accurately track, consciousness – despite a full account of such beliefs in topic-neutral terms. One suggestion is that they are reliably correlated with actual occurrences of consciousness – but this just seems to amount to luck. Make sense? Where do you stand?

## Personal Identity — Derek Parfit

Read it [here](http://people.brandeis.edu/~teuber/parfit-personal-identity.pdf).

{% image "writing/10-bits-of-philosophy/parfit.jpg", "Derek Parfit" %}

Until his untimely death, Parfit was *the* doyen of anglophone philosophy. His writing had the quality of timeless clarity from the moment it was published. He also had all the idiosyncrasies that his ‘reclusive genius’ reputation promised — I can’t remember who mentioned that he made instant coffee straight from the hot tap in order to skip the kettle and save an extra minute for writing. 

If I remember right, another anecdote goes that Parfit’s colleagues at [All Souls](https://www.asc.ox.ac.uk/) became concerned that he had failed to publish a single piece in far too long. They politely mentioned that he might want to consider working on a serious project that other people might get to read. Less than a year afterwards, he emerged with (for may people’s money) the most original and perceptive work of moral philosophy of the 20th century: [Reasons and Persons](https://www.goodreads.com/book/show/327051.Reasons_and_Persons).

Here is Simon Beard on his writing habits:

> Derek Parfit was famously a fast and  creative thinker. He used to advise students and colleagues to set up  autocomplete shortcuts on MS Word for their most commonly used phrases  to boost their productivity, unaware that very few other philosophers  felt that their productivity was being restricted by their typing speed. Despite this, he published sparingly. He hated to commit himself to  arguments unless he was certain of them. What he did produce however  were numerous, and lengthy, drafts of papers and books (at least two of  which never saw the light of day) that were widely circulated amongst  the philosophical community and even more voluminous comments and  responses to other philosophers on how they could improve their  arguments. Likening Derek to an iceberg would be mistaken. Up to 10% of  an iceberg is above the waterline, whereas I doubt if even 1% of Derek's work has ever been published. As one of his obituaries noted ‘When  Derek Parfit published, it mattered!'              
>

And economist [Tyler Cowen](https://marginalrevolution.com) writing after the news of his death:

> Of all the people I have met, no one comes closer to embodying the ideal of a questioning philosopher than did Derek Parfit. He was relentless  in the best sense of the word, and unforgettable.

Finally, this lauded [New Yorker profile](https://www.newyorker.com/magazine/2011/09/05/how-to-be-good) surveys his views and his character.

I mention all this because I picked this piece primarily because of the person who wrote it, and not its particular contents. But those contents are worth describing too.

Parfit wrote a great deal about personal identity. What makes some person today the same person as some person last year? You are the same person as somebody in the past with your name and general appearance. What makes that the case? It takes time to see how these questions are anything more than sheer wordplay, or otherwise trivially easy to answer. But they’re not and they’re not. So begins the piece:

> We can, I think, describe cases in which, though we know the answer to every other question, we have no idea how to answer a question about personal identity. These cases are not covered by the criteria of personal identity that we actually use. 

Here’s a thought experiment: suppose your brain is divided into its separate hemispheres, and each transported into a new body. Both new bodies wake up, and both new people profess to be you. They have identical memories and personalities — the same memories and personalities you had before the operation. What happens to you? Here are your choices:

1. You don’t survive;
2. You survive as exactly one of these people;
3. You survive as both.

(1) *seems* unlikely because if one of the brain hemispheres were discarded, you would survive as the other one. Some people have actually had one hemisphere removed, and have survived in this way. But how can an extra hemisphere surviving cause you not to survive? “How could a double success be a failure?”.

(2) is unlikely because both hemispheres are identical by stipulation — so what could account for one of them being you? The only story you might tell is that people have indivisible souls, and your soul chooses which hemisphere to stay with. That, of course, is wrong. 

That seems to leave (3) — that I somehow survive as both people. Yet, this is no more plausible. What could it possibly mean to be two people?

Parfit’s answer comes from getting clearer on what we’re asking. If we’re asking about who I am *identical* to after the operation, the answer is simply (1): neither person. I cease to exist as an entity identical across times. The reason for this is simple: (2) is obviously false, and (3) can’t be right either because one person at one time can’t be identical to two people at another time in just the same way one apple can’t be identical to two apples.

But what about this ‘double success’ point? Wouldn’t Parfit’s answer imply that a botched operation where only one person survives means survival; whereas a successful operation means (a technical kinds of) *death*? Yes — but this just goes to show that identity across time is often not the thing that matters when we naively guess that it does. What does presumably matter is something like *psychological continuity*, but such continuity might sometimes take a branching form. Although you are strictly identical to neither of them, your relation to both of these post-operation people “would contain everything that matters”. This is relevant even if such operations aren’t possible: it implies that, strictly speaking, you care about your future self not because you are identical to them but because you are *continuous* with them.

That’s a sketch that does no justice to the real thing. You can also watch a charmingly 90s interview [here](https://www.youtube.com/watch?v=B64XTV6JNHA).

The photo was taken from [this book](https://www.goodreads.com/book/show/11467529-philosophers) of portraits of philosophers.

## Alternate Possibilities and Moral Responsibility — Harry Frankfurt

Read it [here](https://www.ucl.ac.uk/~uctytho/dfwCompatFrankfurt.htm).

There are so many ways of coming at the free-will debate, it’s often unclear whether every party is arguing over the same thing. One popular framing goes like this: my choices are free only if I *could have done otherwise*. So if you want to tell me I have free will, you *at least* need to show how I could have done otherwise. Since I’m morally responsible for a choice only if I made it freely, I’m morally responsible for something only if I could have done otherwise. Naturally, the discussion might turn to just what it *means* to have been able to do otherwise, given that it’s always the case that I did the thing I did and nothing else.

This massively influential article bulldozes this line of thinking. Frankfurt argues that the ability to have done otherwise is *not* a necessary condition for moral responsibility. The thought experiments he introduces generated so many variants and permutations that they share a name: ‘Frankfurt cases’.

Here’s one example: I’m in line to vote, and still undecided. Walking into the booth, I weigh the reasons for a final time and settle on the Blue Party. A few hours earlier, devious scientists operating on behalf of the Blue Party had sneaked a mind-control radio transmitter into my pocket. Had I ultimately decided to vote Red in that booth, they would have instructed the transmitter to blast my brain with ‘VOTE BLUE’ signals, and a sudden change of heart would have caused me to vote Blue anyway. Therefore, I never could have voted Red — I clearly couldn’t have done otherwise. Does that mean I didn’t vote Blue freely? Does it mean I can’t be held morally responsible for voting Blue? Less clear.

Another example: I’m choosing between a healthy and indulgent option at a café. As I approach the counter, I’m still undecided. Ultimately, I go for the healthy option. As it happened, should I have asked for the unhealthy option, the cashier—a trained hypnotist—would have looked very deeply into my eyes and asked me if I wanted to reconsider my choice. So, I never could have chosen the unhealthy option. Does that mean I had no reason to feel proud that I chose the healthy option, or that I never freely chose it? Again, not obvious at all.

If freedom and moral responsibility have nothing to do with alternate possibilities, what are they about? Frankfurt’s answer involves ‘higher-order desires’. In the foregoing example, I had ‘first-order desires’ — immediate cravings for a spike in blood sugar. I also had more reflective, long-term aims to become healthier. I act freely and responsibly just in case my choices are caused by my higher-order desires, says Frankfurt. Roughly.

## But mom, crop tops *are* cute! – Sally Haslanger

Read it [here](http://web.mit.edu/~shaslang/www/papers/Ch15-HaslangerBMCTAC.pdf).

It starts with a story: a seventh-grade girl is being teased for her dorky track suit. She wants to buy a crop top, like the popular girls. Her parents won’t let her — not at all proper. Besides, you shouldn’t let the other girls dictate what you wear! And *we* don’t think they’re fashionable at all. Track suits are perfectly stylish!

But mom! Comes the reply — crop tops *are* cute!

What’s going on here? Who’s right? And what are they even disagreeing about?

There’s a real sense in which the girl *will* continued to be teased for wearing a track suit, and will *not* be teased for wearing a crop top. There’s also a real sense in which crop tops are not objectively fashionable — not least because they’ll probably go out of fashion in a few years. But the parents are best understood not as weighing in on what is and isn’t cute, but urging their daughter not to buy in to the belief that she should pick her clothes based on pressures to be fashionable — reject the cute / dorky framework altogether!

Naturally, this is only relevant because it relates to something more general and significant. That something is ‘ideology’:

> There is much disagreement over the nature of ideology, yet in the most basic sense ideologies are representations of social life that serve in someway to undergird social practices. We are not simply cogs in structures and practices of subordination, we enact them.

Fashion trends are good examples of ideology. The belief “seventh grade girls who wear crop-tops are cute” might be said to be ideological because it is made true just by the fact that enough people believe it — and not by some objective fact about the world independent of that belief.

Are ideologies just kinds of belief? And is the only thing that sustains an ideological belief a mutual belief in it? Haslanger wants to say that all kinds of things can sustain an ideology besides mere belief. For instance, the rules, processes, and slogans of an institution might serve to reinforce an ideology even if nobody explicitly believes it. For instance, “qwerty keyboards reinforce our qwerty dispositions which reinforce the use of qwerty keyboards”. More seriously, discriminatory procedures reinforce the stereotypes upon which those procedures are partly founded, and so on. Sometimes there may be some truth to a harmful ideological belief, just as there is some truth to the belief that crop tops are cute. In those cases, we might adopt the perspective of the concerned parents: not disagreeing that people find crop-tops cute, but pointing out how we would all be better-off if we rejected the cute / dorky dichotomy.

The philosopher [Joseph Heath](https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8675.00193) adds an alternative (but not necessarily opposing) perspective. Heath asks a related question: *why* do people appear to willingly engage in institutions and practices that collectively harm them? For instance, why do so many people expend so much time, energy, and anxiety trying to live up to demanding beauty standards? To be sure, some people are mislead into believing that they really must live up to some objective standard of beauty. But, clearly, it’s also possible to put effort into your appearance only because you know other people will judge you if you didn’t (and this is a less patronising explanation — it doesn’t invoke brainwashing). Irrespective of whether the daughter thinks crop tops are cute, it may still be in her interest to wear a crop top to avoid being teased. In this way, some (maybe most) instances of ‘ideology’ are such straightforward, non-mysterious instances of collective action problems: where everyone behaving in their own self-interest leads to a collectively self-defeating outcome.

Some ideological beliefs are obviously far more harmful than the belief that crop-tops are cute. It’s important, for that reason, to think carefully about how and why people appear to sustain them even while they’re harmed by them. Haslanger (and Heath) show some nuanced ways of doing that.

## Famine, Affluence, and Morality — Peter Singer

Read it [here](http://personal.lse.ac.uk/robert49/teaching/mm/articles/Singer_1972Famine.pdf).

When Singer was writing this paper in 1972, East Bengal was experiencing a widespread shortage of food, shelter, and medical care. He wanted to answer a simple question: did individuals  and governments from affluent countries have a responsibility to provide assistance in order to prevent thousands of deaths? His  conclusion — that they do — had implications that reached far beyond the immediate context of the article. But what made Singer reach that  conclusion?

Singer’s article featured a thought experiment that has probably been described and argued over in intro ethics classes more than any other. It’s extremely simple, and each step seems unobjectionable. Yet, many people are extremely uncomfortable with the demandingness of the conclusion.

Imagine you’re walking home, and your route passes a  shallow pond. You notice that a child has fallen in, and looks to be  drowning. You can rescue the child from the pond — but only at the cost  of getting your clothes soggy. What’s worse, you haven’t got time to pry the expensive watch from your wrist. Should you save the child? This is about the easiest ethical question you’ll have to face: *clearly* you should.

Now suppose there are other people walking past the pond, who don’t seem to have noticed but are similarly capable of saving the drowning child. Does this make a difference to whether you have an obligation to save  the child? No — the fact that others could save the child doesn’t mean I have no obligation to do so myself. To see this, notice that if  everyone followed this reasoning, *everyone* would successfully exempt themselves from any obligation to save the drowning child, and  thus nobody would be responsible if the child drowned. “It’s not my  fault”, you might shrug — “that other guy could have helped too”.

*Now* suppose (and this requires some imagination) that the drowning child  was not right in front of you, but on another continent. All the other  facts remain the same: she is facing an equal risk of dying, and you are equally capable of saving her at equal cost to before. Maybe, for  instance, you are remotely piloting a little photography drone when you  spot the child, and rescuing the child involves getting the drone wet  and breaking it. Would this geographical difference make a difference as to whether you have an obligation to rescue the drowning child? Again, it seems obvious that neither physical distance — nor nationality, race, or relatedness make a difference here.

Now quoting Singer (from a [different piece](https://www.utilitarian.net/singer/by/199704--.htm)):

> I then point out that we are all in that situation of the person passing  the shallow pond: we can all save lives of people, both children and  adults, who would otherwise die, and we can do so at a very small cost  to us: the cost of a new CD, a shirt or a night out at a restaurant or  concert, can mean the difference between life and death to more than one person somewhere in the world.

How could this be the case? Well, it happens that many charities exist, operating in the  poorest parts of the world, which we know beyond reasonable doubt are  capable of saving lives at very little cost and with no perceptible  downside. One example is the [Against Malaria Foundation](https://www.givewell.org/charities/amf).

The conclusion is straightforward: if it is clearly the right thing to do  to save the drowning child at some small cost to yourself in the first instance, then it is clearly the right thing to do to donate to  effective (viz. well-evidenced and cost-effective) charities at equivalent cost. Laid out in argument form:

1. Suffering and death from lack of food, shelter and medical care are bad.
2. If it is in your power to prevent something bad from happening, without  sacrificing anything nearly as important, it is wrong not to do so.
3. By donating to aid agencies, you can prevent suffering and death from lack of food, shelter and medical care, without sacrificing anything nearly  as important.
4. Conclusion: if you do not donate to aid agencies, you are doing something wrong.

Singer’s writing is so transparent, so unadorned and sparse, that you are never in doubt about what he is arguing for. Yet, the things he *does* argue for – clearly and persuasively – are often radical and uncomfortable. The result is that many people actually change how they live as a result of reading Singer. For instance, I know people who have shifted their careers towards animal advocacy after having read [Animal Liberation](https://www.goodreads.com/book/show/29380.Animal_Liberation). The life-changing effectiveness of Singer’s writing is testament to his own clarity and perceptiveness, but also to the more general capacity for moral philosophy, at its best, to change minds.

You can read Singer’s reflections on the drowning child argument [here](https://www.utilitarian.net/singer/by/199704--.htm).

## Conclusion

This post was aimed at people curious to get a better model of what philosophers actually think, talk, and write about all day. Naturally, 10 articles skewed towards what I happen to have read and enjoyed is bound to be unrepresentative, and guaranteed to miss out entire fields: I have scratched the surface of the surface. Nor am I suggesting that questions about brain division, the word “the”, the inner world of bats, etc. are centrally important — instead, they illustrate broader questions: about personal identity, philosophy of language, consciousness, etc. I would be very pleased if even a couple of these introductions alerted you to the existence of a set of philosophical questions you hadn’t considered before.

 