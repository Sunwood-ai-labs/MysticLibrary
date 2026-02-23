# Frequently Asked Questions (FAQ)

## Q. What should I write first?

Decide `description` and `intent` first. If it is unclear what the prompt is supposed to do, the body and examples are more likely to become inconsistent.

## Q. How detailed should input and output examples be?

Use a level of detail that can be tested directly in real work. At minimum, the input example should clearly convey the expected quality level of the output example.

## Q. Can I use real data containing confidential information as examples?

Avoid this. Use anonymized or dummy-data examples instead. The same applies to log examples.

## Q. How should I use `status` values?

- `draft`: In progress, or insufficiently validated
- `active`: Ready for operation
- `deprecated`: Not recommended for new use (alternative available)

## Q. What should I do if the output is unstable?

Improve in this order: add input requirements, specify the output format, and add prohibitions. Record the improvements in the update log.

## Q. Where is the responsibility boundary if the LLM outputs incorrect content?

Final judgment, sending, and execution must be done by humans. The library is an assistive tool and must not be treated as a basis for automatic approval.
