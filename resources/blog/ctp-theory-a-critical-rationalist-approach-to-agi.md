---
title: "CTP Theory: A Critical Rationalist approach to AGI"
date: "2019-11-01"
tags:
  - AGI
  - epistemology
  - CTP Theory
---

#The Purpose of CTP Theory

I’ve [previously argued](/the-case-for-a-critical-rationalist-approach-to-agi/) that Critical Rationalism, the school of epistemology created by Karl Popper and expanded upon by David Deutsch, is the most promising path towards AGI that we currently have. I have developed a proposal for how to make an AGI, which is heavily inspired by Critical Rationalism, that I will describe it in this post. I call the proposal "Claim-Theory-Problem Theory", or "CTP Theory", since "claims", "theories", and "problems" are the terms I use for the three most important types of entity in the theory. CTP Theory isn’t complete, and more philosophical work is necessary to get it to the point where it can be used to create a full AGI, but I think it does solve several important epistemological questions about how to program an AGI, such as:

- How can ideas be represented on a computer?
- How can conjecture (the process of blindly varying old ideas to produce new ones) be done on a computer?
- How can conflicts between ideas represented on a computer be found? In other words, how can an algorithm notice *problems* between ideas?

#Claims and Theories

Critical Rationalism says that ideas come from conjecture, a process in which old ideas are varied and combined to produce new ideas. Since most possible ideas are wrong, you need to attempt to *criticize* these conjectured ideas to attempt to find which ones are wrong. Criticism works by pointing out contradictions between various ideas. These contradictions are referred to as "problems" in CR, and CR says that intellectual progress is made by finding and attempting to solve problems.

How can we notice problems between ideas? As an example, consider the following statements:

- A="My cat is calico"
- B="My cat is male"

These two statements are contradictory. But how do we know that? There are some statements that seem self-evidently contradictory, like "My cat is male" and "My cat is not male" (or, more broadly, "X" and "not X", since "My cat is not male" can be rephrased as "It is not true that my cat is male"). I’ll call that kind of contradiction a "direct contradiction". There is no direct contradiction between A and B, but we can still see that they are contradictory. How?

The reason that we can see that A and B are contradictory, I think, is that we have other ideas in our mind that allow us to deduce a direct contradiction from them. Consider the following ideas:

- C="All calico cats are female"
- D="If something is female, it isn’t male"

From these two ideas, along with A and B, we can derive a direct contradiction. From A and C, "My cat is calico" and "All calico cats are female", we can derive:

- E="My cat is female"

Then, from D and E, "If something is female, it isn’t male" and "My cat is female", we can derive:

- F="My cat is not male"

This directly contradicts B, "My cat is male". So, while A and B weren’t contradictory by themselves, the set {A, B, C, D} is contradictory because it is possible to derive a direct contradiction from it.

C and D are, I think, a different kind of idea from A and B. While A and B are mere statements of fact (or what is thought to be fact), C and D are ideas that allow one to derive new statements of fact from old statements of fact. That is why we were able to derive a new statement of fact, E, from A and C.

To distinguish between these two types of ideas, I’ll call the first type of idea "claims" and the second type of idea "theories". In other words, "claims" are statements of fact, and "theories" are functions that take in a claim (or multiple claims) for input, and return a new claim. A, B, E, and F are claims, while C and D are theories.

Representing ideas in code
We’ve got two types of ideas, theories and claims, and we know how they can interact, but to create an AGI we’ll need to be able to represent these ideas on a computer. In other words, we need some way to algorithmically represent theories and claims. It’s important to distinguish between ideas and the *algorithmic representations* of those ideas, so I’ll use the terms "A-Claim" and "A-Theory" to refer to the algorithmic representations of claims and theories, respectively.

