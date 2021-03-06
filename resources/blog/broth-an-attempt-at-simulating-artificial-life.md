---
title: "Broth: An Attempt at Simulating Artificial Life"
date: "2020-7-29"
tags:
  - Artificial Life
---

#The Primordial Soup

Four billion years ago, Earth wouldn’t have seemed very special, compared to the rest of the planets in the universe. Thankfully, Earth has changed a lot since then, and it’s now home to living organisms, which are some of the most spectacular things in the universe. The staggering complexity present in the organisms on Earth came from a single process: evolution.

The best explanation of biological evolution that we currently have is the neodarwinian theory of evolution, as is explained by Richard Dawkins in his book “The Selfish Gene”. The basic unit in the neodarwinian theory of evolution is the “replicator”. A replicator is an entity which, when physically instantiated in the right type of environment, can cause new copies of itself to be created. The neodarwinian theory describes how populations of replicators can change over time, and how these populations can create new knowledge about how to survive and reproduce in their environment.

All replicators on earth today are thought to trace back to a single, relatively simple replicator, which arose randomly out of the simple chemicals present on the prebiotic Earth. The early earth contained only relatively simple chemicals, but those chemicals could occasionally come together to form more complex structures. Most of these structures weren’t very interesting, but eventually, one of the structures happened to be able to replicate itself. Once that first replicator formed out of the raw ingredients present in the “primordial soup”, it’s copies quickly grew in number.

Some of those “copies” wouldn’t be perfect replicas, and instead would be different in some way. Copies that happened to be different in ways that helped them replicate further would tend to come to dominate the population, and thus, evolution had begun. From there, these replicators continued to spread and adapt to their environments, eventually leading to all of the complexity that we see on earth today.

Broth is an attempt to digitally simulate an environment that, like the primordial soup of the early Earth, can sustain an evolving population of replicators. Broth defines a set of physical laws that govern the behavior of particles in a 2D environment. These particles can join together to form larger structures, and they have a built-in way to perform sophisticated computations, which allows them to behave in complex and interesting ways.

Broth is an unfinished project, and it contains only a fraction of the features that I eventually plan to include. However, the project is already at a stage where I’ve been able to create a simple replicator, which can successfully replicate when placed into a pool of random particles. I plan to continue to develop Broth and add more features, but I’ll be releasing an early version of it at the same time as this article. This article will describe the way that Broth currently works, along with my plans for future features.

#Particles

Broth currently has 3 types of particles: Controllers, Binders, and Batteries. I plan to introduce new types of particles that will allow for more sophisticated behavior in the future, but these three types of particles are already enough to create a functioning replicator.

Controllers, or “control particles”, are the most important, and most complex type of particle. The details of how control particles work are complicated enough that they deserve their own section, but in brief: control particles are responsible for performing computations, and sending signals to other nearby particles.

Binders are responsible for holding a group of particles together. Normally, when not under the influence of any binders, each particle will simply move in a straight line, and occasionally bounce off of other particles. When a binder is activated, it forms a bond with all other particles within a certain radius. Upon forming these bonds, the binder calculates the distance between itself and each particle it’s bonded, as well as the distances between each of its bonded particles. After being activated, the binder will impart a force on each of it’s bonded particles in an attempt to keep them in the same relative arrangement that they were when it was activated. If two particles are farther apart than they were when the binder was activated, they will be pulled closer together, and if they’re closer than they were when the binder was activated, they’ll be pulled apart. These forces allow groups of particles connected to a binder to maintain their general shape while the binder is activated.

<img src="broth-an-attempt-at-simulating-artificial-life/1.gif" style="width: 100%; height: auto">

Batteries, as the name implies, store energy. Most of the things that a control particle can do require it to consume energy, so a control particle can’t do much unless there’s a battery around.

#Signals

One of the primary jobs of a control particle is to send signals to other particles to tell them what to do. For now, there is only one type of particle which can accept signals from a controller: binders. Generally speaking, signals consist of one or more real numbers. Binders accept signals consisting of a single number, and this number is used to specify a range. When a binder receives a signal, it will attach itself to all particles within the range that the signal specifies. Here’s a gif demonstrating this process:

