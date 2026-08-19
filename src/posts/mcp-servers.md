---
title: Building MCP servers for the tools I already use
date: 2026-08-19
summary: Two servers in progress — one for football odds, one for freelancing — and why the protocol is the interesting part.
---

I am building two [Model Context Protocol](https://modelcontextprotocol.io) servers at
the moment. One wraps SportyBet so I can ask real questions about a matchday. One wraps
Upwork so the busywork of freelancing stops living in another tab.

They are unrelated products and the same project.

## The gap MCP fills

A language model is very good at reasoning about information and has no way to go and
get any. Ask it about this weekend's fixtures and it will answer from a training set
that ended months ago, confidently and wrongly.

The usual patch is to paste context in by hand. That works and does not scale — you
become the integration, ferrying data between a browser tab and a chat window.

MCP moves the boundary. Rather than the model guessing, it is handed a set of tools it
can call, each with a typed schema saying what it takes and what it returns. The model
decides *when* to fetch. The server decides *what is true*.

## Designing tools is the actual work

The code to stand a server up is unremarkable. Deciding what the tools should be is not.

My first pass at the football server exposed the API I had: `getFixtures`, `getOdds`,
`getMarkets` — one tool per endpoint. It technically worked, and every real question took
four round trips and often stalled halfway because the model had to know the fixture id
before it could ask about the odds.

The second pass exposed the *questions* instead: `findMatches`, `compareOdds`. Fewer
tools, each answering something a person would actually ask, each doing several internal
calls before returning. The model stopped orchestrating and started reasoning, which is
the only thing it is better at than my code.

That is the lesson worth keeping: an MCP tool is not an API endpoint with a different
coat on. It is closer to a well-named function in a library you are proud of — the unit
should be a task, not a route.

## Why football

Because it is the thing I would most like to build for. Football moves enormous amounts
of money, attention and data, and a surprising amount of the software around it is worse
than the game deserves. Odds and fixtures are a small entry point, but it is a real one,
and I would rather learn a protocol on a problem I actually care about.

Both servers are still in progress. When they are done I will write up what the schemas
ended up looking like, because that is the part I could not find a good example of when
I started.
