---
title: Markwhen Requirements Specification
description: Requirements specification defining the syntax and features of markwhen, a text-based timeline creation tool
category: docs
intent: markwhen-requirements
audience:
  - Project managers
  - Document creators
  - Timeline creators
input_requirements:
  - Timeline content to create
  - Event dates and durations
tags:
  - markwhen
  - timeline
  - documentation
  - project-management
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Markwhen Requirements Specification

## Intended Use

- Create timelines with markwhen
- Manage events in text-based format
- Structure multiple timeline pages
- Utilize reminder functionality

## Requirements Specification

### 1. Overview

markwhen is a text-based timeline creation tool. You can write events in a simple markdown-like syntax and display them as visual timelines or other formats.

### 2. Basic Structure

- Documents are created as `text/markwhen` format text files
- Multiple timeline pages can be separated by `_-_-_break_-_-_`
- Each page consists of:
  - Header (optional)
  - Events (one or more)

Example:

```markwhen
---
title: My Timeline
---

2023-01-01: New Year's Day

2023-02-14: Valentine's Day

_-_-_break_-_-_

---
title: Another Timeline
---

2023-07-04: Independence Day
```

### 3. Header

- Written in YAML format
- Main setting items:
  - Title (`title:`)
  - Description (`description:`)
  - View restrictions (`view:`)
  - Edit restrictions (`edit:`)
  - Tag color settings (`#TagName: color`)
  - Date format (`dateFormat:`)
  - Timezone (`timezone:`)
  - Import other markwhen files (`import:`)

Example:

```markwhen
---
title: Welcome to Markwhen!
description: This is an example timeline.
edit:
  - user@example.com
view: *
#Project1: #d336b1
dateFormat: d/M/y
timezone: America/New_York
import:
  - other/timeline
---
```

### 4. Events

- Basic format: `date range: event content`
- Date range specification methods:
  - ISO8601 format
  - Human-readable format
  - EDTF format
  - Relative dates

Example:

```markwhen
2023-01-01/2023-12-31: Year 2023
Dec 25 2023: Christmas Day
1961/2023: Historical period
after !PreviousEvent 2 weeks: Follow-up meeting
```

Elements that can be included in event content:

```markwhen
2023-06-01: Company Picnic #work
[More info](https://example.com/picnic)
[Central Park](location)
![Picnic image](https://example.com/picnic.jpg)
@team-calendar
- [ ] Prepare food
- [x] Send invitations
75% Complete
```

### 5. Groups and Sections

- Group with `group groupName` and `endGroup`
- Section with `section sectionName` and `endSection`
- Nesting is also possible

Example:

```markwhen
section Projects
group Project A #ProjectA
2023-01-01/2023-03-31: Phase 1
2023-04-01/2023-06-30: Phase 2
  group Subproject
  2023-05-01/2023-05-15: Subtask 1
  2023-05-16/2023-05-31: Subtask 2
  endGroup
endGroup
endSection
```

### 6. Reminder Functionality (Beta)

- Set with `reminders:` in header or tag
- Can set reminders before start, after start, before end, after end

Example:

```markwhen
---
#meeting:
  reminders:
    beforeBegin:
      durations: [1 day, 1 hour]
    afterEnd:
      durations: [1 day]
---

2023-07-01 10:00: Team Meeting #meeting
```

### 7. Timezones

- Set default timezone in header
- Can set different timezones per tag

Example:

```markwhen
---
timezone: America/New_York
#tokyo:
  timezone: Asia/Tokyo
---

2023-07-01 09:00: New York Meeting
2023-07-01 10:00: Tokyo Meeting #tokyo
```

### 8. Other Notes

- Comments are written with `// comment content`
- Date format defaults to US format. Can be changed to European format
- Be careful with behavior of events with multiple tags (color priority, etc.)
- Can set recurring events

Example:

```markwhen
// This is a comment
2023-07-01 every week for 10 weeks: Weekly Team Standup

2023-08-01: Multi-tagged event #tag1 #tag2
```

## Usage

1. Design timeline referring to this requirements specification
2. Create text file in markwhen format
3. Visualize with markwhen tool

## Input Example

```text
Please create a project schedule for 2024.
```

## Output Example

```markwhen
---
title: 2024 Project Timeline
---

2024-01-15/2024-03-31: Phase 1: Planning #planning
2024-04-01/2024-06-30: Phase 2: Development #development
2024-07-01/2024-09-30: Phase 3: Testing #testing
2024-10-01/2024-12-31: Phase 4: Deployment #deployment
```

## Notes

- Maintain consistency in date formats
- Decide on tag naming conventions
- Clearly separate pages when using multiple pages
