# CuSports

**All-in-one platform for organizing sports tournaments, managing clubs, and tracking rankings — starting with racket sports.**

CuSports is a player-centric tournament and ranking platform, built to bring India's sports organizers out of spreadsheets and WhatsApp groups and into a single, purpose-built system. Think *Chess.com meets CricHeroes*: players own a portable digital identity, organizers run tournaments with real brackets and live scores, and every match feeds into a ranking system players can actually watch move.

---

## Table of Contents

- [Why CuSports](#why-cusports)
- [Roadmap](#roadmap)
  - [Phase 0 — Foundation & Infrastructure](#phase-0--foundation--infrastructure)
  - [Phase 1 — Core Tournament Platform](#phase-1--core-tournament-platform)
  - [Phase 2 — Platform Integrations & MCP](#phase-2--platform-integrations--mcp)
  - [Phase 3 — Multi-Engine Bracket Support](#phase-3--multi-engine-bracket-support)
  - [Phase 4 — AI/ML Insights & Video Analysis](#phase-4--aiml-insights--video-analysis)
- [Tech Notes](#tech-notes)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

---

## Why CuSports

Most tournament tools solve one slice of the problem — brackets, or registration, or scoring — and stop there. Organizers stitch the rest together manually. CuSports is being built as the connective tissue: one platform that carries a player and a match from registration all the way through to a career-long stats page, and carries an organizer from "create a tournament" to "run a branded club with its own rankings."

---

## Roadmap

The sections below are ordered by dependency (later phases build on earlier ones), not by strict priority. Scope and sequencing will evolve as the platform grows.

### Phase 0 — Foundation & Infrastructure

- Repository setup (structure, tooling, linting, CI conventions)
- Supabase setup (database, auth, storage)
- Dev tools requirements and local environment standards
- Cloud setup (hosting, environments, deployment pipeline)

### Phase 1 — Core Tournament Platform

The full first release: running real racket-sport tournaments with real player accounts, live scoring, rankings, and org spaces.

**Tournament basics**
- 🏸 **Racket sports focus** — badminton, table tennis, tennis, squash and similar formats
- 📋 **Fixtures & bracket generation** — set up a draw and get matches wired automatically
- 📡 **Live score updates** — real-time score tracking as matches are played
- 🏆 **Basic tournament setup** — name, dates, venue, categories

**Player identity & direct challenges**

Move players from "names in a bracket" to actual accounts.

- Email/password registration with a public player profile (avatar, bio, location, preferred hand, playing style)
- Player identity is **platform-wide**, not owned by any single organization
- A player can belong to multiple organizations at once
- **Direct 1v1 challenges** between any two players, no organization required
  - Configurable match settings: points per game, games per match, win-by-2
  - Challenge flow: send → accept/decline → play → report result → ratings update
- Match history visible on the player's public profile

**Rankings**
- ELO-based rating engine — every rated match (direct or tournament) updates it
- Global leaderboard with filters (location, organization, category)
- Lifetime stats on profile: rating, matches played, W/L record, win streak, best streak
- Rating trend chart over time

**Organization setup**
- Independent branded org spaces (path-based, e.g. `/org/[slug]`)
- Per-org theming — colors, logo, banner injected as CSS variables
- Org-specific player pool with roles (Admin, Manager, Player)
- Org-specific rankings, independent of global rankings
- Org-specific tournaments, match history, and announcements/banners
- Public or invite-only organizations

**Tournament management & match lifecycle**
- Manager-created tournaments with configurable format:
  - Match format (points per game, games per match, win-by-2)
  - Bracket type (single elimination, double elimination)
  - Seeding method (ranked, random, manual)
  - Bye handling and optional third-place match
- Automatic bracket generation with proper match wiring
- Interactive bracket visualizations (SVG connector lines)
- Full match lifecycle: `pending → scheduled → ongoing → completed / walkover / cancelled`
- Manager dashboard for game-by-game score entry with format validation
- Results trigger automatic ranking recalculation, both global and per-org

**Public org & tournament microsites**

ITTF/WTT-inspired public pages for each organization and tournament:

- Hero banner with org branding
- Announcement carousel
- Match tabs: Ongoing (live) / Upcoming / Past
- Category ranking tables (Men's Singles, Women's Singles, Doubles, etc.)
- Tournament list with drill-down into bracket views
- Player profiles with org-specific stat breakdowns

### Phase 2 — Platform Integrations & MCP

Bring tournament updates into the tools teams already use, and open the platform up to programmatic access.

- Slack integration for tournament updates
  - Either a first-party CuSports bot, or support for bringing an existing bot token
  - Conversational result reporting, e.g. `@bot report match vs @Opponent 11-7, 9-11, 11-5`
- Future integration targets: WhatsApp, Discord, Google Chat
- MCP (Model Context Protocol) support — expose CuSports data and actions (fixtures, results, rankings) to AI tools and agents through a standard interface

### Phase 3 — Multi-Engine Bracket Support

Expand beyond a single bracket implementation to support the range of formats organizers actually run.

- Support for multiple bracket engines: single elimination, double elimination, round robin, Swiss, and manual formats
- Pluggable bracket engine architecture so new formats can be added without reworking the core tournament flow
- Format-specific seeding, bye handling, and tiebreak rules per engine

### Phase 4 — AI/ML Insights & Video Analysis

- Match video upload and analysis pipeline
- Computer-vision-assisted performance insights generated from match footage
- Highlights and insight surfacing on player profiles and match pages

---

## Tech Notes

_Add stack details here (frontend framework, backend, database, hosting) once finalized — keeping this section as a placeholder so the README stays accurate as the implementation evolves._

Built with 💛 by Infocusp!