The name "claim" suggests that they should be represented as sentences written in a natural language, like english, but I think this cannot be the case. For a mind to make sense of such sentences, or to realize that two were contradictory, it would need to already possess sophisticated knowledge of the English language. But such knowledge is exactly that an AGI should be able to learn on its own, so it can’t start off with the knowledge of how to interpret English sentences pre-programmed into it. That same problem would apply to any other way of representing claims that gave the representations any inherent meaning: the AGI shouldn't start out with knowledge about how to interpret the meaning of A-Claims, because it should acquire that knowledge itself. For this reason, I think that it isn't necessary to worry about the A-Claims having any inherent meaning. A-Claims will not mean anything when a mind is first created, but as the mind evolves and develops theories, it will develop its own scheme for what meanings A-Claims represent.

Since A-Claims do not have inherent meaning, I guess that the details of the scheme used to express A-Claims don’t matter very much, as long as the scheme is robust enough to express an unlimited number of possible A-Claims (for instance, it wouldn’t be a good idea to use single letters in the English alphabet to represent A-Claims, because then there would only be 26 possible A-Claims). However, it’s important that there be a well-defined way to determine if two A-Claims are directly contradictory.

An example of a scheme for expressing A-Claims is to have each A-Claim consist of boolean (a "true" or "false" value) and a list of integers. This allows for an unlimited number of possible A-Claims, since there are an infinite number of lists of integers. Two A-Claims expressed with this scheme could be considered contradictory if they have identical lists of integers, but opposite boolean values.

Theories are functions that take some number of claims as inputs, and return a claim as output. (Note: This is somewhat of a simplification. See the section *Appendix: Details about the implementation of A-Theories for more details*) Thus, A-Theories can be expressed as functions written in some programming language. I’ll call the language used to express A-Theories the "theory language". The theory language should be turing-complete, so that all possible computable functions can be potentially represented. It’s also important that A-Theories be implemented such that they always return the same output for a given set of inputs. Other than that, the details of the theory language don’t matter much.

Along with the theory language, there needs to be an algorithm that varies the implementation of a given A-Theory to produce a new A-Theory. This algorithm is essentially responsible for the mind’s ability to conjecture, so I’ll call this the "conjecture algorithm". As with the theory language, the exact details of how the conjecture algorithm works are not important. However, it is important that the conjecture algorithm be capable of potentially generating any computable function. In other words, there should be no computable function that the conjecture algorithm would be incapable of generating. Otherwise, there would be some ideas that the mind was incapable of creating.

Critical Rationalism says that conjecture works not only by varying individual ideas, but also by taking parts of multiple different ideas and combining them. For this reason, the conjecture algorithm should be able to insert references to other theories into the code for new theories, and/or should be able to insert chunks of code from other theories into the code for new theories.

#Claim Generation

(Note: following the paradigm I used earlier, I’ll use the term "A-Mind" to refer to an algorithmic representation of a mind, and "A-Problem" to refer to the algorithmic representation of a problem)

I’ve described how claims and theories are represented, but how are these representations used? One of the most important processes in CTP Theory is what I call "claim generation", which is the process by which A-Theories are used to generate new A-Claims. Claim generation works like so:

An A-Mind contains a population of A-Claims and a population of A-Theories. In each step of claim generation, an A-Theory is selected, and then some number of A-Claims are selected. The selected A-Theory is executed, using the selected A-Claims as inputs. If the execution completes successfully, the returned A-Claim is added to the A-Mind’s population of A-Claims. If execution does not complete successfully (if the A-Theory encounters a runtime error, for instance) nothing is added to the population.

By iteratively applying this process, the A-Mind explores the implications of its A-Theories. A-Claims created during one iteration of claim generation can be used in later iterations, which allows the claims made by one theory to be interpreted and used by another theory.

Sometimes, newly created A-Claims will directly contradict an A-Claim already present in the population. This is important, because it means that some of the ideas in the mind are contradictory, or in other words it indicates the existence of a problem. In order to find these problems, the A-Mind must compare each new A-Claim to the A-Claims already in the population, and look for direct contradictions.

#Problems

When the A-Mind finds two directly contradictory A-Claims, an A-Problem is created to represent the problem. The A-Mind contains a population of A-Problems just as it does for A-Theories and A-Claims, and when new A-Problems are created they’re added to the population.

