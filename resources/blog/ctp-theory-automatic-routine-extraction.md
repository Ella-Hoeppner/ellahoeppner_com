---
title: "CTP Theory: Automatic Routine Extraction"
date: "2019-12-07"
tags:
  - AGI
  - Epistemology
  - CTP Theory
---

#Introduction

In [CTP Theory](/ctp-theory-a-critical-rationalist-approach-to-agi/), new theories are created by an algorithm, called the "conjecture algorithm", that randomly varies the code of an old theory to create a new one. One obvious way to implement the conjecture algorithm is to make it randomly delete or insert new instructions into the code. This approach, however, has at least one serious issue: the only functions it can insert into the code are those that are built into the language as basic instructions. To solve this issue, I've developed an approach I call "Routine Extraction", which automatically finds repeated chunks of code and moves them into a function. I call functions created in this manner "routines". Once routines have been found, the conjecture algorithm can insert references to these routines into new theories, rather than only inserting basic instructions.

#Simplifying Code Expression

To extract a routine, we first need to be able to find a repeated chunk of code. Consider, as an example, this segment of code, written in the language I created for [my implementation of CTP Theory](https://github.com/EllaMHoeppner/CTP_Theory):

> push_const 0

> add

> remove_int 1

> push_claim_int

> push_const 0

> add

> remove_int 2

Don't worry about what this code actually does, because that isn't important for what we're trying to accomplish.

This code contains a chunk consisting of "push_const 0" followed by "add" that appears twice. That means that we can define a new routine that consists of that chunk of code, and then replace each of the two instances of the chunk with a reference to this new routine. But, to implement this as a general approach, we need to have a way to automatically detect such repeated chunks.

The first step to detecting these repeated chunks is to convert the code into a format that is easier to analyze. Instead of expressing each instruction as a string, it would be best if each instruction were represented with something simpler, like an integer. We can convert the code into a list of integers like so: Replace the first instruction with a 0. For each later instruction, first check if the instruction is identical to any previous instructions, and if so replace it with the integer assigned to that previous instruction. Otherwise, replace it with the smallest positive integer that hasn't yet been used. This will produce a list of integers, one for each instruction in the original code, where identical instructions in the original code correspond to identical integers in the list.

Applying this process to the example code I gave above would go like so: The first instruction, "push_const 0", will be replaced with a 0. The second instruction, "add", isn't identical to the first instruction, so it will be replaced with 1. The third instruction, "remove_int 1", isn't identical to either the first or the second, so it will be replaced with 2, and similarly the fourth instruction "push_claim_int" will be replaced with 3. However, when we get to the fifth instruction, "push_const 0", we realize that this instruction is identical to the first, so it will be replaced with a 0, just as the first was. Similarly, the sixth instruction "add" is identical to the second, so it will be replaced with 1. Finally, the seventh instruction is "remove_int 2" which isn't identical to any previous instructions (it is similar to the third instruction, "remove_int 1", in that it uses the same basic instruction with a different parameter, but for our purposes we will consider them different), so it will be replaced with a 4. The list of integers we end up with is at the end of this process is:

>  0,1,2,3,0,1,4

This format is much simpler, and the repeated chunk of code consisting of a "push_const 0" followed by an "add" can still be recognized as a 0 followed by a 1, and it still appears in two places. And, importantly, if we keep track of which instructions corresponded with which integers, we can later convert this list back into the same series of instructions that we used to produce it.

#Finding Repeated Chunks

Once we have our code represented as a list of integers, we want to be able to automatically find repeated chunks. If we think of these lists of integers as strings (where each unique integer represents a unique character), then we can think of the problem as a search for *repeated substrings*. In particular, we can focus on the problem of finding the *longest repeated and non-overlapping substring* (in other words, the longest substring that occurs at least twice in a parent string, such that the two occurrences of the substring do not overlap). This is a well-known problem in computer science, and there exists an efficient solution to this problem that uses a technique called "Dynamic Programming". [This page](https://www.geeksforgeeks.org/longest-repeating-and-non-overlapping-substring/) provides an explanation of the problem, along with some code for solving it.

So, we can find repeated chunks of code by first converting the code to a list of integers, and then using the algorithm described above to find the longest repeated substring within that list of integers. If the longest repeated substring that the algorithm finds is of length 1, then extracting it into a function would be useless. However, if the substring found is of length 2 or more, we can create a new routine by converting the substring back into a series of instructions. We can then delete the instructions that correspond to occurrences of the substring in the original code, and replace them with references to the new routine.

Once a routine has been extracted, its possible that the mind will once again evolve the same chunk of code, as it has at least twice before. For this reason, the A-Mind should scan new A-Theories for places where they have a chunk of code that is identical to some existing routine. When such a chunk is found, it should be replaced with a reference to the corresponding routine.

There are two issues that make the process of extracting routines from code slightly more complicated than described above.

The first issue is that, when using this technique in practice, we are interested in finding chunks of code that are repeated anywhere in the set of all A-Theories in the A-Mind. In other words, we are not just looking for chunks that appear twice within the same A-Theory, but also chunks that appear once in one A-Theory and once in another.

This issue can be handled like so: When converting code into lists of integers, rather than having a separate list of integers for each theory, we will instead use one long list of integers. It is important that integers correspond to the same instructions in the lists of integers for all theories, or else repeated chunks of code won't be recognized properly. To accomplish this, we can concatenate the code of all theories before converting them to lists of integers, and instead convert the concatenated code to one long list of integers. Then, we need to insert separator values at the locations in the list that correspond to breaks between the original theories, because otherwise, the repeated substring found might cross the boundary between two theories, which wouldn't correspond to a chunk of code that could validly be extracted. Each separator value used between two theories needs to unique because otherwise, as before, the substring found might cross the boundary between two theories. You could choose separator values by using negative numbers, or using positive integers that are greater than any values used to represent instructions.

The second issue is that not all subsections of code can be removed and replaced with a call to a function, and not all subsections of code would form a valid function. For example, consider the two following chunks of code, again written in the language I created for CTP Theory:

> if

> add

> end

> if

> add

> remove_int 1

> end


If you were to convert this code to a list of integers, you would get

> 0,1,2,0,1,3,2

Here we can see that the substring "0,1" is repeated twice. However, the code that that substring corresponds to is just

> if

> add

Which is not a valid function, because there is no "end" instruction closing the block that the "if" instruction opens. And, if the instances of that substring in the above code were replaced with references to this a routine (here represented by an instruction "exec 0"), the new version of the code would be:

> exec 0

> end

> exec 0

> remove_int 1

> end

This code, like the routine itself, is invalid, because the "end" instructions aren't preceded by any instructions that would open a block (like an "if" or a loop of some kind).

To handle this issue, the routine extraction algorithm described above needs to be modified such that it will only extract *valid* functions, i.e. functions where each instruction that opens a block has a corresponding "end" instruction, and vice versa. The Dynamic Programming approach I described above can easily be changed to handle this extra constraint. ([my implementation of CTP Theory](https://github.com/EllaMHoeppner/CTP_Theory)) contains a modified version of the approach linked above that implements these changes.)

#Extracting Routines From Other Routines

So far I've only talked about extracting routines from *theories*, but we can generalize the approach so that routines can also be extracted from other routines. Consider the following theories, expressed as lists of integers:

> Theory 1: 0, 1, 0, 2

> Theory 2: 0, 1, 0, 3

> Theory 3: 1, 0

When we first try to extract a routine using the procedure I've described, we will find "0,1,0" as the longest repeated substring. If we extract this routine, the mind will have the following functions (for simplicity, I'll just use the same numbers used before, except that the call to the new routine will be represented by a 4):

> Theory 1: 4, 2

> Theory 2: 4, 3

> Theory 3: 1, 0

> Routine 1: 0, 1, 0

There are no repeated chunks of code among the theories, but there is a chunk of code, "1, 0", that appears in both theory 3 and routine 1. We can extract this chunk into a routine as well (as above, I will keep the numbers the same, except that the call to this new routine will be represented by a 5):

> Theory 1: 4, 2

> Theory 2: 4, 3

> Theory 3: 5

> Routine 1: 0, 5

> Routine 2: 1, 0

Now there are no repeated chunks of code anywhere in this set of functions, so its not possible to extract any routines.

#Removing Underused Routines

Routines are created when the same code is repeated in at least two places, and the original instances are replaced with references to the routine. However, its possible that, after those references to the routine are added, one or both of the theories will later be changed such that the reference is removed.

If all references to a routine are removed, then the routine no longer serves any useful purpose, and it can safely be removed from the population of routines.

If all but one reference to a routine are removed, the routine will no longer serve the purpose that it originally served: representing a chunk of code that is used in more than one location. In this case, the reference to the routine can be replaced with the routine's implementation, and then the routine can be removed.

#Using Routines in Conjecture

Once the A-Mind has extracted a set of routines, it can insert references to them into new A-Theories during conjecture. This is the most important function of the routine system, because it makes the conjecture algorithm much more powerful. Without routines, the conjecture algorithm could only insert individual instructions (or random sequences of multiple instructions), and so the kinds of functionality could be inserted into an A-Theory during conjecture would be limited by the kinds of instructions built into the language. With the routine system, new functionalities that the mind evolves by building up sequences of instructions can become their own functions, which can then be called anywhere in the A-Mind.

The routine system makes the specific set of instructions that the theory language has built-in less important (though its still important that the language be Turing-complete), because if there is some useful functionality not implemented in any of the language's instructions, a routine implementing that functionality can be created at runtime. If, for instance, an A-Mind's theory language didn't have an addition instruction, addition might still be a useful functionality for some problem the mind is trying to solve. The mind could implement addition by, say, calling a loop instruction followed by an incrementation instruction. If addition were a useful enough functionality for this implementation to evolve multiple times, the mind would automatically extract it into a routine. Then, in the future, whenever addition would be useful for solving a new problem, the mind can insert a reference to the addition routine, rather than having to evolve the entire implementation of addition again.

Some routines will presumably be useful in more circumstances than other routines, and will thus, in the long term, appear more frequently in the A-Mind's population of A-Theories. For this reason, it would make sense for the conjecture algorithm to give higher likelihood to routines that are referenced more frequently in the A-Theories and other routines in A-Mind when inserting a reference to a routine. The probability of each routine being chosen can be made proportional to the number of times it appears in the A-Mind.

Some basic instructions built into the language might be useful more frequently than others, just like with routines. So the technique of assigning higher probabilities to routines that occur more frequently in the A-Theory population can be extended to encapsulate basic instructions, as well. However, if the probabilities of basic instructions were exactly proportional to the number of times they appear in the A-Mind, then basic instructions that don't appear anywhere would be given a probability of 0, and so would never be added to any new A-Theories. Even if the A-Mind initially starts with a population of A-Theories that includes every instructions at least once, there is a chance that those A-Theories will later be modified such that some instruction no longer appears anywhere. So, if the probabilities assigned to instructions are made proportional to the number of times they are referenced in the A-Mind, there is always a chance that some instructions will reach a probability of 0, at which point they will never appear in the A-Mind again. If this happens with enough instructions, its possible that the remaining instructions in the A-Mind won't even be Turing-complete, at which point the A-Mind will be in a permanent failure mode: it will no longer be capable of universal knowledge creation.

To fix this issue, instead of having the probabilities be proportional to the number of occurrences, we need to ensure that a basic instruction's probability will never reach 0. A convenient way to accomplish this is to make an instruction's probability instead be proportional to the sum of its number of occurrences in the A-Mind and some positive constant. This way, the probability of a basic instruction will still increase or decrease with its number of occurrences, just as it would for a routine, but the probability is guaranteed to always be positive.

So, whenever the conjecture algorithm is going to add an instruction or reference to a routine into an A-Theory, it will decide what to insert by drawing from a probability distribution defined as follows: For each instruction or routine, count the number of times it appears it is referenced in A-Theories or routines in the A-Mind. For each instruction, add some positive constant to the count. Find the sum of all these numbers, and then divide each number by this sum. Each resulting number will be the probability of the corresponding instruction or routine.

If the theory language allows A-Theories to contain reference to other A-Theories, then this approach can easily be extended to account for that. A-Theories will be treated the same way basic instructions are: their probabilities will be proportional to the number of times they are referenced by other A-Theories or routines plus some positive constant (this constant does not need to be the same as the one added to instructions).

(Note: While [my implementation of CTP Theory](https://github.com/EllaMHoeppner/CTP_Theory)) does implement most of what I talk about in this article, the conjecture algorithm doesn't yet assign probabilities to instructions, routines, or A-Theories based on their number of occurrences in the population of A-Theories.)

#Conclusion

With this approach, a newly created A-Mind, which will not have many A-Theories or routines (unless it is initialized with a large number of pre-built A-Theories), will almost always insert instructions, rather than references to routines, during conjecture. However, as the A-Mind matures, it will develop new routines that implement useful functionality that can not easily be achieved with the instructions the theory language provides, and it can then reference these routines in any number of places. In this way, the code within the A-Mind's population of A-Theories may come to be dominated mostly by references to routines rather than basic instructions. Because of this, decisions about what kind of functionality to include in the theory language will not have too large of an impact on the way a mature mind conjectures new theories. The theory language can contain only very simple functionality, and nevertheless the A-Mind will be able to create and reference its own functions that have more sophisticated functionality.