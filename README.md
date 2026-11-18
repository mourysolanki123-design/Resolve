# Resolve


**An IT helpdesk workspace for practising how support teams handle everyday problems.**


Resolve brings tickets, equipment records and troubleshooting guidance together in one browser app. It is an ongoing personal project designed to be easy to run, inspect and improve.


[Open Resolve — live website](https://mourysolanki123-design.github.io/Resolve/)

No account, installation or ChatGPT session is needed. Bookmark this link to return to your workspace.


To keep an offline copy, choose **Code → Download ZIP**, extract the folder and open **index.html** in your browser. No installation or terminal is needed. All starter names and records are fictional.


## Features
Ticket creation/editing, priorities, statuses, asset linkage, investigation history and required resolution text. Equipment inventory. Search and status filters. Dashboard with counts and average resolution time. Six knowledge-base guides and four practice scenarios. JSON backup/restore with validation and confirmation. CSV export protects formula-like leading characters.


## Storage
Records use localStorage in the current browser and origin. They do not sync. Export regularly via Project guide. Backups contain all ticket text; use fictional data. The app is a single-user learning tool, not a production service desk. It performs no repairs, sends no email and has no SLA engine or server database.


## Architecture
`index.html` contains the UI, CSS and JavaScript with no external dependencies. `seed()` creates demo records. `validate()` checks backup schema. `save()` persists data. `render()` selects a view. Forms update objects and append ticket history. HTML escaping protects rendered input. `download()` exports JSON and CSV.


## Practice
1. Open Practice lab and create the Wi-Fi scenario ticket.
2. Move it to In progress and record your proposed checks.
3. Read the corresponding knowledge guide.
4. Write a proposed resolution and verification step, clearly labelled simulation.
5. Resolve the ticket and export your evidence.


## Verification performed
Browser QA: dashboard rendering, ticket creation, rejection of a resolved ticket without resolution, successful resolution/save, persistence after reload, asset creation and practice view. Additional logic tests cover escaping, backup validation and CSV formula protection. Mobile styles are included; exhaustive device/browser testing has not been performed. Backup file-picker round-trip is not browser-verified.


## Portfolio
The initial implementation was developed with AI assistance. This repository records further changes, testing and learning as the project develops. Practice scenarios use proposed actions, rather than performing real repairs.


## Publish independently through GitHub
GitHub Pages is enabled for this repository using the `main` branch and `/(root)` folder. Commits to `main` trigger a new deployment automatically. The website and source code are public.


You can also use Code → Download ZIP, extract it and open index.html directly. Local-file storage behaviour varies by browser; the hosted version is recommended. No terminal or package installation is required to use the app.


GitHub Pages and the original ChatGPT-hosted app have separate browser storage. Use JSON backup and restore to transfer your practice records.


## Files and continued development


- `index.html`: complete application, with no external dependencies.
- `test.cjs`: automated checks; run `node test.cjs` if Node.js is installed. Node is not needed to use the app.
- `HANDOVER.md`: architecture notes, remaining checks and suggested improvements.
- `.nojekyll`: static publishing support for GitHub Pages.
- `.gitignore`: excludes generated backups and exports.


Changes committed here update GitHub Pages automatically after deployment. They do not update the separate original hosted demo. The next useful improvements are splitting the code into smaller files, expanding tests and tracking scenario progress.

