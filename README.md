# The Student Signal — CriticalAsset Hackathon

**NYC Tech Week 2026 | The City Hacks The State**

> Students see the broken system first. This project turns that signal into action.

## Challenge 01: Work Orders Dashboard

Connected to the CriticalAsset GraphQL API, authenticated, pulled 56 live work orders, and built an interactive dashboard for building operators.

**Features:**
- OAuth2-style authentication via GraphQL `userSignIn` mutation
- Live work order feed with status counters (Open/In Progress/Completed)
- Filterable table with click-to-detail panel
- Top buildings by open work orders chart
- Location and assignment context

**API Details:**
- Endpoint: `https://api.criticalasset.com/gql`
- Auth: `userSignIn` mutation → JWT token in `Authorization: Bearer` header
- Company context: `company-id` header
- Scopes: workorders.read, assets.read, locations.read

## Challenge 02: Student Signal AI Workflow

An AI-powered field-intake and workflow tool that captures the truth from people closest to the problem and makes work orders actionable.

**Features:**
- Student/field user observation intake (plain English, one sentence)
- AI structuring: extracts issue type, severity, urgency, location, asset category
- Public data enrichment (NYC violations, complaints, compliance context)
- Workflow recommendation with next-best-action
- Feedback loop for closure verification
- Work order selection from Challenge 01 dashboard feed

## Tech Stack

- HTML/CSS/JavaScript (vanilla, no framework)
- CriticalAsset GraphQL API
- Highcharts for data visualization
- AI-powered analysis layer

## Team

- Jack Rocco — InsureMEP

## Running Locally

1. Open `challenge-01/index.html` in a browser
2. Open `challenge-02/index.html` in a browser
3. Both are standalone HTML files with embedded data and API calls

## License

MIT