<img src="broth-an-attempt-at-simulating-artificial-life/2.gif" style="width: 100%; height: auto">

In this gif, a controller (the blue particle on the left) is waiting for a binder to come within is range, which is shown with a blue circle. When a binder comes within range, the controller immediately sends the binder a signal. In this case, the signal consists of the number 7, which tells the binder to bind to all particles within 7 units of itself (for reference, each particle in this gif has a radius of 1 unit). There happens to be another particle, a battery (green), within that range, so the binder attaches to that particle. The binder and the battery now form a single, approximately rigid object, and the object maintains the momentum that the binder initially had.

In that gif, as soon as the binder enters the controller’s range, a blue line is drawn between the controller and the binder. This line denotes that the controller is connected to the binder. A controller must be connected to a particle in order to send signals to that particle. A controller must also be connected to a battery in order to use energy within that battery. This is why, in the above gif, the controller is connected to a battery: sending a signal to tell a binder to tell it to grab onto nearby particles consumes energy, so a control particle can only send such a signal if it’s connected to a battery that contains enough energy.

#Connections

Control particles connect to other particles by specifying a type of particle and a region. If any particle of the specified type enters the specified region, called the “connection region”, the control particle will connect to it.

<img src="broth-an-attempt-at-simulating-artificial-life/3.gif" style="width: 100%; height: auto">

In this gif, the control particle is seeking to connect to a battery, and the connection region is shown with a field of pink dots. As you can see in the gif, when a binder passes through the connection region, the control particle doesn’t connect to it, because it isn’t the right type of particle. When a battery passes through the region, however, the control particle forms a connection with it. The connection persists even once the particle leaves the region, so long as the connected particle stays within the control particle’s range (shown with a blue circle).

In the above gif, the region that the control particles specifies is a ring. In fact, a ring is the only kind of connection region that a control particle that isn’t yet connected to any other particles can have. A control particle defines its connection region by specifying a ring centered around itself, and then a ring centered around each of its connected particles, if it has any. The connection region is the intersection of each of these rings.

#Controlling Control Particles

Control particles can connect to other particles, and send signals to particles that they’re connected to, but how do they decide what kind of particles to connect to, or what their connection region should be, or what signals to send to their connected particles?

Each control particle contains 4 functions that define its behavior: the “connection function”, “signal function”, “delay function”, and “update function”. Each of these functions is represented as a Lisp S-expression (or, in less technical terms, a computer program). Each control particle can have different S-expressions for each of their functions, so different control particles can have completely different types of behavior.

Each control particle runs these four functions each time it “updates”. Each control particle contains a timer that ticks down over time, and when that timer reaches 0, the particle updates. During each update, the particle runs each of its four functions. The four functions each return values that are used in different ways. The delay function, for instance, returns a number that is used to reset the timer (in other words, it determines how long it will be until the next time the particle updates). The connection function returns a list of numbers that determine what kind of particle the controller is willing to connect to, as well as its connection region. The signal function returns a list of numbers, which is then broken up into signals which are sent to its connected particles. Finally, the update function is responsible for updating the particle’s internal state.

A controller’s “internal state” is a list of numbers that are passed to each of the four functions as an input. The internal state allows control particles to store information that persists between updates, giving it a kind of “memory”.

#Energy

Energy is one of the most essential resources in Broth, since controllers need to consume energy in order to do much of anything. Energy can be stored within batteries, and a controller must be connected to a battery in order to use the energy within it.

Each time a controller updates it consumes a small amount of energy, so if a controller isn’t connected to a battery with some energy, then it won’t run it’s update loop. This means that a controller without energy can’t send signals to it’s connected particles, or update it’s own internal state.

A controller also consumes energy whenever it sends a signal to a binder to tell it to bind with nearby particles. A controller can choose the maximum range over which a binder will bind to particles, but the larger the range, the higher the energy cost (in particular, the cost rises with the square of the range). In the future, other particles that controllers can send signals to may consume energy in similar ways.

