Adrian's Summary
================

Allow people to visualize the issues outstanding on a current project and vote on those issues whenever they want.

People will be able to see the other votes and then message them to figure out what the difference is.

A place to go to do voting and to see other people's votes

Sam's Notes
===========

Related Systems
---------------

* Github Issues

Allows people to submit issues and comment on them.

* Waffle

A view of issues, and also allows a value to be assigned to the issues (e.g. 1, 2 or 3), and a kanban board view that connects PRs and issues.

* SlackBot

allows people to vote, does notifications

Example User story
-------------------

As a participant
So that I can be involved in the discussion about what everybody voted
I would like to see a summary of the result


Key elements
-----------------

* support multiple votes in parallel


* support persistence (includes who voted)

As an admin
So that project members don't lynch me
I want all votes to be reliably recorded

As an individual project member 
So that my vote is remembered
I want my vote to be reliably recorded

* support knowing what votes are currently running

As an admin
So that I can keep track of project activity and bring support to inactive or struggling projects
I want an overview of what votes are in progress for which projects, and how many recent votes have been completed

As an individual project member 
So that I can give my vote on the latest running vote
I want to be able to see what's the current vote in progress for my project


> @async_voter_bot latest vote for #async_voter

> ASYNC VOTE currently in progess is 3 votes so far [@tansaku @adrian1707 @arreche ] on Render new story after submission without refresh

go to voting.agileventures.org/projects/async_voter

==> "votes so far [@tansaku @adrian1707 @arreche ] on Render new story after submission without refresh"

High Level Goals
-----------------

* Encourage communication between team members about project work, to ensure that everyone's expertise is brought to bear and that a good majority of people are aware of what each other are working on, in order to avoid duplication of work.

* Ensure that implicit assumptions about the difficulty of work are revealed.  One mechanism for this is to only reveal the value of votes after some minimum number has voted 


* want the UI experience to be learnable, and provide a good level of awareness



