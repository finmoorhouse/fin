---
title: Convex Altruism
tags: [writing]
date: 2022-04-28
---
## Summary

Many of the original insights of effective altruism are insights about diminishing returns, especially from *concave* functions. In particular, ideas about concavity motivate the concept of *neglectedness*, and the heuristic of *giving to the most marginally cost-effective charity*. But sometimes we instead confront *increasing* returns, often from *convex* functions. In such cases, I think some of the simpler EA heuristics break down in instructive ways. I also suggest thinking in terms of ‘impact functions’ for projects, analogous to production functions for firms. These are scattered points, many of which are kind of obvious.

Credit for many of these original insights mostly goes to Toby Ord. Errors remain my own.

Thank you to [Luca Righetti](https://www.lucarighetti.com) and [Loren Fryxell](https://lorenfryxell.com/) for thorough comments and helpful conversation.

## Concave altruism

Suppose you’re considering how total outputs vary with total inputs. You’re thinking of a continuous function from inputs to outputs. When you move to the right along the graph, the slope of the curve may decrease. That’s how you know you’re dealing with a **concave** function.

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/1.png", "A concave function" %}

Consider how the quality of meal you can find in a big city might vary with the amount of money you’re prepared to spend. Money (the input) runs along the x, and quality (the output) on the y. When you’re on a tight budget, an extra dollar goes a long way. When you’re already prepared to spend big, it’ll make a smaller difference. The output (quality) scales as a concave function of the input (money). Or consider how your expected grade on an exam scales with the total time you spend studying for it: it’s got to eventually turn concave, because you can’t score higher than 100%.

Some of the central insights of [effective altruism](https://www.effectivealtruism.org/) are insights about concave functions.

Imagine a graph showing how the quality of a person’s life varies with their income. It’s going to be approximately concave: a dollar for a person living in extreme poverty makes far more of a difference than a dollar for an already affluent person. So a charitable dollar might go 100 times further in a poor country compared to a {% note "rich country." %}Even if it went to the relatively worst-off in that rich country.{% endnote %} Will MacAskill calls this the [*100x multiplier*](https://www.givingwhatwecan.org/post/2015/08/doing-good-better-review/): assuming you’re relatively well-off, you can do at least 100x more good for others than for yourself, largely because of the concavity of positive outcomes like health and wellbeing with money.

Similar shapes show up for projects, as well as people. Once a project is saturated with resources, then an extra unit of that resource will often make less of a difference than the first investments. This motivates the thought that the more *neglected* a problem is, the more good a unit of work will do.

Economists talk about [*production functions*](https://en.wikipedia.org/wiki/Production_function), which describe how physical goods (the output) vary with inputs, of ‘factors of production’, such as labour. We might use the term ‘impact function’ to refer to the analogous functions where the output is some kind of outcome that altruists ultimately care about: lives saved, animals spared, basis points of existential risk mitigated, {% note "etc" %}Since writing most of this post, I found that Max Dalton had written about this idea in 2017: ‘[Defining returns functions and funding gaps](https://www.centreforeffectivealtruism.org/blog/defining-returns-functions-and-funding-gaps)’.{% endnote %}. Money, labour, and many other things can count as {% note "‘factors of impact’" %} I’ll often default to talking about money, but the same points go through whatever the ‘factor of impact’.{% endnote %} Concave impact functions mean *diminishing marginal impact*. In general, every extra unit of input results in smaller increases in output. Here’s a concave impact function, for a {% note "given timeframe:" %}You often see the analogous production graphs showing costs on the y,  and output on the x. But in this context, I prefer framing things as  ‘maximising impact per dollar’ rather than ‘minimising dollars per unit of impact’.{% endnote %}

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/2.png", "An impact function" %}

Getting the most outputs possible in a world of concave impact functions often means sharing out your resources among many things: *diversifying* between options.

Suppose you’re choosing how to spend on a few options, and you’re assuming diminishing returns. In that case, the rule of thumb should be to spend on the option with the best marginal returns, up until another option beats it, at which point you switch to that option, and so on. With enough resources and enough options, the optimal approach is to spread your resources across several options.

By the way, here are two things to look out for when reading these graphs:

- The **marginal cost-effectiveness** of the function at some level of input is just the *slope of curve at the input level that would occur without you*; i.e. before you add input
  - The ['ITN' framework](https://forum.effectivealtruism.org/topics/itn-framework) (importance, tractability, and neglectedness) is a way of trying to estimate this slope, though it's not *fully* general (as we'll see, it assumes the curve takes a particular though quite general shape)
- The average **cost-effectiveness** at some level of input is the *slope of the diagonal line from the origin to the curve at that input level*
  - Some impact functions are roughly sigmoidal — first fully convex, then fully concave. These functions have a nice property that there is some point on the graph where the line from the origin to the function hits the curve at a tangent. This is the point of **highest average cost-effectiveness**

Now let's ask: *what features do concave impact functions share?*

### Diversifying

An alternative framing on the same thing comes from Vitalik Buterin’s post on [‘Convex and Concave Dispositions’](https://vitalik.ca/general/2020/11/08/concave.html). He imagines situations when you’re deciding how to distribute resources between two options. Roughly speaking, you can end end up with two shapes:

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/3.png", "Two impact functions" %}


Notice that if the impact functions of both options are concave, then so will the graph above — and vice-versa.

Here’s another way of making essentially the same point: one {% note "[feature](https://www.core-econ.org/the-economy/book/text/leibniz-03-01-03.html)" %} In fact, something like this can [work as a *definition*](https://en.wikipedia.org/wiki/Concave_function#Definition)*.*{% endnote %} of concavity is that *the function of the average is greater than the average of the function*.

$$f(\frac{h_0+h_1}{2})>\frac{f(h_0)+f(h_1)}{2}$$

This too can imply compromise and mixture. Suppose you’re a funder considering two different causes with identically concave ‘impact functions’ with respect to money; and suppose you have a budget of $h_0+h_1$. Here you’d always do better to give the average of $h_0$ and $h_1$ to each cause, rather than $h_0$ to one and $h_1$ to the other.

### Risk aversion

How does concavity relate to risk? In general, concave impact functions will lead you to certain kinds of risk aversion. Consider a concave impact function with respect to money: diminishing returns with extra dollars. Suppose you find a bet which pays out $2+2\delta$ times your money with 50% chance, and otherwise pays nothing. This wins you money in expectation: paying in $x$ dollars, you get $(1+\delta)x$ dollars in expectation. But when x is big enough and/or $\delta$ is small enough, you could have more expected impact by refusing the gamble. Even if you’re risk neutral with respect to *impact*, you should often be risk averse with respect to money, or whatever else the input is.

This is a (slightly stronger) instance of the point above:

$$f(h)>\frac{f(0)+f((2+2\delta)h)}{2}$$

Similarly, when you’re dealing with a concave impact function, you should refuse any gamble with a non-positive expected monetary gain, no matter how modest. Suppose you’re offered a bet with $\delta / 1$ odds (you pay in $x$ dollars, and you win an extra $\delta$ dollars, otherwise you lose your original $x$ dollars; and you think the true probability is $\frac{1}{1+\delta}$, so your expected monetary winnings are zero. No matter how small is $\delta$, you should refuse the bet.

### Low stakes uncertainty

Similarly, if you’re *uncertain* about the impactfulness of a project, but you’re sure that it and all the other projects you’re considering are concave with whatever input you’re considering. Then you’re going to be uncertain between giving some amount more or less than your mainline estimate. Updating your best guess about the project’s impactfulness will *smoothly* change how much of some input you think it deserves. That is: resolving your uncertainty about a project's impactfulness by a small amount will never change your best guess on the optimal inputs for that project by a large amount. Because you don’t get sharp discontinuities between estimated impactfulness and optimal inputs, you’ll never sit on a knife edge between (e.g.) thinking a project shouldn’t be funded at all, or should be funded a large amount. In this sense, the stakes involved in your uncertainty are relatively low.

### Decentralisation

So far, I haven’t talked about how you should orient your giving in light of how you expect other people to give. But isn’t this crucial? Not, I think, in a world of concave impact functions. The reasoning is perhaps similar to the rough reasoning behind how markets can reach efficiency without firms needing to coordinate or directly cooperate. You should expect profit-seeking firms to find and use up the best opportunities for profit at the margin, and given certain assumptions, in competitive equilibrium you end up with an efficient market. Firms do not need to collude with one another to reach efficiency in this way. Maybe donors are like firms in this rough analogy: you should expect impact-seekers to find and use up the best marginal opportunities for impact on their own, and as we’ve seen, when impact functions are concave, you can’t beat that strategy in {% note "a fundamental way" %}Although of course you might get there quicker by sharing information if information is valuable and expensive, which it is. This would be like  firms sharing hard-won information with their competitors: because they  care about their own profits, they’re not incentivised to do so. The  ‘efficiency’ here is not efficiency of information processing: not  finding the best answers with the least effort.{% endnote %}. In other words, in this context you don’t need to coordinate with other actors who care about the {% note "same things you do" %}It is important to assume everyone has the same impact functions here,  and in reality they might disagree on moral or empirical matters,  leading to interesting complications, including e.g. opportunities for [moral trade](https://www.fhi.ox.ac.uk/wp-content/uploads/moral-trade-1.pdf).{% endnote %}. Furthermore, what’s best for you to do (e.g. donate to) doesn’t depend crucially on your expectations about what other people plan to do.

### Spend marginal inputs by following a simple rule

When you’re dealing with concave impact functions, the following simple rule works well: {% note "*always give*" %}E.g. your money or time.{% endnote %} *to the most marginally cost-effective cause*. That cause won’t always stay the same — once you saturate the best opportunity until it’s no longer marginally best, {% note "turn to the new best — and so on." %}This might just be obvious, but if it’s not, think of it this way: the  task of spending all your money in the most impactful way is the task of finding the way to allocate your money that has the highest average  returns. This is easy to figure out when you know the returns from where you can spend, and all the places you can spend have concave returns.  The key is that average returns are always highest (or no lower) for the first inputs, and lower (or no higher) for inputs that come after  you’ve spent those first inputs. So you can do induction: to find the best way to spend $N$, take the best way to spend $(N-1)$, and then spend your one remaining dollar on the most impactful opportunity. Then work back to your first dollar.{% endnote %}

This is a simple rule because, assuming you know all the impact functions you’re dealing with, the complexity of the problem scales in a friendly, manageable way with the number of options you can spend on: the problem of how to spend your marginal dollar (or hour of time, etc) is independent of the problem of how to spend the dollar that comes after it, and so on. So you don’t need to check different combinations of inputs.

### ‘Neglectedness’ is a useful guide

Spending marginal inputs is simple, because you can just look for the opportunities with the highest marginal impact. In the context of concave functions, ‘neglectedness’ is a useful and direct guide to impact.

When I was doing some reading for this piece, I realised that neglectedness is a less clear concept than I had imagined. But you could say that neglectedness is something like: *how far along the x-axis are we on one of these impact function graphs? What total inputs have been devoted to this problem already?*

If you define neglectnedness in roughly this way, you can start saying neat things about neglectedness in the context of ‘neglectedness’, ‘tractability’, and ‘scale’ (or ‘importance’).

Here is a simplified version of the model that Owen Cotton-Barratt presents in his [‘Prospecting for Gold’](https://www.effectivealtruism.org/articles/prospecting-for-gold-owen-cotton-barratt) talk: when considering the value of marginally contributing to a problem, you might think the value of contributing depends on the overall scale of the problem, how easy it is to make progress (tractability), and how much effort has been invested already. On one crude model, you can imagine both the ‘scale’ and ‘tractability’ factors being fixed for a given problem. Then you could imagine that *total impact* scales with the log of inputs. I think this is sometimes a roughly reasonable assumption to make; but it is just that: an *assumption* — and a fairly critical one. \(\ln(x)\) is a concave function, so that means we are assuming here that impact is concave with inputs.

Here \(S\) indicates the impact of solving the entire problem, \(T\) relates the fraction of the problem solved with $\ln(\text{Inputs})$, where $\ln(\text{Inputs})$ is the natural log of total inputs, such that $T\times\ln(\text{Inputs})$ gives you the fraction of the problem solved. Higher values for \(T\) means this problem takes fewer inputs to make progress on solving it.

{% note "Now you can express total impact as:" %}Yes, this will go above 1 for positive values of T. I’m sacrificing realism for simplicity here. Or maybe you *can* solve a problem by more than 100%!{% endnote %}

$$\text{Impact}=S\times T\times\ln(\text{In})$$

But we’re asking about marginal impact, which is the derivative of total impact. This works out to:

$$\frac{d\text{ Impact}}{d\text{Inputs}}=\frac{s\times t}{\text{Inputs}}$$

Now we can *define* neglectedness as the reciprocal of the total inputs:

$$N=\frac{1}{\text{Inputs}}$$

And finally we get a neat expression for marginal impact:

$$ \frac{d\text{ Impact}}{d\text{Inputs}}=S\times T\times N$$

Here we said neglectedness is a quantity which is inversely proportional to total inputs, and we assumed that progress on a problem varies logarithmically (concavely) with inputs. That allowed us to say that marginal impact varies in proportion with this quantity we’ve called neglectedness. The maths here is very elegant, and I’m concerned that makes it look *necessarily true*, or *true by definition*. Not so: it’s neat in large part because we decided to make it neat. But the framework wouldn’t be accurate if progress did not vary logarithmically with inputs, let alone if did not vary in a concave way. Stay tuned…

## Convex altruism

Not all production or impact functions are entirely concave. Sometimes, when you move to the right along the graph, the slope of the curve *increases*. Sometimes marginal impact *increases* with inputs. This is the opposite of concavity: convexity.

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/4.png", "Convexity" %}

Generally speaking, the early stages of starting up a project often involves *increasing returns* with more inputs.

That could be because of [*economies of scale*](https://saylordotorg.github.io/text_international-trade-theory-and-policy/s09-02-economies-of-scale-and-returns.html), where the per-unit cost of producing or doing something falls as the scale of production or of the project rises. Doubling the size of your operation could make it more efficient, such as by freeing up more people to specialise. If I’m a car manufacturer, then scaling from a garage to a factory floor could make each additional car cheaper.

Or it could be because of *increasing returns to scale*: the feature of many production processes / projects in which **productivity** or **impactfulness** per unit of labor rises as the scale of production rises. One example is [*network effects*](https://en.wikipedia.org/wiki/Network_effect). The more users a social network already has, the more potential connections an additional user creates. Likewise, a new airport is going to be more valuable if there are already many other airports which planes can fly to and from. Another example is something like *lumpiness*, it could be because some projects are *lumpy*: they have a natural size, and fractions of that size have much less impact than the same fraction of a complete project. A zoo will probably prefer to house either a full lion or a full zebra, rather than half a lion and half a zebra.

Presumably no real production or impact functions are *entirely* convex {% note "(for indefinite amounts of input)" %}This is related to the law of [diminishing marginal returns](https://www.investopedia.com/terms/l/lawofdiminishingmarginalreturn.asp). If you’re working in a finite world, it’s got to be true!{% endnote %}, but convexity for some range of inputs is common. In particular, many production and impact functions are going to look *S-shaped*: increasing returns in the beginning, followed by decreasing returns:

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/5.png", "Increasing returns" %}

Analogous to standard [production functions](https://en.wikipedia.org/wiki/Production_function), you can also show *marginal* impact and average *impact* (per unit input) on a graph with the same x-axis. But all the information is contained in the 'total impact' graph (above).

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/6.png", "Marginal and average impact" %}

Suppose you’ve discovered a new deposit of gold, but most of the gold is some way below the surface. How does the total gold you can extract vary with the efforts you’re able to spend on the project? Maybe most of your early efforts are aimed at digging through to reach most of the gold; then you can clear out the easiest-to-reach parts of the deposit, and finally it gets increasingly difficult to mine more gold. That could give you an s-curve like the one above.

Or suppose you’re thinking about starting a media outlet aimed at spreading ideas about doing good better. Early on, you might expect to be able to more than double the size of your audience by less than doubling your efforts so far: increasing returns with extra inputs. But later, you might begin to saturate your intended audience.

For what it’s worth, the *average cost of outputs* can decrease with inputs even in the absence of increasing returns, or a strictly convex function. This could happen if you need to pay *fixed costs*, including *fixed startup costs*: necessary expenses that don’t vary with the inputs. Imagine hiring a photographer to your workspace. Even in order to take one photo, the photographer needs to arrive, and set up (and disassemble) all the equipment. But after that, taking extra photos is easy. If you hire the photographer just to take one photo, the average cost per photo includes the entire fixed cost of arriving and setting up. If you take many photos, the average cost tends to the marginal cost of an extra photo.

This could also describe a version of the gold scenario in which you need to buy a bunch of mining machinery before you can get started at all.

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/7.png", "Startup costs" %}


Another example is when your function is discontinuous (or at least has a sharp jump). This might apply if you’re pushing for one side of a binary decision. The inputs in that instance could be {% note "‘votes’, or ‘efforts spent on advocating for that side’." %}This is the shape of the graph *ex-post.* Your *ex-ante* impact function might look different if you’re unsure where the threshold is.  In particular, it will look smoother, and will perhaps take on an  s-shape.{% endnote %}

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/8.png", "Discontinuity" %}

In fact, we can describe a number of shapes which don’t resemble the ‘highest returns at zero inputs followed by diminishing returns’ shape from the first section. I think most of the points I’ll make about convex functions will apply to these examples also.

When you’re surrounded by convex impact functions, the best rules of thumb look very different. Where concavity encourages *diversifying* and *risk-aversion*; convexity encourages very different heuristics: *bets*, *polarity*, *risk-seeking*, and *coordination*.

### Polarities

Where concavity suggests compromise between multiple projects, convexity suggests going big on just a few of the most promising projects — a kind of inequality, or polarity between big investments and no investment. Take the simplest case, where you’re choosing how to allocate resources between two projects, A and B, with identical impact functions, both convex up to the point where you can fund them. How does this translate to Vitalik’s framework: how does total impact vary with the split between A and B? This function is *also* now convex. Since it’s symmetrical, you’d do best by putting all your resources in just one project — {% note "the diagram labelled ‘convex’ above." %}An alternative gloss: convex projects always yield [corner solutions](https://en.wikipedia.org/wiki/Corner_solution), whereas concave projects sometimes yield interior solutions.{% endnote %}

Suppose you’re a funder choosing between potential projects, all of which promise increasing returns on their impact functions for as long as you can afford to fund them. If all you care about is expected impact, you will again always do best by funding {% note "*only one thing*." %}Here’s some intuitive reasoning suggested by Loren Fryxell. Suppose you  have some fixed amount of resources spread across some fixed number of  convex impact functions. Of all areas with positive investment, take one with the lowest marginal impact, and move a small amount of resources  from that one to the one with the highest marginal impact (if either are equal, take any). This will be an improvement since both functions are  convex. Repeat. This will shrink your investment in all except one to  zero.{% endnote %}

### Risk seeking

When you’re dealing with convex functions, it will often make sense to take risks with your resources. Suppose you’re looking at giving to a project with this impact function:

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/9.png", "Risk seeking" %}

If all you care about is expected impact, it could make sense to bring all your money to a roulette wheel, and put everything on red. Even though you expect to lose a small amount of money in expectation, you can expect to have *more* impact.

In this case, assume you double your money on red, and lose everything otherwise. Reading off the graph above, notice that if you’re risk-neutral with respect to impact, then you should be prepared to take anything upwards of a *one in three* chance of the ball landing on red.

Beyond money, it could also make sense to take career risks for this reason — imagine the input being something like ‘seniority’ or ‘acclaim’ instead.

On a smaller level, [Carl Shulman points out](https://forum.effectivealtruism.org/posts/GzJHagyuEbWdxDFjJ/concave-and-convex-altruism?commentId=PaDw8DXJ5wQ76yXsX#comments) that "this is one reason for the [donor lottery](https://funds.effectivealtruism.org/donor-lottery). The idea there is that research costs lead to convexities for small donors (because they are small, they are roughly price-takers, so diminishing returns over interventions don't outweigh that effect)."

### High stakes uncertainty

I suggested that if you’re *uncertain* about the impactfulness of a concave project among only other concave projects, then resolving your uncertainty by a small amount will never change your best guess on the optimal amount of input for that project by a large amount. As such, the stakes involved in your uncertainty are relatively low.

Not so for convex projects. More often, the rule instead becomes *if it’s worth funding at all, it’s worth funding by a significant amount*. If you think a project is on the borderline of funding, then you think it is on the borderline between not funding at all, and funding up to the point where you expect the average impact is highest — which will be some way from 0 inputs.

As such, the stakes involved in your uncertainty can be high.

### Coordination

Previously I suggested that, on simple models, different actors aiming at impact needn’t worry about coordination: they can safely just look for and support the best opportunities they find, like in a market.

But things get more complicated when impact functions are convex. Sometimes, I might come across a convex funding opportunity and think, “I can contribute $x, which I expect will have very little marginal impact. But if this gets funded to $10x, the project could end up very cost-effective. In a sense, whether I should give my $x depends on whether others do the same, up to $10x.” I could think the same thing about choosing to join a project and contribute my labour to it.

You could imagine 10 people all thinking the same thing about the same 10 projects, each project with the same convex impact curve. Each person might think, “look, I don’t mind what project we all pick, but I hope we pick the same one, since only then will my contribution make sense”. If everyone succeeds in contributing to the same option, the average impact per unit of contribution, for all their contributions together, will be high. Otherwise, it’ll be much lower. So they all have a strong reason to {% note "[coordinate](https://80000hours.org/articles/coordination/)." %}There is a complication here: you could factor in your effects on other  potential contributors to an altruistic project when you’re thinking  about the impact of marginal contributions. So, as well as considering  what the project could do with your marginal money or labour, you might  also notice that your marginal money could ‘crowd in’ more money or  labour. I think this is a good way of thinking — more sophisticated than just thinking about the direct impact. But I don’t think these  second-order effects should or typically are counted as ‘marginal  impact’ (just because they involve going past that margin).{% endnote %}

There might be ways to get the gains of coordination without actually speaking to others. Where possible, you could look out for obvious Schelling points. {% note "Maybe your decision-making should take on a Kantian" %}In a superficial sense, rather than a deep one!{% endnote %} flavour: *which project should I give to, if other actors came to the same conclusion about where to give? What’s the best thing to do, assuming other altruists are wondering the same thing, and likely to be thinking along similar lines?*

Clever funding mechanisms (maybe similar to [quadratic funding](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3243656)) could also help in some cases. We could also look to fundraising platforms like [Kickstarter](https://www.kickstarter.com/), which are often used to coordinate many small funders around ‘convex’ projects, by making progress toward funding goals public knowledge. Other platforms let prospective funders commit to contributing to a project *conditional* on others funding it to the funding target, by effectively placing their contributions in escrow and releasing them back to the funder if the target isn’t reached by some date. Again, a zebra or a lion are both better than half a lion and half a zebra.

### Spending marginal inputs can get complex in theory

Previously, I said: “[w]hen you’re dealing with concave impact functions, the following simple rule works well: *always give to the most marginally cost-effective cause*.”

Notice that this heuristic doesn’t always work when some impact functions are convex. Consider the following {% note "two functions:" %}One misconception I’m worried about imparting is that the option with  increasing returns always beats the concave option. Of course, that’s  not always true.{% endnote %}

{% image "https://images.finmoorhouse.com/writing/convex-ea/images/10.png", "Complexities" %}


Although A *starts off* most marginally effective, B *becomes* more marginally effective than A ever is, such that you could have had more total impact if you put all your money in B from the start.

This is especially obvious where projects have fixed (startup) costs, such that their initial marginal effectiveness is zero. Here, there is a sense in which a marginal dollar initially has no impact at all. You need to cross a valley of zero marginal impact before you start to make a difference.

Therefore the rule that says *always give to the most marginally effective cause* fails to deliver the most overall impact in contexts like these. It can fail when you’re weighing up a mixture of convex and concave functions, and when you’re weighing up a mix of exclusively convex functions.

The heuristic that says: *give to the most marginally effective thing in front of you* is therefore myopic. Sometimes, it doesn’t even approximate the goal of *giving in the most impactful way*.

By analogy, some landscapes are shaped such that the rule *take the step that increases your altitude by the most* will eventually get you to a global peak. But that rule fails for some landscapes with local peaks lower than the global peak. In such cases, you want a rule like *take out your map, and find the global peak. Head in that direction.*

Ultimately, we care about something like *allocating our pot of resources in the most impactful way*. But that’s very abstract: is there another *simple* and *easy to implement* rule that works in the context of convex impact functions? I don’t know. Maybe the general problem of allocating resources in the most impactful way across different impact functions of arbitrary shape is NP-hard: sometimes you might just have to do something close to considering all the reasonable allocations, and checking which allocation does best. But this problem has a direct analogue for production functions, so I’m sure there’s some work on this, and I’d be curious if anyone knows about it.

### ‘Neglectedness’ can deceive

When I was talking about concave impact functions, I suggested that neglectedness (understood as something like the inverse of total work already done) can be a useful and direct guide to impact. But not always.

If the real shape of the function is convex in places, neglectedness is a less useful guide. The major reason here is that sometimes, marginal impact might increase as a problem becomes less neglected. In other words, some problems can be *too* neglected to offer high marginal returns. Saulius Simcikas [made this point](https://forum.effectivealtruism.org/posts/NktbYpwa48u23c5XL/a-cause-can-be-too-neglected) a couple years ago.

Incidentally, this point pushes me to prefer [Paul Christiano’s conception of ‘neglectedness’](https://80000hours.org/2014/01/neglectedness-and-impact/), which is something like “how much more do I care about this output compared to the world at large”. This lets Christiano make claims like the following, which as far as I can tell are much more robust to complications involving increasing returns:

> If you care about an output K times more than society at large, then (all else equal) you should expect investing in gaining that output to be K times more effective than making other investments.

The empirical equivalent of Christiano’s conception here is something like: “what bets would I take against the world?”. The world might neglect risks from AGI because it cares less than you about the long-run fate of humanity; but also because you think it underrates the chance of something bad happening.

## A different heuristic

When you’re dealing with concave impact functions, you can use a nice action-guiding rule: give money to the most marginally impactful thing. And one of the clues to what makes a project marginal impactful is how neglected it is: how few inputs have already been spent on it.

I’ve suggested that things get a bit murkier when different kinds of impact function enter the mix. It’s not clear that there are any simple, general-purpose rules that always tell you the optimal way to allocate your resources.

But I’ll suggest some questions that come together to give us a different heuristic, which might sometimes be useful:

1. In a reasonable best case scenario, what fraction of some problem could this project solve?
2. How much input into the project is required for it to have a good shot at achieving that best-case scenario? In other words, at what point do extra initial inputs fail to appreciably increase the chances?
3. With this amount of initial inputs into the project, what’s the chance that it succeeds at reaching that best-case scenario?

Then, for each project, you can figure out the average impact for the inputs (e.g. dollar of funding) by (i) taking the scale of the problem (the impact if it were fully solved), (ii) multiplying by the chance of reaching the ~best-case scenario with those inputs, and (iii) dividing by the total inputs required.

Now you have a list of projects with guesses at expected average impacts looking only at the best-case outcomes and their likelihoods, and the inputs required to achieve them. Now pick the project with the highest expected average impact that fits within your input budget, and spend the inputs required for it to take a shot at achieving its best-case scenario. Repeat.

This is of course just a heuristic: it’s cutting corners and making simplifications for convenience. But I’d guess it could well approximate the best way to spend your inputs, when:

1. Your budget for inputs (e.g. the money you have to spend) is decently larger than the typical inputs required for a given project to take a shot at a best-case scenario;
2. The projects your considering initially exhibit increasing returns with inputs, or at least don’t behave in the familiar ‘diminishing returns right from zero inputs’ way;
3. You’re looking at high-upside, high-uncertainty projects;
4. There aren’t many complicated interactions between different projects (i.e. the value of supporting any one can mostly be treated as independent from the whether you support any other)

One way to roughly rephrase this approach is as a question like: *for the largest fraction of some problem we can reasonably expect to solve with all our collective resources, how can we maximise the chance that we solve that fraction of the problem?*

This kind of approach seems much more similar to early-stage (seed and venture) investing in companies. For instance, if you’re a partner at [Y Combinator](https://www.ycombinator.com/) sorting through applicants, you’re going to be interested in framings like: in roughly the best-case, what could our support enable? What market is this person addressing, and how much of it could they feasibly capture (or create)? Framings around marginal returns seem less obviously applicable to me: too ambiguous about whether we’re talking about short- or long-run returns, and too confusing about what we should mean by returns on the original investment given that it probably enables and attracts a lot of further investment.

## Conclusion

In the last couple years, the EA community has accumulated enough earmarked funding to look quite far beyond the smaller margins that early EA was more familiar with. So it’s becoming more worthwhile to think about projects with high startup costs, or with low initial returns until a large amount is invested.

Many of the early insights from EA are best suited to contexts of decreasing returns and small margins. I’m arguing that it might be worth adding new heuristics to those insights which are better suited to inframarginal thinking, and increasing returns. We don’t currently have such an impressive conceptual toolset for these contexts.

I’m definitely not trying to claim that any of the early insights are *wrong*, nor that the *overall* impact curve for EA is convex (I don't think it is).

I tried explaining some contrasts between ‘concave’ and ‘convex’ functions, and some rough thoughts on different approaches to spending resources, but all in a very disjointed way.

I’m definitely not claiming that most people are naive to some of these complications. The early insights about concave are still true as far as they go, and still highly useful. I think it could be useful to throw some new tools into the conceptual toolkit, but not to abandon the tools we already spend most of our time using, and for good reason.

I hope this prompted new thoughts, and I’d be interested to see more serious work here!

## Appendix

### The long and short run

One point I glossed over is that just as it’s possible to differentiate between a *short-run* and a *long-run* production function, we should do the same for impact functions. The short-run is the time over which you can’t change the quantity of inputs other than the kind of input you’re specifically considering. For instance, if you’re considering increasing funding for a project, the short-run is the period over which it hasn’t yet scaled the size of its team. The long-run is that time period over which the firm or project can change the quantities of all its inputs: it can hire new people, set up new sub-projects, and so on.

Suppose you’re a firm making widgets in a small widget factory. In the short run, you’ll likely face diminishing returns with more of each particular kind of input, such as increasing the supply of labour. But in the long run, you can eventually build up economies of scale, so the long-run production function is often likely to look more concave.

Similarly, doubling the funding of an EA project while keeping the supply of labour the same will likely less than double the impact in the short run. But once that extra funding helps hire new people in the longer-run, it could eventually roughly double the impact. In general, then, you should expect more steeply diminishing returns in the short-run compared to the long-run.

### Direct and indirect impact

Here’s something I also glossed over, partly because I’m still confused about it. What exactly should we (or do I) mean by ‘impact’ here? For production functions, the analogous question is fairly straightforward: it’s just the number of widgets you can produce per day, or similar. But what we could mean by ‘impact’ can vary from a direct output (e.g. number of bednets distributed) to a terminal outcome (e.g. lives saved from malaria). And even when you consider the ‘direct’, or ‘proxy’ output like ‘number of bednets produced’, you can also distinguish between something like first- and second-order effects. The first-order effect of my donation to AMF is to buy and distribute some number of bednets. Second-order effects might include crowding-out (‘funging’) other donors, or alternatively crowding-in other donors.

By ‘impact’, I just have in mind the straightforward first-order, direct things. That is, for specific impact functions, you can give a more specific label for the y-axis. The more you want to compare between more disparate projects, the broader that quantity needs to be, and in the most general case it does have to become all-things-considered impact.

What this implies is that you can’t straightforwardly read off an impact function to see the counterfactual value of *you* giving time/money etc. But I’m happy with screening off that complication.

I’m sure some of these distinctions are more clearly discussed in the economics literature, and I’d be interested to hear about that, because I’m still fuzzy on this point.

## Follow-up reading

- Vitalik Buterin — [Convex and Concave Dispositions](https://vitalik.ca/general/2020/11/08/concave.html)
- Core Econ — [Concave and Convex Functions](https://www.core-econ.org/the-economy/book/text/leibniz-03-01-03.html)
- Glen Weyl on [The Political Economy of Increasing Returns](https://mediacentral.princeton.edu/media/KeynoteA+The+Political+Economy+of+Increasing+Returns+-+Glen+Weyl/1_6jqxefyi)
- [Production and cost with one input](https://www.econgraphs.org/graphs/micro/producer_theory/production_and_cost/production_and_cost_one_input) (econgraphs.org)
- [Production possibility frontier](https://www.econgraphs.org/graphs/micro/equilibrium/general_equilibrium/ppf_and_production_functions) (econgraphs.org)
- [Is Neglectedness a Strong Predictor of Marginal Impact?](https://forum.effectivealtruism.org/posts/cEkseGBh7a2PAKWFz/is-neglectedness-a-strong-predictor-of-marginal-impact) By [sbehmer](https://forum.effectivealtruism.org/users/sbehmer)
- Owen Cotton Barratt — [Prospecting for Gold](https://www.effectivealtruism.org/articles/prospecting-for-gold-owen-cotton-barratt#how-can-we-trade-off-these-dimensions-against-each-other) (especially the linked section)
- 80,000 Hours — [A framework for comparing global problems in terms of expected impact](https://www.effectivealtruism.org/articles/prospecting-for-gold-owen-cotton-barratt#how-can-we-trade-off-these-dimensions-against-each-other)
- [ITN Framework](https://forum.effectivealtruism.org/tag/itn-framework-1) — EA Forum concepts
- [A cause can be too neglected](https://forum.effectivealtruism.org/posts/NktbYpwa48u23c5XL/a-cause-can-be-too-neglected) by [Saulius Simcikas](https://forum.effectivealtruism.org/users/saulius)
- [Neglectedness and Impact](https://80000hours.org/2014/01/neglectedness-and-impact/) — Paul Christiano