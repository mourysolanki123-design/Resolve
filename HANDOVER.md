# Continuing Resolve

Read README.md and index.html before editing. This is a personal IT support simulator for Moury. Keep documentation natural and focused on functionality. Do not invent independent authorship, employment experience or test results.

## Architecture
Plain HTML/CSS/JavaScript; no dependencies or backend. localStorage key resolve-lab-v1; JSON schema version 1. Preserve saved records and import compatibility when making changes. Never commit user backups.

## Verified
Ticket creation, missing-resolution rejection, resolved ticket save, reload persistence, asset creation and practice scenario prefill were browser-tested. Node tests cover escaping, CSV formula protection and invalid backup rejection.

## Next checks
Backup export/restore file-picker round-trip; ticket and asset edits; status filters; reopen resolved tickets; CSV content; mobile layouts and keyboard access; unavailable/full storage behaviour. These remain unverified end to end.

## Development direction
Split CSS and JavaScript into separate files while keeping deployment buildless. Expand tests around data rules. Add scenario completion tied to tickets. Record actual contributions and verification in commits.

## Hosting
GitHub Pages must be enabled in repository settings. Changes here update GitHub Pages, not the separate original ChatGPT-hosted copy. No chat is required to use or edit this repository once uploaded.

## Teaching
Follow a ticket from form fields to the data object, localStorage and the rendered list. Explain escaping and backup validation. Have Moury make a small change, test it and explain the result.
