---
title: "Some Criticisms of the Neo-Darwinian Theory of the Mind"
date: "2021-1-20"
tags:
  - Epistemology
---
Dennis Hackethal [has proposed](https://medium.com/conjecture-magazine/the-neo-darwinian-theory-of-the-mind-d84c0bcc6485) a theory he calls “The Neo-Darwinian Theory of the Mind”, which is intended to be a low-level explanation of how intelligent minds work. The central concept of the theory is that ideas within a mind are replicators that compete with one another for prevalence in the mind. The evolutionary dynamics that arise from this evolutionary competition supposedly explain creativity, just as the competition between genes within gene pools explains the origin of adaptivity in biological evolution.

While I am glad to see people exploring Critical Rationalist approaches to AGI, I don’t think that this theory holds up to criticism. I have several major criticisms of theory which I think show that the theory is neither a good approach to implementing artificial general intelligence, nor a plausible evolutionary account of how general intelligence arose in humans.

The Inefficiency of Replication
According to Dennis’s theory, the ideas which manage to survive in a mind are those which are most successful at replicating themselves, and thus minds will tend to have many copies of each individual idea, especially those which are most evolutionary successful. However, from a computational perspective, creating a new copy of an existing piece of data, such as an idea, is generally wasteful. A mind that constantly made exact copies of ideas that already exist would end up unnecessarily wasting a lot of memory space.

There’s a way to modify the theory that solves this issue with memory space: Rather than allowing ideas to replicate, simply have an integer associated with each idea, and increment that number each time the idea would normally replicate. Tracking these values, which could be called the “weight” of the corresponding ideas, would allow the mind to behave exactly as it would if it contained replicators, but without any of the wasted space.

I’ve mentioned this criticism to Dennis in the past, and in responding to it in his article explaining the theory, he said:

> There has been an ongoing, friendly point of contention between the intelligence researcher Ella Hoeppner and me about the role of replication in any theory of evolution. Citing Donald Campbell’s evolutionary epistemology, she argues that replication can drive evolution, but is not necessary. All that’s needed, she argues, is variation and selective retention. I am agnostic on the question of necessity and think that if we introduce replication in a mind, we can explain a great many things that we couldn’t (at least not as well and as easily) without it.

> *Dennis Hackethal, [The Neo-Darwinian Theory of the Mind](https://medium.com/conjecture-magazine/the-neo-darwinian-theory-of-the-mind-d84c0bcc6485) in Conjecture Magazine*

However, I don’t agree that introducing replicators helps explain anything that isn’t explained just as well, and just as easily, by the variant theory that I’ve proposed. The point of the variant theory that I’ve suggested is that, aside from having a smaller memory footprint, the way it behaves should be precisely the same as the way Dennis’s theory would behave. Whenever an idea would thrive in Dennis’s theory, it should also thrive in the variant theory. The difference is merely that “thriving” means increasing the weight of an idea, rather than creating additional copies of the it. So the including replicators doesn’t help the theory explain anything at all, and only serves to make the theory less computationally efficient.

The Evolutionary Disadvantages of Idea Replication
Dennis has argued that his theory helps explain how general intelligence evolved in humans, like so: The minds of some pre-human ancestral species contained set of ideas that remained relatively unchanged over the course of a lifetime, and at some point a genetic mutation occurred that allowed one or more of the ideas within a mind to begin replicating. Once this replication started, a competition between different kinds of replicators began, and this process eventually gave rise to general intelligence.

I think that there is a big problem with this explanation. When an idea began to replicate in the mind of a species that had never contained replicating ideas before, it would likely be detrimental to the organism’s survival, and so this trait wouldn’t persist. As I mentioned in the last section, replication can quickly eat up a lot of memory, since each new copy of an idea requires some dedicated memory space. It’s unlikely that an brain not yet adapted to containing replicating ideas would have any free memory space for the new ideas to use. If any ideas were to successfully replicate, they would take up space that would normally be used by other ideas, and this would almost certainly be detrimental. The emergence of replicating ideas in a mind not suited for them would be akin to a form of brain cancer.

Emergence of Higher Level Epistemological Dynamics
The problems that I’ve pointed out so far center around the issues caused by replication. However, I’ve already proposed a variant theory that behaves identically to Dennis’s theory, but without relying on replication. Is this variant theory, which avoids several of the problems original theory that the original theory had, a plausible account of general intelligence?

Unfortunately, I don’t think so. Dennis’s theory is intended to describe a low-level system out of which the high-level properties of intelligent minds, as described by Popperian epistemology, will emerge. However, I don’t see why the high-level dynamics of Dennis’s system would resemble general intelligence.

From Popper’s epistemology, we know that intelligent minds work by an iterative process of conjecture and criticism. Dennis’s theory explains how conjecture can occur: Occasionally, during replication, the newly created idea ends up being slightly different from the original idea in some way, rather than being perfectly identical. This is analagous to how new genes are created via genetic mutation in biological evolution.

However, I don’t think that Dennis’s theory satisfactorily explains how criticism occurs. Criticism, in the Popperian sense of the term, refers to finding a contradiction between some set of ideas. Intelligent minds work by looking for such contradictions between their ideas and attempting to resolve them. So, for Dennis’s theory to be correct, the replicator system that he proposes would need to somehow lead to the mind searching for and attempting to resolve contradictions between ideas.

While it’s possible that such dynamics may develop in a system like Dennis’s, it isn’t obvious exactly how they would, or why there would be any selection pressure for them to occur. Without an explanation of how and why such dynamics would evolve, I don’t think the Neo-Darwinian Theory of the Mind provides a good explanation of general intelligence.