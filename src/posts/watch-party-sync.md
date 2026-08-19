---
title: Keeping a watch party in sync
date: 2026-07-18
summary: The hard part of a shared video room is not the player. It is agreeing what time it is.
---

I built [Jesley](https://jesley.vercel.app) so a group of people could watch the same
video together from different places. I assumed the difficult part would be the player.
It was not. The difficult part was agreeing on what time it is.

## The naive version works for about a minute

The first version was the obvious one. When someone presses play, broadcast `play` to
the room. When someone seeks, broadcast the new position. Every client applies what it
receives.

This works beautifully in testing, when every client is on the same wifi and the same
machine. It falls apart the moment there is real latency. A `play` event sent at
`00:30` arrives 400ms later, and the receiving client starts at `00:30` while the sender
is already at `00:30.4`. Do that a few times across a few people and the room quietly
drifts apart. Nobody notices the moment it breaks. They just gradually stop laughing at
the same time.

## Send timestamps, not commands

The fix is to stop broadcasting *actions* and start broadcasting *state*. Instead of
"play", a client sends: here is the position I am at, and here is the wall-clock time
when I was at it.

```js
socket.emit('sync', {
  position: player.getCurrentTime(),
  at: Date.now(),
  paused: player.isPaused(),
})
```

Now a receiving client can work out where it *should* be, rather than where the sender
*was*:

```js
const elapsed = (Date.now() - message.at) / 1000
const target = message.paused ? message.position : message.position + elapsed
```

The latency stops mattering, because it is measured rather than ignored.

## Do not seek for small corrections

The second mistake I made was correcting every drift with a seek. If a client is 300ms
behind, seeking it forward by 300ms is technically correct and feels terrible — the
video visibly stutters, and it happens constantly.

So there are two thresholds. Under about half a second, nudge the playback rate slightly
and let it catch up invisibly over a few seconds. Over that, accept the stutter and seek,
because the alternative is a client that never catches up.

```js
const drift = target - player.getCurrentTime()

if (Math.abs(drift) > 1.5) {
  player.seekTo(target)
} else if (Math.abs(drift) > 0.3) {
  player.setPlaybackRate(drift > 0 ? 1.05 : 0.95)
} else {
  player.setPlaybackRate(1)
}
```

A five percent rate change is not perceptible. A stutter every four seconds very much is.

## Late joiners need the room, not the event

The last piece is the one I forgot until someone joined a room halfway through: a new
client has missed every event that ever happened. Broadcasting only on change means
there is nothing to receive.

The room needs to hold current state on the server, not just relay messages through it.
When a client joins, it asks for that state and applies the same elapsed-time maths. It
does not need the history. It needs the answer to one question: where should I be right
now?

That reframing — from a stream of events to a piece of shared state you can ask about —
is what actually made the thing work.
