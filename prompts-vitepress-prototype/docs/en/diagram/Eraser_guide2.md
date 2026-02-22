---
title: "Eraser Notation Guide Part 2"
sourcePath: "prompts/diagram/Eraser_guide2_EN.md"
locale: "en"
contentKind: "markdown"
---
> This page is generated from the prompts source tree.
> Source: `prompts/diagram/Eraser_guide2_EN.md`
> Japanese: [JA](/diagram/Eraser_guide2)

# Eraser Notation Guide Part 2

## Entity Relationship Diagram (ERD)

Eraser also provides notation for creating Entity Relationship Diagrams (ERDs). ERDs are diagrams that visually represent database structures.

### ERD Notation

ERD notation is similar to regular diagram notation, but uses some special attributes and relationship types to represent entities and relationships.

* **Entities**:
    * `[icon: user, color: blue]`: Specifies the icon and color for an entity.
    * `{ ... }`: Describes the attributes of an entity.
    * `id string pk`: Specifies the attribute that serves as the primary key.
* **Relationships**:
    * `>`: One-to-one relationship
    * `<>`: One-to-many relationship
    * `<>*`: Many-to-many relationship

### ERD Examples

#### RPG Game ERD

&lt;blockquote class="twitter-tweet" data-media-max-width="800"&gt;&lt;p lang="ja" dir="ltr"&gt;Eraser Notation Guide Part 2 ~ Entity Relationship Diagrams ~&lt;br&gt;"RPG Game ERD"&lt;br&gt;I created this with a fairly casual prompt, but it turned out pretty good! (Created with Gemini 1.5 Flash) &lt;a href="https://t.co/vHXlOwkY4B"&gt;https://t.co/vHXlOwkY4B&lt;/a&gt; &lt;a href="https://t.co/Y57LYjOohA"&gt;pic.twitter.com/Y57LYjOohA&lt;/a&gt;&lt;/p&gt;&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) &lt;a href="https://twitter.com/hAru_mAki_ch/status/1798352736771363239?ref_src=twsrc%5Etfw"&gt;June 5, 2024&lt;/a&gt;&lt;/blockquote&gt;

```yaml
// 1. users (players): The heroes who adventure in this world!
users [icon: user, color: blue] {
  id string pk
  displayName string
  level int
  experience int
  gold int
  currentLocation string
}

// 2. teams (parties): Allies who cooperate to advance adventures together.
teams [icon: users, color: blue] {
  id string pk
  name string
  leaderId string
}

// 3. characters (characters): Unique allies controlled by heroes!
characters [icon: warrior, color: green] {
  id string pk
  name string
  level int
  stats json
  skills json
  userId string
}

// 4. items (items): Tools and weapons useful for adventure!
items [icon: sword, color: orange] {
  id string pk
  name string
  type string
  rarity string
  stats json
}

// 5. quests (quests): Trials imposed upon heroes!
quests [icon: quest, color: purple] {
  id string pk
  name string
  description string
  reward json
  status string
}

// 6. enemies (enemies): Powerful foes that hinder heroes' adventures!
enemies [icon: monster, color: red] {
  id string pk
  name string
  level int
  stats json
  skills json
  location string
}

// 7. locations (places): Fields and dungeons where heroes adventure.
locations [icon: map, color: grey] {
  id string pk
  name string
  description string
  enemies json
  items json
}

// Entity relationships

users.teams <> teams.id // Heroes can belong to multiple parties, and one party can have multiple heroes.
characters.userId > users.id // Characters are owned by heroes.
items.userId > users.id // Items are possessed by heroes.
quests.userId > users.id // Quests are accepted by heroes.
enemies.location > locations.id // Enemies appear in specific locations.
```

#### Event Reservation App to Make Dreams Come True ERD

&lt;blockquote class="twitter-tweet" data-media-max-width="800"&gt;&lt;p lang="ja" dir="ltr"&gt;Eraser Notation Guide Part 2 ~ Entity Relationship Diagrams ~ &lt;br&gt;"Event Reservation App ERD to Make Dreams Come True" &lt;br&gt;This is just a normal calendar reservation app... &lt;br&gt;(Created with Gemini 1.5 Flash) &lt;a href="https://t.co/JfnI8QxWAC"&gt;https://t.co/JfnI8QxWAC&lt;/a&gt; &lt;a href="https://t.co/KwGYyBfNzY"&gt;pic.twitter.com/KwGYyBfNzY&lt;/a&gt;&lt;/p&gt;&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) &lt;a href="https://twitter.com/hAru_mAki_ch/status/1798353579864101032?ref_src=twsrc%5Etfw"&gt;June 5, 2024&lt;/a&gt;&lt;/blockquote&gt;

