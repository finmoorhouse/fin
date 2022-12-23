---
title: Risk Mitigation and the Value of Information
permalink: /writing/value-of-information/
type: unpublished
date: 2021-07-28
featuredImage: './value-of-information.png'
---
Information is valuable because it helps us make better decisions, such that we would be willing to pay for it. Sometimes we face trade-offs between spending directly on an uncertain outcome, and resolving uncertainty about that outcome. Trade-offs of this kind help to sharpen our thinking about how much we ought to value new information.

The first half of this post will give a quick primer on the value of information in the context of some simple games. I somewhat ignore the existing literature on the value of information in economics, mostly owing to laziness.

The second half is potentially more interesting: I consider some simple cases involving trade-offs between directly reducing risks under uncertainty about their absolute magnitude, and gaining information about their absolute magnitude in order to better prioritise between direct spending on various risks.

Some takeaways: first and least surprising, information is always valuable in setups such as these.  This is related to the 'Jensen inequality'. Second, in trade-off situations, it's not unusual for the optimal spend on information to increase as information gets cheaper, and then decrease again as it gets really cheap. On the risk applications, we find that the value of information increases as the number of risks being compared increases, and as uncertainty about their absolute magnitude increases. We also find that, on simple models and plugging in reasonable numbers, we should be spending a lot of the 'pie' of resources on simply figuring out which risks are biggest before spending on direct risk reduction. Maybe none of this is especially surprising, but I found it useful to think through somewhat formally.

Before introducing numbers, consider the following game. I've placed either a blue or an orange marble in a box. I know the colour, you don't. You have a budget of 10 toy dollars, and you need to spend all of it on this game. Eventually, you're going to bet your remaining money on the marble being either blue or orange. Before you do so, you can first spend some amount of money on gaining information about the colour of the marble. Here's how that works. In a seperate cloth bag, I've placed two marbles (of identical shape) — one blue and one orange, and you know this too. For every dollar you pay me, I'll place one extra marble in the bag, corresponding to the colour of the marble I chose to place in the box. Once you've spent the amount you want on this 'information gathering' phase, you can randomly draw a marble from the cloth bag, without looking, and take a look at it. Then you place your bet.

How many marbles should you pay me to place in the cloth bag? Clearly not 10, because you'll have no money left to bet with. At least 1, because in that case you'll have \$9 to bet with but your odds of being right will have increased to $\frac{2}{3}$, and $9 * \frac{2}{3} = 6 > \frac{1}{2} * 10 = 5$. Even stronger, notice that you should never spend more than half your money on information, no matter how cheap it is. Even if you're certain what colour the marble is, if you have less than \$5 to spend, you can't win more than \$5 in expectation, which is what you stood to win if you just bet \$10 at the beginning. So somewhere between \$1 and \$4. 
