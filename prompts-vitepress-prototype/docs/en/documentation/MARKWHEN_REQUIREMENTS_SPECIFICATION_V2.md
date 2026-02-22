---
title: "markwhen Creation Requirements Specification (V2)"
sourcePath: "prompts/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2_EN.md`
> Japanese: [JA](/documentation/MARKWHEN_REQUIREMENTS_SPECIFICATION_V2)

# markwhen Creation Requirements Specification (V2)

## 1. Overview

markwhen is a text-based timeline creation tool. You can describe events using simple markdown-like syntax and display them as visual timelines or other formats.

## 2. Basic Structure

- Documents are created as text files in `text/markwhen` format.
- Multiple timeline pages can be separated by `_-_-_break_-_-_`.
- Each page consists of:
  - **Header** (optional)
  - **Events** (one or more)

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

## 3. Header

- Written in **YAML format**.
- Main setting items:
  - **Title** (`title:`)
  - **Description** (`description:`)
  - **Viewer restrictions** (`view:`)
  - **Editor restrictions** (`edit:`)
  - **Tag color settings** (`#TagName: color`)
  - **Date format** (`dateFormat:`)
  - **Timezone** (`timezone:`)
  - **Import other markwhen files** (`import:`)

Example:

```markwhen
---
title: Welcome to Markwhen!
description: This is an example timeline.
edit:
  - user@example.com
view: *
#Project1: #d336b1
dateFormat: yyyy-MM-dd
timezone: Asia/Tokyo
import:
  - other/timeline
---
```

**Notes**:

- Set `dateFormat` like `yyyy-MM-dd` to unify date format.
- Set `timezone` like `Asia/Tokyo` to specify timezone.
- With tag color settings, you can set colors for each project or task category.

## 4. Events

- **Basic format**: `date range: event content`
- **Date range specification**:
  - Separate start and end dates with `/` like `2023-01-01/2023-03-31`.
  - Single-day events specify only one date.
- **Date format**:
  - Use `yyyy-MM-dd` format.

Example:

```markwhen
2023-01-01/2023-12-31: Year 2023
2023-12-25: Christmas Day
```

**Elements that can be included in event content**:

- **Event description**: Can describe detailed information about the event.
- **Tags**: Use `#TagName` to classify and color-code events.
- **Links/Images**: Can add links and images in markdown format.
- **Checklists**: Use `- [ ]` or `- [x]` to manage task progress.
- **Progress percentage**: Can describe task completion rate like `75% Complete`.

## 5. Groups and Sections

### 5.1 Groups

- **Grouping**: Used to gather related events.
- **Description method**:
  - Enclose with `group group name` and `endGroup`.
- **Nesting**: Can create further groups within groups.
- **Tag assignment**: Add `#TagName` after group name to apply tags to entire group.

### 5.2 Sections

- **Sectioning**: Used to divide entire timeline into large sections.
- **Description method**:
  - Enclose with `section section name` and `endSection`.

### 5.3 Grouping Guidelines from Task Lists

When converting task lists to markwhen, follow these guidelines for appropriate grouping.

- **Create sections for each project**:
  - Use `section` for each major item (project) in the task list.
- **Create groups for each phase or category**:
  - Use `group` to group mid-level items or related tasks from the task list.
- **Group naming**:
  - Use phase names (e.g., Planning, Development, Testing) or category names as group names.
- **Nested groups**:
  - Create subgroups within groups as needed to express task hierarchy.

### 5.4 Examples of Groups and Sections

```markwhen
section Project A #ProjectA
group Planning Phase
2024-01-01/2024-01-31: Requirements Definition
2024-02-01/2024-02-28: Basic Design
endGroup

group Development Phase
2024-03-01/2024-05-31: Implementation
2024-06-01/2024-06-30: Testing
endGroup
endSection
```

**Description**:

- `section` divides the entire project.
- `group` gathers tasks by phase.
- Use tags (e.g., `#ProjectA`) to color projects and groups.

## 6. Reminder Feature (Beta)

- **Setting method**:
  - Set with `reminders:` in header or tag.
- **Reminder timing**:
  - `beforeBegin`: Before start
  - `afterEnd`: After end

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

## 7. Timezones

- **Default timezone setting**:
  - Specify `timezone:` in header.
- **Timezone per tag**:
  - Can set timezone individually for tags.

Example:

```markwhen
---
timezone: Asia/Tokyo
#newyork:
  timezone: America/New_York
---
2023-07-01 09:00: Meeting in Tokyo
2023-07-01 10:00: Meeting in New York #newyork
```

## 8. Other Notes

- **Comments**: Written with `// comment content`.
- **Unify date format**: Use format specified in `dateFormat`.
- **Tag priority**: When multiple tags exist, the first tag takes priority.
- **Repeating events**: Can set repetition.

Example:

```markwhen
// This is a comment
2023-07-01 every week for 10 weeks: Weekly team meeting

2023-08-01: Multi-tag event #tag1 #tag2
```

## 9. Conversion Steps from Task List to markwhen

1. **Review task list**:
   - Check hierarchy structure of projects, phases, and tasks.
2. **Set header**:
   - Set `title`, `dateFormat`, `timezone`, tags and colors for each project.
3. **Create sections**:
   - Create `section` for each project and assign corresponding tags.
4. **Create groups**:
   - Create `group` for each phase or category and group tasks.