```yaml
// 1. Users: People who book events to make their dreams come true
User [icon: user] {
  id Int pk
  username String
  email String
  avatar String
  createdDate DateTime
  favoriteEventType Int
}

// 2. Bookings: Event reservations to make dreams come true
Booking [icon: clock] {
  id Int pk
  userId Int
  title String
  startTime DateTime
  endTime DateTime
  location String
  eventTypeId Int
  destinationCalendarId Int
  status String // Reservation status (pending, confirmed, canceled)
  notes String
}

// 3. EventTypes: Various events to make dreams come true
EventType [icon: list] {
  id Int pk
  name String
  description String
  duration Int
  defaultLocation String // Default event location
  price Decimal // Fee
  imageUrl String // Event image URL
  userId Int // Event creator
}

// 4. ApiKeys: Keys for system integration
ApiKey [icon: key] {
  id String pk
  userId Int
  appId String
  hashedKey String
}

// 5. Apps: Applications for system integration
App [icon: grid] {
  slug String
  dirName String
  keys Json
  createdAt DateTime
}

// 6. Webhooks: Magical messages for system-to-system integration
Webhook [icon: link] {
  id String pk
  userId Int
  appId String
  active Boolean
  eventTrigger String // Trigger event (booking_created, booking_updated, etc.)
  url String // Notification destination URL
}

// 7. DestinationCalendars: Integrated calendars to make dreams come true
DestinationCalender [icon: calendar] {
  id Int pk
  userId Int
  integration String // Integration service (Google Calendar, Outlook Calendar, etc.)
  eventTypeId Int
}

// Entity relationships

Booking.eventtType < EventType.id // Bookings are associated with event types.
Webhook.appId > App.slug // Webhooks are associated with apps.
Webhook.userId > User.id // Webhooks are created by users.
App.slug > ApiKey.appId // Apps have API keys.
User.id < Booking.userId // Bookings are created by users.
EventType.userId <> User.id // Event types are created by users.
User.id > ApiKey.userId // Users have API keys.
DestinationCalender.id > Booking.destinationCalendarId // Bookings are registered to integrated calendars.
DestinationCalender.userId < User.id // Integrated calendars are configured by users.
DestinationCalender.eventTypeId < EventType.id // Integrated calendars are associated with event types.
```

## Sequence Diagrams

Sequence diagrams are diagrams that visually represent the behavior of systems or software along a timeline. Eraser also provides notation for creating sequence diagrams.

### Sequence Diagram Notation

Sequence diagram notation is similar to regular diagram notation, but uses some special attributes and relationship types to represent objects and messages.

* **Objects**:
    * `[icon: layout]`: Specifies the icon for an object.
* **Messages**:
    * `>`: Message from one object to another
    * `activate`: Activation of an object
    * `deactivate`: Deactivation of an object
    * `alt [label]:`: Conditional branch
    * `else [label]:`: Else part of conditional branch
    * `loop [label]:`: Loop

### Sequence Diagram Example

```yaml
Web App [icon: layout] > DB [icon: database]: Start transaction
Web App > Cloud Fx [icon: function]: Call function
Cloud Fx > API [icon: cloud-cog]: Create session
API > Cloud Fx: Session info
Cloud Fx > DB: Create tx record
Cloud Fx > API: Request access token
API > Cloud Fx: Access token
Cloud Fx > Web App: Token and transaction info
Web App > API: Complete transaction
alt [label: If successful]{
  API > Web App: Transaction confirmation
}
else [label: If failed]{
  API > Web App: Transaction cancellation
}
Web App > DB: Create tx record
Web App > API: Subscribe to transaction changes
activate API
API > API: Ongoing events
API > Web App: Push events
deactivate API
```

## Summary

Eraser's notation enables the creation of various types of diagrams by combining simple syntax with rich attributes and relationship types. By utilizing the ERD and sequence diagram notations introduced in this guide, try creating more effective documentation.



## Reference Site

https://docs.eraser.io/docs/examples-1


&lt;script async src="https://platform.twitter.com/widgets.js" charset="utf-8"&gt;&lt;/script&gt;