There is currently no way for batteries to gain energy in Broth; energy can only be consumed. Of course I plan to eventually add some mechanism(s) that will allow organisms to collect energy and store it in batteries, but for now no such mechanism exists. Because of this, batteries are initialized with a large amount of energy in the current version of Broth, so that controllers will still have access to energy.

#A simple replicator

Broth is still in a very preliminary state, but what is implemented so far is already enough to support the existence of a simple, but effective replicator. The replicator consists of one controller, one binder, and one battery. The controller is connected to both the binder and the battery, which means that it can tell the binder to grab onto nearby particles, and it can draw energy from the battery. The binder holds itself and the other two particles in a triangular formation.

<img src="broth-an-attempt-at-simulating-artificial-life/4.gif" style="width: 100%; height: auto">

I designed this replicator with a certain kind of environment in mind: a soup of individual, moving particles, that bounce around in brownian motion. In such an environment, the replicator will be pushed around by the particles, and it will drift around the 2D space. The replicator has no means of locomotion, so it relies entirely on the random brownian motion of the particles around it to move.

<img src="broth-an-attempt-at-simulating-artificial-life/5.gif" style="width: 100%; height: auto">

The replicator creates a copy of itself by grabbing 3 particles out of the soup and assembling them into a copy of itself. It first grabs a binder, then a controller, and finally a battery. During this process, the controller copies the code that defines its functions into the other controller, which means that the new copy will have the instructions necessary to go on to make its own new copies.

#The replication process

The first step in the replication process is for the replicator to find and connect to a new binder. To accomplish this, the controller’s connection function returns a value that indicates it should connect to any grabber that enters a certain region.

Broth contains a tool for visualizing the regions that controller’s connection functions specify, called the “inspect” tool. In the gif below, I’ve selected the control particle within the replicator with the inspect tool, which is indicated by a pink ring around the particle. While the control particle is selected in this way, the region in which the control particle is searching for a particle is shown with a field of pink dots.

<img src="broth-an-attempt-at-simulating-artificial-life/6.gif" style="width: 100%; height: auto">

Here, the pink dots indicate the region in which the replicator, in its default state, searches for a binder. If a binder happens to enter that region, then the control particle will connect to it. The control particle will then immediately send the binder a signal telling it to grab onto all particles within a certain radius. The radius is large enough to encompass the control particle itself, along with the other two particles that make up the replicator. In this way, the control particle tells the new binder to grab on to the replicator so that it will stay in place while the replicator searches for rest of the particles that it needs.

<img src="broth-an-attempt-at-simulating-artificial-life/7.gif" style="width: 100%; height: auto">

After the control particle has grabbed onto the binder, it changes it’s connection region, along with the type of particle it is searching for. Now that it has a binder, the replicator needs to find another control unit near it’s new binder, and grab onto that as well. To accomplish this, the controller’s connection function now specifies that it is seeking to connect to a controller, and it defines the connection region such that it will connect to a controller only if it is near the new grabber. The new region is again shown with a field of pink dots, at the end of the last gif.

Once the original controller has connected to a new controller, it copies its code into the new controller. All controllers in Broth inherently have the ability to copy their code into other controllers that they’re connected to, though doing so costs a large amount of energy.

The first thing the new controller does is connect to the battery contained in the original replicator. This gives the new controller access to energy, which is necessary to complete the next step: the new controller sends a signal to the secondary binder (the binder that the original replicator grabbed during the first step, as opposed to the binder within the original replicator) to tell it to once again grab on to particles within a certain range. This range is the same range that was used to make the binder grab onto the original replicator. The point of sending this signal is that it forces the binder to reinitialize its grip on the nearby particles, and this time the new controller will be in range as well, so it will be held in place relative to the other four particles.

<img src="broth-an-attempt-at-simulating-artificial-life/8.gif" style="width: 100%; height: auto">

