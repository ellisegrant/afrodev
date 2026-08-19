---
title: Role-based auth is a data model problem
date: 2026-05-21
summary: I got permissions wrong twice on the same project before I stopped treating roles as a field on a user.
---

The [GoGMI learning platform](https://lms.gogmi.org.gh) has students, instructors and
administrators. That sentence sounds like it describes a column. It does not, and
believing it did cost me two rewrites.

## Attempt one: a role column

The first version had `role` on the users table. An enum: `STUDENT`, `INSTRUCTOR`,
`ADMIN`. Middleware read it and compared.

```js
const requireRole = (role) => (req, res, next) =>
  req.user.role === role ? next() : res.status(403).end()
```

This survived until the first real question: can an instructor edit *any* course, or
only the ones they teach? The role says `INSTRUCTOR`. It does not say *of what*. I had
encoded who someone is, when what I needed was what they can touch.

## Attempt two: role plus a pile of special cases

The natural next move — and the wrong one — is to keep the column and start patching
around it at the call site.

```js
if (req.user.role === 'ADMIN') return next()
if (req.user.role === 'INSTRUCTOR' && course.ownerId === req.user.id) return next()
```

Every endpoint grows its own variation. The rules live in seventeen route handlers and
agree with each other by luck. When someone asks "who can see this?", the honest answer
is that you have to read all seventeen to find out — and that is the point at which a
permissions system has already failed, whether or not it has a bug yet.

## What actually worked: enrolments

The fix was to stop asking what a user *is* and start storing the relationship between a
user and a thing:

```
enrolments
  user_id
  course_id
  capacity   -- 'learner' | 'teacher'
```

A role is now derived, not declared. "Instructor" is not a property of a person; it is a
row saying this person teaches this course. Administrators keep a global flag, because
that genuinely is a property of the person.

The permission check collapses into one question with one answer:

```js
const can = async (user, action, course) => {
  if (user.isAdmin) return true
  const link = await enrolments.find({ userId: user.id, courseId: course.id })
  return link ? allowed[link.capacity].includes(action) : false
}
```

## What I would tell myself at the start

The question "what is this user allowed to do?" almost never has an answer that lives on
the user. It lives in the relationship between the user and the specific thing they are
reaching for. A role column answers a question nobody asked.

The tell is easy to spot in hindsight: the first time you write `&&` after a role check,
the model is already wrong. I wrote it a lot before I noticed.