Problems cannot be understood merely in terms of direct contradictions between two claims. As I explained before, there exists a problem between the ideas A="My cat is calico", B="My cat is male", C="All calico cats are female", and D="If something is female, it isn’t male", despite the fact that none of them directly contradict, because it is possible to *derive* a direct contradiction from them. To truly understand the problem, you need to consider A, B, C, and D, not just the two directly contradictory claims.

To account for this, the A-Mind stores a record for each A-Claim in its population. The record describes the A-Theories and other A-Claims that were used to create the corresponding A-Claim. Using these records, the A-Mind can trace backwards from a directly contradictory pair of A-Claims to the set of all ideas that were involved in the A-Claims’ lineage.

To illustrate, here’s an example of how claim generation and the detection of problems could work: Imagine that an A-Mind’s population of A-Claims included representations of A and B ("My cat is calico" and "My cat is male") and the population of A-Theories included representations of C and D ("All calico cats are female" and "If something is female, it isn’t male"). Say C is selected as the A-Theory to be used for a step of claim generation, and A is selected as the A-Claim to be used as an input. This would produce an A-Claim representing E ("My cat is female"), and alongside that A-Claim there would be a record saying that E was created using C and A. Then, in a later step of claim generation, D could be selected as the A-Theory and E could be selected as the input A-Claim, which would produce F ("My cat is not male"), and alongside F the mind would store a record that said F was created using D and E. When the A-Mind adds F to the population of A-Claims, it would notice that F directly contradicted B, and it would create an A-Problem to keep track of the contradiction. To get the set of ideas that are relevant to the problem, the A-Mind would trace the lineage of the A-Claims backwards, using their records. Looking at F’s record, the A-Mind will see that F was derived from D and E, and from there it could look at E’s record to see that it was derived from C and A.

Eventually this process of tracing A-Claims backwards will end, either when an A-Claim was produced by an A-Theory that took 0 inputs, or when an A-Claim has no record of how it was created (Such an A-Claim would be injected into the mind by an external system to allow for sensory input, as I’ll describe in the *Input and Output* section). Once this process of tracing backwards has ended, the set of ideas encountered will be the set of all ideas that are relevant to the problem.

#Solving Problems

Once the set of ideas that are relevant to a A-Problem has been found, how can the A-Problem be solved? When there is a contradiction between a set of ideas, at least one of the ideas must be wrong. So, when an A-Problem is found, one of the A-Theories in the lineage of the two directly contradictory A-Claims must be wrong.

Solving an A-Problem, in CPT Theory, means modifying one of the relevant A-Theories in a way that makes it so the contradictory A-Claims could no longer be derived. Thus, the A-Mind can attempt to solve problem by using the conjecture algorithm to generate variations of the A-Theories involved. Then, using the information in the records, the A-Mind can attempt to recreate the two contradictory A-Claims by following the same path of A-Theories that was used originally, but using the varied A-Theories in place of the originals. If the two resulting A-Claims are no longer contradictory, then the variations solve the problem.

However, there are times when a certain set of variations would solve a problem, but regardless shouldn’t be accepted. For instance, one could solve any problem by making one of the involved theories undefined for all inputs. This modification would prevent one of the contradictory claims from being created, so it would technically solve the problem, but it would also destroy whatever useful knowledge the A-Theory represented. So the A-Mind cannot simply accept any modification that solves a problem, and instead it needs some way to determine if a set of variations is an acceptable replacement.

I am not sure how this criterion of acceptability should be defined. What it needs to accomplish, roughly speaking, is to make sure that a variation is useful for everything (or, perhaps, merely *most* things) that the original theory was useful for. However, figuring out exactly what it this means, or how to track the various ways that theory is "useful", is a non-trivial task. I consider this problem, of how to determine if a variation is an acceptable replacement for an A-Theory, to be the most important open problem with the algorithm.

Input and Output
The mind needs to be able to interact with the outside world, which means that it needs to be able to take input and produce output. This can be accomplished relatively straightforwardly.