5. **Describe events**:
   - Describe tasks specifying start and end dates.
   - Single-day events specify only one date.
6. **Assign tags**:
   - Add tags to tasks or groups as needed for classification.
7. **Utilize nesting**:
   - For subtasks, create further `group` within groups to nest.

## 10. markwhen Sample

```markwhen
---
title: Welcome to Markwhen!

edit:
  - rob@markwhen.com

view: \*

#Project1: #d336b1
---
section Welcome #welcome
now: This example timeline showcases some of markwhen's features.

now: For more information, view the documentation [here](https://docs.markwhen.com) or join the [discord](https://discord.gg/3rTpUD94ac)
#welcome

now: Note that changes you make here are not saved
If you want to make a new markwhen you should open a tab at the bottom or click open in the sidebar
endSection

section All Projects
group Project 1 #Project1
// Supports ISO8601
2023-01/2023-03: Sub task #John
2023-03/2023-06: Sub task 2 #Michelle
More info about sub task 2

- [ ] We need to get this done
- [x] And this
- [ ] This one is extra

2023-07: Yearly planning
endGroup
 group Project 2 #Project2
2023-04/4 months: Larger sub task #Danielle

// Supports American date formats
03/2023 - 1 year: Longer ongoing task #Michelle

- [x] Sub task 1
- [x] Sub task 2
- [ ] Sub task 3
- [ ] Sub task 4
- [ ] so many checkboxes omg

10/2023 - 2 months: Holiday season
endGroup

group Project 3
01/2024: Project kickoff
02/2024-04/2024: Other stuff
endGroup
endSection

2023-01-03 every other week for 1 year: Biweekly meeting

// Events that don't have explicit end dates have inferred ranges - for example, when a year is specified, it lasts from the beginning of that year to the end of it.
2024: A year-long event

// Inferred ranges are as granular as their definitions.
09/2024: one month

2025-05-05: one day

Jan 4 2025 8am: instant

// You can also be specific with your ranges
2024/2025: An event that lasts two years

November 8, 2022 9am - November 9, 2023, 10am: one year, one day, and one hour

now: [More documentation](https://docs.markwhen.com/syntax/events.html)

// Event descriptions last from the date range definition up to the next event
2029-04-25/2029-05-03: Descriptions can be one line

2029-04-25/2029-05-03: Or
they can span
multiple lines

1/27/2025: [] An event can have a checkbox for completion
Put square brackets at the start of the event description

1/27/2026: [x] To mark an event as completed, put an x in the square brackets

1/27/2027: Events can have lists

- [ ] checkbox list item
- [x] a completed checkbox list item
- simple list item
- another simple list item

1/27/2028 - 1 year: 68% Manually indicate an event's completion with a percentage in the description

Partially completed events will have their event bar partially filled that amount

1 year: Links are markdown-style: [This is a link](https://markwhen.com)

1 year: Images are also markdown-style:
![](https://blog.markwhen.com/images/calendar1.png)

1 year: Locations (which are more useful for the map view) can be indicated in a similar way: [Hawaii](location) [Alaska](map)

2024: Refer to other markwhen documents with `@` syntax: @rob

now: [More documentation](https://docs.markwhen.com/syntax/event-descriptions.html)

// Events can be grouped together

group
1/27/2024: Happy birthday
2020-03: Covid started in the US
endGroup

group Group with title

Feb 2 2025: Interviewing
Feb 8 2025: Write report
Feb 19 2025: Presentation

endGroup

group Groups can contain other groups #big

group Smaller plan #small #nested

1 year: Accomplish something

2 years: Accomplish something else

endGroup

1 year: Things are accomplished

endGroup

section Sections extend across the screen

2023: Start year

section Nested section #nested

2025: End year

endSection
endSection

now: [More documentation](https://docs.markwhen.com/syntax/groups-and-sections.html)

// Specify tag colors in the header (before any event)
#Timeline: #abf

now: Events and groups can have tags

section Tagged events #Timeline
Feb 18 1999: back in the day #Past #The90s
2043: in the future #TheOther90s

now: [More documentation](https://docs.markwhen.com/syntax/event-descriptions.html#tag)

2025: Event

1 year: This event happens immediately after the previous event and lasts for 1 year

#after

3 months - 1 month: This event happens 3 months after the previous event and lasts for 1 month
#after

by 2 weeks - 1 month: This event happens 2 weeks before the previous event and lasts 1 month
#before


2023: Event !base

after !base 1 year - 1 month: This event happens 1 year after the event with with id `base` and lasts for 1 month
#after

before !base 1 week day - 1 hour: This event happens 1 week day before the event with id `base` and lasts 1 hour
#before

October 7, 1989 every year for 10 years: ...
2025-03-04 every week for 12 weeks: ...
2022-01/2022-03 every other year x9: ...
Feb 1 2023 every 6 months for 10 times: ...

// Visually indicate that an event is an era or milestone with the tag #era or #milestone

2023-06-01/2023-08-20: Summer time #vacation

2023-08-21/2023-12-17: Back to school

2023-12-18/2024-01-05: Winter break #vacation #milestone

2024-01-08/2024-05-31: Back to school

2024-05-27/2024-05-31: Final project due #milestone

```

By creating markwhen documents from task lists based on this requirements specification, you can appropriately group related tasks and easily create visually understandable timelines.