At this point in the replication process, the original control particle’s job is done. It no longer seeks to connect to any other particles, as can be seen by the fact that there is no new field of pink dots shown in the above gif after the new control particle becomes connected. From this point on the original controller remains dormant, neither attempting to connect to any new particles nor sending any signals to connected particles, until the replication process is complete. Instead, the new controller, which now contains a copy of the code from the original controller, is responsible for completing the rest of the replication process.

Though the original controller no longer specifies any region in which it will connect to a new particle, the new controller does. The new controller seeks to connect to a battery, the final particle necessary to complete the new replicator. The region in which the new controller searches for a battery can be seen by selecting the new controller, rather than the original, with the inspect tool.

<img src="broth-an-attempt-at-simulating-artificial-life/9.gif" style="width: 100%; height: auto">

When a battery enters this region, the secondary controller connects to it, and then immediately sends a signal to the secondary binder telling it to grab onto all particles within a new, smaller radius. This radius is large enough that the binder will grab the new controller battery, but it is small enough that it will no longer grab on to the particles in the original replicator.

<img src="broth-an-attempt-at-simulating-artificial-life/10.gif" style="width: 100%; height: auto">

At this point, the replication process is finally complete. The three particles grabbed out of the surrounding soup are now arranged into a triangle, and they are bound together by the new binder. Additionally, the new controller has all the code that the original controller did. The new collection of three particles is no longer bound to the original, so the two copies of the replicator can now drift apart as they are bounced around by the brownian soup. Each of the two replicators can then go on to produce new copies by repeating this process again.

#Future plans

Broth can already support the existence of replicators, but that alone isn’t enough for neodarwinian evolution. The most important element that Broth is currently missing is a mechanism that occasionally introduces “mutations”: random changes in replicators that occur during the replication process that can be passed on to future generations. These mutations will often be detrimental to a replicator’s ability to survive and replicate, but on rare occasions they may be beneficial. The possibility of beneficial mutations is what allows populations of replicators to adapt to their environments.

Most of the important information contained within replicators in Broth lies in the code that defines the 4 functions within control particles (the connection function, signal function, delay function, and update function), so I think this is the proper place to include a mechanism for introducing mutations. Whenever code is copied from one control particle to another, there will be a chance that the code will be modified in some random way. This can lead to control particles that have new kinds of behavior, and some of these new controllers may go on to form new, more adapted kinds of replicators.

In addition to adding a mechanism for introducing mutations, I plan to add several new types of particles that will allow for more sophisticated behaviors. I plan to introduce one or more particles that will allow energy to be collected and stored in batteries, rather than simply giving all batteries a large amount of energy upon initialization as happens in the current version of Broth. Additionally, I’d like to introduce particles that allow for directed movement, so that organisms can intentionally move around their environment rather than relying on random brownian motion.

Finally, I’d like to figure out more details about what the characteristics of Broth’s environment. For now, particles are placed at random points in space and given a random initial velocity, and then a single replicator is placed in the center. Unfortunately, I doubt that this kind of environment will be sufficient for open-ended neodarwinian evolution, even once a mechanism for introducing mutations and other types of particles have been added. One major problem with this kind of environment is that the population of replicators may grow until all available resources have been consumed. If that happens, and none of the replicators have yet evolved to be able to steal resources from other replicators, then there may be no way for evolution to go on. To avoid this problem, I suspect the environment will need to have some built-in mechanism for occasionally introducing new resources, or a mechanism for breaking down existing structures into the basic resources that they’re composed of.

#Conclusion

Broth is still in early development, and there are several key features which haven’t yet been implemented. However, the results so far seem promising to me, and I plan to continue to develop Broth in an attempt to simulate neodarwinian evolution.

You can run Broth by visiting my website: [https://www.ellahoeppner.com/broth/index.html](https://www.ellahoeppner.com/broth/index.html). You can find instructions for interacting with Broth on the GitHub page for the project: [https://github.com/EllaMHoeppner/broth](https://github.com/EllaMHoeppner/broth). The code for Broth is also publicly available via that GitHub page, so you can run Broth locally and experiment with the code however you’d like.