Input can be accomplished by having an external system which injects A-Claims containing information from some sensory system into the A-Mind. For instance, say an A-Mind used the "boolean + list of integers" format for A-Claims that I suggested previously. If the A-Mind was going to be hooked up to a camera, the matrix of pixels from the camera could flattened into a list of integers, and that list of integers could be placed into an A-Claim, which would then be placed into the A-Mind’s population of A-Claims. Since such an A-Claim was created by an external system and not an A-Theory, it would have no corresponding record.

Output can be accomplished by having an external system which scans each new A-Claim created during claim generation. When the external system detected an A-Claim with the right format, it would activate some sort of output device. For instance, if the A-Mind were hooked up to a robotic arm, the output system could search for A-Claims of the form [true, [0, 9, X]], where X is some integer value, and the robotic arm would be according to the value of X: If X was positive the arm would move right, and if X was negative the arm would move left, and the distance or speed at which the arm moved would be proportional to the magnitude of X. This same scheme could be expanded to allow for more sophisticated output. For instance, the output system could look for an A-Claim of the form [true, [0, 9, X, Y]], and use X and Y to control the arm in two separate dimensions.

#Open Problems with CTP Theory

As I said before, CTP Theory isn’t complete. Below are several of the most important open problems with the theory that I’m currently trying to solve, ordered roughly by how important I think they are:

1. **When a variation (or a set of multiple variations) that solves an A-Problem is found, how does the A-Mind determine whether or not to accept the variation(s)?** I explained this problem in the *Solving Problems* section, and I said I think this is the most important open problem.

2. **During claim generation, how does the A-Mind decide which A-Theories to use?** It seems like the mind needs to be able to use some theories more frequently than others. For instance, I use my theories about how to speak more frequently than I use my theories about how to do calculus problems. Additionally, the A-Mind needs to be able to use some theories more frequently in particular situations. For instance, I use my theories about how to drive very frequently while driving, and very rarely otherwise. I’m not sure how an A-Mind could accomplish this.

3. **When should the A-Mind introduce entirely new A-Theories?** In CPT Theory as I’ve described it so far, new A-Theories are only ever created as replacements for old ones, so the total number of A-Theories in the A-Mind remains constant. This seems wrong to me, because I think the number of A-Theories should grow as the A-Mind creates more knowledge. However, I’m not sure when an A-Mind should introduce new A-Theories, or what form the new A-Theories should take (should they be randomly generated? Or should they be variations of other, existing A-Theories?)

4. **When there are multiple known A-Problems, how should the A-Mind choose which to prioritize?**

#Appendix: Details about the implementation of A-Theories

I said before that each A-Theory takes in some fixed number of A-Claims, and returns one A-Claim, but I also said that this was a simplification. Originally, I intended for A-Theories to be implemented that way, but doing so raises a problem: When an A-Theory has been selected during claim generation, what A-Claims should it be given as arguments? To solve this problem, I came up with an alternative way to handle A-Theory arguments:

Instead of taking a fixed number of A-Claims as arguments, each A-Theory will take one argument: a *set* of A-Claims of unspecified size. The theory language contains a special operator, which I’ll call the "selection operator", which selects an A-Claim from the input set. Later operations can then reference the selected A-Claim. This operator can be invoked any number of times while an A-Theory is running, which allows an A-Theory to select any number of theories from the input set (including 0, if it never invokes the special operator). The record of the output A-Claim, instead of storing every A-Claim in the input set, will only contain the A-Claims that were actually selected from the set with the selection operator (because those are the only ones that the A-Theory uses directly).

Whenever the selection operator is invoked, the execution of the A-Theory splits into a number of branches, one branch for each A-Claim in the input set. In each branch, a different A-Claim will be selected from the input set. Each branch continues independently, and will return it’s own A-Claim as an output (unless it reaches a runtime error beforehand), and each branch’s output is added to the A-Mind’s population of A-Claims at the end of execution.

The set that will be provided to each A-Theory during claim generation will simply be the A-Mind’s entire population of A-Claims. In this way, each iteration of claim generation will effectively apply the chosen A-Theory to every combination of A-Claims in the mind, so the implications of each theory will be explored as efficiently as possible.
