# Graph Report - .  (2026-08-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 418 nodes · 1031 edges · 60 communities (24 shown, 36 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 118 edges (avg confidence: 0.52)
- Token cost: 1,036 input · 646 output

## Graph Freshness
- Built from commit: `fd52bff6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- React Components
- Minified JavaScript Tokens
- Build Configuration
- Project Dependencies
- Compiled JavaScript
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- Web App Manifest
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- Minified JavaScript Tokens
- Project Documentation
- Minified JavaScript Tokens
- Static HTML Assets
- Minified JavaScript Tokens
- Web Metadata
- Classroom Images
- Educational Activity Images
- App Icon
- Profile Image
- Team Member Portrait
- Subject Matter Images
- Team Member Portrait
- UI Icon
- Social Media Branding
- Social Media Branding
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- Social Media Branding
- Organization Logo
- Activity Image
- UI Icon
- Software Screenshot
- Classroom Image
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- Team Member Portrait
- UI Icon
- Social Media Branding
- Social Media Branding
- Team Member Portrait
- Team Member Portrait
- Branding Asset
- Activity Image

## God Nodes (most connected - your core abstractions)
1. `o()` - 58 edges
2. `e()` - 39 edges
3. `a()` - 34 edges
4. `Ql()` - 33 edges
5. `t()` - 29 edges
6. `u()` - 24 edges
7. `Vr()` - 23 edges
8. `hs()` - 23 edges
9. `yu()` - 20 edges
10. `s()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `Teacher Mentoring Students` --conceptually_related_to--> `Student using Scratch`  [INFERRED]
  static/media/teacher.9a65cb71414148d0e485.jpg → src/components/two.jpg
- `index.html (Template)` --references--> `Apple Touch Icon`  [EXTRACTED]
  public/index.html → public/apple-touch-icon.png
- `graphify.md (Workflow)` --conceptually_related_to--> `graphify.md (Rules)`  [INFERRED]
  .agents/workflows/graphify.md → .agents/rules/graphify.md
- `Classroom Instruction Cropped` --semantically_similar_to--> `Classroom Instruction`  [EXTRACTED] [semantically similar]
  src/components/pic1crop.png → src/components/Picture1.jpg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify Agent Instructions** — agents_md, claude_md, gemini_md, agents_rules_graphify_md [EXTRACTED 0.95]
- **ICI Branding Assets** — src_logo_svg, src_components_logo_png, public_apple_touch_icon_png, public_logo192_png, public_logo512_png [INFERRED 0.85]
- **Team Member Portraits** — src_components_brandon_png, src_components_dacey_png, src_components_joshua_jpeg, src_components_leo_jpg [INFERRED 0.90]
- **React Ecosystem Dependencies** — react_core, react_dom, react_jsx_runtime, scheduler, react_router, react_router_dom [EXTRACTED 1.00]
- **Team Member Portraits** — src_components_team_brandon_jpeg, src_components_team_joshua_jpeg, src_components_team_kashika_jpeg, src_components_team_naajiyah_jpeg, src_components_team_yajat_jpeg, static_media_brandon_png, static_media_dacey_png, static_media_joshua_jpeg, static_media_leo_jpg [INFERRED 0.90]

## Communities (60 total, 36 thin omitted)

### Community 0 - "Minified JavaScript Tokens"
Cohesion: 0.10
Nodes (59): a(), ar(), b(), bn(), Br(), C(), de(), dr() (+51 more)

### Community 1 - "Minified JavaScript Tokens"
Cohesion: 0.11
Nodes (39): Ao(), as(), At(), bs(), cl(), cs(), ds(), ec() (+31 more)

### Community 2 - "React Components"
Cohesion: 0.07
Nodes (23): App(), AboutPage(), ClassesPage(), ContactPage(), methods, Footer(), linkColumns, socials (+15 more)

### Community 3 - "Minified JavaScript Tokens"
Cohesion: 0.08
Nodes (37): Aa(), ae(), ai(), ba(), Ce(), di(), Fa(), Fi() (+29 more)

### Community 4 - "Build Configuration"
Cohesion: 0.06
Nodes (30): autoprefixer, browserslist, development, production, devDependencies, autoprefixer, postcss, tailwindcss (+22 more)

### Community 5 - "Project Dependencies"
Cohesion: 0.07
Nodes (30): classnames, framer-motion, gh-pages, lucide-react, dependencies, framer-motion, gh-pages, lucide-react (+22 more)

### Community 6 - "Compiled JavaScript"
Cohesion: 0.08
Nodes (17): an(), cr(), D(), Fn(), Ke(), la(), Ln(), nn() (+9 more)

### Community 7 - "Minified JavaScript Tokens"
Cohesion: 0.17
Nodes (22): al(), Ci(), Do(), el(), eo(), gt(), Ia(), jo() (+14 more)

### Community 8 - "Minified JavaScript Tokens"
Cohesion: 0.18
Nodes (18): Bi(), Ei(), ge(), Gi(), Hi(), _i(), ii(), ji() (+10 more)

### Community 9 - "Minified JavaScript Tokens"
Cohesion: 0.22
Nodes (14): Bl(), co(), dl(), fo(), io(), lo(), na(), po() (+6 more)

### Community 10 - "Minified JavaScript Tokens"
Cohesion: 0.20
Nodes (10): Bt(), ca(), ga(), He(), Ka(), pe(), Pn(), Qt() (+2 more)

### Community 11 - "Web App Manifest"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 12 - "Minified JavaScript Tokens"
Cohesion: 0.29
Nodes (8): au(), Bo(), bu(), eu(), ou(), wu(), xu(), yo()

### Community 13 - "Minified JavaScript Tokens"
Cohesion: 0.29
Nodes (8): be(), ee(), ku(), me(), mu(), ve(), yu(), Z()

### Community 14 - "Minified JavaScript Tokens"
Cohesion: 0.40
Nodes (6): cu(), fe(), gu(), lu(), su(), uu()

### Community 16 - "Minified JavaScript Tokens"
Cohesion: 0.40
Nodes (5): hu(), pu(), ru(), tu(), vu()

### Community 18 - "Minified JavaScript Tokens"
Cohesion: 0.67
Nodes (3): je(), re(), Te()

## Knowledge Gaps
- **92 isolated node(s):** `homepage`, `name`, `version`, `title`, `private` (+87 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Project Dependencies` to `Build Configuration`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `o()` connect `Minified JavaScript Tokens` to `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Compiled JavaScript`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`, `Minified JavaScript Tokens`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `o()` (e.g. with `as()` and `Br()`) actually correct?**
  _`o()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `e()` (e.g. with `Aa()` and `bn()`) actually correct?**
  _`e()` has 20 INFERRED edges - model-reasoned connections that need verification._
- **Are the 23 inferred relationships involving `a()` (e.g. with `m()` and `t()`) actually correct?**
  _`a()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `t()` (e.g. with `main.1954b107.js` and `a()`) actually correct?**
  _`t()` has 20 INFERRED edges - model-reasoned connections that need verification._
- **What connects `homepage`, `name`, `version` to the rest of the system?**
  _92 weakly-connected nodes found - possible documentation gaps or missing edges._